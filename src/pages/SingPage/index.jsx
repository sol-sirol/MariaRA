import { Page, Block, Button, f7 } from "framework7-react";
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const PHONE = "71111111111";

const SingPage = () => {
  const [loginScreenOpened, setLoginScreenOpened] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneRecorded, setRecorded] = useState(false);

  useEffect(() => {
    const tm = phone.replace(/[^\d]/g, "");
    if (+tm.length === 11) {
      setRecorded(true);
    } else {
      setRecorded(false);
    }
  }, [phone]);

  // const convertedPhone = (phone) => {
  //   const convertedPhone = phone?.split("");

  //   convertedPhone?.splice(0, 0, "+");
  //   convertedPhone?.splice(2, 0, " (");
  //   convertedPhone?.splice(6, 0, ") ");
  //   convertedPhone?.splice(10, 0, "-");
  //   convertedPhone?.splice(13, 0, "-");

  //   const ff = convertedPhone.join("");

  //   return ff;
  // };

  return (
    <Page noSwipeback>
      <Block className={style.contentTop}>
        <Block className={style.textContainer}>
          <p>Введтите свой номер телефона для отправки проверочного кода</p>
        </Block>
      </Block>
      <Block>
        <div className={style.inputWrapper}>
          <div className={style.ladel}>Номер телефона</div>
          <InputMask
            mask="+7 (999) 999-99-99"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            className={style.input}
          />
        </div>
        {phoneRecorded ? (
          <Button
            large
            className={style.buttonImit}
            fill
            onClick={() => {
              if (phone.replace(/[^\d]/g, "") === PHONE) {
                f7.view.current.router.navigate("/check");
              } else {
                f7.view.current.router.navigate("/wrongPhone");
              }
            }}
          >
            Отправить код
          </Button>
        ) : (
          <Button large className={style.button} fill>
            Войти, как сотрудник компании
          </Button>
        )}
      </Block>
    </Page>
  );
};

export default SingPage;
