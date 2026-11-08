use base64::{engine::general_purpose, Engine as _};
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Command;

fn sanitize_file_name(file_name: &str) -> String {
    let sanitized: String = file_name
        .chars()
        .map(|character| match character {
            '<' | '>' | ':' | '"' | '/' | '\\' | '|' | '?' | '*' => '_',
            _ => character,
        })
        .collect();
    let trimmed = sanitized.trim().trim_matches('.').to_string();
    if trimmed.to_lowercase().ends_with(".pdf") && trimmed.len() > 4 {
        trimmed
    } else {
        "sinan.pdf".to_string()
    }
}

fn fallback_dirs() -> Vec<PathBuf> {
    let mut directories = Vec::new();

    if let Ok(exe_path) = std::env::current_exe() {
        if let Some(exe_dir) = exe_path.parent() {
            directories.push(exe_dir.to_path_buf());
        }
    }

    #[cfg(target_os = "windows")]
    {
        if let Ok(user_profile) = std::env::var("USERPROFILE") {
            let downloads = Path::new(&user_profile).join("Downloads");
            if downloads.is_dir() {
                directories.push(downloads);
            }
        }
    }

    if let Ok(current_dir) = std::env::current_dir() {
        directories.push(current_dir);
    }

    directories
}

fn unique_path(directory: &Path, file_name: &str) -> PathBuf {
    let candidate = directory.join(file_name);
    if !candidate.exists() {
        return candidate;
    }

    let stem = file_name.strip_suffix(".pdf").unwrap_or(file_name);
    for index in 1..1000 {
        let candidate = directory.join(format!("{stem}_{index}.pdf"));
        if !candidate.exists() {
            return candidate;
        }
    }

    directory.join(format!("{stem}_novo.pdf"))
}

fn open_file(path: &Path) -> Result<(), String> {
    #[cfg(target_os = "windows")]
    {
        let status = Command::new("cmd")
            .args(["/C", "start", "", &path.to_string_lossy()])
            .status()
            .map_err(|error| format!("Nao foi possivel abrir o PDF: {error}"))?;
        if status.success() {
            return Ok(());
        }
        return Err("O Windows nao conseguiu abrir o PDF gerado".to_string());
    }

    #[cfg(not(target_os = "windows"))]
    {
        let status = Command::new("xdg-open")
            .arg(path)
            .status()
            .map_err(|error| format!("Nao foi possivel abrir o PDF: {error}"))?;
        if status.success() {
            Ok(())
        } else {
            Err("Nao foi possivel abrir o PDF gerado".to_string())
        }
    }
}

#[tauri::command]
fn save_pdf_to_downloads(file_name: String, pdf_base64: String) -> Result<String, String> {
    let file_name = sanitize_file_name(&file_name);
    let bytes = general_purpose::STANDARD
        .decode(pdf_base64)
        .map_err(|error| format!("PDF invalido: {error}"))?;
    let mut errors = Vec::new();
    for directory in fallback_dirs() {
        if let Err(error) = fs::create_dir_all(&directory) {
            errors.push(format!("{}: {error}", directory.to_string_lossy()));
            continue;
        }

        let path = unique_path(&directory, &file_name);
        match fs::write(&path, &bytes) {
            Ok(()) => {
                let _ = open_file(&path);
                return Ok(path.to_string_lossy().to_string());
            }
            Err(error) => errors.push(format!("{}: {error}", path.to_string_lossy())),
        }
    }

    let detail = if errors.is_empty() {
        "nenhuma pasta de destino disponivel".to_string()
    } else {
        errors.join("; ")
    };
    Err(format!("Nao foi possivel salvar o PDF ({detail})"))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![save_pdf_to_downloads])
        .run(tauri::generate_context!())
        .expect("erro ao executar a aplicacao Tauri");
}
