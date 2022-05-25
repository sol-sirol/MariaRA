import { Page, Block, Button, f7 } from "framework7-react";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const PagePassword = () => {
  const [password, setPassword] = useState("");

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
  return (
    <Page noSwipeback>
      <Block className={style.contentTop}>
        <Block className={style.textContainer}>
          <p>Задайте пин-код для входа в приложение</p>
        </Block>
      </Block>
      <Block>
        <div className={style.inputWrapper}>
          <input
            className={style.input}
            onChange={(e) => {
              if (e.target.value.length <= 4) {
                setPassword(e.target.value);
              }
              if (password.length === 3) {
                console.log("password => passwordAgain");
                f7.view.current.router.navigate("/pagePasswordAgain");
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
      </Block>
    </Page>
  );
};

export default PagePassword;
