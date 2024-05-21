import { Dashboard, Charts, Login, Signup } from "@/components/pages";
import {
  MdHomeFilled,
  MdBarChart,
  MdPerson,
  MdArrowRight,
} from "react-icons/md";

export const SidebarMenu = [
  {
    title: "Dashboard",
    icon: MdHomeFilled,
    exact: true,
    url: "/",
    component: Dashboard,
  },
  {
    title: "Charts",
    icon: MdBarChart,
    url: "/charts",
    component: Charts,
  },
  {
    title: "Users",
    icon: MdPerson,
    url: "/users",
    subMenu: [
      {
        title: "Login",
        icon: MdArrowRight,
        url: "/users/login",
        component: Login,
      },
      {
        title: "Sign Up",
        icon: MdArrowRight,
        url: "/users/sign-up",
        component: Signup,
      },
    ],
  },
];
