import { Lang } from "../enums/lang.enum";

export const useLang = (): Lang => {
  if (/^ru\b/.test(navigator.language)) {
    return Lang.RUS;
  }
  return Lang.ENG;
};
