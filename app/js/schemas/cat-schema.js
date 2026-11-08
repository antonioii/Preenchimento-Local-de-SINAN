// Extensao especifica da ficha de acidente de trabalho (CAT).
window.SINAN_SCHEMAS.cat = (() => {
  const fields = [];
  const shared = (name) => window.SINAN_SCHEMAS.intoxicacao.fields.find(f => f.name === name);
  const add = (section, name, label, widget = "text", extra = {}) => fields.push({ section, name, label, widget, ...extra });
  const text = (section, name, label, maxLength = 60) => add(section, name, label, "text", {maxLength});
  const digits = (section, name, label, maxLength) => add(section, name, label, "digits", {maxLength});
  const date = (section, name, label) => add(section, name, label, "date");
  const combo = (section, name, label, options, initial = "") => add(section, name, label, "combo", {options, default: initial});
  const common = (section, name, label, from = name, initial = "") => combo(section, name, label, [...shared(from).options], initial);
  const yesNo = ["", "1 - Sim", "2 - Não", "9 - Ignorado"];
  const yesNoNA = ["", "1 - Sim", "2 - Não", "3 - Não se aplica", "9 - Ignorado"];

  text("Dados gerais", "numero_notificacao", "Número da ficha", 20);
  date("Dados gerais", "data_notificacao", "3. Data da notificação");
  text("Dados gerais", "uf_notificacao", "4. UF da notificação", 2);
  text("Dados gerais", "municipio_notificacao", "5. Município da notificação");
  digits("Dados gerais", "codigo_ibge_notificacao", "5. Código IBGE da notificação", 6);
  text("Dados gerais", "unidade_saude", "6. Unidade de saúde notificadora");
  digits("Dados gerais", "codigo_unidade_saude", "6. Código da unidade notificadora", 7);
  date("Dados gerais", "data_acidente", "7. Data do acidente");

  text("Paciente", "nome_paciente", "8. Nome do paciente");
  date("Paciente", "data_nascimento", "9. Data de nascimento");
  digits("Paciente", "idade_numero", "10. Idade", 2);
  common("Paciente", "idade_unidade", "10. Unidade da idade", "idade_unidade", "4 - Anos");
  common("Paciente", "sexo", "11. Sexo");
  common("Paciente", "gestante", "12. Gestante");
  common("Paciente", "raca_cor", "13. Raça/cor");
  common("Paciente", "escolaridade", "14. Escolaridade");
  digits("Paciente", "cartao_sus", "15. Número do Cartão SUS", 15);
  text("Paciente", "nome_mae", "16. Nome da mãe");

  text("Residência", "uf_residencia", "17. UF de residência", 2);
  text("Residência", "municipio_residencia", "18. Município de residência");
  digits("Residência", "codigo_ibge_residencia", "18. Código IBGE de residência", 6);
  text("Residência", "distrito_residencia", "19. Distrito");
  text("Residência", "bairro_residencia", "20. Bairro");
  text("Residência", "logradouro_residencia", "21. Logradouro");
  digits("Residência", "codigo_logradouro", "21. Código do logradouro", 6);
  text("Residência", "numero_residencia", "22. Número", 10);
  text("Residência", "complemento_residencia", "23. Complemento");
  text("Residência", "referencia_residencia", "26. Ponto de referência");
  digits("Residência", "cep_residencia", "27. CEP", 8);
  digits("Residência", "telefone_residencia", "28. Telefone com DDD", 11);
  common("Residência", "zona_residencia", "29. Zona");
  text("Residência", "pais_residencia", "30. País (se residente fora do Brasil)");

  text("Trabalho", "ocupacao", "31. Ocupação");
  common("Trabalho", "situacao_trabalho", "32. Situação no mercado de trabalho", "situacao_mercado_trabalho");
  digits("Trabalho", "tempo_trabalho", "33. Tempo na ocupação", 2);
  combo("Trabalho", "unidade_tempo_trabalho", "33. Unidade de tempo", ["", "1 - Hora", "2 - Dia", "3 - Mês", "4 - Ano"]);
  combo("Trabalho", "local_acidente", "34. Local onde ocorreu o acidente", ["", "1 - Instalações do contratante", "2 - Via pública", "3 - Instalações de terceiros", "4 - Domicílio próprio", "9 - Ignorado"]);

  digits("Empresa contratante", "registro_empresa", "35. Registro / CNPJ ou CPF", 14);
  text("Empresa contratante", "nome_empresa", "36. Nome da empresa ou empregador");
  text("Empresa contratante", "cnae_empresa", "37. Atividade econômica (CNAE)");
  text("Empresa contratante", "uf_empresa", "38. UF", 2);
  text("Empresa contratante", "municipio_empresa", "39. Município");
  digits("Empresa contratante", "codigo_ibge_empresa", "39. Código IBGE", 6);
  text("Empresa contratante", "distrito_empresa", "40. Distrito");
  text("Empresa contratante", "bairro_empresa", "41. Bairro");
  text("Empresa contratante", "endereco_empresa", "42. Endereço");
  text("Empresa contratante", "numero_empresa", "43. Número", 10);
  text("Empresa contratante", "referencia_empresa", "44. Ponto de referência");
  digits("Empresa contratante", "telefone_empresa", "45. Telefone com DDD", 11);
  combo("Empresa contratante", "terceirizada", "46. Empregador é empresa terceirizada?", yesNoNA);
  digits("Empresa contratante", "cnae_empresa_principal", "47. CNAE da empresa principal", 8);
  digits("Empresa contratante", "cnpj_empresa_principal", "48. CNPJ da empresa principal", 14);
  text("Empresa contratante", "razao_social_principal", "49. Razão social da empresa principal");

  digits("Acidente", "hora_acidente", "50. Hora do acidente (HH)", 2);
  digits("Acidente", "minuto_acidente", "50. Minutos do acidente (MM)", 2);
  digits("Acidente", "horas_jornada", "51. Horas após o início da jornada (HH)", 2);
  digits("Acidente", "minutos_jornada", "51. Minutos após o início da jornada (MM)", 2);
  text("Acidente", "uf_ocorrencia", "52. UF de ocorrência", 2);
  text("Acidente", "municipio_ocorrencia", "53. Município de ocorrência");
  digits("Acidente", "codigo_ibge_ocorrencia", "53. Código IBGE da ocorrência", 7);
  text("Acidente", "cid_causa", "54. CID-10 da causa do acidente (V01 a Y98)", 5);
  combo("Acidente", "tipo_acidente", "55. Tipo de acidente", ["", "1 - Típico", "2 - Trajeto", "9 - Ignorado"]);
  combo("Acidente", "outros_trabalhadores", "56. Outros trabalhadores atingidos?", yesNo);
  digits("Acidente", "quantidade_trabalhadores", "57. Se sim, quantos?", 3);

  combo("Atendimento", "atendimento_medico", "58. Ocorreu atendimento médico?", yesNo);
  date("Atendimento", "data_atendimento", "59. Data do atendimento");
  text("Atendimento", "uf_atendimento", "60. UF do atendimento", 2);
  text("Atendimento", "municipio_atendimento", "61. Município do atendimento");
  digits("Atendimento", "codigo_ibge_atendimento", "61. Código IBGE do atendimento", 7);
  text("Atendimento", "unidade_atendimento", "62. Unidade de saúde de atendimento");
  digits("Atendimento", "codigo_unidade_atendimento", "62. Código da unidade de atendimento", 7);
  const partes = ["", "01 - Olho", "02 - Cabeça", "03 - Pescoço", "04 - Tórax", "05 - Abdome", "06 - Mão", "07 - Membro superior", "08 - Membro inferior", "09 - Pé", "10 - Todo o corpo", "11 - Outro", "99 - Ignorado"];
  for (let n = 1; n <= 3; n++) combo("Atendimento", `parte_corpo_${n}`, `63. Parte do corpo atingida — opção ${n}`, partes);
  text("Atendimento", "cid_lesao", "64. CID-10 do diagnóstico da lesão", 5);
  combo("Atendimento", "regime_tratamento", "65. Regime de tratamento", ["", "1 - Hospitalar", "2 - Ambulatorial", "3 - Ambos", "9 - Ignorado"]);
  combo("Conclusão", "evolucao", "66. Evolução do caso", ["", "1 - Cura", "2 - Incapacidade temporária", "3 - Incapacidade parcial permanente", "4 - Incapacidade total permanente", "5 - Óbito por acidente de trabalho grave", "6 - Óbito por outras causas", "7 - Outro", "9 - Ignorado"]);
  date("Conclusão", "data_obito", "67. Data do óbito");
  combo("Conclusão", "emitiu_cat", "68. Foi emitida a Comunicação de Acidente de Trabalho (CAT)?", yesNoNA);

  add("Observações", "descricao_acidente", "Descrição do acidente, atividade, causas e condições", "multiline_text", {maxLength: 600, counterMax: 600});
  add("Observações", "outras_informacoes", "Outras informações", "multiline_text", {maxLength: 450, counterMax: 450});
  text("Investigador", "municipio_unidade_investigador", "Município / unidade de saúde");
  digits("Investigador", "codigo_unidade_investigador", "Código da unidade de saúde", 7);
  text("Investigador", "nome_investigador", "Nome do investigador");
  text("Investigador", "funcao_investigador", "Função do investigador");
  const defaults = {
    uf_notificacao: "RJ", municipio_notificacao: "Rio de Janeiro", codigo_ibge_notificacao: "330455",
    unidade_saude: "CAPS III MANOEL DE BARROS", codigo_unidade_saude: "9051538",
    uf_residencia: "RJ", municipio_residencia: "Rio de Janeiro", codigo_ibge_residencia: "330455",
    distrito_residencia: "Sede (AP 4.0)", zona_residencia: "1 - Urbana",
    unidade_tempo_trabalho: "1 - Hora", local_acidente: "1 - Instalações do contratante",
    uf_empresa: "RJ", municipio_empresa: "Rio de Janeiro", codigo_ibge_empresa: "330455", distrito_empresa: "Sede (AP 4.0)",
    uf_ocorrencia: "RJ", municipio_ocorrencia: "Rio de Janeiro", codigo_ibge_ocorrencia: "330455",
    atendimento_medico: "1 - Sim", uf_atendimento: "RJ", municipio_atendimento: "Rio de Janeiro", codigo_ibge_atendimento: "330455",
    emitiu_cat: "1 - Sim", municipio_unidade_investigador: "Rio de Janeiro / CAPS III MANOEL DE BARROS",
    codigo_unidade_investigador: "9051538", funcao_investigador: "TECNICO EM SAUDE",
  };
  for (const field of fields) if (Object.hasOwn(defaults, field.name)) field.default = defaults[field.name];
  return {label: "CAT", title: "Ficha SINAN - Acidente de Trabalho (CAT)", fields};
})();
