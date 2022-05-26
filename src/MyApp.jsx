import { App, View } from "framework7-react";
import CheckPhone from "./pages/CheckPhone";
import SingPage from "./pages/SingPage";
import SplashPage from "./pages/SplashPage";
import WrongPhone from "./pages/WrongPhone";
import PageAuthentication from "./pages/PageAuthentication";
import LogInPin from "./pages/LogInPin";
import PageLog from "./pages/PageLog";
import PasswordPage from "./pages/PasswordPage";
import HomePage from "./pages/HomePage/inde";

const f7params = {
  // routes,
  name: "My App",
  id: "com.myapp.test",
  routes: [
    { path: "/homePage", component: HomePage },
    { path: "/", component: SplashPage },
    { path: "/login", component: SingPage },
    { path: "/check", component: CheckPhone },
    { path: "/wrongPhone", component: WrongPhone },
    { path: "/passwordPage", component: PasswordPage },
    { path: "/pageAuthentication", component: PageAuthentication },
    { path: "/pageLog", component: PageLog },
    { path: "/logInPin", component: LogInPin },
  ],
};

function MyApp() {
  return (
    <App {...f7params}>
      <View main stackPages url={"/homePage"} />
    </App>
  );
}

export default MyApp;
