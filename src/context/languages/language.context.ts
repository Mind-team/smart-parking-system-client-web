import React from "react";
import { Language } from "./language.enum";

export type DictionaryType = {
  [title in Language]: {
    pages: {
      login: {
        phoneNumber: string;
        sendConfirmationCodeBtn: string;
        sendConfirmationCodePlaceholder: string;
        login: string;
      };
    };
    navbar: {
      home: string;
      history: string;
      parkings: string;
      profile: string;
    };
  };
};

export const Dictionary: DictionaryType = {
  [Language.ENG]: {
    pages: {
      login: {
        phoneNumber: "Phone number",
        sendConfirmationCodeBtn: "Code",
        login: "Login",
        sendConfirmationCodePlaceholder: "Confirmation code",
      },
    },
    navbar: {
      home: "Home",
      history: "History",
      parkings: "Parkings",
      profile: "Profile",
    },
  },
  [Language.RUS]: {
    pages: {
      login: {
        phoneNumber: "Номер телефона",
        sendConfirmationCodeBtn: "Код",
        login: "Войти",
        sendConfirmationCodePlaceholder: "Код подтверждения",
      },
    },
    navbar: {
      home: "Главная",
      history: "История",
      parkings: "Парковки",
      profile: "Профиль",
    },
  },
};

export const LanguageContext = React.createContext(Dictionary[Language.RUS]);
