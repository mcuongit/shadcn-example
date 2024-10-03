import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "@/locales/en/common.json";
import enValidation from "@/locales/en/validation.json";
import enGlossary from "@/locales/en/glossary.json";
import viCommon from "@/locales/vi/common.json";
import viValidation from "@/locales/vi/validation.json";
import viGlossary from "@/locales/vi/glossary.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        validation: enValidation,
        glossary: enGlossary,
      },
      vi: {
        common: viCommon,
        validation: viValidation,
        glossary: viGlossary,
      },
    },
    fallbackLng: "en",
    ns: ["common", "validation", "glossary"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

/**
 * Sử dụng trong component với `useTranslation`
 * Sử dụng bên ngoài component cần import i18n từ file này.
 */
