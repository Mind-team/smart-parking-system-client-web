import { Language } from "../../context/languages";

export const useLanguage = (): Language => {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang") === Language.RUS.toString()
      ? Language.RUS
      : Language.ENG;
  }
  if (/^ru\b/.test(navigator.language)) {
    return Language.RUS;
  }
  return Language.ENG;
};
