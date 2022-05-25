import { Page, Block, f7, Button } from "framework7-react";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const CODE = 111111;

const CheckPhone = () => {
  const [codeRecorded, setCodeRecorded] = useState(false);
  const [code, setCode] = useState("");
  const [attempts, setAttempts] = useState(3);

  useEffect(() => {
    const fildList = document.querySelectorAll(".fild");
    const tm = code.split("");
    for (let i = 0; i < 6; i++) {
      if (tm[i]) {
        fildList[i].innerHTML = tm[i];
      } else {
        fildList[i].innerHTML = "";
      }
    }

    if (code.length === 6) {
      setCodeRecorded(true);
    } else {
      setCodeRecorded(false);
    }
  }, [code]);

  return (
    // <Page noSwipeback>
    <Page className={style.page}>
      <Block className={style.head}>
        <Button back fill className="bottonTop">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.93754 0.341797C6.68166 0.341797 6.42551 0.441219 6.23051 0.636719L0.574256 6.29297C0.183256 6.68397 0.183256 7.31703 0.574256 7.70703L6.23051 13.3633C6.62151 13.7543 7.25457 13.7543 7.64457 13.3633L7.73051 13.2773C8.12151 12.8863 8.12151 12.2533 7.73051 11.8633L3.86722 8H16.9375C17.4895 8 17.9375 7.552 17.9375 7C17.9375 6.448 17.4895 6 16.9375 6H3.86722L7.73051 2.13672C8.12151 1.74572 8.12151 1.11266 7.73051 0.722656L7.64457 0.636719C7.44907 0.441219 7.19341 0.341797 6.93754 0.341797Z"
              fill="#333333"
            />
          </svg>
        </Button>
      </Block>
      <Block className={style.textWrapper}>
        <p>
          На номер +7 (987) 786 98 45 был отправлен 6-значный проверочный код
        </p>
      </Block>
      <Block className={style.form}>
        <div className={style.inputWrapper}>
          <input
            className={style.input}
            onChange={(e) => {
              if (e.target.value.length <= 6) {
                setCode(e.target.value);
              }
            }}
            value={code}
            type="number"
          />
          <div className={style.fieldWrapper}>
            <div className="fild"></div>
            <div className="fild"></div>
            <div className="fild"></div>
            <div className="fild"></div>
            <div className="fild"></div>
            <div className="fild"></div>
          </div>
        </div>
        <div className={style.text}>Осталось {attempts} попытки</div>
        {codeRecorded && attempts !== 0 ? (
          <Button
            large
            className={style.buttonImit}
            fill
            onClick={(e) => {
              console.log(Number(code));
              if (Number(code) === CODE) {
                console.log("Complit", "go to /passwordPage");
                f7.view.current.router.navigate("/passwordPage");
              } else {
                setCode("");
                setAttempts(attempts - 1);
                if (attempts === 1) {
                  console.log("NO Complit");
                }
              }
            }}
          >
            Подтвердить код
          </Button>
        ) : (
          <Button large className={style.button} fill>
            Подтвердить код
          </Button>
        )}
      </Block>
      <Block className={style.footer}>
        <Button className="footerButtoon">Отправить код повторно</Button>
      </Block>
    </Page>
  );
};

export default CheckPhone;
