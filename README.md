# SINAN Local

Uma ferramenta local e totalmente grátis para facilitar o preenchimento de fichas de notificação compulsória (SINAN), com geração de PDF para conferência e impressão.

**Fichas disponíveis:** Intoxicação Exógena, Violência Interpessoal / Autoprovocada e Acidente de Trabalho ("CAT").

## Como usar

1. No Windows, baixe a pasta [`portable`](portable/) e execute `SINAN-Local.exe`.
2. Selecione o tipo de ficha no canto superior direito e preencha os campos nas abas.
3. Gere o PDF, confira os dados e o alinhamento e imprima. A assinatura deve ser feita manualmente.

Ao gerar uma ficha, o aplicativo salva o PDF na mesma pasta do executável e tenta abri-lo imediatamente no visualizador padrão. Se não conseguir gravar nessa pasta, tenta outras pastas disponíveis e informa o local escolhido. A abertura depende de um programa de PDF já configurado no Windows.

Para organizar as fichas, uma sugestão é criar uma pasta em **Documentos**, colocar o executável nela e criar um atalho para ele na área de trabalho. Assim, quando a pasta permitir gravação, os PDFs ficarão junto ao aplicativo. Um administrador poderá revisá-los periodicamente e, conforme as normas da instituição, removê-los ou mantê-los para auditoria e reimpressão. Restrinja o acesso à pasta e proteja os arquivos, pois eles podem conter dados pessoais e informações de saúde.

Os valores iniciais refletem o contexto do CAPS III Manoel de Barros, no Rio de Janeiro, e podem ser alterados. Confira-os para cada atendimento. **O aplicativo foi testado apenas em ambientes Windows.** O executável incluído é para Windows; Linux e macOS exigem compilações próprias e não foram validados nesta distribuição.

> **Sobre as fichas:** os modelos utilizados são formulários públicos disponibilizados online. O programa adiciona os dados informados sobre esses modelos em PDF. Ele não transmite notificações ao SINAN nem substitui a conferência e os procedimentos oficiais. A opção CAT corresponde à ficha SINAN de investigação de acidente de trabalho, não ao formulário previdenciário de emissão da CAT.

## Origem

Este projeto nasceu da necessidade de preencher fichas SINAN no contexto da atenção psicossocial, onde muitas vezes o tempo é escasso frente à demanda e formas manuais e analógicas de preenchimento se mostram ineficientes. Como base, utilizou-se o contexto do CAPS III Manoel de Barros, no município do Rio de Janeiro. A ideia partiu da equipe de gestão em 2026, em diálogo com a equipe assistencial, e a codificação (algoritmo e mapeamento de coordenadas dos PDFs) foi feita pelo RT Antonio Sérgio com auxílio do CODEX da OpenAI.

## Desenvolvimento e para compilação

O executável requer o [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/), normalmente presente no Windows 10 e 11. Não há servidor de aplicação.

O aplicativo utiliza Tauri, Rust, HTML, CSS, JavaScript e pdf-lib. Para compilar a versão Windows, instale Node.js, Rust e os [pré-requisitos do Tauri](https://v2.tauri.app/start/prerequisites/), incluindo as ferramentas de compilação do Visual Studio e o WebView2. Na raiz do projeto, execute:

```sh
npm ci
npm run check:js
npm run build -- --no-bundle
```

O executável resultante estará em `src-tauri/target/release/`. Os PDFs e os mapeamentos de coordenadas usados pelo aplicativo também estão embutidos em `app/js/embedded-assets.js`: execute `npm run embed-assets` quando modificar os modelos ou as coordenadas e recompile o aplicativo. O glossário e a documentação das coordenadas da ficha CAT estão em [`docs`](docs/).

## Organização do projeto

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| [`portable/`](portable/) | Executável pronto para Windows e instruções de uso. |
| [`app/`](app/) | Interface HTML, estilos, código JavaScript, biblioteca pdf-lib, modelos PDF e coordenadas. |
| [`app/js/schemas/`](app/js/schemas/) | Definições de campos e opções das fichas. |
| [`app/templates/templates_coordinates/`](app/templates/templates_coordinates/) | Mapeamentos de posições nos PDFs e glossários de intoxicação e violência. |
| [`src-tauri/`](src-tauri/) | Aplicação nativa em Rust, configuração do Tauri, permissões e ícone. |
| [`scripts/`](scripts/) | Script para incorporar os modelos e coordenadas ao aplicativo. |
| [`docs/`](docs/) | Glossário e coordenadas da CAT, além de uma [explicação do funcionamento](docs/funcionamento/funcionamento.md) para desenvolvedores. |
| `package.json` e `package-lock.json` | Comandos e dependências JavaScript usados no desenvolvimento. |
| `.gitignore` | Arquivos locais e gerados que devem ficar fora do repositório. |

## A fazer

- [ ] Incluir todos os CAPS do município e seus CNES em uma lista de seleção como default.
- [ ] Alinhar a posição numérica dos campos (coordenadas no PDF), especialmente na ficha de violência.
