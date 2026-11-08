# Como o SINAN Local funciona

Este documento apresenta o fluxo do aplicativo para quem deseja estudá-lo ou desenvolvê-lo. A interface usa HTML, CSS e JavaScript; o Tauri fornece a janela e a integração com o sistema, e o Rust salva o PDF gerado. Não há servidor de aplicação.

## Do formulário ao PDF

1. O usuário escolhe intoxicação exógena, violência ou CAT. A opção CAT corresponde à ficha SINAN de investigação de acidente de trabalho.
2. A interface é construída a partir das definições dos campos em `app/js/schemas/`, com regras adicionais em `app/js/app.js`. Os campos são organizados em abas e recebem opções, limites e valores iniciais conforme a ficha.
3. Durante o preenchimento, a interface aplica máscaras e regras de visibilidade. Por exemplo, as datas recebem barras para facilitar a leitura; na CAT, os campos de atendimento dependem da resposta sobre atendimento médico e são limpos quando não se aplicam.
4. Ao selecionar **Salvar PDF**, o aplicativo coleta os dados e faz as validações aplicáveis. `app/js/validation.js` reúne funções de normalização usadas nesse processo. O código também contém regras específicas para cada ficha.
5. `app/js/pdf-stamper.js` carrega o modelo e o mapa de coordenadas associados ao tipo de ficha em `app/js/config.js`. A biblioteca local pdf-lib abre o modelo e acrescenta os valores nas posições indicadas. Há tratamento para texto, dígitos em quadrículas e campos especiais; a CAT possui rotinas próprias. As barras exibidas nas datas não são carimbadas como dígitos na ficha.
6. No Tauri, o PDF gerado em memória é enviado ao comando Rust `save_pdf_to_downloads`, em `src-tauri/src/lib.rs`. Ele tenta salvar primeiro na pasta do executável, depois em Downloads no Windows, se disponível, e por fim no diretório de trabalho. O programa informa o caminho salvo e tenta abrir o PDF no aplicativo padrão do sistema. Se já houver um arquivo com o mesmo nome, procura um nome alternativo.

O PDF preenchido permanece no computador; o aplicativo não o envia ao SINAN. A abertura automática pode falhar mesmo após o arquivo ter sido salvo, por exemplo se não houver um visualizador configurado. Os documentos gerados contêm potencialmente dados pessoais e de saúde e devem ser tratados conforme as regras da instituição.

## Arquivos e recursos

- `app/index.html` carrega a página e os scripts; `app/css/app.css` define a apresentação.
- `app/js/app.js` monta a interface e controla o estado, as abas, condicionais, padrões e a geração.
- `app/js/schemas/generated-schemas.js` e `cat-schema.js` descrevem os campos das fichas.
- `app/js/config.js` associa cada ficha ao modelo e ao mapa de coordenadas.
- `app/templates/` contém os PDFs em branco e `templates_coordinates/` contém seus mapas. Na CAT, consulte também o glossário e o arquivo de coordenadas na pasta `docs/`.
- `app/js/embedded-assets.js` contém cópias incorporadas dos modelos e mapas para uso pelo aplicativo. `scripts/embed-assets.mjs` gera esse arquivo a partir dos recursos em `app/templates/`.
- `app/js/mocks.js` contém dados fictícios internos para testes; eles não representam atendimentos reais.
- `src-tauri/` contém a configuração nativa, as permissões e o código Rust. `portable/` contém o executável Windows distribuído.

## Ao modificar uma ficha

Revise os campos e suas regras na interface, o esquema correspondente, o modelo PDF e as coordenadas. As coordenadas dos mapas usam como referência o topo da página; o carimbo converte a posição vertical para o sistema usado pela pdf-lib. Datas, quadrículas, textos longos e campos condicionais merecem atenção especial. Gere PDFs com dados fictícios e confira visualmente o alinhamento e a legibilidade em todas as páginas afetadas.

Depois de alterar um PDF ou mapa, execute `npm run embed-assets` na raiz do projeto e recompile para incorporar as mudanças ao executável. Use `npm run check:js` para conferir a sintaxe dos scripts listados no projeto e siga as instruções de compilação do README. Para distribuir uma nova versão, atualize também o executável em `portable/` e verifique seu funcionamento no Windows.

O projeto foi testado apenas em ambientes Windows. Embora o Tauri tenha suporte a outros sistemas, eles precisam de suas próprias compilações e validação; por exemplo, a rotina atual de abertura fora do Windows usa `xdg-open`.
