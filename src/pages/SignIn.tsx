import React, { useState } from "react";
import s from "../styles/SignIn.module.sass";
import logo from "../img/mindLogo.svg";
import illustration from "../img/leftSideSVG.svg";
import darkModeIcon from "../img/darkMode.svg";
import { useHttp } from "../hooks/http.hook";
import { UserRecord } from "../common/UserRecord.interface";
import { Redirect } from "react-router-dom";

export const SignIn: React.FC = () => {
  const req = useHttp();
  const [userData, setUserData] = useState<UserRecord | null>();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const handleInput = (event: any, type: string) =>
    type === "phoneNumber" ?
      setPhoneNumber(event.target.value) :
      setPassword(event.target.value);

  const handleSubmit = () => {
    req<UserRecord>({
      url: "http://localhost:5000/user/signIn",
      method: "POST",
      body: JSON.stringify(
        {
          phoneNumber: phoneNumber,
          password: password
        }
      ),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(result => {
        if (!result.isExpected) {
          // TODO: Error handler
          return;
        }
        setUserData(result.value);
      });
  };
  return (
    <>
      {userData && <Redirect push to="/home" />}
      <div className={s.wrapper}>
        <div className={s.leftSide}>
          <img className={s.mindLogo} src={logo} alt="" />
          <img className={s.illustration} src={illustration} alt="" />
          <img className={s.modeIcon} src={darkModeIcon} alt=""/>
        </div>
        <div className={s.rightSide}>
          <div className={s.form}>
            <p className={s.formTitle}>Умная парковочная система</p>
            <p className={s.formSubtitle}>Еще не зарегистрированы?</p>
            <div className={s.formInputs}>
              <input type="text" className={s.formInput} placeholder="+7" onChange={(event => handleInput(event, "phoneNumber"))} />
              <input type="password" className={s.formInput} placeholder="Пароль" onChange={(event => handleInput(event, "password"))} />
            </div>
            <button className={s.formButton} onClick={handleSubmit}>
              <span className={s.formButtonTitle}>
                Войти
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

