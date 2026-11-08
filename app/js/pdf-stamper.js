window.SINAN_PDF = (() => {
  const { PDFDocument, StandardFonts, rgb } = PDFLib;
  const V = window.SINAN_VALIDATION;
  const embeddedAssets = window.SINAN_EMBEDDED_ASSETS || { bytes: {}, json: {} };

  const SPAN_COORDINATES = {
    bairro: ["bairro_primeira_letra", "bairro_ultima_letra"],
    bairro_da_ocorrencia: ["bairro_da_ocorrencia_letra_inicial", "bairro_da_ocorrencia_letra_final"],
    campo_de_referencia_endereco: ["primeira_letra_campo_de_referencia_endereço", "ultima_letra_campo_de_referencia_endereço"],
    complemento: ["complemento_letra_inicial", "complemento_letra_final"],
    complemento_local_ocorrencia: ["primeira_letra_complemento", "ultima_letra_complemento"],
    distrito: ["distrito_primeira_letra", "distrito_ultima_letra"],
    distrito_local_ocorrencia: ["distrito_da_ocorrencia_default_rioDEjaneiro", "distrito_da_ocorrencia_default_rioDEjaneiro"],
    intoxicacao_confirmada: ["primeira_letra_intoxicação_confirmada", "ultima_letra_intoxicação_confirmada"],
    logradouro: ["logradouro_primeira_letra", "logradouro_ultima_letra"],
    municipio: ["primeira_letra_municipio", "ultima_letra_municipio"],
    municipio_da_ocorrencia: ["municipio_da_ocorrencia_letra_inicial", "municipio_da_ocorrencia_letra_final"],
    municipio_interna: ["municipio_interna_letraINICIAL", "municipio_interna_letraFINAL"],
    municipio_residencia: ["municipio_residencia_primeira_letra", "municipio_residencia_ultima_letra"],
    nome_agente_toxico1: ["nome_agente_toxico1_letraINICIAL", "nome_agente_toxico1_letraIFINAL"],
    nome_agente_toxico2: ["nome_agente_toxico2_letraINICIAL", "nome_agente_toxico2_letraFINAL"],
    nome_agente_toxico3: ["nome_agente_toxico3_letraINICIAL", "nome_agente_toxico3_letraFINAL"],
    nome_da_mae: ["nome_da_mae_primeira_letra", "nome_da_mae_ultima_letra"],
    nome_investigador: ["nome_investigador_letraINICIAL", "nome_investigador_letraFINAL"],
    nome_local_ocorrencia: ["nome_do_lugar_da_ocorrencia_letra_inicial", "nome_do_local_da_ocorrencia_letra_final"],
    nome_paciente: ["nome_paciente_primeira_letra", "nome_do_paciente_ultima_letra"],
    nome_unidade_de_saude: ["nome_unidade_de_saude_letraINICIAL", "nome_unidade_de_saude_letraFINAL"],
    ocupacao: ["ocupação_primeira_letra", "ocupação_ultima_letra"],
    pais_de_origem: ["primeira_letra_pais_de_origem", "ultima_letra_pais_de_origem"],
    principio_ativo1: ["principio_ativo1_letraINICIAL", "principio_ativo1_letraFINAL"],
    principio_ativo2: ["principio_ativo2_letraINICIAL", "principio_ativo2_letraFINAL"],
    principio_ativo3: ["principio_ativo3_letraINICIAL", "principio_ativo3_letraFINAL"],
    profissao_investigador: ["profissao_investigador_letraINICIAL", "profissao_investigador_letrafinal"],
    referencia: ["referencia_letra_inicial", "referencia_letra_final"],
    rua_da_ocorrencia: ["rua_da_ocorrencia_letra_inicial", "rua_da_ocorrencia_letra_final"],
    unidade_da_ficha: ["unidade_da_ficha_letra_inicial", "unidade_da_ficha_letra_final"],
    unidade_de_saude: ["unidade_de_saude_primeira_letra", "unidade_de_saude_ultima_letra"],
    grupo_agente_toxico_outro: ["agente_toxico_caso_marcadoOUTRO(14)_para_preencher", "agente_toxico_caso_marcadoOUTRO(14)_para_preencher"],
    situacao_mercado_trabalho_outro: ["espaço_para_escrever_se_situacao_do_mercado_for_12(outro)", "espaço_para_escrever_se_situacao_do_mercado_for_12(outro)"],
    local_ocorrencia_exposicao_outro: ["local_para_escrever_se_local_de_ocorrencia_for_7(outro)", "local_para_escrever_se_local_de_ocorrencia_for_7(outro)"],
    finalidade_agrotoxico_outro: ["caso_tipo_de_agrotoxico_outro(7)", "caso_tipo_de_agrotoxico_outro(7)"],
    circunstancia_exposicao_outra: ["caso_circunstancia_13(outro)", "caso_circunstancia_13(outro)"],
    cultura_lavoura: ["tipo_de_plantação", "tipo_de_plantação"],
  };

  const GROUP_ALIASES = {
    uf_internacao_digito: "uf_internação_digito",
    circunstancia_exposicao: "codigo_digito{n}_circunstancia_expo",
  };

  const VIOLENCIA_SEXUAL_PROCEDURE_POINTS = [
    "se-sexual-procedimento-profilaxia-DST",
    "se-sexual-procedimento-profilaxia-HIV",
    "se-sexual-procedimento-profilaxia-HBV",
    "se-sexual-procedimento-profilaxia-COLETASANG",
    "se-sexual-procedimento-COLETASEMEN",
    "se-sexual-procedimento-COLETAVAG",
    "se-sexual-procedimento-profilaxia-CONTRACEPCAO",
    "se-sexual-procedimento-ABORTO",
  ];

  function base64ToArrayBuffer(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes.buffer;
  }

  async function fetchBytes(path) {
    if (embeddedAssets.bytes[path]) return base64ToArrayBuffer(embeddedAssets.bytes[path]);
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Nao foi possivel carregar ${path}`);
    return response.arrayBuffer();
  }

  async function fetchJson(path) {
    if (embeddedAssets.json[path]) return embeddedAssets.json[path];
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Nao foi possivel carregar ${path}`);
    return response.json();
  }

  function fieldGroupKeys(coordData, groupName) {
    const groups = coordData.field_groups || {};
    for (const [groupId, group] of Object.entries(groups)) {
      if (groupId === groupName || group.name === groupName) return group.points || [];
    }
    return [];
  }

  function numberedKeys(points, prefix) {
    const alias = GROUP_ALIASES[prefix];
    if (alias && alias.includes("{n}")) {
      const keys = [];
      for (let n = 1; n < 50; n += 1) {
        const key = alias.replace("{n}", String(n));
        if (points[key]) keys.push(key);
      }
      return keys;
    }
    const realPrefix = alias || prefix;
    const escaped = realPrefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`^${escaped}_?(\\d+)$`);
    return Object.keys(points)
      .map((key) => {
        const match = key.match(pattern);
        return match ? [Number(match[1]), key] : null;
      })
      .filter(Boolean)
      .sort((a, b) => a[0] - b[0])
      .map((entry) => entry[1]);
  }

  function groupKeys(coordData, points, groupKey) {
    const keys = fieldGroupKeys(coordData, groupKey);
    return keys.length ? keys : numberedKeys(points, groupKey);
  }

  function pageAndPosition(pdfDoc, point) {
    const page = pdfDoc.getPages()[point.page];
    const { height } = page.getSize();
    return { page, x: point.x, y: height - point.y };
  }

  function drawText(pdfDoc, font, point, text, size = 8) {
    if (!text) return;
    const pos = pageAndPosition(pdfDoc, point);
    pos.page.drawText(String(text), {
      x: pos.x,
      y: pos.y,
      size,
      font,
      color: rgb(0, 0, 0),
    });
  }

  function truncateToWidth(font, text, size, width) {
    let value = String(text || "");
    while (value && font.widthOfTextAtSize(value, size) > width) {
      value = value.slice(0, -1);
    }
    return value;
  }

  function stampDigitGroup(pdfDoc, font, coordData, points, groupKey, value, warnings) {
    const keys = groupKeys(coordData, points, groupKey);
    if (!keys.length) {
      warnings.push(`Grupo de digitos sem coordenadas: ${groupKey}`);
      return;
    }
    const text = V.cleanForPdf(value);
    if (text.length > keys.length) warnings.push(`Valor truncado para ${groupKey}: ${text.length} > ${keys.length}`);
    keys.forEach((key, index) => drawText(pdfDoc, font, points[key], text[index] || "", 8));
  }

  function stampSinglePoint(pdfDoc, font, points, pointKey, value, warnings) {
    let code = V.comboCode(value) || value;
    code = V.cleanForPdf(code);
    const keys = numberedKeys(points, pointKey);
    if (keys.length) {
      keys.forEach((key, index) => drawText(pdfDoc, font, points[key], code[index] || "", 8));
      return;
    }
    const point = points[pointKey];
    if (!point) {
      warnings.push(`Ponto sem coordenada: ${pointKey}`);
      return;
    }
    drawText(pdfDoc, font, point, code.slice(0, 12), 8);
  }

  function stampTextSpan(pdfDoc, font, coordData, points, spanKey, value, warnings) {
    const group = fieldGroupKeys(coordData, spanKey);
    let keys = group.length >= 2 ? [group[0], group[group.length - 1]] : SPAN_COORDINATES[spanKey];
    if (!keys) {
      warnings.push(`Span desconhecido: ${spanKey}`);
      return;
    }
    const start = points[keys[0]];
    const end = points[keys[1]];
    if (!start) {
      warnings.push(`Inicio de span sem coordenada: ${keys[0]}`);
      return;
    }
    const text = V.cleanForPdf(value);
    if (!end || end === start) {
      drawText(pdfDoc, font, start, text.slice(0, 40), 7.4);
      return;
    }
    const width = Math.max(20, Math.abs(end.x - start.x) + 18);
    const fitted = truncateToWidth(font, text, 7.4, width);
    if (fitted.length < text.length) warnings.push(`Texto possivelmente truncado no campo ${spanKey}`);
    drawText(pdfDoc, font, start, fitted, 7.4);
  }

  function stampObservacoes(pdfDoc, font, coordData, points, value) {
    if (!value) return;
    const text = V.cleanForPdf(value).replace(/\s+/g, " ").slice(0, 240);
    const lines = [text.slice(0, 80), text.slice(80, 160), text.slice(160, 240)].filter(Boolean);
    lines.forEach((line, index) => {
      const n = index + 1;
      let point = points[`obs_linha${n}_1`];
      if (!point) {
        const keys = fieldGroupKeys(coordData, `observacoes_linha_${n}`);
        point = keys.length ? points[keys[0]] : null;
      }
      if (point) drawText(pdfDoc, font, point, line, 7);
    });
  }

  function stampIntoxicacaoSpecialFields(pdfDoc, font, points, coordData, data, warnings) {
    const rawTempo = V.onlyDigits(data.tempo_exposicao_numero || "").slice(0, 2);
    if (rawTempo) {
      const tempo = rawTempo.padStart(2, "0");
      ["digito1_tempo_expo", "codigo_digito2_tempo_expo"].forEach((key, index) => {
        if (points[key]) drawText(pdfDoc, font, points[key], tempo[index] || "", 8);
      });
    }

    const tempoUnidade = V.comboCode(data.tempo_exposicao_unidade || "");
    if (tempoUnidade && points.digito3_tempo_expo) drawText(pdfDoc, font, points.digito3_tempo_expo, tempoUnidade[0], 8);

    const cid = V.cidCode(data.cid10_diagnostico || "");
    ["digito1_cid", "digito2_cid", "digito3_cid", "digito4_cid"].forEach((key, index) => {
      if (points[key]) drawText(pdfDoc, font, points[key], cid[index] || "", 8);
    });

    const diagnostico = V.cidDescription(data.cid10_diagnostico || "");
    if (diagnostico) stampTextSpan(pdfDoc, font, coordData, points, "intoxicacao_confirmada", diagnostico, warnings);
  }

  function stampFixedFields(pdfDoc, font, points, formType) {
    if (formType === "violencia" && points["6_checkbox_unidade"]) {
      drawText(pdfDoc, font, points["6_checkbox_unidade"], "1", 8);
    }
  }

  function stampViolenciaSpecialFields(pdfDoc, font, points, data) {
    const sexualAtiva = V.comboCode(data.tipo_violencia_sexual || "") === "1";
    if (sexualAtiva) return;
    const pointsToStamp = [
      "checkbox_sexual_assedio",
      "checkbox_sexual_estupro",
      "checkbox_sexual_infantil",
      "checkbox_sexual_exploracao",
      "checkbox_sexual_outros",
      ...VIOLENCIA_SEXUAL_PROCEDURE_POINTS,
    ];
    for (const pointKey of pointsToStamp) {
      if (points[pointKey]) drawText(pdfDoc, font, points[pointKey], "8", 8);
    }
  }

  function catLines(text, font, size, width) {
    const lines = [];
    for (const paragraph of text.split(/\r?\n/)) {
      let line = "";
      for (let word of paragraph.split(/\s+/).filter(Boolean)) {
        while (font.widthOfTextAtSize(word, size) > width && word.length > 1) {
          let end = word.length - 1;
          while (end > 1 && font.widthOfTextAtSize(word.slice(0, end), size) > width) end -= 1;
          if (line) { lines.push(line); line = ""; }
          lines.push(word.slice(0, end));
          word = word.slice(end);
        }
        const candidate = line ? `${line} ${word}` : word;
        if (line && font.widthOfTextAtSize(candidate, size) > width) {
          lines.push(line);
          line = word;
        } else line = candidate;
      }
      lines.push(line);
    }
    return lines;
  }

  function stampCat(pdfDoc, font, coordData, data, schema, warnings) {
    for (const field of schema.fields) {
      const raw = data[field.name];
      if (raw == null || String(raw).trim() === "") continue;
      const position = coordData.fields[field.name];
      if (!position) { warnings.push(`Campo CAT sem coordenadas: ${field.label}`); continue; }
      let value = V.valueForField(field, raw);
      if (field.name === "cid_causa" || field.name === "cid_lesao") value = V.cidCode(raw);
      value = V.cleanForPdf(value);
      const paddedNumbers = {idade_numero: 2, tempo_trabalho: 2, hora_acidente: 2, minuto_acidente: 2, horas_jornada: 2, minutos_jornada: 2, quantidade_trabalhadores: 3};
      if (paddedNumbers[field.name]) value = value.padStart(paddedNumbers[field.name], "0");
      const page = pdfDoc.getPages()[position.page];
      const height = page.getHeight();
      if (position.kind === "boxes") {
        const chars = Array.from(value.replace(/\s/g, ""));
        const capacity = position.maxDigits || position.xs.length;
        if (chars.length > capacity) warnings.push(`${field.label}: valor excede os espaços da ficha.`);
        const limited = chars.slice(0, capacity);
        const extra = Math.max(0, limited.length - position.xs.length);
        const groups = [];
        for (let i = 0; i < limited.length;) {
          const groupSize = groups.length >= position.xs.length - extra ? 2 : 1;
          groups.push(limited.slice(i, i + groupSize).join(""));
          i += groupSize;
        }
        groups.forEach((group, i) => {
          // Pares em uma célula devem caber nas divisórias do formulário.
          // A última célula do CEP é mais estreita que as demais.
          const size = group.length > 1 ? 7 : (field.name === "cep_residencia" && i === 7 ? 6 : (position.size || 8));
          page.drawText(group, {x: position.xs[i] - font.widthOfTextAtSize(group, size) / 2, y: height - position.y, size, font, color: rgb(0, 0, 0)});
        });
      } else if (position.kind === "multiline") {
        let size = position.size || 7;
        let lines = catLines(value, font, size, position.width);
        while (lines.length > position.lines && size > 5.5) {
          size = Math.max(5.5, size - 0.25);
          lines = catLines(value, font, size, position.width);
        }
        if (lines.length > position.lines) warnings.push(`${field.label}: texto excede a área disponível no PDF.`);
        lines.slice(0, position.lines).forEach((line, i) => {
          if (line) page.drawText(line, {x: position.x, y: height - position.y - i * position.lineHeight, size, font, color: rgb(0, 0, 0)});
        });
      } else {
        let size = position.size || 8;
        while (font.widthOfTextAtSize(value, size) > position.width && size > 5.5) size = Math.max(5.5, size - 0.25);
        const fitted = truncateToWidth(font, value, size, position.width);
        if (fitted !== value) warnings.push(`${field.label}: texto excede a área disponível no PDF.`);
        if (fitted) page.drawText(fitted, {x: position.x, y: height - position.y, size, font, color: rgb(0, 0, 0)});
      }
    }
  }

  async function generatePdf(formType, data, schema) {
    const config = window.SINAN_CONFIG.forms[formType];
    const [templateBytes, coordData] = await Promise.all([
      fetchBytes(config.templatePath),
      fetchJson(config.coordinatesPath),
    ]);
    const pdfDoc = await PDFDocument.load(templateBytes);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const points = coordData.points || {};
    const warnings = [];

    if (formType === "cat") {
      stampCat(pdfDoc, font, coordData, data, schema, warnings);
      return { bytes: await pdfDoc.save(), warnings };
    }

    const fieldByName = new Map(schema.fields.map((field) => [field.name, field]));
    for (const [name, rawValue] of Object.entries(data)) {
      if (!rawValue) continue;
      const field = fieldByName.get(name);
      if (!field) continue;
      const value = name === "cid10_capitulo_xx" ? V.comboCode(rawValue) : V.valueForField(field, rawValue);
      if (field.spanKey) stampTextSpan(pdfDoc, font, coordData, points, field.spanKey, value, warnings);
      if (field.groupKey) stampDigitGroup(pdfDoc, font, coordData, points, field.groupKey, value, warnings);
      if (field.pointKey) stampSinglePoint(pdfDoc, font, points, field.pointKey, value, warnings);
      if (name === "observacoes") stampObservacoes(pdfDoc, font, coordData, points, rawValue);
    }

    if (formType === "intoxicacao") stampIntoxicacaoSpecialFields(pdfDoc, font, points, coordData, data, warnings);
    if (formType === "violencia") stampViolenciaSpecialFields(pdfDoc, font, points, data);
    stampFixedFields(pdfDoc, font, points, formType);

    return { bytes: await pdfDoc.save(), warnings };
  }

  function downloadPdf(bytes, fileName) {
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function canSaveNative() {
    return Boolean(window.__TAURI__?.core?.invoke);
  }

  function bytesToBase64(bytes) {
    const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    let binary = "";
    const chunkSize = 0x8000;
    for (let offset = 0; offset < view.length; offset += chunkSize) {
      const chunk = view.subarray(offset, offset + chunkSize);
      binary += String.fromCharCode(...chunk);
    }
    return btoa(binary);
  }

  async function saveAndOpenPdf(bytes, fileName, targetWindow = null) {
    if (canSaveNative()) {
      if (targetWindow && !targetWindow.closed) targetWindow.close();
      const savedPath = await window.__TAURI__.core.invoke("save_pdf_to_downloads", {
        fileName,
        pdfBase64: bytesToBase64(bytes),
      });
      return { opened: true, native: true, path: savedPath || fileName };
    }

    const opened = openPdf(bytes, fileName, targetWindow);
    return { opened, native: false, path: "" };
  }

  function openPdf(bytes, fileName, targetWindow = null) {
    const blob = new Blob([bytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    if (targetWindow) {
      targetWindow.location.href = url;
    } else {
      targetWindow = window.open(url, "_blank");
    }
    if (!targetWindow) {
      URL.revokeObjectURL(url);
      downloadPdf(bytes, fileName);
      return false;
    }
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    return true;
  }

  return { generatePdf, downloadPdf, openPdf, saveAndOpenPdf, canSaveNative };
})();
