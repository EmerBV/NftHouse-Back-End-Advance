import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    /* backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
		}, */
    fallbackLng: "en",
    /* debug: false,
    ns: ["en", "es"],
    interpolation: {
			espaceValue: false,
			formatSeparator: ",",
		}, */
		react: {
			wait: true,
		},
});

export default i18n;
