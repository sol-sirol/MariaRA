import { Block, f7, Page } from "framework7-react";
import { useEffect } from "react";
import style from "./index.module.css";

const SplashPage = () => {
  useEffect(() => {
    setTimeout(() => {
      f7.view.current.router.navigate("/login");
    }, 2000);
  }, []);
  return (
    <Page>
      <Block className={style.splashLogo}>
        <svg
          width="278"
          height="59"
          viewBox="0 0 278 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_116_1841)">
            <path
              d="M0.000128922 38.5113C0.112464 38.4461 0.290025 38.4026 0.326262 38.3085C1.51846 35.1762 3.44265 32.6667 6.53729 31.1314C5.96837 30.5158 5.24 30.3347 4.63485 29.9509C3.2361 29.0709 2.41714 27.876 2.40627 26.1813C2.40264 25.5512 2.60557 25.2941 3.26871 25.323C4.34857 25.3701 5.43568 25.3339 6.64238 25.3339C6.38147 24.7256 5.87415 24.6061 5.48279 24.3779C2.50048 22.6361 1.56194 19.8406 1.40613 16.6214C1.35902 15.6799 1.87358 15.8356 2.43526 16.042C4.52613 16.8133 6.66774 17.3022 8.90357 17.4144C9.77688 17.4579 10.1175 17.3456 9.8566 16.3245C9.36015 14.3654 8.34189 12.678 7.38886 10.9434C6.52279 9.36824 6.5844 9.15459 8.37088 8.90473C12.299 8.35432 16.2017 8.32535 20.0102 9.9947C20.1842 7.84736 20.6371 5.80141 21.63 3.91479C22.2424 2.74515 22.5975 2.70532 23.4382 3.73011C24.2355 4.7042 24.895 5.79779 25.7465 6.72118C26.888 7.95961 27.3591 7.81115 27.87 6.29388C28.5078 4.39278 29.5079 2.69446 30.856 1.20254C31.5771 0.40589 32.1859 0.0980918 32.907 1.31118C33.3781 2.10059 34.1173 2.77774 34.8529 3.35713C37.1358 5.16408 38.6832 7.40196 39.1542 10.3061C39.792 10.2844 40.0493 9.79554 40.3682 9.46239C42.2634 7.47438 44.5934 6.60892 47.3148 6.68135C48.4889 6.71394 49.6666 6.7248 50.8407 6.73204C51.5473 6.73929 51.7249 6.97466 51.3553 7.63009C50.7356 8.7273 50.1232 9.83537 49.6014 10.976C49.0723 12.1312 48.7824 13.3479 49.0397 14.6479C49.1557 15.2309 49.3586 15.4192 49.9456 15.1802C51.8843 14.3944 53.6563 15.0535 55.4247 15.8284C56.1929 16.1651 56.3632 16.4729 55.7798 17.1899C54.5224 18.7217 53.3374 20.315 52.1416 21.8974C51.8155 22.3283 51.5256 22.7882 51.2683 23.259C50.9458 23.8456 50.9494 24.3671 51.8227 24.2765C53.5186 24.0991 54.6601 25.0152 55.6711 26.1523C57.1278 27.789 58.8672 28.9225 61.0269 29.3715C62.0053 29.5743 61.9799 30.0631 61.6067 30.8163C59.3745 35.3029 55.8994 38.1347 50.7392 38.8987C51.0509 39.46 51.3154 39.9706 51.6053 40.4631C53.1055 42.9943 53.0946 45.6631 52.4315 48.4296C52.2394 49.2299 51.7865 49.1394 51.232 49.0778C49.4601 48.8859 47.8656 48.1435 46.1661 47.3759C46.1081 48.1508 46.0465 48.8098 46.0139 49.4689C45.8291 53.4666 43.76 56.1861 40.2486 57.9496C39.9442 58.1017 39.5384 58.1307 39.3572 58.4964C39.176 58.4964 38.9948 58.4964 38.8136 58.4964C38.2628 57.8301 38.4078 57.0226 38.473 56.2875C38.6433 54.3683 37.8352 52.9524 36.3169 51.9132C34.6464 50.7725 33.2512 49.4399 32.3344 47.5931C31.6858 46.2895 30.4139 46.0215 29.0695 46.228C27.4606 46.4742 26.33 47.3505 25.8516 48.9438C25.1414 51.3193 25.2428 53.7563 25.4095 56.1825C25.5291 57.917 25.0109 58.3805 23.431 57.7034C20.2784 56.3527 17.7454 54.3792 16.738 50.9137C16.5061 50.1207 16.4807 49.3204 16.4409 48.5129C16.3829 47.2745 15.9843 46.9449 14.7414 46.9884C13.5926 47.0282 12.8099 47.6583 12.1794 48.5383C11.9692 48.8316 11.7917 49.1466 11.5996 49.4508C11.2952 49.9324 11.1032 50.7327 10.4581 50.6349C9.68991 50.519 9.60294 49.6608 9.49423 49.009C9.2297 47.4193 9.43263 45.8586 10.0124 44.3631C10.382 43.4035 10.2443 42.8241 9.12099 42.6249C8.30928 42.4801 7.60266 42.0491 6.96489 41.5313C5.10955 40.0177 3.0839 39.4745 0.775601 40.3907C0.525566 40.4884 0.253788 40.5464 -0.0107422 40.4015C0.000128922 39.7714 0.000128922 39.1414 0.000128922 38.5113Z"
              fill="#ED741D"
            />
            <path
              d="M86.8892 19.3626C82.1566 28.6762 77.4277 37.9898 72.6843 47.2998C71.8653 48.9039 71.05 50.519 69.6549 51.7393C68.3503 52.88 66.9045 53.2167 65.8101 52.6265C64.6831 52.0181 64.0889 50.4864 64.4802 48.8098C65.1506 45.9491 66.3537 43.2731 67.5749 40.6151C71.5646 31.9244 76.1377 23.5523 81.4536 15.593C83.2075 12.9676 85.11 10.4401 87.7371 8.57156C88.9257 7.72421 90.1904 7.05791 91.6544 6.80805C93.8576 6.43508 95.6006 7.42003 96.3615 9.51305C97.1117 11.5807 96.9015 13.681 96.492 15.774C95.115 22.8823 93.7307 29.9907 92.3537 37.099C92.2885 37.4358 92.2994 37.7834 92.2668 38.1998C92.9082 37.9246 93.0676 37.3706 93.3539 36.9433C98.9307 28.5784 104.547 20.2425 111.059 12.5512C112.665 10.6573 114.328 8.80331 116.375 7.36571C117.654 6.46767 119.064 5.28717 120.691 6.25402C122.318 7.21724 122.141 9.02782 122.003 10.6501C121.778 13.2754 120.742 15.7016 119.984 18.193C117.383 26.757 115.103 35.4224 111.82 43.7692C111.193 45.3661 110.479 46.9159 109.382 48.263C108.776 49.0053 108.095 49.6644 107.233 50.0881C105.689 50.8485 104.464 50.3017 103.971 48.6577C103.475 46.9992 103.765 45.3552 104.109 43.7185C105.924 35.1001 109.131 26.9236 112.117 18.6746C112.444 17.7729 112.98 16.9074 112.9 15.8718C112.251 15.8283 112.117 16.3462 111.856 16.6757C107.059 22.781 103.036 29.4221 98.5503 35.7411C97.0645 37.8341 95.5281 39.8945 93.9844 41.9477C93.1111 43.1065 92.1001 44.1385 90.8173 44.8627C88.6394 46.0903 86.7334 45.4457 85.7332 43.1644C84.744 40.9048 85.081 38.5692 85.3346 36.2444C85.9253 30.7873 86.5449 25.3375 87.1537 19.884C87.3095 19.645 87.2842 19.3988 87.1863 19.1489C87.0776 19.2033 86.9907 19.2902 86.8892 19.3626Z"
              fill="#66B337"
            />
            <path
              d="M254.428 18.2943C253.967 24.6639 250.057 30.0703 243.723 33.8906C240.509 35.8316 236.965 36.9179 233.214 37.1714C231.808 37.2655 231.044 37.7435 230.649 39.1449C229.971 41.5675 229.12 43.9393 228.315 46.3257C227.938 47.4446 227.366 48.4658 226.543 49.3276C225.793 50.1134 224.923 50.7362 223.789 50.3488C222.713 49.9794 222.43 48.9764 222.296 47.966C222.079 46.3365 222.314 44.7251 222.684 43.1463C224.333 36.0814 226.561 29.1976 229.471 22.5456C230.265 20.7277 231.182 18.9606 232.573 17.5049C233.32 16.7227 234.146 15.8464 235.36 16.2194C236.675 16.625 236.787 17.8779 236.856 19.0004C236.94 20.3113 236.661 21.5896 236.248 22.8389C235.374 25.4859 234.552 28.1511 233.66 30.7909C233.396 31.5767 233.446 31.8411 234.374 31.6962C240.853 30.6859 247.495 24.2004 248.434 17.9213C249.039 13.8838 246.952 11.3888 242.821 11.3055C240.02 11.2512 237.367 12.0333 234.787 13.0255C233.272 13.6085 231.801 14.3074 230.312 14.9556C229.149 15.4626 227.978 15.9442 226.67 15.8826C225.297 15.8174 224.807 15.028 225.434 13.7968C225.695 13.2863 226.032 12.7467 226.478 12.4027C231.794 8.27821 237.704 5.54424 244.568 6.05482C250.793 6.51833 254.475 10.9035 254.428 18.2943Z"
              fill="#FDCB00"
            />
            <path
              d="M189.716 28.7595C186.483 32.8079 183.182 36.8021 179.479 40.4413C178.319 41.5784 177.145 42.7118 175.764 43.5772C174.764 44.2073 173.659 44.841 172.481 44.1204C171.318 43.4107 171.34 42.1252 171.401 40.9664C171.539 38.3881 172.217 35.9185 173.054 33.4851C174.405 29.5344 176.08 25.6815 176.815 21.5389C176.949 20.7893 177.08 20.0108 177.015 19.2648C176.909 18.0373 177.565 17.9033 178.504 18.0481C179.986 18.2726 181.269 19.5762 181.646 21.2239C182.08 23.1322 181.707 24.979 181.196 26.8113C180.464 29.4185 179.254 31.8411 178.294 34.3614C177.866 35.484 177.486 36.6174 177.265 37.9789C178.66 37.233 179.486 36.1575 180.37 35.1544C184.135 30.896 187.353 26.203 191.035 21.8793C191.995 20.7495 192.937 19.5835 194.405 19.0331C196.227 18.3451 197.416 19.0258 197.728 20.9233C197.873 21.7996 197.688 22.6253 197.456 23.4473C195.644 29.8024 193.379 36.0163 191.604 42.3823C190.991 44.5767 189.828 44.7541 188.223 43.1391C186.878 41.7884 186.856 40.1878 187.128 38.4895C187.491 36.2553 188.208 34.1333 189.074 32.0475C189.437 31.1784 189.745 30.2876 190.078 29.4041C190.016 29.1542 190.549 28.5821 189.716 28.7595Z"
              fill="#66B337"
            />
            <path
              d="M150.909 40.1226C150.891 40.4992 150.67 41.017 150.376 40.8396C149.796 40.4883 150.485 40.1516 150.608 39.8003C150.71 39.909 150.811 40.014 150.909 40.1226Z"
              fill="#E0EFD7"
            />
            <path
              d="M37.4474 38.7684C36.1211 39.8511 35.2333 41.3684 33.7839 42.3388C33.0736 42.8168 32.4141 43.3709 31.6133 43.6968C29.805 44.4391 28.2613 43.4831 28.2323 41.5531C28.1707 37.2113 30.2435 33.7893 33.1859 30.8453C34.8202 29.2085 36.8531 28.2236 39.2991 28.5097C39.7449 28.5604 40.1978 28.6111 40.6218 28.7378C41.1943 28.9044 41.6944 29.0927 42.2198 28.5459C42.6656 28.0824 43.3106 28.0968 43.8614 28.3865C44.3977 28.669 44.2926 29.252 44.2491 29.7264C44.1078 31.269 43.4374 32.6595 42.9192 34.0935C42.2343 35.9946 41.477 37.8667 40.8066 39.7714C40.6725 40.1517 40.3428 40.7202 40.7704 41.0207C41.2632 41.3647 41.6763 40.8469 42.0532 40.5536C44.0281 39.011 44.8434 36.8238 45.2565 34.4882C46.282 28.6871 44.9086 23.527 40.4515 19.5401C36.0088 15.5713 30.7255 14.4089 25.0689 16.4223C19.3978 18.4429 15.9118 22.5565 14.9515 28.5386C14.3499 32.2757 15.0312 35.618 16.5604 37.8921C16.9554 37.5915 16.9771 37.1208 17.104 36.7224C18.2708 33.0759 19.5717 29.4837 21.4343 26.1233C21.8438 25.381 22.3257 24.6568 22.8946 24.0303C23.7136 23.1286 24.3622 23.3097 24.7463 24.4648C25.1594 25.7105 24.6666 26.8512 24.2753 27.9846C23.9383 28.9587 23.536 29.9183 23.1012 30.8525C22.7642 31.5804 22.92 31.8411 23.7281 31.7506C26.9713 31.3957 31.1349 27.1988 31.4611 23.9325C31.6241 22.3102 30.4464 21.0175 28.6962 20.9668C26.464 20.9016 24.4673 21.7743 22.467 22.6036C22.0503 22.7774 21.6481 22.9802 21.2205 23.1286C20.6769 23.3169 20.0392 23.6501 19.6514 22.9584C19.2927 22.3139 19.6116 21.7309 20.1406 21.2927C22.9961 18.9208 26.2284 17.6209 29.9935 18.0228C31.019 18.1314 31.972 18.6094 32.762 19.3481C34.9978 21.4448 35.4761 24.664 33.8745 27.5066C31.3487 31.986 27.4677 34.4447 22.3583 34.9843C21.764 35.0458 21.4705 35.2378 21.3111 35.7918C20.8545 37.3887 20.3689 38.9784 19.887 40.5681C19.6949 41.2018 19.8797 41.6834 20.3508 42.1433C21.5901 43.3419 22.9888 44.3124 24.5579 45.1018C22.2351 48.1979 22.6627 51.6126 23.3295 55.2012C20.7675 54.0714 19.684 52.0254 19.0318 49.6753C18.7165 48.5455 18.6404 47.3686 18.7238 46.199C18.7781 45.4204 18.4339 45.0801 17.7091 44.8773C15.7668 44.3413 13.8825 44.1856 11.9655 45.6377C11.9692 43.9068 13.0454 42.9798 13.6723 41.85C13.8571 41.5205 14.4405 41.2996 14.1833 40.8614C13.9622 40.4884 13.4331 40.684 13.0418 40.6767C11.2625 40.6478 9.70073 40.2603 8.50491 38.7503C7.39968 37.3525 5.69292 37.443 4.13472 37.5082C3.20343 37.5481 3.34113 37.233 3.60566 36.7043C4.36302 35.2052 5.70741 34.3687 7.18588 33.764C8.35271 33.286 9.56303 32.884 10.7915 32.6052C11.8206 32.3734 12.404 32.0294 12.2446 30.8381C12.0706 29.5381 11.1285 29.8712 10.3892 29.8893C7.87801 29.9545 5.75452 29.2629 4.35939 27.0286C4.31591 26.9598 4.32316 26.862 4.26518 26.5687C6.04079 26.9055 7.7693 26.9272 9.50143 26.8982C10.2588 26.8874 11.3278 27.0431 11.5416 26.2754C11.7916 25.3737 10.661 25.1963 10.0196 24.8668C8.49404 24.0846 6.9902 23.2735 5.5987 22.2595C4.60218 21.5317 4.02964 20.5323 3.61653 19.4242C3.48608 19.0729 3.34838 18.4863 4.10936 18.7688C6.56985 19.6813 9.11731 19.2359 11.6322 19.3156C12.5091 19.3445 13.386 19.4278 14.5637 19.5075C12.578 17.1791 12.7483 14.1771 11.1502 11.9031C10.8531 11.4794 11.1285 11.3563 11.4474 11.2331C12.3134 10.9 13.2302 10.8203 14.118 11.0122C16.6111 11.5482 18.8651 12.5295 20.2711 14.8036C20.8654 15.7632 21.4017 16.1145 22.3257 15.1621C22.6845 14.7927 23.2534 14.6298 23.8006 14.3328C21.7423 12.2869 21.6843 9.84986 22.2351 7.28246C22.3185 6.89138 22.3293 6.32648 22.7316 6.2613C23.2389 6.18163 23.3766 6.79723 23.5904 7.15572C24.3912 8.51003 25.1703 9.87521 26.2755 11.0267C27.0474 11.8306 27.9135 12.334 29.0513 11.8813C30.1602 11.4395 30.1891 10.4582 30.1203 9.49499C29.9862 7.55405 30.2399 5.73623 31.5046 4.14654C31.9611 3.5744 32.2583 3.26298 32.7221 4.1393C33.5193 5.6457 35.0775 6.56547 35.7624 8.2312C36.4545 9.91142 36.5669 11.4214 35.6356 12.9894C35.1862 13.7462 35.1826 14.2351 36.2951 14.2278C36.8241 14.2242 37.451 14.293 37.8641 14.5718C39.2085 15.488 39.5166 14.8362 39.9695 13.605C41.1653 10.3315 44.2962 8.44485 47.7061 8.68385C48.2026 8.72006 48.2352 8.89387 48.0794 9.26323C47.8511 9.80278 47.659 10.3568 47.3872 10.871C46.09 13.3189 46.2639 15.8863 46.6589 18.5008C46.7966 19.4206 47.0539 19.3481 47.6192 18.8231C48.5215 17.9793 49.5687 17.3746 50.7645 17.0306C51.3479 16.864 51.9277 16.8423 52.5003 16.9944C52.7431 17.056 53.0692 17.1139 53.1018 17.447C53.1236 17.7005 52.8953 17.82 52.7105 17.9468C49.5941 20.0615 48.9382 23.2409 48.873 26.6882C48.8585 27.4306 48.9491 27.8615 49.826 27.3726C51.4603 26.4637 52.8989 26.7462 54.2578 28.0244C55.4717 29.1687 56.8379 30.15 58.4685 30.6534C59.1027 30.8489 59.1317 31.1567 58.8309 31.6383C57.164 34.2999 52.9895 37.5517 48.7063 36.9397C48.083 36.8492 47.1336 36.516 46.8364 37.1787C46.4741 37.9898 47.5431 38.1564 48.0141 38.5584C50.4529 40.6405 51.2429 43.3238 51.0581 46.409C51.0073 47.2636 50.4312 47.2057 49.9093 47.1079C48.2569 46.7965 46.6371 46.3873 45.4739 45.0185C45.2601 44.765 45.0789 44.4065 44.568 44.392C44.4303 46.3076 44.7383 48.2449 44.2491 50.1207C43.7817 51.9168 43.2598 53.6839 41.5966 54.8173C41.3393 54.9911 41.1219 55.2953 40.774 55.1722C40.3826 55.0346 40.4841 54.6508 40.4841 54.3538C40.4841 52.2644 39.7267 50.7254 37.596 49.9867C36.411 49.5739 35.9255 48.3898 35.3167 47.4048C34.9652 46.8399 34.023 46.4633 34.2115 45.8477C34.3963 45.2539 35.3747 45.3335 35.9834 45.0619C37.0126 44.6021 38.0091 44.1096 39.1687 43.2695C37.1611 43.1789 37.4148 41.9079 37.48 40.7709C37.509 40.2856 37.654 39.804 37.7482 39.3188C37.8279 39.0508 38.183 38.6308 37.4474 38.7684Z"
              fill="#FDCB00"
            />
            <path
              d="M37.4473 38.7684C37.5886 38.5004 37.7517 38.2541 38.1611 38.1057C38.1466 38.5945 38.056 38.9929 37.7372 39.3296C37.7227 39.1051 37.6756 38.8915 37.4473 38.7684Z"
              fill="#F18915"
            />
            <path
              d="M172.626 19.7355C171.467 17.523 169.383 16.7119 167.02 17.5266C165.172 18.164 163.759 19.4169 162.469 20.8291C159.353 24.233 157.356 28.3285 155.258 32.3661C153.892 34.9987 152.645 37.6965 150.909 40.1263C150.413 40.3834 150.594 40.0176 150.609 39.804C150.685 39.5034 150.739 39.1956 150.844 38.9095C152.707 33.7965 154.838 28.7812 156.356 23.5486C156.769 22.1219 157.099 20.6589 156.729 19.1598C156.396 17.8127 155.544 17.523 154.439 18.3812C153.421 19.167 152.729 20.228 152.091 21.3216C150.518 24.0121 149.398 26.9127 148.203 29.777C146.637 33.5358 143.814 36.3349 140.948 39.0906C140.701 39.326 140.393 39.6591 140.006 39.4817C139.593 39.2898 139.738 38.8444 139.788 38.5148C139.89 37.8522 140.013 37.1823 140.216 36.5413C141.709 31.7795 143.224 27.0213 144.735 22.2631C144.996 21.4447 145.231 20.6227 145.191 19.7536C145.104 17.7946 143.727 17.0342 142.028 18.0119C141.68 18.211 141.307 18.4428 141.071 18.7506C140.549 19.4386 140.009 19.3988 139.314 19.0367C138.103 18.4102 136.835 17.9213 135.429 18.0191C132.624 18.2219 130.019 18.9932 127.703 20.6408C123.471 23.6536 120.749 27.7781 118.887 32.5146C117.742 35.426 116.941 38.4207 117.532 41.6001C117.999 44.1095 119.785 45.3805 122.329 45.0402C124.138 44.7975 125.645 43.885 127.073 42.8385C130.044 40.6586 132.512 37.9717 134.82 35.1291C134.976 34.9371 135.03 34.5968 135.454 34.8828C135.03 36.6318 134.306 38.3374 134.298 40.1914C134.291 41.792 134.548 43.3092 136.11 44.1385C137.654 44.9569 139.111 44.3883 140.448 43.5265C141.915 42.5778 142.923 41.1764 143.97 39.8185C144.55 39.0689 145.035 38.2251 145.992 37.4719C145.731 38.4533 145.525 39.1848 145.343 39.9198C144.51 43.3201 143.311 46.6516 143.086 50.1749C142.992 51.6488 142.905 53.4086 144.604 54.0206C146.267 54.6217 147.347 53.2384 148.326 52.1231C149.801 50.4429 150.67 48.3933 151.67 46.4307C154.986 39.9343 158.222 33.3945 162.404 27.3834C163.585 25.6815 164.814 23.9976 166.575 22.8135C166.981 22.5419 167.444 22.1219 167.923 22.3536C168.503 22.6361 168.18 23.2481 168.089 23.6898C166.817 29.7661 163.813 34.8973 159.422 39.2572C158.816 39.8583 158.106 40.3689 157.537 40.9989C157.044 41.5457 156.312 42.1722 156.78 42.9906C157.255 43.8198 158.189 43.6605 158.994 43.5338C161.244 43.1825 163.205 42.2048 164.901 40.7093C168.869 37.2185 171.532 32.8803 173.058 27.8759C173.887 25.1636 174.007 22.3717 172.626 19.7355ZM137.639 24.7038C134.24 29.6394 130.599 34.3759 126.018 38.3121C125.442 38.8082 124.808 39.2499 124.167 39.6627C123.804 39.8945 123.369 40.2675 122.934 39.9814C122.431 39.6519 122.648 39.0653 122.757 38.6126C122.949 37.8304 123.206 37.0591 123.503 36.3096C125.141 32.1561 127.471 28.4553 130.798 25.428C132.316 24.0483 133.998 22.9366 136.121 22.8389C136.386 22.8606 136.614 22.8642 136.831 22.9041C138.295 23.172 138.469 23.5015 137.639 24.7038Z"
              fill="#66B337"
            />
            <path
              d="M276.811 17.8091C275.39 17.1681 274.372 18.03 273.473 18.9389C272.97 19.4495 272.564 19.3481 272.038 19.0874C270.774 18.4645 269.476 17.9177 268.023 18.0264C265.512 18.2147 263.102 18.7904 260.979 20.1954C255.148 24.052 251.804 29.6177 250.021 36.2118C249.528 38.0405 249.282 39.9126 249.731 41.8173C250.332 44.3739 252.278 45.5688 254.822 44.8808C256.152 44.5223 257.308 43.8162 258.402 43.0087C261.106 41.0062 263.323 38.5112 265.552 36.0271C265.98 35.5527 266.288 34.9082 267.146 34.6873C267.063 36.009 266.527 37.1098 266.259 38.2686C265.802 40.2349 265.94 42.1287 267.012 43.8633C267.951 45.3805 269.208 45.3842 270.227 43.9357C270.828 43.0775 271.147 42.0889 271.441 41.0931C272.173 38.5909 272.872 36.0778 273.655 33.5901C274.923 29.5597 276.285 25.5547 277.532 21.5171C278.072 19.7573 277.735 18.2255 276.811 17.8091ZM270.18 24.7617C266.715 29.6647 262.939 34.3034 258.446 38.3265C257.674 39.0182 256.87 39.6808 255.927 40.1407C255.163 40.5137 254.808 40.2494 254.873 39.4201C254.898 39.1087 254.945 38.79 255.043 38.4967C256.725 33.4018 259.413 28.9369 263.458 25.3483C264.958 24.0157 266.65 22.991 268.56 22.8497C268.922 22.8715 269.107 22.8678 269.284 22.8932C270.904 23.1068 271.096 23.4653 270.18 24.7617Z"
              fill="#FDCB00"
            />
            <path
              d="M219.781 27.6876C218.661 26.92 217.531 27.4921 216.447 27.9737C215.828 28.2489 215.281 28.7595 214.443 28.6979C215.034 26.7461 215.701 24.9356 215.926 22.9982C216.371 19.1743 214.255 17.0487 210.472 17.7657C205.685 18.6746 202.587 21.6765 200.985 26.1161C199.691 29.7046 202.163 33.0868 206.011 33.3366C206.768 33.3873 207.529 33.3439 208.457 33.3439C207.355 35.8244 204.109 39.6302 202.159 40.8252C201.71 41.1004 201.199 41.5132 200.673 41.0931C200.17 40.6912 200.373 40.1009 200.539 39.5867C200.873 38.562 201.25 37.548 201.576 36.5196C201.898 35.5057 201.474 34.8322 200.478 34.5751C199.55 34.3361 198.608 34.2854 197.691 34.6982C195.318 35.7664 193.901 39.3369 194.799 42.0165C195.586 44.363 197.829 45.3009 200.858 44.5188C201.467 44.363 202.068 44.1458 202.637 43.8814C204.783 42.8856 206.392 41.2452 207.859 39.46C209.584 37.3634 210.928 35.0132 212.345 32.7138C213.001 31.6456 213.838 30.8417 215.317 30.5556C214.324 33.0071 213.393 35.3283 212.45 37.6422C211.628 39.6592 211.505 41.6761 212.599 43.6243C213.364 44.9859 214.628 45.1343 215.741 44.0516C216.563 43.2514 217.1 42.2664 217.455 41.1764C218.288 38.609 219.125 36.0453 219.966 33.4815C220.245 32.6269 220.654 31.8121 220.698 30.896C220.752 29.7263 220.904 28.4553 219.781 27.6876ZM210.682 29.4041C209.99 30.5447 208.917 30.7511 207.743 30.3673C206.58 29.9871 206.174 29.0238 206.337 27.9049C206.696 25.4063 208.069 23.5233 210.16 22.1581C210.715 21.796 211.421 21.2999 212.023 21.6222C212.708 21.9916 212.526 22.8824 212.592 23.603C212.44 25.6888 211.769 27.6152 210.682 29.4041Z"
              fill="#67B337"
            />
            <path
              d="M39.7522 31.7904C39.629 31.9968 39.5058 32.2394 39.3499 32.4531C37.4149 35.0965 35.3784 37.6567 32.82 39.7461C32.4178 40.0756 31.9395 40.6151 31.4177 40.2494C30.9285 39.9054 31.3597 39.3296 31.5046 38.8842C32.3562 36.2517 33.9398 34.1007 36.0089 32.2974C36.8351 31.5768 37.8099 31.1024 38.9731 31.2183C39.321 31.2545 39.7123 31.2436 39.7522 31.7904Z"
              fill="#ED751D"
            />
            <path
              d="M40.4986 44.1204C41.7125 45.4348 42.517 46.5972 42.9409 47.995C43.017 48.2521 43.133 48.5092 43.1366 48.7699C43.1475 49.6752 43.1366 50.8485 42.1655 51.0332C41.2632 51.207 41.0204 50.0373 40.7848 49.3095C40.2666 47.7234 40.4225 46.0722 40.4986 44.1204Z"
              fill="#ED761C"
            />
            <path
              d="M42.4663 17.9359C41.9771 16.1724 41.5821 14.7891 42.1438 13.3877C42.4663 12.5838 43.0316 11.7437 44.0571 12.142C45.1334 12.5585 44.9051 13.4819 44.4739 14.2966C43.8941 15.3938 43.2744 16.4729 42.4663 17.9359Z"
              fill="#ED741D"
            />
            <path
              d="M13.009 38.8082C12.1574 38.8625 11.2298 38.5366 11.2117 37.548C11.1935 36.6572 12.2553 36.6536 12.922 36.6717C13.7193 36.6898 14.7701 36.9251 14.839 37.8123C14.9223 38.8335 13.9004 38.7973 13.009 38.8082Z"
              fill="#ED781B"
            />
          </g>
          <defs>
            <clipPath id="clip0_116_1841">
              <rect
                width="277.789"
                height="58"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </Block>
    </Page>
  );
};

export default SplashPage;