import { App, View, Page, Navbar, Toolbar, Link } from "framework7-react";
import CheckPhone from "./pages/CheckPhone";
import SingPage from "./pages/SingPage";
import SplashPage from "./pages/SplashPage";
import WrongPhone from "./pages/WrongPhone";
// import PagePassword from "./pages/PagePassword";
// import PagePasswordAgain from "./pages/PagePasswordAgain";
import PageAuthentication from "./pages/PageAuthentication";
// import LogInFinger from "./pages/LogInFinger";
// import LogInFace from "./pages/LogInFace";
import LogInPin from "./pages/LogInPin";
import PageLog from "./pages/PageLog";
import PasswordPage from "./pages/PasswordPage";

const f7params = {
  // routes,
  name: "My App",
  id: "com.myapp.test",
  routes: [
    { path: "/", component: SplashPage },
    { path: "/login", component: SingPage },
    { path: "/check", component: CheckPhone },
    { path: "/wrongPhone", component: WrongPhone },
    // { path: "/pagePassword", component: PagePassword },
    // { path: "/pagePasswordAgain", component: PagePasswordAgain },
    { path: "/passwordPage", component: PasswordPage },
    { path: "/pageAuthentication", component: PageAuthentication },
    // { path: "/logInFinger", component: LogInFinger },
    // { path: "/logInFace", component: LogInFace },
    { path: "/pageLog", component: PageLog },
    { path: "/logInPin", component: LogInPin },
  ],
};

function MyApp() {
  return (
    <App {...f7params}>
      <View main stackPages url={"/"} />
    </App>
  );
}

export default MyApp;
