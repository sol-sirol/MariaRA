import { Page, Block, List, ListItem, Button, f7 } from "framework7-react";
import { useEffect, useState } from "react";
import style from "./index.module.css";

const PageLog = ({ state }) => {
  return (
    <Page>
      <Block className={style.textWrapper}>
        {state === "finger" && (
          <p className={style.text}>Отсканируйте отпечаток пальца</p>
        )}
        {state === "face" && <p className={style.text}>Вход по Face ID</p>}
      </Block>
      <Block className={style.iconWrapper}>
        {state === "finger" && (
          <svg
            width="85"
            height="94"
            viewBox="0 0 85 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70.1133 11.86C69.7399 11.86 69.3666 11.7667 69.0399 11.58C60.0799 6.96004 52.3333 5.00004 43.0466 5.00004C33.8066 5.00004 25.0333 7.19337 17.0533 11.58C15.9333 12.1867 14.5333 11.7667 13.88 10.6467C13.5889 10.1009 13.5236 9.46272 13.6982 8.86932C13.8727 8.27591 14.2731 7.77468 14.8133 7.47337C23.4933 2.76004 33.0133 0.333374 43.0466 0.333374C52.9866 0.333374 61.6666 2.52671 71.1866 7.42671C72.3533 8.03337 72.7733 9.43338 72.1666 10.5534C71.9821 10.9424 71.6915 11.2714 71.3282 11.5026C70.965 11.7337 70.5438 11.8576 70.1133 11.86ZM3.33328 36.36C2.90312 36.3641 2.48025 36.2488 2.11158 36.0271C1.74291 35.8055 1.44285 35.486 1.24469 35.1042C1.04653 34.7223 0.958004 34.2931 0.98894 33.864C1.01988 33.4349 1.16906 33.0228 1.41995 32.6734C6.03995 26.14 11.92 21.0067 18.92 17.4134C33.5733 9.85337 52.3333 9.80671 67.0333 17.3667C74.0333 20.96 79.9133 26.0467 84.5333 32.5334C84.7123 32.7842 84.8399 33.0679 84.9087 33.3683C84.9775 33.6687 84.9861 33.9797 84.934 34.2834C84.882 34.5871 84.7703 34.8775 84.6054 35.1378C84.4405 35.3981 84.2256 35.6232 83.9733 35.8C82.8999 36.5467 81.4533 36.3134 80.7066 35.24C76.6199 29.4551 71.1915 24.7473 64.8866 21.52C51.4933 14.66 34.3666 14.66 21.0199 21.5667C14.6733 24.8334 9.35328 29.5 5.15329 35.38C4.77995 36.0334 4.07995 36.36 3.33328 36.36ZM32.4999 92.6867C32.1939 92.6904 31.8905 92.6301 31.6092 92.5095C31.3279 92.389 31.075 92.2109 30.8666 91.9867C26.8066 87.9267 24.6133 85.3134 21.4866 79.6667C18.2666 73.9267 16.5866 66.9267 16.5866 59.4134C16.5866 45.5534 28.4399 34.26 42.9999 34.26C57.5599 34.26 69.4133 45.5534 69.4133 59.4134C69.4133 60.72 68.3866 61.7467 67.0799 61.7467C65.7733 61.7467 64.7466 60.72 64.7466 59.4134C64.7466 48.12 54.9933 38.9267 42.9999 38.9267C31.0066 38.9267 21.2533 48.12 21.2533 59.4134C21.2533 66.1334 22.7466 72.34 25.5933 77.3801C28.5799 82.7467 30.6333 85.0334 34.2266 88.6734C35.1133 89.6067 35.1133 91.0534 34.2266 91.9867C33.7133 92.4534 33.1066 92.6867 32.4999 92.6867ZM65.9599 84.0534C60.4066 84.0534 55.5066 82.6534 51.4933 79.9C44.5399 75.1867 40.3866 67.5334 40.3866 59.4134C40.3866 58.1067 41.4133 57.08 42.7199 57.08C44.0266 57.08 45.0533 58.1067 45.0533 59.4134C45.0533 65.9934 48.4133 72.2 54.1066 76.0267C57.4199 78.2667 61.2933 79.34 65.9599 79.34C67.0799 79.34 68.9466 79.2 70.8133 78.8734C72.0733 78.64 73.2866 79.48 73.5199 80.7867C73.7533 82.0467 72.9133 83.26 71.6066 83.4934C68.9466 84.0067 66.6133 84.0534 65.9599 84.0534ZM56.5799 93.6667C56.3933 93.6667 56.1599 93.62 55.9733 93.5734C48.5533 91.52 43.6999 88.7667 38.6133 83.7734C35.3899 80.5906 32.834 76.7967 31.0951 72.6139C29.3563 68.431 28.4695 63.9432 28.4866 59.4134C28.4866 51.8534 34.9266 45.6934 42.8599 45.6934C50.7933 45.6934 57.2333 51.8534 57.2333 59.4134C57.2333 64.4067 61.5733 68.4667 66.9399 68.4667C72.3066 68.4667 76.6466 64.4067 76.6466 59.4134C76.6466 41.82 61.4799 27.54 42.8133 27.54C29.5599 27.54 17.4266 34.9134 11.9666 46.3467C10.1466 50.1267 9.21329 54.56 9.21329 59.4134C9.21329 63.0534 9.53995 68.7934 12.3399 76.26C12.8066 77.4734 12.2 78.8267 10.9866 79.2467C9.77328 79.7134 8.41995 79.0601 7.99995 77.8934C5.75127 71.9915 4.59686 65.7292 4.59328 59.4134C4.59328 53.8134 5.66662 48.7267 7.76662 44.2934C13.9733 31.2734 27.7399 22.8267 42.8133 22.8267C64.0466 22.8267 81.3133 39.2067 81.3133 59.3667C81.3133 66.9267 74.8733 73.0867 66.9399 73.0867C59.0066 73.0867 52.5666 66.9267 52.5666 59.3667C52.5666 54.3734 48.2266 50.3134 42.8599 50.3134C37.4933 50.3134 33.1533 54.3734 33.1533 59.3667C33.1533 67.3467 36.2333 74.8134 41.8799 80.4134C46.3133 84.8 50.5599 87.2267 57.1399 89.0467C58.3999 89.3734 59.0999 90.6801 58.7733 91.8934C58.5399 92.9667 57.5599 93.6667 56.5799 93.6667Z"
              fill="#828282"
              // ТУТ меняем цвет на "#17A74C"
            />
          </svg>
        )}
        {state === "face" && (
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.9999 45.8334C31.4528 45.8334 29.9691 46.448 28.8751 47.5419C27.7812 48.6359 27.1666 50.1196 27.1666 51.6667C27.1666 53.2138 27.7812 54.6975 28.8751 55.7915C29.9691 56.8855 31.4528 57.5 32.9999 57.5C34.547 57.5 36.0308 56.8855 37.1247 55.7915C38.2187 54.6975 38.8333 53.2138 38.8333 51.6667C38.8333 50.1196 38.2187 48.6359 37.1247 47.5419C36.0308 46.448 34.547 45.8334 32.9999 45.8334ZM60.9999 45.8334C59.4528 45.8334 57.9691 46.448 56.8751 47.5419C55.7812 48.6359 55.1666 50.1196 55.1666 51.6667C55.1666 53.2138 55.7812 54.6975 56.8751 55.7915C57.9691 56.8855 59.4528 57.5 60.9999 57.5C62.547 57.5 64.0308 56.8855 65.1247 55.7915C66.2187 54.6975 66.8333 53.2138 66.8333 51.6667C66.8333 50.1196 66.2187 48.6359 65.1247 47.5419C64.0308 46.448 62.547 45.8334 60.9999 45.8334ZM46.9999 0.333374C21.2399 0.333374 0.333252 21.24 0.333252 47C0.333252 72.76 21.2399 93.6667 46.9999 93.6667C72.7599 93.6667 93.6666 72.76 93.6666 47C93.6666 21.24 72.7599 0.333374 46.9999 0.333374ZM46.9999 84.3334C26.4199 84.3334 9.66659 67.58 9.66659 47C9.66659 45.6467 9.75992 44.2934 9.89992 42.9867C20.9133 38.0867 29.6399 29.08 34.2133 17.9267C39.5485 25.4978 47.0212 31.3051 55.6753 34.6054C64.3294 37.9058 73.7714 38.5492 82.7933 36.4534C83.7733 39.7667 84.3333 43.3134 84.3333 47C84.3333 67.58 67.5799 84.3334 46.9999 84.3334Z"
              fill="#828282"
              // ТУТ меняем цвет на "#17A74C"
            />
          </svg>
        )}
      </Block>
      <Block className={style.footer}>
        <Button
          className="footerButtoon"
          onClick={() => {
            f7.view.current.router.navigate("/logInPin");
          }}
        >
          Войти с помощью пин-кода
        </Button>
      </Block>
    </Page>
  );
};

export default PageLog;