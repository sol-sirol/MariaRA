import { Page, Block, f7 } from "framework7-react";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const PagePassword = () => {
  const [password, setPassword] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    const fildList = document.querySelectorAll(".fild_first_password");
    const tm = password.split("");

    for (let i = 0; i < 4; i++) {
      if (tm[i]) {
        fildList[i].innerHTML = tm[i];
      } else {
        fildList[i].innerHTML = "";
      }
    }
  }, [password]);

  useEffect(() => {
    if (password.length === 4) {
      setStep(2);
    }
  }, [password]);

  useEffect(() => {
    if (step === 2) {
      const fildList = document.querySelectorAll(".fild_password_again");
      const tm = password_2.split("");

      for (let i = 0; i < 4; i++) {
        if (tm[i]) {
          fildList[i].innerHTML = tm[i];
        } else {
          fildList[i].innerHTML = "";
        }
      }

      if (password_2.length === 4) {
        if (password === password_2) {
          setTimeout(() => {
            f7.view.current.router.navigate("/PageAuthentication");
          }, 500);
        }
      }
    }
  }, [password_2]);

  return (
    <Page noSwipeback>
      <Block className={style.contentTop}>
        <div className={style.textContainer}>
          {step === 1 && <p>Задайте пин-код для входа в приложение</p>}
          {step === 2 && <p>Ведите пин-код еще раз</p>}
        </div>
      </Block>
      <Block>
        {step === 1 && (
          <div className={style.inputWrapper}>
            <input
              className={style.input}
              onChange={(e) => {
                if (e.target.value.length <= 4) {
                  setPassword(e.target.value);
                }
              }}
              value={password}
              type="number"
            />
            <div className={style.fieldWrapper}>
              <div className="fild_first_password"></div>
              <div className="fild_first_password"></div>
              <div className="fild_first_password"></div>
              <div className="fild_first_password"></div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={style.inputWrapper}>
            <input
              className={style.input}
              onChange={(e) => {
                if (e.target.value.length <= 4) {
                  setPassword_2(e.target.value);
                }
              }}
              value={password_2}
              type="number"
            />
            <div className={style.fieldWrapper}>
              <div className="fild_password_again"></div>
              <div className="fild_password_again"></div>
              <div className="fild_password_again"></div>
              <div className="fild_password_again"></div>
              {password === password_2 && (
                <div className="passwordIcon">
                  <svg
                    width="34"
                    height="26"
                    viewBox="0 0 34 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4136 20.6927L3.39425 13.6553C3.2107 13.469 2.99209 13.3212 2.75111 13.2202C2.51012 13.1193 2.25155 13.0673 1.99038 13.0673C1.72921 13.0673 1.47063 13.1193 1.22964 13.2202C0.988657 13.3212 0.770051 13.469 0.586499 13.6553C0.400706 13.8393 0.253196 14.0585 0.152518 14.3001C0.0518413 14.5417 0 14.801 0 15.0628C0 15.3246 0.0518413 15.5839 0.152518 15.8255C0.253196 16.0671 0.400706 16.2863 0.586499 16.4703L8.98971 24.8951C9.77187 25.6792 11.0354 25.6792 11.8175 24.8951L33.0762 3.60188C33.262 3.41785 33.4095 3.19869 33.5102 2.95708C33.6109 2.71548 33.6627 2.45624 33.6627 2.1944C33.6627 1.93256 33.6109 1.67332 33.5102 1.43171C33.4095 1.19011 33.262 0.970942 33.0762 0.786918C32.8927 0.600648 32.6741 0.452759 32.4331 0.351823C32.1921 0.250887 31.9335 0.198914 31.6724 0.198914C31.4112 0.198914 31.1526 0.250887 30.9116 0.351823C30.6706 0.452759 30.452 0.600648 30.2685 0.786918L10.4136 20.6927Z"
                      fill="#17A74C"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        )}
      </Block>
    </Page>
  );
};

export default PagePassword;
