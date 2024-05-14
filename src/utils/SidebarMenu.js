import { Dashboard, Charts, PersonalDetails, Logout } from "@/components/pages";
import {
  MdHomeFilled,
  MdBarChart,
  MdSettings,
  MdPerson,
  MdExitToApp,
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
    title: "Settings",
    icon: MdSettings,
    url: "/settings",
    subMenu: [
      {
        title: "Personal Details",
        icon: MdPerson,
        url: "/settings/personal-details",
        component: PersonalDetails,
      },
      {
        title: "Logout",
        icon: MdExitToApp,
        url: "/settings/logout",
        component: Logout,
      },
    ],
  },
];
