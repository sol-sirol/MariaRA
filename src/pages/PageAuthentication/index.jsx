import { Page, Block, Button, f7 } from "framework7-react";
import { useState } from "react";
import style from "./index.module.css";

const PageAuthentication = () => {
  const [faceCheck, setFaceCheck] = useState(false);
  const [fingerCheck, setFingerCheck] = useState(false);
  const [pinCheck, setPinCheck] = useState(false);

  return (
    <Page>
      <Block className={style.textWrapper}>
        <p className={style.text}>
          Выберете какой способ авторизации вам предпочтителен в дальнейшем
        </p>
      </Block>
      <Block className={style.checkboxWrapper}>
        <label>
          <input
            id="face"
            type="checkbox"
            checked={faceCheck}
            onClick={() => {
              setFingerCheck(false);
              setPinCheck(false);
              setFaceCheck(!faceCheck);
            }}
          />
          <span>
            {faceCheck === false && <span className="CheckCircle"></span>}
            {faceCheck && (
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12C3.75 7.05228 7.80228 3 12.75 3C17.6977 3 21.75 7.05228 21.75 12C21.75 16.9477 17.6977 21 12.75 21C7.80228 21 3.75 16.9477 3.75 12Z"
                  stroke="#17A74C"
                  stroke-width="2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.75 8C10.55 8 8.75 9.8 8.75 12C8.75 14.2 10.55 16 12.75 16C14.95 16 16.75 14.2 16.75 12C16.75 9.8 14.95 8 12.75 8Z"
                  fill="#17A74C"
                />
              </svg>
            )}
          </span>
          Face-ID
        </label>
        <label>
          <input
            id="finger"
            type="checkbox"
            checked={fingerCheck}
            onClick={() => {
              setFaceCheck(false);
              setPinCheck(false);
              setFingerCheck(!fingerCheck);
            }}
          />
          <span>
            {fingerCheck === false && <span className="CheckCircle"></span>}
            {fingerCheck && (
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12C3.75 7.05228 7.80228 3 12.75 3C17.6977 3 21.75 7.05228 21.75 12C21.75 16.9477 17.6977 21 12.75 21C7.80228 21 3.75 16.9477 3.75 12Z"
                  stroke="#17A74C"
                  stroke-width="2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.75 8C10.55 8 8.75 9.8 8.75 12C8.75 14.2 10.55 16 12.75 16C14.95 16 16.75 14.2 16.75 12C16.75 9.8 14.95 8 12.75 8Z"
                  fill="#17A74C"
                />
              </svg>
            )}
          </span>
          Отпечаток пальца
        </label>
        <label>
          <input
            id="pin"
            type="checkbox"
            checked={pinCheck}
            onClick={() => {
              setFaceCheck(false);
              setFingerCheck(false);
              setPinCheck(!pinCheck);
            }}
          />
          <span>
            {pinCheck === false && <span className="CheckCircle"></span>}
            {pinCheck && (
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 12C3.75 7.05228 7.80228 3 12.75 3C17.6977 3 21.75 7.05228 21.75 12C21.75 16.9477 17.6977 21 12.75 21C7.80228 21 3.75 16.9477 3.75 12Z"
                  stroke="#17A74C"
                  stroke-width="2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.75 8C10.55 8 8.75 9.8 8.75 12C8.75 14.2 10.55 16 12.75 16C14.95 16 16.75 14.2 16.75 12C16.75 9.8 14.95 8 12.75 8Z"
                  fill="#17A74C"
                />
              </svg>
            )}
          </span>
          Пин-код
        </label>
      </Block>
      <Block className={style.footer}>
        <Button
          fill
          large
          className={
            (faceCheck || fingerCheck || pinCheck) && style.footerButton
          }
          onClick={() => {
            if (faceCheck) {
              f7.view.current.router.navigate("/pageLog", {
                props: {
                  state: "face",
                },
              });
            } else if (fingerCheck) {
              f7.view.current.router.navigate("/pageLog", {
                props: {
                  state: "finger",
                },
              });
            } else if (pinCheck) {
              f7.view.current.router.navigate("/logInPin", {
                props: {
                  state: "pin",
                },
              });
            }
          }}
          // onClick={() => {
          //   if (faceCheck) {
          //     f7.view.current.router.navigate("/logInFace", {
          //       props: {
          //         foo: "bar",
          //       },
          //     });
          //   } else if (fingerCheck) {
          //     f7.view.current.router.navigate("/logInFinger", {
          //       props: {
          //         foo: "bar",
          //       },
          //     });
          //   } else if (pinCheck) {
          //     f7.view.current.router.navigate("/logInPin", {
          //       props: {
          //         foo: "bar",
          //       },
          //     });
          //   }
          // }}
        >
          Выбрать
        </Button>
      </Block>
    </Page>
  );
};

export default PageAuthentication;
