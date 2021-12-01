import { Lang } from "../enums/lang.enum";
import React from "react";

export type Dictionary = {
  [title in Lang]: {
    home: (...args: any[]) => string;
    history: (...args: any[]) => string;
    parkings: (...args: any[]) => string;
    profile: (...args: any[]) => string;  
    smartParkingSystem: (...args: any[]) => string;      
    notRegisteredYet: (...args: any[]) => string;     
    password: (...args: any[]) => string;
    signIn: (...args: any[]) => string;
    phoneNumber: (...args: any[]) => string;
    registrationPlate: (...args: any[]) => string;
    signUp: (...args: any[]) => string;
    parkingRules: (...args: any[]) => string;
    firstRule: (...args: any[]) => string;
    secondRule: (...args: any[]) => string;
    thirdRule: (...args: any[]) => string;
    lastOperation: (...args: any[]) => string;
    moreDetails: (...args: any[]) => string;
    currentParking: (...args: any[]) => string;
    munutes: (...args: any[]) => string;
    parking: (...args: any[]) => string;
    seeTheCheck: (...args: any[]) => string;
    dateOfEntry: (...args: any[]) => string;
    dateOfExit: (...args: any[]) => string;
    timeOfExit: (...args: any[]) => string;
    timeOfEntry: (...args: any[]) => string;
    licensePlate: (...args: any[]) => string;
    parkingTime: (...args: any[]) => string;
    total: (...args: any[]) => string;
    free: (...args: any[]) => string;
    email: (...args: any[]) => string;
  };
};

export const dictionary: Dictionary = {
  [Lang.ENG]: {
    home: (capitalFirstWord = false) => 
      (capitalFirstWord ? "Home" : "home"),
    history: (capitalFirstWord = false) => 
      (capitalFirstWord ? "History" : "history"),
    parkings: (capitalFirstWord = false) => 
      (capitalFirstWord ? "Parkings" : "parkings"),      
    profile: (capitalFirstWord = false) => 
      (capitalFirstWord ? "Profile" : "profile"),   
    smartParkingSystem: (capitalFirstWord = false) => 
      (capitalFirstWord ? "Smart parking system" : "smart parking system"),   
    notRegisteredYet: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Not registered yet?" : "not registered yet?"), 
    password: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Password" : "password"),       
    signIn: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Sign in" : "sign in"),  
    phoneNumber: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Phone number" : "phone number"),   
    registrationPlate: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Registration plate(s)" : "registration plate(s)"),
    signUp: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Sign up" : "sign up"),     
    parkingRules: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Parking rules" : "parking rules"),        
    firstRule: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Before entering, make sure that the rear license plate is readable" : "before entering, make sure that the rear license plate is readable"),    
    secondRule: (capitalFirstWord = false) => 
    (capitalFirstWord ? "When entering the parking lot, our camera reads your vehicle number, no action is required from you" : "when entering the parking lot, our camera reads your vehicle number, no action is required from you"),   
    thirdRule: (capitalFirstWord = false) => 
    (capitalFirstWord ? "When leaving, the camera reads the vehicle number, then automatically deducts the required amount from your card and opens the barrier" : "when leaving, the camera reads the vehicle number, then automatically deducts the required amount from your card and opens the barrier"),  
    lastOperation: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Last operation" : "last operation"), 
    moreDetails: (capitalFirstWord = false) => 
    (capitalFirstWord ? "More details" : "more details"), 
    currentParking: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Current parking" : "current parking"), 
    munutes: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Min." : "min."), 
    parking: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Parking" : "parking"), 
    seeTheCheck: (capitalFirstWord = false) => 
    (capitalFirstWord ? "See the check" : "see the check"), 
    dateOfEntry: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Date of entry" : "date of entry"), 
    dateOfExit: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Date of exit" : "date of exit"),
    timeOfExit: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Time of exit" : "time of exit"),  
    timeOfEntry: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Time of entry" : "time of entry"), 
    licensePlate: (capitalFirstWord = false) => 
    (capitalFirstWord ? "License plate" : "license plate"), 
    parkingTime: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Parking time" : "parking time"), 
    total: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Total" : "total"), 
    free: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Free" : "free"), 
    email: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Email" : "email")
  },
  [Lang.RUS]: {
    home: (capitalFirstWord = false) =>
      (capitalFirstWord ? "Главная" : "главная"),
    history: (capitalFirstWord = false) =>
      (capitalFirstWord ? "История" : "история"),   
    parkings: (capitalFirstWord = false) => 
      (capitalFirstWord ? "Стоянки" : "стоянки"),  
    profile: (capitalFirstWord = false) => 
      (capitalFirstWord ? "Профиль" : "профиль"),   
    smartParkingSystem: (capitalFirstWord = false) => 
      (capitalFirstWord ? "Умная парковочная система" : "умная парковочная система"),   
    notRegisteredYet: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Еще не зарегистрированы?" : "еще не зарегистрированы?"),  
    password: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Пароль" : "пароль"),      
    signIn: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Войти" : "войти"),   
    phoneNumber: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Номер телефона" : "номер телефона"),
    registrationPlate: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Регистрационный знак(и)" : "регистрационный знак(и)"),       
    signUp: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Зарегистрироваться" : "зарегистрироваться"),   
    parkingRules: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Правила паркинга" : "правила паркинга"),    
    firstRule: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Перед въездом проверьте, что задний регистрационный знак читаем" : "перед въездом проверьте, что задний регистрационный знак читаем"),      
    secondRule: (capitalFirstWord = false) => 
    (capitalFirstWord ? "При въезде на парковку наша камера считает номер вашего транспортного средства, от вас никаких действий не требуется" : "при въезде на парковку наша камера считает номер вашего транспортного средства, от вас никаких действий не требуется"),   
    thirdRule: (capitalFirstWord = false) => 
    (capitalFirstWord ? "При выезде камера считает номер транспортного  средства, затем автоматически спишет с вашей карты нужную сумму и откроет шлагбаум" : "при выезде камера считает номер транспортного  средства, затем автоматически спишет с вашей карты нужную сумму и откроет шлагбаум"),    
    lastOperation: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Последняя операция" : "последняя операция"),     
    moreDetails: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Подробнее" : "подробнее"),    
    currentParking: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Текущая парковка" : "текущая парковка"), 
    munutes: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Мин." : "мин."), 
    parking: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Паркинг" : "паркинг"), 
    seeTheCheck: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Посмотреть чек" : "посмотреть чек"), 
    dateOfEntry: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Дата въезда" : "дата въезда"), 
    dateOfExit: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Дата выезда" : "дата выезда"), 
    timeOfExit: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Время выезда" : "время выезда"),  
    timeOfEntry: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Время въезда" : "время въезда"), 
    licensePlate: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Регистрационный знак" : "регистрационный знак"), 
    parkingTime: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Время на парковке" : "время на парковке"), 
    total: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Сумма" : "сумма"), 
    free: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Бесплатно" : "бесплатно"), 
    email: (capitalFirstWord = false) => 
    (capitalFirstWord ? "Электронная почта" : "электронная почта") 
  },
};

export const LangContext = React.createContext(dictionary[Lang.ENG]);
