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
      home: {
        rules: {
          first: string;
          second: string;
          third: string;
        };
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
      home: {
        rules: {
          first:
            "Before entering, make sure that the rear license plate is readable",
          second:
            "When entering the parking lot, our camera reads your vehicle number, no action is required from you",
          third:
            "When leaving, the camera reads the vehicle number, then automatically deducts the required amount from your card and opens the barrier",
        },
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
      home: {
        rules: {
          first:
            "Перед въездом проверьте, что задний регистрационный знак читаем",
          second:
            "При въезде на парковку наша камера считает номер вашего транспортного средства, от вас никаких действий не требуется",
          third:
            "При выезде камера считает номер транспортного  средства, затем автоматически спишет с вашей карты нужную сумму и откроет шлагбаум",
        },
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
