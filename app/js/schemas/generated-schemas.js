window.SINAN_SCHEMAS = {
  "intoxicacao": {
    "label": "Intoxicacao",
    "title": "Ficha SINAN - Intoxicacao Exogena",
    "fields": [
      {
        "name": "tipo_notificacao",
        "label": "Tipo de notificacao",
        "widget": "combo",
        "default": "2 - Individual",
        "options": [
          "2 - Individual"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "data_notificacao",
        "label": "Data da notificacao",
        "widget": "date",
        "default": "03/06/2026",
        "options": [],
        "spanKey": null,
        "groupKey": "data_da_notificacao",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "uf_notificacao",
        "label": "UF notificacao",
        "widget": "text",
        "default": "RJ",
        "options": [],
        "spanKey": null,
        "groupKey": "UF",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "municipio_notificacao",
        "label": "Municipio notificacao",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio",
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "ibge_notificacao",
        "label": "IBGE notificacao",
        "widget": "digits",
        "default": "330455",
        "options": [],
        "spanKey": null,
        "groupKey": "codigoIBGE_numero",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "unidade_saude_notificadora",
        "label": "Unidade notificadora",
        "widget": "text",
        "default": "CAPS III MANOEL DE BARROS",
        "options": [],
        "spanKey": "unidade_de_saude",
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "cnes_unidade_notificadora",
        "label": "CNES notificadora",
        "widget": "digits",
        "default": "9051538",
        "options": [],
        "spanKey": null,
        "groupKey": "CNES_digito",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "data_primeiros_sintomas",
        "label": "Data dos primeiros sintomas",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_sintomas_digito",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "nome_paciente",
        "label": "Nome do paciente",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_paciente",
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "data_nascimento",
        "label": "Data de nascimento",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_nascimento_digito",
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "idade_numero",
        "label": "Idade",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "idade_unidade",
        "label": "Unidade da idade",
        "widget": "radio",
        "default": "4 - Anos",
        "options": [
          "4 - Anos",
          "1 - Horas",
          "2 - Dias",
          "3 - Meses"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "sexo",
        "label": "Sexo",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "M - Masculino",
          "F - Feminino",
          "I - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "sexo_(M,F,I)",
        "section": "Paciente"
      },
      {
        "name": "gestante",
        "label": "Gestante",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - 1o trimestre",
          "2 - 2o trimestre",
          "3 - 3o trimestre",
          "4 - Idade gestacional ignorada",
          "5 - Nao",
          "6 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_gestante",
        "section": "Paciente"
      },
      {
        "name": "raca_cor",
        "label": "Raca/cor",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Branca",
          "2 - Preta",
          "3 - Amarela",
          "4 - Parda",
          "5 - Indigena",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_cor",
        "section": "Paciente"
      },
      {
        "name": "escolaridade",
        "label": "Escolaridade",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "0 - Analfabeto",
          "1 - 1a a 4a serie incompleta EF",
          "2 - 4a serie completa EF",
          "3 - 5a a 8a serie incompleta EF",
          "4 - Ensino fundamental completo",
          "5 - Ensino medio incompleto",
          "6 - Ensino medio completo",
          "7 - Educacao superior incompleta",
          "8 - Educacao superior completa",
          "9 - Ignorado",
          "10 - Nao se aplica"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo escolaridade",
        "section": "Paciente"
      },
      {
        "name": "cartao_sus",
        "label": "Cartao SUS",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cartao_sus_digito",
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "nome_mae",
        "label": "Nome da mae",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_da_mae",
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "uf_residencia",
        "label": "UF residencia",
        "widget": "text",
        "default": "RJ",
        "options": [],
        "spanKey": null,
        "groupKey": "UF_residencia",
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "municipio_residencia",
        "label": "Municipio residencia",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "ibge_residencia",
        "label": "IBGE residencia",
        "widget": "digits",
        "default": "330455",
        "options": [],
        "spanKey": null,
        "groupKey": "IBGE_residencia_digito",
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "distrito_residencia",
        "label": "Distrito residencia",
        "widget": "text",
        "default": "Sede (AP 4.0)",
        "options": [],
        "spanKey": "distrito",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "bairro_residencia",
        "label": "Bairro residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "bairro",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "logradouro_residencia",
        "label": "Logradouro residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "logradouro",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "numero_residencia",
        "label": "Numero residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "numero_da_rua",
        "section": "Residencia"
      },
      {
        "name": "complemento_residencia",
        "label": "Complemento residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "complemento",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "ponto_referencia_residencia",
        "label": "Ponto de referencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "referencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "cep_residencia",
        "label": "CEP residencia",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cep_digito",
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "telefone_residencia",
        "label": "Telefone residencia",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "telefone_digito",
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "zona_residencia",
        "label": "Zona residencia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Urbana",
          "2 - Rural",
          "3 - Periurbana",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_da_zona_de_moradia",
        "section": "Residencia"
      },
      {
        "name": "pais_residencia",
        "label": "Pais residencia",
        "widget": "text",
        "default": "BRASIL",
        "options": [],
        "spanKey": "pais_de_origem",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "data_investigacao",
        "label": "Data da investigacao",
        "widget": "date",
        "default": "03/06/2026",
        "options": [],
        "spanKey": null,
        "groupKey": "data_investigacao_digito",
        "pointKey": null,
        "section": "Complementares"
      },
      {
        "name": "ocupacao",
        "label": "Ocupacao",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "ocupacao",
        "groupKey": null,
        "pointKey": null,
        "section": "Complementares"
      },
      {
        "name": "situacao_mercado_trabalho",
        "label": "Situacao no mercado",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Empregado registrado",
          "02 - Empregado nao registrado",
          "03 - Autonomo/conta propria",
          "04 - Servidor publico estatutario",
          "05 - Servidor publico celetista",
          "06 - Aposentado",
          "07 - Desempregado",
          "08 - Trabalho temporario",
          "09 - Cooperativado",
          "10 - Trabalhador avulso",
          "11 - Empregador",
          "12 - Outros",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "codigo_situacao_no_mercado_de_trabalho_digito",
        "pointKey": null,
        "section": "Complementares"
      },
      {
        "name": "situacao_mercado_trabalho_outro",
        "label": "Mercado: outro",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "situacao_mercado_trabalho_outro",
        "groupKey": null,
        "pointKey": null,
        "section": "Complementares"
      },
      {
        "name": "local_ocorrencia_exposicao",
        "label": "Local de ocorrencia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Residencia",
          "2 - Ambiente de trabalho",
          "3 - Trajeto do trabalho",
          "4 - Servicos de saude",
          "5 - Escola/creche",
          "6 - Ambiente externo",
          "7 - Outro",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_local_de_ocorrencia",
        "section": "Ocorrencia"
      },
      {
        "name": "local_ocorrencia_exposicao_outro",
        "label": "Local: outro",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "local_ocorrencia_exposicao_outro",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "nome_local_ocorrencia",
        "label": "Nome do local",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_local_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "cnae_local_ocorrencia",
        "label": "CNAE",
        "widget": "combo",
        "default": "Usuário não informou",
        "options": [
          "A: Agropecuária",
          "B: Indústrias extrativas",
          "C: Indústrias transformação",
          "D: Eletricidade gás",
          "E: Água esgoto",
          "F: Construção",
          "G: Comércio veículos",
          "H: Transporte armazenagem",
          "I: Alojamento alimentação",
          "J: Informação comunicação",
          "K: Financeiras seguros",
          "L: Atividades imobiliárias",
          "M: Profissionais técnicas",
          "N: Serviços administrativos",
          "O: Administração pública",
          "P: Educação",
          "Q: Saúde social",
          "R: Artes esporte",
          "S: Outros serviços",
          "T: Serviços domésticos",
          "U: Organismos internacionais",
          "Usuário não informou",
          "Não se aplica",
          "Outro"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "CNAE_do_local",
        "section": "Ocorrencia"
      },
      {
        "name": "uf_local_ocorrencia",
        "label": "UF ocorrencia",
        "widget": "text",
        "default": "RJ",
        "options": [],
        "spanKey": null,
        "groupKey": "UF_local_ocorrencia",
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "municipio_local_ocorrencia",
        "label": "Municipio ocorrencia",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio_da_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "ibge_local_ocorrencia",
        "label": "IBGE ocorrencia",
        "widget": "digits",
        "default": "330455",
        "options": [],
        "spanKey": null,
        "groupKey": "IBGE_ocorrencia_digito",
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "distrito_local_ocorrencia",
        "label": "Distrito ocorrencia",
        "widget": "text",
        "default": "Sede (AP 4.0)",
        "options": [],
        "spanKey": "distrito_local_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "bairro_local_ocorrencia",
        "label": "Bairro ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "bairro_da_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "logradouro_local_ocorrencia",
        "label": "Logradouro ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "rua_da_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "numero_local_ocorrencia",
        "label": "Numero da rua",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "numero_da_rua_da_ocorrencia",
        "section": "Ocorrencia"
      },
      {
        "name": "complemento_local_ocorrencia",
        "label": "Complemento ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "complemento_local_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "ponto_referencia_local_ocorrencia",
        "label": "Referencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "campo_de_referencia_endereco",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "cep_local_ocorrencia",
        "label": "CEP ocorrencia",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cep_ocorrencia_digito",
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "telefone_local_ocorrencia",
        "label": "Telefone ocorrencia",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "telefone_ocorrencia_digito",
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "zona_exposicao",
        "label": "Zona exposicao",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Urbana",
          "2 - Rural",
          "3 - Periurbana",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_zona_exposicao",
        "section": "Ocorrencia"
      },
      {
        "name": "pais_local_ocorrencia",
        "label": "Pais ocorrencia",
        "widget": "text",
        "default": "BRASIL",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "grupo_agente_toxico",
        "label": "Grupo agente toxico",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Medicamento",
          "02 - Agrotoxico/uso agricola",
          "03 - Agrotoxico/uso domestico",
          "04 - Agrotoxico/uso saude publica",
          "05 - Raticida",
          "06 - Produto veterinario",
          "07 - Produto de uso domiciliar",
          "08 - Cosmetico/higiene pessoal",
          "09 - Produto quimico industrial",
          "10 - Metal",
          "11 - Drogas de abuso",
          "12 - Planta toxica",
          "13 - Alimento e bebida",
          "14 - Outro",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "codigo_agente_toxico_digito",
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "grupo_agente_toxico_outro",
        "label": "Agente toxico: outro",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "grupo_agente_toxico_outro",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "agente_toxico_1_nome",
        "label": "Agente toxico 1",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_agente_toxico1",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "agente_toxico_2_nome",
        "label": "Agente toxico 2",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_agente_toxico2",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "agente_toxico_3_nome",
        "label": "Agente toxico 3",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_agente_toxico3",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "principio_ativo_1",
        "label": "Principio ativo 1",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "principio_ativo1",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "principio_ativo_2",
        "label": "Principio ativo 2",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "principio_ativo2",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "principio_ativo_3",
        "label": "Principio ativo 3",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "principio_ativo3",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "finalidade_agrotoxico",
        "label": "Finalidade agrotoxico",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Inseticida",
          "2 - Herbicida",
          "3 - Carrapaticida",
          "4 - Raticida",
          "5 - Fungicida",
          "6 - Preservante para madeira",
          "7 - Outro",
          "8 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "tipo_de_agrotoxico",
        "section": "Exposicao"
      },
      {
        "name": "finalidade_agrotoxico_outro",
        "label": "Finalidade: outro",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "finalidade_agrotoxico_outro",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "atividades_exposicao_agrotoxico_opcao_1",
        "label": "Atividade agrotoxico 1",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Diluicao",
          "02 - Pulverizacao",
          "03 - Tratamento de sementes",
          "04 - Armazenagem",
          "05 - Colheita",
          "06 - Transporte",
          "07 - Desinsetizacao",
          "08 - Producao/formulacao",
          "09 - Outros",
          "10 - Nao se aplica",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "codigo_opcao1_agrotoxico_digito",
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "atividades_exposicao_agrotoxico_opcao_2",
        "label": "Atividade agrotoxico 2",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Diluicao",
          "02 - Pulverizacao",
          "03 - Tratamento de sementes",
          "04 - Armazenagem",
          "05 - Colheita",
          "06 - Transporte",
          "07 - Desinsetizacao",
          "08 - Producao/formulacao",
          "09 - Outros",
          "10 - Nao se aplica",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "codigo_opcao2_agrotoxico_digito",
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "atividades_exposicao_agrotoxico_opcao_3",
        "label": "Atividade agrotoxico 3",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Diluicao",
          "02 - Pulverizacao",
          "03 - Tratamento de sementes",
          "04 - Armazenagem",
          "05 - Colheita",
          "06 - Transporte",
          "07 - Desinsetizacao",
          "08 - Producao/formulacao",
          "09 - Outros",
          "10 - Nao se aplica",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "codigo_opcao3_agrotoxico_digito",
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "cultura_lavoura",
        "label": "Cultura/lavoura",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "cultura_lavoura",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "via_exposicao_opcao_1",
        "label": "Via exposicao 1",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Digestiva",
          "2 - Cutanea",
          "3 - Respiratoria",
          "4 - Ocular",
          "5 - Parenteral",
          "6 - Vaginal",
          "7 - Transplacentaria",
          "8 - Outra",
          "9 - Ignorada"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "via_de_exposicao_1",
        "section": "Exposicao"
      },
      {
        "name": "via_exposicao_opcao_2",
        "label": "Via exposicao 2",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Digestiva",
          "2 - Cutanea",
          "3 - Respiratoria",
          "4 - Ocular",
          "5 - Parenteral",
          "6 - Vaginal",
          "7 - Transplacentaria",
          "8 - Outra",
          "9 - Ignorada"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "via_de_exposicao_2",
        "section": "Exposicao"
      },
      {
        "name": "via_exposicao_opcao_3",
        "label": "Via exposicao 3",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Digestiva",
          "2 - Cutanea",
          "3 - Respiratoria",
          "4 - Ocular",
          "5 - Parenteral",
          "6 - Vaginal",
          "7 - Transplacentaria",
          "8 - Outra",
          "9 - Ignorada"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "via_de_exposicao_3",
        "section": "Exposicao"
      },
      {
        "name": "circunstancia_exposicao",
        "label": "Circunstancia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Uso habitual",
          "02 - Acidental",
          "03 - Ambiental",
          "04 - Uso terapeutico",
          "05 - Prescricao medica inadequada",
          "06 - Erro de administracao",
          "07 - Automedicacao",
          "08 - Abuso",
          "09 - Ingestao de alimento/bebida",
          "10 - Tentativa de suicidio",
          "11 - Tentativa de aborto",
          "12 - Violencia/homicidio",
          "13 - Outra",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "circunstancia_exposicao",
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "circunstancia_exposicao_outra",
        "label": "Circunstancia: outra",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "circunstancia_exposicao_outra",
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "exposicao_trabalho_ocupacao",
        "label": "Exposicao no trabalho",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_se_expo_devido_trabalho",
        "section": "Exposicao"
      },
      {
        "name": "tipo_exposicao",
        "label": "Tipo exposicao",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Aguda unica",
          "2 - Aguda repetida",
          "3 - Cronica",
          "4 - Aguda sobre cronica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_tipo_de_expo",
        "section": "Exposicao"
      },
      {
        "name": "tempo_exposicao_numero",
        "label": "Tempo exposicao",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "tempo_exposicao_unidade",
        "label": "Unidade tempo",
        "widget": "radio",
        "default": "2 - Dias",
        "options": [
          "1 - Horas",
          "2 - Dias",
          "3 - Meses",
          "4 - Anos",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Exposicao"
      },
      {
        "name": "tipo_atendimento",
        "label": "Onde foi socorrido",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Hospitalar",
          "2 - Ambulatorial",
          "3 - Domiciliar",
          "4 - Nenhum",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "tipo_de_atendimento_codigo",
        "section": "Local do socorro"
      },
      {
        "name": "houve_hospitalizacao",
        "label": "Houve hospitalizacao",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "codigo_houve_hospitalizacao",
        "section": "Local do socorro"
      },
      {
        "name": "data_internacao",
        "label": "Data internacao",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_internacao_digito",
        "pointKey": null,
        "section": "Local do socorro"
      },
      {
        "name": "uf_internacao",
        "label": "UF internacao",
        "widget": "text",
        "default": "RJ",
        "options": [],
        "spanKey": null,
        "groupKey": "uf_internacao_digito",
        "pointKey": null,
        "section": "Local do socorro"
      },
      {
        "name": "municipio_hospitalizacao",
        "label": "Municipio hospitalizacao",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio_interna",
        "groupKey": null,
        "pointKey": null,
        "section": "Local do socorro"
      },
      {
        "name": "ibge_hospitalizacao",
        "label": "IBGE hospitalizacao",
        "widget": "digits",
        "default": "330455",
        "options": [],
        "spanKey": null,
        "groupKey": "IBGE_inter",
        "pointKey": null,
        "section": "Local do socorro"
      },
      {
        "name": "unidade_saude_hospitalizacao",
        "label": "Unidade hospitalizacao",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "unidade_da_ficha",
        "groupKey": null,
        "pointKey": null,
        "section": "Local do socorro"
      },
      {
        "name": "cnes_unidade_hospitalizacao",
        "label": "CNES do local",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cnes_unidade_digito",
        "pointKey": null,
        "section": "Local do socorro"
      },
      {
        "name": "classificacao_final",
        "label": "Classificacao final",
        "widget": "combo",
        "default": "1 - Intoxicacao confirmada",
        "options": [
          "",
          "1 - Intoxicacao confirmada",
          "2 - So exposicao",
          "3 - Reacao adversa",
          "4 - Outro diagnostico",
          "5 - Sindrome de abstinencia",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "digito_classificação_final",
        "section": "Conclusao"
      },
      {
        "name": "cid10_diagnostico",
        "label": "CID-10 diagnostico",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "T51.0: Efeito tóxico do etanol / álcool etílico.",
          "X45.9: Intoxicação acidental por álcool — local não especificado.",
          "X65.9: Auto-intoxicação voluntária por álcool — local não especificado.",
          "Y15.9: Intoxicação por álcool, intenção não determinada — local não especificado.",
          "T50.9: Intoxicação por outras drogas, medicamentos e substâncias biológicas e as não especificadas; útil para múltiplas substâncias medicamentosas quando não houver classe melhor definida.",
          "X44.9: Intoxicação acidental por outras drogas, medicamentos e substâncias biológicas não especificadas — local não especificado.",
          "X64.9: Auto-intoxicação intencional por outras drogas, medicamentos e substâncias biológicas e as não especificadas — local não especificado.",
          "Y14.9: Intoxicação por outras drogas, medicamentos e substâncias biológicas e as não especificadas, intenção não determinada — local não especificado.",
          "T43.0: Intoxicação por antidepressivos tricíclicos e tetracíclicos.",
          "X41.9: Intoxicação acidental por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos, intenção não determinada — local não especificado.",
          "T43.2: Intoxicação por outros antidepressivos e os não especificados; usar para antidepressivos duais / IRSN quando não houver código mais específico.",
          "X41.9: Intoxicação acidental por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos, intenção não determinada — local não especificado.",
          "T43.2: Intoxicação por outros antidepressivos e os não especificados.",
          "X41.9: Intoxicação acidental por psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por psicotrópicos, intenção não determinada — local não especificado.",
          "T43.2: Intoxicação por antidepressivos inibidores seletivos da recaptação de serotonina — ISRS; no CID-10 brasileiro, geralmente agrupado em 'outros antidepressivos e os não especificados'.",
          "X41.9: Intoxicação acidental por psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por psicotrópicos, intenção não determinada — local não especificado.",
          "T42.4: Intoxicação por benzodiazepinas.",
          "X41.9: Intoxicação acidental por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos, intenção não determinada — local não especificado.",
          "T43.8: Intoxicação por outras drogas psicotrópicas não classificadas em outra parte; opção prática para lítio / carbonato de lítio quando não houver código local mais específico.",
          "X41.9: Intoxicação acidental por psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por psicotrópicos, intenção não determinada — local não especificado.",
          "T42.1: Intoxicação por iminostilbenos, incluindo carbamazepina.",
          "T42.6: Intoxicação por outras drogas antiepilépticas e sedativos-hipnóticos, incluindo ácido valpróico.",
          "T42.7: Intoxicação por drogas antiepilépticas, sedativos-hipnóticos, não especificadas.",
          "X41.9: Intoxicação acidental por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por anticonvulsivantes, sedativos, hipnóticos, antiparkinsonianos e psicotrópicos, intenção não determinada — local não especificado.",
          "T43.3: Intoxicação por antipsicóticos e neurolépticos derivados da fenotiazina.",
          "T43.4: Intoxicação por neurolépticos do tipo butirofenona e tioxanteno.",
          "T43.5: Intoxicação por outros antipsicóticos e neurolépticos e os não especificados.",
          "X41.9: Intoxicação acidental por psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por psicotrópicos, intenção não determinada — local não especificado.",
          "T43.6: Intoxicação por psicoestimulantes que potencialmente podem provocar dependência; usar para anfetaminas/estimulantes quando aplicável.",
          "X41.9: Intoxicação acidental por psicotrópicos não classificados em outra parte — local não especificado.",
          "X61.9: Auto-intoxicação intencional por psicotrópicos não classificados em outra parte — local não especificado.",
          "Y11.9: Intoxicação por psicotrópicos, intenção não determinada — local não especificado.",
          "T40.7: Intoxicação por cannabis e derivados / canabinoides.",
          "X42.9: Intoxicação acidental por narcóticos e psicodislépticos / alucinógenos, incluindo cannabis — local não especificado.",
          "X62.9: Auto-intoxicação intencional por narcóticos e psicodislépticos / alucinógenos, incluindo cannabis — local não especificado.",
          "Y12.9: Intoxicação por narcóticos e psicodislépticos / alucinógenos, intenção não determinada — local não especificado.",
          "T60.0: Efeito tóxico de inseticidas organofosforados e carbamatos.",
          "T60.1: Efeito tóxico de inseticidas halogenados.",
          "T60.2: Efeito tóxico de outros inseticidas.",
          "T60.3: Efeito tóxico de herbicidas e fungicidas.",
          "T60.4: Efeito tóxico de rodenticidas.",
          "T60.8: Efeito tóxico de outros pesticidas.",
          "T60.9: Efeito tóxico de pesticida não especificado.",
          "X48.9: Intoxicação acidental por pesticidas — local não especificado.",
          "X68.9: Auto-intoxicação intencional por pesticidas — local não especificado.",
          "Y18.9: Intoxicação por pesticidas, intenção não determinada — local não especificado.",
          "Y40-Y59: Efeito adverso de fármacos em uso terapêutico; usar quando a situação for reação adversa/efeito adverso, não overdose/intoxicação."
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Conclusao"
      },
      {
        "name": "criterio_confirmacao",
        "label": "Criterio confirmacao",
        "widget": "combo",
        "default": "2 - Clinico-epidemiologico",
        "options": [
          "",
          "1 - Laboratorial",
          "2 - Clinico-epidemiologico",
          "3 - Clinico"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "digito_confirmação",
        "section": "Conclusao"
      },
      {
        "name": "evolucao_caso",
        "label": "Evolucao",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Cura sem sequela",
          "2 - Cura com sequela",
          "3 - Obito por intoxicacao exogena",
          "4 - Obito por outra causa",
          "5 - Perda de seguimento",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "digito_evolução",
        "section": "Conclusao"
      },
      {
        "name": "data_obito",
        "label": "Data obito",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_se_obito_digito",
        "pointKey": null,
        "section": "Conclusao"
      },
      {
        "name": "comunicacao_cat",
        "label": "Comunicacao CAT",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "3 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "digito_cat",
        "section": "Conclusao"
      },
      {
        "name": "data_encerramento",
        "label": "Data encerramento",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_encerramento_digito",
        "pointKey": null,
        "section": "Conclusao"
      },
      {
        "name": "observacoes",
        "label": "Observacoes",
        "widget": "multiline_text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Investigador"
      },
      {
        "name": "investigador_unidade_saude",
        "label": "Unidade investigador",
        "widget": "text",
        "default": "CAPS III MANOEL DE BARROS",
        "options": [],
        "spanKey": "nome_unidade_de_saude",
        "groupKey": null,
        "pointKey": null,
        "section": "Investigador"
      },
      {
        "name": "investigador_cnes",
        "label": "CNES investigador",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cnes_digito",
        "pointKey": null,
        "section": "Investigador"
      },
      {
        "name": "investigador_nome",
        "label": "Nome investigador",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_investigador",
        "groupKey": null,
        "pointKey": null,
        "section": "Investigador"
      },
      {
        "name": "investigador_funcao",
        "label": "Funcao investigador",
        "widget": "text",
        "default": "Técnico em saude mental",
        "options": [],
        "spanKey": "profissao_investigador",
        "groupKey": null,
        "pointKey": null,
        "section": "Investigador"
      }
    ]
  },
  "violencia": {
    "label": "Violencia",
    "title": "Ficha SINAN - Violencia Interpessoal/Autoprovocada",
    "fields": [
      {
        "name": "tipo_notificacao",
        "label": "Tipo de notificacao",
        "widget": "combo",
        "default": "2 - Individual",
        "options": [
          "2 - Individual"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "data_notificacao",
        "label": "Data da notificacao",
        "widget": "date",
        "default": "03/06/2026",
        "options": [],
        "spanKey": null,
        "groupKey": "data_notificacao",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "uf_notificacao",
        "label": "UF notificacao",
        "widget": "text",
        "default": "RJ",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "municipio_notificacao",
        "label": "Municipio notificacao",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio_notificacao",
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "ibge_notificacao",
        "label": "IBGE notificacao",
        "widget": "digits",
        "default": "330455",
        "options": [],
        "spanKey": null,
        "groupKey": "ibge_municipio_notificacao",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "unidade_saude_notificadora",
        "label": "Unidade notificadora",
        "widget": "text",
        "default": "CAPS III MANOEL DE BARROS",
        "options": [],
        "spanKey": "nome_unidade_notificadora",
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "codigo_unidade_notificadora",
        "label": "Codigo unidade",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "codigo_unidade_notificadora",
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "unidade_saude",
        "label": "Unidade de saude",
        "widget": "text",
        "default": "CAPS III MANOEL DE BARROS",
        "options": [],
        "spanKey": "unidade_de_saude",
        "groupKey": null,
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "cnes_unidade_saude",
        "label": "CNES unidade de saude",
        "widget": "digits",
        "default": "9051538",
        "options": [],
        "spanKey": null,
        "groupKey": "cnes_unidade_saude",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "data_ocorrencia_violencia",
        "label": "Data da ocorrencia",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_ocorrencia_violencia",
        "pointKey": null,
        "section": "Dados gerais"
      },
      {
        "name": "nome_paciente",
        "label": "Nome do paciente",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_paciente",
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "data_nascimento",
        "label": "Data de nascimento",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_nascimento",
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "sexo",
        "label": "Sexo",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "M - Masculino",
          "F - Feminino",
          "I - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_sexo",
        "section": "Paciente"
      },
      {
        "name": "gestante",
        "label": "Gestante",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - 1o trimestre",
          "2 - 2o trimestre",
          "3 - 3o trimestre",
          "4 - Idade gestacional ignorada",
          "5 - Nao",
          "6 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_gestante",
        "section": "Paciente"
      },
      {
        "name": "raca_cor",
        "label": "Raca/cor",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Branca",
          "2 - Preta",
          "3 - Amarela",
          "4 - Parda",
          "5 - Indigena",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_racial",
        "section": "Paciente"
      },
      {
        "name": "escolaridade",
        "label": "Escolaridade",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "0 - Analfabeto",
          "1 - 1a a 4a serie incompleta EF",
          "2 - 4a serie completa EF",
          "3 - 5a a 8a serie incompleta EF",
          "4 - Ensino fundamental completo",
          "5 - Ensino medio incompleto",
          "6 - Ensino medio completo",
          "7 - Educacao superior incompleta",
          "8 - Educacao superior completa",
          "9 - Ignorado",
          "10 - Nao se aplica"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_escolaridade",
        "section": "Paciente"
      },
      {
        "name": "cartao_sus",
        "label": "Cartao SUS",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cartao_sus",
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "nome_mae",
        "label": "Nome da mae",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_mae",
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "nome_social",
        "label": "Nome social",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_social",
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "ocupacao",
        "label": "Ocupacao",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "ocupacao",
        "groupKey": null,
        "pointKey": null,
        "section": "Paciente"
      },
      {
        "name": "situacao_conjugal",
        "label": "Situacao conjugal",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Solteiro",
          "2 - Casado/uniao consensual",
          "3 - Viuvo",
          "4 - Separado",
          "8 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "estadocivil_checkbox",
        "section": "Paciente"
      },
      {
        "name": "orientacao_sexual",
        "label": "Orientacao sexual",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Heterossexual",
          "2 - Homossexual",
          "3 - Bissexual",
          "8 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "orientacaoSEX_checkbox",
        "section": "Paciente"
      },
      {
        "name": "identidade_genero",
        "label": "Identidade de genero",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Travesti",
          "2 - Mulher transexual",
          "3 - Homem transexual",
          "8 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "identidade_de_genero_checkbox",
        "section": "Paciente"
      },
      {
        "name": "possui_deficiencia_transtorno",
        "label": "Deficiencia/transtorno",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_deficienciaOUtranstorno",
        "section": "Paciente"
      },
      {
        "name": "deficiencia_fisica",
        "label": "Deficiencia fisica",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se_deficiente_fisico_checkbox",
        "section": "Paciente"
      },
      {
        "name": "deficiencia_intelectual",
        "label": "Deficiencia intelectual",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-deficiente-intelectual_checkbox",
        "section": "Paciente"
      },
      {
        "name": "deficiencia_visual",
        "label": "Deficiencia visual",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-deficiente-visual-checkbox",
        "section": "Paciente"
      },
      {
        "name": "deficiencia_auditiva",
        "label": "Deficiencia auditiva",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-deficiente-auditivo-checkbox",
        "section": "Paciente"
      },
      {
        "name": "transtorno_mental",
        "label": "Transtorno mental",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-transtorno-mental-checkbox",
        "section": "Paciente"
      },
      {
        "name": "transtorno_comportamental",
        "label": "Transtorno comportamental",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-transtorno-comportamental-checkbox",
        "section": "Paciente"
      },
      {
        "name": "deficiencia_outro",
        "label": "Outro tipo",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-outro-checkbox",
        "section": "Paciente"
      },
      {
        "name": "deficiencia_outro_texto",
        "label": "Outro tipo: qual",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-outro-espaço escrita",
        "section": "Paciente"
      },
      {
        "name": "uf_residencia",
        "label": "UF residencia",
        "widget": "text",
        "default": "RJ",
        "options": [],
        "spanKey": "uf_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "municipio_residencia",
        "label": "Municipio residencia",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "ibge_residencia",
        "label": "IBGE residencia",
        "widget": "digits",
        "default": "330455",
        "options": [],
        "spanKey": null,
        "groupKey": "ibge_residencia",
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "distrito_residencia",
        "label": "Distrito residencia",
        "widget": "text",
        "default": "Sede (AP 4.0)",
        "options": [],
        "spanKey": "distrito_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "bairro_residencia",
        "label": "Bairro residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "bairro_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "logradouro_residencia",
        "label": "Logradouro residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "logradouro_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "numero_residencia",
        "label": "Numero residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "numero_casa",
        "section": "Residencia"
      },
      {
        "name": "complemento_residencia",
        "label": "Complemento residencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "complemento_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "ponto_referencia_residencia",
        "label": "Ponto de referencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "referencia_residencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "cep_residencia",
        "label": "CEP residencia",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cep_residencia",
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "telefone_residencia",
        "label": "Telefone residencia",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "telefone_residencia",
        "pointKey": null,
        "section": "Residencia"
      },
      {
        "name": "zona_residencia",
        "label": "Zona residencia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Urbana",
          "2 - Rural",
          "3 - Periurbana",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "check_box_zona_moradia",
        "section": "Residencia"
      },
      {
        "name": "uf_ocorrencia",
        "label": "UF ocorrencia",
        "widget": "text",
        "default": "RJ",
        "options": [],
        "spanKey": "uf_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "municipio_ocorrencia",
        "label": "Municipio ocorrencia",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "ibge_ocorrencia",
        "label": "IBGE ocorrencia",
        "widget": "digits",
        "default": "330455",
        "options": [],
        "spanKey": null,
        "groupKey": "ibge_ocorrencia",
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "bairro_ocorrencia",
        "label": "Bairro ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "bairro_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "logradouro_ocorrencia",
        "label": "Logradouro ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "logradouro_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "numero_ocorrencia",
        "label": "Numero ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "numero-ocorrencia",
        "section": "Ocorrencia"
      },
      {
        "name": "complemento_ocorrencia",
        "label": "Complemento ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "complemento_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "ponto_referencia_ocorrencia",
        "label": "Referencia ocorrencia",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "referencia_ocorrencia",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "zona_ocorrencia",
        "label": "Zona ocorrencia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Urbana",
          "2 - Rural",
          "3 - Periurbana",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "zona-ocorrencia-checkbox",
        "section": "Ocorrencia"
      },
      {
        "name": "hora_ocorrencia",
        "label": "Hora ocorrencia",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "hora_ocorrencia",
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "local_ocorrencia_violencia",
        "label": "Local ocorrencia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Residencia",
          "02 - Habitacao coletiva",
          "03 - Escola",
          "04 - Local de pratica esportiva",
          "05 - Bar ou similar",
          "06 - Via publica",
          "07 - Comercio/servicos",
          "08 - Industrias/construcao",
          "09 - Outros",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "local_ocorrencia_codigo",
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "local_ocorrencia_outro",
        "label": "Local: outro",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "local_ocorrencia_outro_texto",
        "groupKey": null,
        "pointKey": null,
        "section": "Ocorrencia"
      },
      {
        "name": "ocorreu_outras_vezes",
        "label": "Ocorreu outras vezes",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-vezes",
        "section": "Violencia"
      },
      {
        "name": "lesao_autoprovocada",
        "label": "Lesao autoprovocada",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-lesao-autoprovocada",
        "section": "Violencia"
      },
      {
        "name": "motivacao_violencia",
        "label": "Motivacao",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "01 - Sexismo",
          "02 - Homofobia/lesbofobia/bifobia/transfobia",
          "03 - Racismo",
          "04 - Intolerancia religiosa",
          "05 - Xenofobia",
          "06 - Conflito geracional",
          "07 - Situacao de rua",
          "08 - Deficiencia",
          "09 - Outros",
          "88 - Nao se aplica",
          "99 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": "motivacao_violencia_codigo",
        "pointKey": null,
        "section": "Violencia"
      },
      {
        "name": "tipo_violencia_outros",
        "label": "Tipo violencia: outros",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "tipo_violencia_outros_texto",
        "groupKey": null,
        "pointKey": null,
        "section": "Violencia"
      },
      {
        "name": "violencia_fisica",
        "label": "Meio: forca corporal",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_corpo",
        "section": "Violencia"
      },
      {
        "name": "violencia_enforcamento",
        "label": "Meio: enforcamento",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_enforcamento",
        "section": "Violencia"
      },
      {
        "name": "violencia_objeto_contuso",
        "label": "Meio: objeto contuso",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_objetoCONTUSO",
        "section": "Violencia"
      },
      {
        "name": "violencia_objeto_perfurante",
        "label": "Meio: objeto perfurante",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_obj_perfurante",
        "section": "Violencia"
      },
      {
        "name": "violencia_substancia_quimica",
        "label": "Meio: substancia quente/quimica",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_quimico",
        "section": "Violencia"
      },
      {
        "name": "violencia_envenenamento",
        "label": "Meio: envenenamento",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_envenenamento",
        "section": "Violencia"
      },
      {
        "name": "violencia_arma_fogo",
        "label": "Meio: arma de fogo",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_armaDEfogo",
        "section": "Violencia"
      },
      {
        "name": "violencia_ameaca",
        "label": "Meio: ameaca",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_ameaca",
        "section": "Violencia"
      },
      {
        "name": "violencia_meio_outro",
        "label": "Meio: outro",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_meio-agressao_outro",
        "section": "Violencia"
      },
      {
        "name": "meio_agressao_outro",
        "label": "Meio: outro texto",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "meio_agressao_outro_texto",
        "groupKey": null,
        "pointKey": null,
        "section": "Violencia"
      },
      {
        "name": "violencia_sexual_assedio",
        "label": "Sexual: assedio",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_sexual_assedio",
        "section": "Violencia sexual"
      },
      {
        "name": "violencia_sexual_estupro",
        "label": "Sexual: estupro",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_sexual_estupro",
        "section": "Violencia sexual"
      },
      {
        "name": "violencia_sexual_infantil",
        "label": "Sexual: pornografia infantil",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_sexual_infantil",
        "section": "Violencia sexual"
      },
      {
        "name": "violencia_sexual_exploracao",
        "label": "Sexual: exploracao sexual",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_sexual_exploracao",
        "section": "Violencia sexual"
      },
      {
        "name": "violencia_sexual_outro_check",
        "label": "Sexual: outros",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox_sexual_outros",
        "section": "Violencia sexual"
      },
      {
        "name": "violencia_sexual_outros",
        "label": "Sexual: outros texto",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "violencia_sexual_outros_texto",
        "groupKey": null,
        "pointKey": null,
        "section": "Violencia sexual"
      },
      {
        "name": "autor_sexo",
        "label": "Sexo do autor",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Masculino",
          "2 - Feminino",
          "3 - Ambos os sexos",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-autor-da-viol",
        "section": "Autor"
      },
      {
        "name": "autor_usou_alcool",
        "label": "Autor usou alcool",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-se-autor-usouALCOOL",
        "section": "Autor"
      },
      {
        "name": "autor_ciclo_vida",
        "label": "Ciclo de vida do autor",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Crianca",
          "2 - Adolescente",
          "3 - Jovem",
          "4 - Pessoa adulta",
          "5 - Pessoa idosa",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "idade-do-autor-checkbox",
        "section": "Autor"
      },
      {
        "name": "vinculo_autor_outros",
        "label": "Vinculo autor: outros",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "vinculo_autor_outros_texto",
        "groupKey": null,
        "pointKey": null,
        "section": "Autor"
      },
      {
        "name": "cid10_capitulo_xx",
        "label": "CID-10 capitulo XX",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cid10_capitulo_xx",
        "pointKey": null,
        "section": "Conclusao"
      },
      {
        "name": "data_encerramento",
        "label": "Data encerramento",
        "widget": "date",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "data_encerramento",
        "pointKey": null,
        "section": "Conclusao"
      },
      {
        "name": "violencia_relacionada_trabalho",
        "label": "Relacionada ao trabalho",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-viol-relacionadaAOtrabalho",
        "section": "Conclusao"
      },
      {
        "name": "violencia_trabalho_cat",
        "label": "CAT",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "8 - Nao se aplica",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "se-violencia-do-trabalho-CAT-CHECKBOX",
        "section": "Conclusao"
      },
      {
        "name": "encaminhamento_saude",
        "label": "Encaminhamento: saude",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-rede-de-saude",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_assistencia_social",
        "label": "Encaminhamento: assistencia social",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-rede-social",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_educacao",
        "label": "Encaminhamento: educacao",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-rede-educacao",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_mulher",
        "label": "Encaminhamento: rede mulher",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-rede-mulher",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_conselho_tutelar",
        "label": "Encaminhamento: conselho tutelar",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-rede-tutelar",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_idoso",
        "label": "Encaminhamento: rede idoso",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-rede-do-idoso",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_delegacia_idoso",
        "label": "Encaminhamento: delegacia idoso",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-delegaciaIDOSO",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_direitos_humanos",
        "label": "Encaminhamento: direitos humanos",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-rede-de-direitoshumanos",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_ministerio_publico",
        "label": "Encaminhamento: Ministerio Publico",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-MP",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_delegacia_infancia",
        "label": "Encaminhamento: delegacia infancia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-delegacia-infancia",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_delegacia_mulher",
        "label": "Encaminhamento: delegacia mulher",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-delegacia-mulher",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_outras_delegacias",
        "label": "Encaminhamento: outras delegacias",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-outras-delegacias",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_justica_infancia",
        "label": "Encaminhamento: justica infancia",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-justiça-da-infancia",
        "section": "Encaminhamentos"
      },
      {
        "name": "encaminhamento_defensoria",
        "label": "Encaminhamento: defensoria",
        "widget": "combo",
        "default": "",
        "options": [
          "",
          "1 - Sim",
          "2 - Nao",
          "9 - Ignorado"
        ],
        "spanKey": null,
        "groupKey": null,
        "pointKey": "checkbox-encaminhamento-defensoria-publica",
        "section": "Encaminhamentos"
      },
      {
        "name": "nome_acompanhante",
        "label": "Nome acompanhante",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_acompanhante",
        "groupKey": null,
        "pointKey": null,
        "section": "Acompanhante"
      },
      {
        "name": "vinculo_acompanhante",
        "label": "Vinculo acompanhante",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "vinculo_acompanhante",
        "groupKey": null,
        "pointKey": null,
        "section": "Acompanhante"
      },
      {
        "name": "telefone_acompanhante",
        "label": "Telefone acompanhante",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "telefone_acompanhante",
        "pointKey": null,
        "section": "Acompanhante"
      },
      {
        "name": "observacoes",
        "label": "Observacoes",
        "widget": "multiline_text",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": null,
        "pointKey": null,
        "section": "Notificador"
      },
      {
        "name": "municipio_unidade_saude_notificador",
        "label": "Municipio unidade notificadora",
        "widget": "text",
        "default": "RIO DE JANEIRO",
        "options": [],
        "spanKey": "municipio_unidade_saude_notificador",
        "groupKey": null,
        "pointKey": null,
        "section": "Notificador"
      },
      {
        "name": "cnes_notificador",
        "label": "CNES notificador",
        "widget": "digits",
        "default": "",
        "options": [],
        "spanKey": null,
        "groupKey": "cnes_notificador",
        "pointKey": null,
        "section": "Notificador"
      },
      {
        "name": "nome_notificador",
        "label": "Nome notificador",
        "widget": "text",
        "default": "",
        "options": [],
        "spanKey": "nome_notificador",
        "groupKey": null,
        "pointKey": null,
        "section": "Notificador"
      },
      {
        "name": "cargo_notificador",
        "label": "Cargo notificador",
        "widget": "text",
        "default": "Técnico em saude mental",
        "options": [],
        "spanKey": "cargo_notificador",
        "groupKey": null,
        "pointKey": null,
        "section": "Notificador"
      }
    ]
  }
};
