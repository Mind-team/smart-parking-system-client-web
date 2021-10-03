import { Lang } from "../enums/lang.enum";
import React from "react";

export type Dictionary = {
  [title in Lang]: {
    home: (...args: any[]) => string;
  };
};

export const dictionary: Dictionary = {
  [Lang.ENG]: {
    home: (capitalFirstWord = false) => (capitalFirstWord ? "Home" : "home"),
  },
  [Lang.RUS]: {
    home: (capitalFirstWord = false) =>
      capitalFirstWord ? "Главная" : "главная",
  },
};

export const LangContext = React.createContext(dictionary[Lang.ENG]);

// export const useDictionary = (lang: Lang) => {
//   return dictionary[lang];
// };
