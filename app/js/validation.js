window.SINAN_VALIDATION = (() => {
  const cidPattern = /^\s*([A-Z]\d{2}(?:\.\d)?)/i;

  function onlyDigits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function normalizeDate(value) {
    return onlyDigits(value).slice(0, 8);
  }

  function comboCode(value) {
    if (!value) return "";
    const text = String(value);
    const match = text.match(/^\s*([A-Z]\d{2}(?:-[A-Z]\d{2})?(?:\.\d)?|[A-Z]|[0-9]+)\s*(?::|\s+-\s+)/i);
    return match ? match[1].trim() : text.trim();
  }

  function cleanForPdf(value, upper = true) {
    const text = String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return upper ? text.toUpperCase() : text;
  }

  function cidCode(value) {
    const text = cleanForPdf(value);
    const match = text.match(cidPattern);
    if (match) return match[1].replace(".", "");
    return text.split(":", 1)[0].replace(".", "").trim();
  }

  function cidDescription(value) {
    const text = String(value || "");
    if (text.includes(":")) return cleanForPdf(text.split(":").slice(1).join(":").trim());
    const match = text.match(/^\s*[A-Z]\d{2}(?:\.\d)?\s+-\s+(.+)$/i);
    return match ? cleanForPdf(match[1].trim()) : "";
  }

  function valueForField(field, rawValue) {
    if (field.widget === "date") return normalizeDate(rawValue);
    if (field.widget === "combo" || field.widget === "radio") return comboCode(rawValue);
    if (field.widget === "digits") return onlyDigits(rawValue);
    return cleanForPdf(rawValue);
  }

  function todayBr() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}/${now.getFullYear()}`;
  }

  return {
    onlyDigits,
    normalizeDate,
    comboCode,
    cleanForPdf,
    cidCode,
    cidDescription,
    valueForField,
    todayBr,
  };
})();
