window.addEventListener("DOMContentLoaded", () => {
  const V = window.SINAN_VALIDATION;
  const schemas = window.SINAN_SCHEMAS;
  const config = window.SINAN_CONFIG;

  const state = {
    formType: "intoxicacao",
    fields: [],
    hidden: new Set(),
    activeSection: "",
  };

  const elements = {
    formType: document.getElementById("form-type"),
    title: document.getElementById("form-title"),
    tabs: document.getElementById("tabs"),
    panels: document.getElementById("form-panels"),
    status: document.getElementById("status"),
    generatePdf: document.getElementById("generate-pdf"),
    newForm: document.getElementById("new-form"),
  };

  const HIDDEN_UI_FIELDS = {
    intoxicacao: new Set(["idade_numero", "idade_unidade"]),
  };

  const SEXUAL_SECTION = "Violencia sexual";
  const YES_NO_IGNORED = ["1 - Sim", "2 - Nao", "9 - Ignorado"];
  const TYPE_VIOLENCE_OPTIONS = ["1 - Sim", "2 - Nao", "3 - Ignorado"];
  const DEFICIENCY_FIELDS = new Set([
    "deficiencia_fisica",
    "deficiencia_intelectual",
    "deficiencia_visual",
    "deficiencia_auditiva",
    "transtorno_mental",
    "transtorno_comportamental",
    "deficiencia_outro",
  ]);
  const VIOLENCE_MEANS_FIELDS = [
    "violencia_fisica",
    "violencia_enforcamento",
    "violencia_objeto_contuso",
    "violencia_objeto_perfurante",
    "violencia_substancia_quimica",
    "violencia_envenenamento",
    "violencia_arma_fogo",
    "violencia_ameaca",
    "violencia_meio_outro",
  ];
  const SEXUAL_FIELDS = new Set([
    "violencia_sexual_assedio",
    "violencia_sexual_estupro",
    "violencia_sexual_infantil",
    "violencia_sexual_exploracao",
    "violencia_sexual_outro_check",
    "violencia_sexual_outros",
    "procedimento_profilaxia_dst",
    "procedimento_profilaxia_hiv",
    "procedimento_profilaxia_hbv",
    "procedimento_coleta_sangue",
    "procedimento_coleta_semen",
    "procedimento_coleta_vaginal",
    "procedimento_contracepcao",
    "procedimento_aborto",
  ]);
  const AUTOR_VINCULO_FIELDS = [
    ["vinculo_autor_pai", "Pai", "check-box-vinculo-pai"],
    ["vinculo_autor_mae", "Mae", "check-box-vinculo-mae"],
    ["vinculo_autor_padrasto", "Padrasto", "check-box-vinculo-padrasto"],
    ["vinculo_autor_madrasta", "Madrasta", "check-box-vinculo-madrasta"],
    ["vinculo_autor_conjuge", "Conjuge", "check-box-vinculo-conjuge"],
    ["vinculo_autor_ex_conjuge", "Ex-conjuge", "check-box-vinculo-ex-conjuge"],
    ["vinculo_autor_namorado", "Namorado", "check-box-vinculo-namorado"],
    ["vinculo_autor_ex_namorado", "Ex-namorado", "check-box-vinculo-ex-namorado"],
    ["vinculo_autor_filho", "Filho", "check-box-vinculo-filho"],
    ["vinculo_autor_irmao", "Irmao", "check-box-vinculo-irmao"],
    ["vinculo_autor_amigos", "Amigos/conhecidos", "check-box-vinculo-amigosOUconhecidos"],
    ["vinculo_autor_desconhecidos", "Desconhecidos", "check-box-vinculo-desconhecidos"],
    ["vinculo_autor_cuidador", "Cuidador", "check-box-vinculo-cuidador"],
    ["vinculo_autor_patrao", "Patrao/chefe", "check-box-vinculo-patrao"],
    ["vinculo_autor_institucional", "Relacao institucional", "check-box-vinculo-pessoa_comRELACAO_institucional"],
    ["vinculo_autor_agente_lei", "Agente da lei", "check-box-vinculo-agente-da-lei"],
    ["vinculo_autor_proprio", "Propria pessoa", "check-box-vinculo-PROPRIO"],
    ["vinculo_autor_outros_check", "Outros", "check-box-vinculo-OUTROS"],
  ];
  const VIOLENCIA_CID_GROUPS = [
    {
      label: "------ autoprovocadas ------",
      options: [
        "X70: Lesao autoprovocada intencionalmente por enforcamento, estrangulamento e sufocacao.",
        "X71: Lesao autoprovocada intencionalmente por afogamento e submersao.",
        "X72: Lesao autoprovocada intencionalmente por disparo de arma de fogo de mao.",
        "X73: Lesao autoprovocada intencionalmente por disparo de espingarda, carabina ou arma de fogo de maior calibre.",
        "X74: Lesao autoprovocada intencionalmente por disparo de outra arma de fogo e de arma de fogo nao especificada.",
        "X75: Lesao autoprovocada intencionalmente por dispositivos explosivos.",
        "X76: Lesao autoprovocada intencionalmente por fumaca, fogo e chamas.",
        "X77: Lesao autoprovocada intencionalmente por vapor de agua, gases ou objetos quentes.",
        "X78: Lesao autoprovocada intencionalmente por objeto cortante ou penetrante.",
        "X79: Lesao autoprovocada intencionalmente por objeto contundente.",
        "X80: Lesao autoprovocada intencionalmente por precipitacao de lugar elevado.",
        "X83: Lesao autoprovocada intencionalmente por outros meios especificados.",
        "X84: Lesao autoprovocada intencionalmente por meios nao especificados.",
        "X81: Jogar-se (ou permanecer) propositalmente na frente de um veículo em movimento.",
        "X82: Provocar propositalmente uma batida ou impacto usando um veículo motorizado (como carro ou moto).",
      ],
    },
    {
      label: "------ por terceiros ------",
      options: [
        "Y04: Agressao por meio de forca corporal.",
        "Y05: Agressao sexual por meio de forca fisica.",
        "X85: Agressao por meio de drogas, medicamentos e substancias biologicas.",
        "X86: Agressao por meio de substancias corrosivas.",
        "X87: Agressao por pesticidas.",
        "X88: Agressao por gases e vapores.",
        "X89: Agressao por outros produtos quimicos e substancias nocivas especificadas.",
        "X90: Agressao por produtos quimicos e substancias nocivas nao especificadas.",
        "X91: Agressao por enforcamento, estrangulamento e sufocacao.",
        "X92: Agressao por afogamento e submersao.",
        "X93: Agressao por disparo de arma de fogo de mao.",
        "X94: Agressao por disparo de espingarda, carabina ou arma de fogo de maior calibre.",
        "X95: Agressao por disparo de outra arma de fogo ou de arma nao especificada.",
        "X96: Agressao por material explosivo.",
        "X97: Agressao por fumaca, fogo e chamas.",
        "X98: Agressao por vapor de agua, gases ou objetos quentes.",
        "X99: Agressao por objeto cortante ou penetrante.",
        "Y02: Empurrar ou jogar outra pessoa propositalmente na frente de um veículo em movimento.",
        "Y03: Atropelar (ou atingir) outra pessoa propositalmente com um veículo motorizado.",
      ],
    },
  ];

  patchSchemaDefinitions();

  function patchSchemaDefinitions() {
    const intoxicacao = schemas.intoxicacao?.fields || [];
    const violencia = schemas.violencia?.fields || [];
    const byName = (fields, name) => fields.find((field) => field.name === name);
    const setIntox = (name, values) => Object.assign(byName(intoxicacao, name) || {}, values);
    const setViol = (name, values) => Object.assign(byName(violencia, name) || {}, values);

    setIntox("zona_residencia", { default: "1 - Urbana" });
    setIntox("nome_local_ocorrencia", { placeholder: "(Ex: Residencia)" });
  setIntox("cartao_sus", { maxLength: 15 });
  const cnae = byName(intoxicacao, "cnae_local_ocorrencia");
  if (cnae) {
    Object.assign(cnae, {
      label: "CNAE (Codigo de atividade do local)",
      default: "IGNORADO",
      placeholder: "",
    });
    cnae.options = [
      "IGNORADO",
      ...(cnae.options || []).filter((option) => {
        const normalized = String(option || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return option && normalized !== "ignorado" && !normalized.includes("usuario nao informou");
      }),
    ];
  }
    setIntox("complemento_local_ocorrencia", { placeholder: "(Ex: Apartamento, casa...)" });
    setIntox("zona_exposicao", { default: "1 - Urbana" });
    setIntox("grupo_agente_toxico", { default: "01 - Medicamento" });
    setIntox("agente_toxico_1_nome", { placeholder: "(Nome da substancia 1)" });
    setIntox("agente_toxico_2_nome", { placeholder: "(Nome da substancia 2)" });
    setIntox("agente_toxico_3_nome", { placeholder: "(Nome da substancia 3)" });
    setIntox("principio_ativo_1", { placeholder: "(Nome do principio ativo 1)" });
    setIntox("principio_ativo_2", { placeholder: "(Nome do principio ativo 2)" });
    setIntox("principio_ativo_3", { placeholder: "(Nome do principio ativo 3)" });
    setIntox("via_exposicao_opcao_1", { default: "1 - Digestiva" });
    setIntox("circunstancia_exposicao", { default: "10 - Tentativa de suicidio" });
    setIntox("exposicao_trabalho_ocupacao", { default: "2 - Nao" });
    setIntox("tempo_exposicao_numero", { maxLength: 2 });
    setIntox("tempo_exposicao_unidade", { default: "2 - Dias" });
    setIntox("unidade_saude_hospitalizacao", { spanKey: "nome_unidade_de_saude" });
    setIntox("cnes_unidade_hospitalizacao", { placeholder: "Opcional" });
    setIntox("evolucao_caso", { default: "1 - Cura sem sequela" });
    setIntox("comunicacao_cat", { default: "9 - Ignorado" });
    setIntox("observacoes", { maxLength: 240 });
    setIntox("investigador_unidade_saude", { spanKey: "unidade_da_ficha" });
    setIntox("investigador_cnes", { default: "9051538" });
    setIntox("investigador_nome", { placeholder: "(Nome do profissional que esta atendendo)" });

    const cid = byName(intoxicacao, "cid10_diagnostico");
    if (cid) {
      cid.options = [
        "",
        "T42.4 - Intoxicacao por benzodiazepinicos",
        "T43.2 - Intoxicacao por outros antidepressivos",
        "T43.0 - Intoxicacao por antidepressivos triciclicos e tetraciclicos",
        "X61.9 - Intoxicacao por outros psicotropicos",
        "T50.9 - Intoxicacao por outras drogas e substancias biologicas",
        "X64.9 - Auto-intoxicacao intencional por outras drogas",
        "T43.8 - Intoxicacao por outras drogas psicotropicas",
        "T42.1 - Intoxicacao por carbamazepina",
        "T42.6 - Intoxicacao por outras drogas antiepilepticas",
        "T42.7 - Intoxicacao por sedativos e hipnoticos nao especificados",
        "T43.3 - Intoxicacao por antipsicoticos fenotiazinicos",
        "T43.4 - Intoxicacao por neurolepticos butirofenona/tioxanteno",
        "T43.5 - Intoxicacao por outros antipsicoticos",
        "T43.6 - Intoxicacao por psicoestimulantes",
        "T40.7 - Intoxicacao por cannabis e derivados",
        "T51.0 - Efeito toxico do etanol",
        "X45.9 - Intoxicacao acidental por alcool",
        "X65.9 - Auto-intoxicacao voluntaria por alcool",
        "T60.0 - Efeito toxico de organofosforados e carbamatos",
        "T60.1 - Efeito toxico de inseticidas halogenados",
        "T60.2 - Efeito toxico de outros inseticidas",
        "T60.3 - Efeito toxico de herbicidas e fungicidas",
        "T60.4 - Efeito toxico de rodenticidas",
        "T60.8 - Efeito toxico de outros pesticidas",
        "T60.9 - Efeito toxico de pesticida nao especificado",
        "X48.9 - Intoxicacao acidental por pesticidas",
        "X68.9 - Auto-intoxicacao intencional por pesticidas",
        "Y18.9 - Intoxicacao por pesticidas com intencao nao determinada",
        "Y40-Y59 - Efeito adverso de farmacos em uso terapeutico",
      ];
    }

    setViol("possui_deficiencia_transtorno", { widget: "tri_radio", default: "9 - Ignorado", options: YES_NO_IGNORED });
    for (const fieldName of DEFICIENCY_FIELDS) {
      setViol(fieldName, { widget: "tri_radio", default: "9 - Ignorado", options: YES_NO_IGNORED });
    }
  setViol("deficiencia_outro_texto", { maxLength: 11, counterMax: 11 });
  setViol("cartao_sus", { maxLength: 15 });
  setViol("motivacao_violencia", { default: "99 - Ignorado" });
  for (const fieldName of VIOLENCE_MEANS_FIELDS) {
    setViol(fieldName, { default: "2 - Nao" });
  }
    setViol("violencia_sexual_assedio", { widget: "tri_radio", default: "9 - Ignorado", options: YES_NO_IGNORED });
    setViol("violencia_sexual_estupro", { widget: "tri_radio", default: "9 - Ignorado", options: YES_NO_IGNORED });
    setViol("violencia_sexual_infantil", { widget: "tri_radio", default: "9 - Ignorado", options: YES_NO_IGNORED });
    setViol("violencia_sexual_exploracao", { widget: "tri_radio", default: "9 - Ignorado", options: YES_NO_IGNORED });
    setViol("violencia_sexual_outro_check", { widget: "tri_radio", default: "9 - Ignorado", options: YES_NO_IGNORED });
    setViol("cid10_capitulo_xx", {
      widget: "combo",
      default: "",
      options: [""],
      optionGroups: VIOLENCIA_CID_GROUPS,
    });

  const typeViolenceFields = [
    ["tipo_violencia_fisica", "Tipo violencia: fisica", "check-box-tipo-de-viol-fisica"],
    ["tipo_violencia_psicologica", "Tipo violencia: psicologica", "check-box-tipo-de-viol-psicologica"],
    ["tipo_violencia_tortura", "Tipo violencia: tortura", "check-box-tipo-de-viol-tortura"],
    ["tipo_violencia_trafico_humano", "Tipo violencia: trafico humano", "check-box-tipo-de-viol-trafico-humano"],
    ["tipo_violencia_financeira", "Tipo violencia: financeira/economica", "check-box-tipo-de-viol-financeira"],
    ["tipo_violencia_negligencia", "Tipo violencia: negligencia/abandono", "check-box-tipo-de-viol-negligencia"],
    ["tipo_violencia_trabalho_infantil", "Tipo violencia: trabalho infantil", "check-box-tipo-de-viol-trabalhoINFANTIL"],
    ["tipo_violencia_intervencao_legal", "Tipo violencia: intervencao legal", "check-box-tipo-de-viol-intervencaoLEGAL"],
    ["tipo_violencia_outros_check", "Tipo violencia: outros", "check-box-tipo-de-viol-outros"],
  ];
  for (const [name, label, pointKey] of typeViolenceFields) {
    insertBefore(violencia, "tipo_violencia_outros", {
      name,
      label,
      widget: "combo",
      default: "2 - Nao",
      options: ["", ...TYPE_VIOLENCE_OPTIONS],
      spanKey: null,
      groupKey: null,
      pointKey,
      section: "Violencia",
    });
  }
  setViol("tipo_violencia_outros", { placeholder: "Descreva o outro tipo de violencia" });

  insertBefore(violencia, "tipo_violencia_outros", {
    name: "tipo_violencia_sexual",
    label: "Violencia sexual",
    widget: "combo",
    default: "2 - Nao",
    options: ["", ...TYPE_VIOLENCE_OPTIONS],
    spanKey: null,
    groupKey: null,
    pointKey: "check-box-tipo-de-viol-sex",
      section: "Violencia",
    });

    const procedureFields = [
      ["procedimento_profilaxia_dst", "Profilaxia DST", "se-sexual-procedimento-profilaxia-DST"],
      ["procedimento_profilaxia_hiv", "Profilaxia HIV", "se-sexual-procedimento-profilaxia-HIV"],
      ["procedimento_profilaxia_hbv", "Profilaxia HBV", "se-sexual-procedimento-profilaxia-HBV"],
      ["procedimento_coleta_sangue", "Coleta sangue", "se-sexual-procedimento-profilaxia-COLETASANG"],
      ["procedimento_coleta_semen", "Coleta semen", "se-sexual-procedimento-COLETASEMEN"],
      ["procedimento_coleta_vaginal", "Coleta secrecao vaginal", "se-sexual-procedimento-COLETAVAG"],
      ["procedimento_contracepcao", "Contracepcao emergencia", "se-sexual-procedimento-profilaxia-CONTRACEPCAO"],
      ["procedimento_aborto", "Aborto previsto em lei", "se-sexual-procedimento-ABORTO"],
    ];
    for (const [name, label, pointKey] of procedureFields) {
      insertAfter(violencia, "violencia_sexual_outros", {
        name,
        label,
        widget: "tri_radio",
        default: "9 - Ignorado",
        options: YES_NO_IGNORED,
        spanKey: null,
        groupKey: null,
        pointKey,
        section: SEXUAL_SECTION,
      });
    }

    insertAfter(violencia, "autor_ciclo_vida", {
      name: "numero_envolvidos",
      label: "Numero de envolvidos",
      widget: "combo",
      default: "9 - Ignorado",
      options: ["", "1 - Um", "2 - Multiplos", "9 - Ignorado"],
      spanKey: null,
      groupKey: null,
      pointKey: "check-box-numero-de-pessoas",
      section: "Autor",
    });
  for (const [name, label, pointKey] of AUTOR_VINCULO_FIELDS) {
    insertBefore(violencia, "vinculo_autor_outros", {
      name,
        label: `Vinculo: ${label}`,
        widget: "tri_radio",
        default: "2 - Nao",
        options: YES_NO_IGNORED,
        spanKey: null,
        groupKey: null,
        pointKey,
      section: "Autor",
    });
  }

  const referralFields = [
    "encaminhamento_saude",
    "encaminhamento_assistencia_social",
    "encaminhamento_educacao",
    "encaminhamento_mulher",
    "encaminhamento_conselho_tutelar",
    "encaminhamento_idoso",
    "encaminhamento_delegacia_idoso",
    "encaminhamento_direitos_humanos",
    "encaminhamento_ministerio_publico",
    "encaminhamento_delegacia_infancia",
    "encaminhamento_delegacia_mulher",
    "encaminhamento_outras_delegacias",
    "encaminhamento_justica_infancia",
    "encaminhamento_defensoria",
  ];
  for (const fieldName of referralFields) {
    setViol(fieldName, { default: "9 - Ignorado" });
  }
}

  function insertAfter(fields, afterName, field) {
    if (fields.some((candidate) => candidate.name === field.name)) return;
    const index = fields.findIndex((candidate) => candidate.name === afterName);
    fields.splice(index >= 0 ? index + 1 : fields.length, 0, field);
  }

  function insertBefore(fields, beforeName, field) {
    if (fields.some((candidate) => candidate.name === field.name)) return;
    const index = fields.findIndex((candidate) => candidate.name === beforeName);
    fields.splice(index >= 0 ? index : fields.length, 0, field);
  }

  const intoxicacaoConditional = {
    situacao_mercado_trabalho_outro: (data) => starts(data.situacao_mercado_trabalho, "12"),
    local_ocorrencia_exposicao_outro: (data) => starts(data.local_ocorrencia_exposicao, "7"),
    grupo_agente_toxico_outro: (data) => starts(data.grupo_agente_toxico, "14"),
    finalidade_agrotoxico_outro: (data) => starts(data.finalidade_agrotoxico, "7"),
    circunstancia_exposicao_outra: (data) => starts(data.circunstancia_exposicao, "13"),
    data_obito: (data) => startsAny(data.evolucao_caso, ["3", "4"]),
  };

  const agrotoxicoFields = new Set([
    "finalidade_agrotoxico",
    "finalidade_agrotoxico_outro",
    "atividades_exposicao_agrotoxico_opcao_1",
    "atividades_exposicao_agrotoxico_opcao_2",
    "atividades_exposicao_agrotoxico_opcao_3",
    "cultura_lavoura",
  ]);

  const violenciaConditional = {
    tipo_violencia_outros: (data) => starts(data.tipo_violencia_outros_check, "1"),
    local_ocorrencia_outro: (data) => starts(data.local_ocorrencia_violencia, "09"),
    deficiencia_fisica: (data) => starts(data.possui_deficiencia_transtorno, "1"),
    deficiencia_intelectual: (data) => starts(data.possui_deficiencia_transtorno, "1"),
    deficiencia_visual: (data) => starts(data.possui_deficiencia_transtorno, "1"),
    deficiencia_auditiva: (data) => starts(data.possui_deficiencia_transtorno, "1"),
    transtorno_mental: (data) => starts(data.possui_deficiencia_transtorno, "1"),
    transtorno_comportamental: (data) => starts(data.possui_deficiencia_transtorno, "1"),
    deficiencia_outro: (data) => starts(data.possui_deficiencia_transtorno, "1"),
    deficiencia_outro_texto: (data) => starts(data.deficiencia_outro, "1"),
    meio_agressao_outro: (data) => starts(data.violencia_meio_outro, "1"),
    violencia_sexual_outros: (data) => starts(data.violencia_sexual_outro_check, "1"),
    vinculo_autor_outros: (data) => starts(data.vinculo_autor_outros_check, "1"),
    violencia_trabalho_cat: (data) => starts(data.violencia_relacionada_trabalho, "1"),
  };

  function starts(value, prefix) {
    return String(value || "").startsWith(prefix);
  }

  function startsAny(value, prefixes) {
    return prefixes.some((prefix) => starts(value, prefix));
  }

  function sectionId(section) {
    return `section-${section.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  }

  function panelForSection(section) {
    return Array.from(elements.panels.querySelectorAll(".panel")).find((panel) => panel.dataset.section === section);
  }

function setStatus(text, tone = "") {
  elements.status.textContent = text;
  elements.status.classList.remove("busy", "success", "error");
  if (tone === true) tone = "error";
  if (tone) elements.status.classList.add(tone);
}

  function dynamicDefault(field) {
    if (["data_notificacao", "data_investigacao"].includes(field.name) || (state.formType === "cat" && field.name === "data_acidente")) return V.todayBr();
    return field.default || "";
  }

  function visibleFields(schema, formType) {
    const hidden = HIDDEN_UI_FIELDS[formType] || new Set();
    return schema.fields.filter((field) => !hidden.has(field.name));
  }

  function buildForm(formType) {
    const schema = schemas[formType];
    state.formType = formType;
    state.fields = visibleFields(schema, formType);
    state.hidden = new Set();
    state.activeSection = "";
    elements.title.textContent = schema.title;
    elements.tabs.replaceChildren();
    elements.panels.replaceChildren();

    const sections = [];
    for (const field of state.fields) {
      if (!sections.includes(field.section)) sections.push(field.section);
    }
    state.activeSection = sections[0] || "";

    for (const section of sections) {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "tab";
      tab.textContent = section;
      tab.dataset.section = section;
      tab.setAttribute("role", "tab");
      tab.addEventListener("click", () => selectSection(section));
      elements.tabs.appendChild(tab);

      const panel = document.createElement("section");
      panel.className = "panel";
      panel.id = sectionId(section);
      panel.dataset.section = section;
      elements.panels.appendChild(panel);
    }

    for (const field of state.fields) {
      const panel = panelForSection(field.section);
      if (!panel) continue;
      if (field.name === "tempo_exposicao_unidade") continue;
      if (field.name === "tempo_exposicao_numero") {
        const unitField = state.fields.find((candidate) => candidate.name === "tempo_exposicao_unidade");
        panel.appendChild(renderTempoExposureFields(field, unitField));
        continue;
      }
      panel.appendChild(renderField(field));
    }

    selectSection(state.activeSection);
    refreshVisibility();
    setStatus("");
  }

  function renderField(field) {
    const row = document.createElement("div");
    row.className = "field-row";
    row.dataset.field = field.name;

    const label = document.createElement("label");
    label.htmlFor = `field-${field.name}`;
    label.id = `label-${field.name}`;
    label.textContent = field.label;
    row.appendChild(label);

    let control;
    if (field.widget === "multiline_text") {
      control = document.createElement("textarea");
      control.rows = 4;
      control.value = dynamicDefault(field);
    } else if (field.widget === "tri_radio") {
      control = renderRadioGroup(row, field);
    } else if (field.widget === "combo" || field.widget === "radio") {
      control = document.createElement("select");
      appendSelectOptions(control, field);
      control.value = dynamicDefault(field);
    } else {
      control = document.createElement("input");
    control.type = field.widget === "date" ? "text" : "text";
    control.value = dynamicDefault(field);
    control.inputMode = field.widget === "digits" || field.widget === "date" ? "numeric" : "text";
    if (field.widget === "date") {
      control.placeholder = "dd/mm/aaaa";
      control.maxLength = 10;
    }
  }
    if (field.widget === "tri_radio") {
      appendFieldMeta(row, control, field);
      return row;
    }
    configureControl(control, field);
    control.id = `field-${field.name}`;
    control.name = field.name;
    control.dataset.field = field.name;
    if (field.widget === "date") {
      control.addEventListener("beforeinput", (event) => {
        const pos = control.selectionStart;
        if (event.inputType === "deleteContentBackward" && pos === control.selectionEnd && pos > 0 && control.value[pos - 1] === "/") {
          event.preventDefault();
          control.setRangeText("", pos - 2, pos, "end");
          control.dispatchEvent(new Event("input", { bubbles: true }));
        }
      });
    }
    control.addEventListener("input", () => {
      enforceInputRules(control, field);
      updateFieldMeta(row, control, field);
      refreshVisibility();
    });
    control.addEventListener("change", refreshVisibility);
    row.appendChild(control);
    appendFieldMeta(row, control, field);
    return row;
  }

  function appendSelectOptions(control, field) {
    for (const optionValue of field.options || []) {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue || field.placeholder || "";
      control.appendChild(option);
    }
    for (const group of field.optionGroups || []) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = group.label;
      for (const optionValue of group.options || []) {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        optgroup.appendChild(option);
      }
      control.appendChild(optgroup);
    }
  }

  function renderRadioGroup(row, field) {
    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.id = `field-${field.name}`;
    hidden.name = field.name;
    hidden.dataset.field = field.name;
    hidden.value = dynamicDefault(field);

    const group = document.createElement("div");
    group.className = "radio-group";
    group.setAttribute("role", "radiogroup");
    group.setAttribute("aria-labelledby", `label-${field.name}`);

    for (const optionValue of field.options || YES_NO_IGNORED) {
      const optionId = `field-${field.name}-${V.comboCode(optionValue)}`;
      const item = document.createElement("label");
      item.className = "radio-option";
      item.htmlFor = optionId;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.id = optionId;
      radio.name = `${field.name}-radio`;
      radio.value = optionValue;
      radio.checked = optionValue === hidden.value;
      radio.addEventListener("change", () => {
        if (!radio.checked) return;
        hidden.value = radio.value;
        refreshVisibility();
      });

      const text = document.createElement("span");
      text.textContent = optionValue.replace(/^(\d+)\s+-\s+/, "$1 ");
      item.append(radio, text);
      group.appendChild(item);
    }

    row.append(hidden, group);
    return hidden;
  }

  function renderTempoExposureFields(numberField, unitField) {
    const row = document.createElement("div");
    row.className = "field-row field-row-pair";
    row.dataset.field = numberField.name;

    const numberLabel = document.createElement("label");
    numberLabel.htmlFor = `field-${numberField.name}`;
    numberLabel.textContent = numberField.label;
    row.appendChild(numberLabel);

    const numberControl = document.createElement("input");
    numberControl.type = "text";
    numberControl.value = dynamicDefault(numberField);
    numberControl.inputMode = "numeric";
    configureControl(numberControl, numberField);
    numberControl.id = `field-${numberField.name}`;
    numberControl.name = numberField.name;
    numberControl.dataset.field = numberField.name;
    numberControl.addEventListener("input", () => {
      enforceInputRules(numberControl, numberField);
      refreshVisibility();
    });
    row.appendChild(numberControl);

    if (unitField) {
      const unitLabel = document.createElement("label");
      unitLabel.htmlFor = `field-${unitField.name}`;
      unitLabel.textContent = unitField.label;
      row.appendChild(unitLabel);

      const unitControl = document.createElement("select");
      for (const optionValue of unitField.options || []) {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue || "";
        unitControl.appendChild(option);
      }
      unitControl.value = dynamicDefault(unitField);
      configureControl(unitControl, unitField);
      unitControl.id = `field-${unitField.name}`;
      unitControl.name = unitField.name;
      unitControl.dataset.field = unitField.name;
      unitControl.addEventListener("change", refreshVisibility);
      row.appendChild(unitControl);
    }

    return row;
  }

  function configureControl(control, field) {
    if (field.placeholder) control.placeholder = field.placeholder;
    if (field.maxLength) control.maxLength = field.maxLength;
  }

  function appendFieldMeta(row, control, field) {
    const max = field.counterMax || (field.name === "observacoes" ? 240 : null);
    if (!max) return;
    control.maxLength = max;
    const counter = document.createElement("div");
    counter.className = "field-counter";
    row.appendChild(counter);
    updateFieldMeta(row, control, field);
  }

  function updateFieldMeta(row, control, field) {
    const max = field.counterMax || (field.name === "observacoes" ? 240 : null);
    if (!max) return;
    const counter = row.querySelector(".field-counter");
    if (counter) counter.textContent = `${control.value.length}/${max}`;
  }

function enforceInputRules(control, field) {
  if (field.widget === "date") {
    const cursor = control.selectionStart ?? control.value.length;
    const digitsBeforeCursor = V.onlyDigits(control.value.slice(0, cursor)).length;
    const digits = V.onlyDigits(control.value).slice(0, 8);
    let formatted = digits.slice(0, 2);
    if (digits.length >= 2) formatted += "/";
    formatted += digits.slice(2, 4);
    if (digits.length >= 4) formatted += "/";
    formatted += digits.slice(4);
    control.value = formatted;
    const digitPos = Math.min(digitsBeforeCursor, digits.length);
    const newCursor = digitPos + (digitPos >= 2 ? 1 : 0) + (digitPos >= 4 ? 1 : 0);
    control.setSelectionRange(newCursor, newCursor);
    return;
  }
  if (field.widget === "digits" || field.name === "tempo_exposicao_numero") {
    const maxLength = Number(field.maxLength || 0);
    const digits = V.onlyDigits(control.value);
      control.value = maxLength ? digits.slice(0, maxLength) : digits;
    }
    if (field.name === "observacoes" && control.value.length > 240) {
      control.value = control.value.slice(0, 240);
    }
    if (field.maxLength && field.widget !== "digits" && control.value.length > field.maxLength) {
      control.value = control.value.slice(0, field.maxLength);
    }
  }

  function selectSection(section) {
    state.activeSection = section;
    for (const tab of elements.tabs.querySelectorAll(".tab")) {
      const selected = tab.dataset.section === section;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
    }
    for (const panel of elements.panels.querySelectorAll(".panel")) {
      panel.classList.toggle("active", panel.dataset.section === section);
    }
  }

  function selectDefaultSection() {
    const tabs = Array.from(elements.tabs.querySelectorAll(".tab")).filter((tab) => !tab.classList.contains("hidden"));
    const defaultTab = tabs.find((tab) => tab.dataset.section === "Dados gerais") || tabs[0];
    if (defaultTab) selectSection(defaultTab.dataset.section);
  }

  function updateSectionVisibility(data) {
    const sexualVisible = state.formType !== "violencia" || starts(data.tipo_violencia_sexual, "1");
    for (const tab of elements.tabs.querySelectorAll(".tab")) {
      if (tab.dataset.section === SEXUAL_SECTION) tab.classList.toggle("hidden", !sexualVisible);
    }
    for (const panel of elements.panels.querySelectorAll(".panel")) {
      if (panel.dataset.section === SEXUAL_SECTION) panel.classList.toggle("hidden", !sexualVisible);
    }
    if (!sexualVisible && state.activeSection === SEXUAL_SECTION) {
      const firstVisible = Array.from(elements.tabs.querySelectorAll(".tab")).find((tab) => !tab.classList.contains("hidden"));
      if (firstVisible) selectSection(firstVisible.dataset.section);
    }
    return { sexualVisible };
  }

  function collectData(includeHidden = false) {
    const data = {};
    for (const control of elements.panels.querySelectorAll("[data-field]")) {
      const name = control.dataset.field;
      data[name] = !includeHidden && state.hidden.has(name) ? "" : control.value;
    }
    return data;
  }

  function applyData(data = {}) {
    for (const field of state.fields) {
      const control = elements.panels.querySelector(`[name="${field.name}"]`);
      if (!control) continue;
      control.value = data[field.name] ?? dynamicDefault(field);
      enforceInputRules(control, field);
      if (field.widget === "tri_radio") syncRadioGroup(field.name, control.value);
      const row = control.closest(".field-row");
      if (row) updateFieldMeta(row, control, field);
    }
    refreshVisibility();
  }

  function syncRadioGroup(fieldName, value) {
    for (const radio of elements.panels.querySelectorAll(`input[name="${fieldName}-radio"]`)) {
      radio.checked = radio.value === value;
    }
  }

  function refreshVisibility() {
    const data = collectData(true);
    const catMedicalFields = ["data_atendimento", "uf_atendimento", "municipio_atendimento", "codigo_ibge_atendimento", "unidade_atendimento", "codigo_unidade_atendimento"];
    if (state.formType === "cat" && !starts(data.atendimento_medico, "1")) {
      for (const name of catMedicalFields) {
        const control = elements.panels.querySelector(`[name="${name}"]`);
        if (control) control.value = "";
      }
    }
    const catConditional = {
      cnae_empresa_principal: (d) => !startsAny(d.terceirizada, ["2", "3"]),
      cnpj_empresa_principal: (d) => !startsAny(d.terceirizada, ["2", "3"]),
      razao_social_principal: (d) => !startsAny(d.terceirizada, ["2", "3"]),
      quantidade_trabalhadores: (d) => !starts(d.outros_trabalhadores, "2"),
      data_obito: (d) => !startsAny(d.evolucao, ["1", "2", "3", "4", "7"]),
    };
    for (const name of catMedicalFields) catConditional[name] = (d) => starts(d.atendimento_medico, "1");
    const conditional = ({ intoxicacao: intoxicacaoConditional, violencia: violenciaConditional, cat: catConditional })[state.formType] || {};
    const isAgrotoxico = state.formType === "intoxicacao" && String(data.grupo_agente_toxico || "").includes("Agrotoxico");
    const sections = updateSectionVisibility(data);
    state.hidden = new Set();

    for (const row of elements.panels.querySelectorAll(".field-row")) {
      const name = row.dataset.field;
      let visible = true;
      if (conditional[name]) visible = conditional[name](data);
      if (state.formType === "violencia" && SEXUAL_FIELDS.has(name)) visible = visible && sections.sexualVisible;
      if (state.formType === "intoxicacao" && agrotoxicoFields.has(name)) {
        visible = isAgrotoxico;
        if (name === "finalidade_agrotoxico_outro") visible = visible && conditional[name](data);
      }
      row.classList.toggle("hidden", !visible);
      if (!visible) state.hidden.add(name);
    }
  }

function validateCat(data) {
  const fields = schemas.cat.fields;
  for (const field of fields.filter((f) => f.widget === "date" && data[f.name])) {
    const digits = V.onlyDigits(data[field.name]);
    if (digits.length !== 8) return `Preencha ${field.label} com dia, mês e ano completos`;
    const day = Number(digits.slice(0, 2)), month = Number(digits.slice(2, 4)), year = Number(digits.slice(4));
    const date = new Date(year, month - 1, day);
    if (year < 1 || date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return `Data inválida em ${field.label}`;
  }
  for (const [name, limit, label] of [["hora_acidente", 23, "hora do acidente"], ["minuto_acidente", 59, "minuto do acidente"], ["minutos_jornada", 59, "minutos após o início da jornada"]]) {
    if (data[name] && Number(data[name]) > limit) return `Valor inválido em ${label}`;
  }
  for (const [name, label] of [["cid_causa", "CID da causa"], ["cid_lesao", "CID da lesão"]]) {
    const value = String(data[name] || "").trim().toUpperCase();
    if (!value) continue;
    if (!/^[A-Z]\d{2}(?:\.?\d)?$/.test(value)) return `${label}: informe um código CID-10 válido, por exemplo S06.0`;
    if (name === "cid_causa") {
      const code = value[0], number = Number(value.slice(1, 3));
      if (!"VWXY".includes(code) || (code === "V" && number < 1) || (code === "Y" && number > 98)) return "CID da causa deve estar entre V01 e Y98";
    }
  }
  return "";
}

async function handleGeneratePdf() {
  if (state.formType === "cat") {
    const problem = validateCat(collectData(false));
    if (problem) { setStatus(problem, "error"); return; }
  }
  setStatus("Gerando PDF... aguarde.", "busy");
  elements.generatePdf.disabled = true;
  const nativeSave = window.SINAN_PDF.canSaveNative();
  const pdfWindow = nativeSave ? null : window.open("", "_blank");
  try {
    const schema = schemas[state.formType];
    const data = collectData(false);
    const result = await window.SINAN_PDF.generatePdf(state.formType, data, schema);
    const fileName = outputName(data);
    const saved = await window.SINAN_PDF.saveAndOpenPdf(result.bytes, fileName, pdfWindow);
    const warningText = result.warnings.length ? (state.formType === "cat" ? ` Avisos: ${result.warnings.join("; ")}.` : ` ${result.warnings.length} aviso(s).`) : "";
    if (saved.native) {
      setStatus(`PDF salvo: ${saved.path}.${warningText}`, "success");
    } else {
      const actionText = saved.opened ? "PDF aberto em uma nova aba" : "PDF gerado para download";
      setStatus(`${actionText}: ${fileName}.${warningText}`, "success");
    }
  } catch (error) {
    if (pdfWindow && !pdfWindow.closed) pdfWindow.close();
    const message = error?.message || String(error) || "Nao foi possivel gerar o PDF";
    setStatus(`${message}. Reabra o aplicativo e tente novamente.`, "error");
  } finally {
    elements.generatePdf.disabled = false;
  }
}

function dateStamp() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${day}${month}${now.getFullYear()}`;
}

function fileNamePart(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, 8);
}

function outputName(data = collectData(false)) {
  const name = fileNamePart(data.nome_paciente);
  const date = dateStamp();
  return name ? `sinan_${name}_${date}_1.pdf` : `sinan_${date}_1.pdf`;
}

  elements.formType.addEventListener("change", () => buildForm(elements.formType.value));
  elements.generatePdf.addEventListener("click", handleGeneratePdf);
  elements.newForm.addEventListener("click", () => {
    applyData({});
    selectDefaultSection();
    setStatus("Novo SINAN iniciado.");
  });

  buildForm(state.formType);
});
