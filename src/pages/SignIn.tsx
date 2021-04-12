import React from "react";
import s from "../styles/SignIn.module.sass";
import logo from "../img/mindLogo.svg";
import ill from "../img/leftSideSVG.svg";
import darkModeIcon from "../img/darkMode.svg";

export const SignIn: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.leftSide}>
        <img className={s.mindLogo} src={logo} alt="" />
        <img className={s.illustration} src={ill} alt="" />
        <img className={s.modeIcon} src={darkModeIcon} alt=""/>
      </div>
      <div className={s.rightSide}>
        <div className={s.form}>
          <p className={s.formTitle}>Умная парковочная система</p>
          <p className={s.formSubtitle}>Еще не зарегистрированы?</p>
          <div className={s.formInputs}>
            <input type="text" className={s.formInput} placeholder="+7" />
            <input type="password" className={s.formInput} placeholder="Пароль" />
          </div>
          <button className={s.formButton}>
            <span className={s.formButtonTitle}>
              Войти
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

