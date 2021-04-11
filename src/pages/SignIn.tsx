import React from "react";
import s from "../styles/SignIn.module.sass";
import logo from "../img/mindLogo.svg";
import ill from "../img/leftSideSVG.svg";
import darkModeIcon from "../img/darkMode.svg";

export const SignIn: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.leftSideBackground}>
        <img className={s.mindLogo} src={logo} alt="" />
        <img className={s.ill} src={ill} alt="" />
        <img className={s.mode} src={darkModeIcon} alt=""/>
      </div>
      <div className={s.rightSideBackground}>
        <div className={s.form}>
          <p className={s.formTitle}>Умная парковочная система</p>
          <p className={s.formSubtitle}>Еще не зарегистрированы?</p>
          <div className={s.inputs}>
            <input type="text" className={s.input} placeholder="+7" />
            <input type="password" className={s.input} placeholder="Пароль" />
          </div>
          <button className={s.formButton}>
            <span className={s.buttonTitle}>
              Войти
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

