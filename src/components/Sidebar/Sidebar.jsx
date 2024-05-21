import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { SidebarMenu } from "@/components/js/constants/SidebarMenu";
import { MdKeyboardArrowRight } from "react-icons/md";
import Logo from "@/assets/logo/32px.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSidebar = (val) => {
    setIsOpen(val);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const menuItems = useMemo(
    () =>
      SidebarMenu.map((menu, index) => (
        <li key={index} className="mb-2">
          {menu.subMenu ? (
            <div>
              <div
                onClick={() => toggleSubMenu(index)}
                className="flex items-center gap-3 rounded-md p-3 cursor-pointer"
              >
                <span className="text-2xl">{<menu.icon />}</span>
                <span
                  className={`flex-1 duration-300 ease-in-out ${
                    !isOpen && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                <span className={`${!isOpen && "hidden"}`}>
                  <MdKeyboardArrowRight
                    className={
                      openSubMenus[index]
                        ? "rotate-90 duration-300 ease-in-out"
                        : ""
                    }
                  />
                </span>
              </div>
              <ul
                className={`duration-500 ease-in-out ${
                  !openSubMenus[index] && "hidden"
                } ${!isOpen ? "pl-0" : "pl-4"}`}
              >
                {menu.subMenu.map((subMenuItem, subIndex) => (
                  <li key={subIndex} className="mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-200 text-blue-600 flex items-center gap-3 rounded-md p-3"
                          : "flex items-center gap-3 rounded-md p-3"
                      }
                      to={subMenuItem.url}
                    >
                      <span className="text-xl">{<subMenuItem.icon />}</span>
                      <span className={`flex-1 ${!isOpen && "hidden"}`}>
                        {subMenuItem.title}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-3 bg-gray-200 text-blue-600 rounded-md p-3"
                  : "flex items-center gap-3 rounded-md p-3"
              }
              to={menu.url}
            >
              <span className="text-2xl">{<menu.icon />}</span>
              <span
                className={`flex-1 duration-300 ease-in-out ${
                  !isOpen && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </NavLink>
          )}
        </li>
      )),
    [isOpen, openSubMenus]
  );

  return (
    <aside
      className={`sticky top-0 p-2 pt-2 duration-300 ease-in-out ${
        isOpen ? "w-52" : "w-16"
      }`}
      onMouseEnter={() => toggleSidebar(true)}
      onMouseLeave={() => toggleSidebar(false)}
    >
      <div className="flex gap-4 p-3 pt-2 mb-3">
        <img src={Logo} alt="logo" />
        <h1
          className={`flex-1 text-xl font-medium duration-300 ease-in-out ${
            !isOpen && "hidden"
          }`}
        >
          Letadz
        </h1>
      </div>
      <ul className="p-0">{menuItems}</ul>
    </aside>
  );
};

export default Sidebar;
