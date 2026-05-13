import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WorkersPage } from "./pages/WorkersPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "como-funciona", Component: HowItWorksPage },
      { path: "servicios", Component: ServicesPage },
      { path: "trabajadores", Component: WorkersPage },
      { path: "contacto", Component: ContactPage },
    ],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/registro",
    Component: RegisterPage,
  }
]);
