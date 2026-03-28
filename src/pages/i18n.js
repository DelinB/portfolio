import en from "../../messages/en";
import ar from "../../messages/ar";

const translations = { en, ar };

export const getTranslation = (lang = "en") => {
  return translations[lang] || translations.en;
};