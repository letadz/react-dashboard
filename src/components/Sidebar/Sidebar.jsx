import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarMenu } from "../../utils/SidebarMenu";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSidebar = (val) => {
    setIsOpen(val);
    setIsSubMenuOpen(false);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <aside
      className={`sticky top-0 h-full p-2 pt-2 duration-300 ease-in-out shadow-lg ${
        isOpen ? "w-52" : "w-16"
      }`}
      onMouseEnter={() => toggleSidebar(true)} // Open sidebar when hovering
      onMouseLeave={() => toggleSidebar(false)} // Close sidebar when not hovering
    >
      <ul className="p-0">
        {SidebarMenu.map((menu, index) => (
          <li key={index} className="mb-2">
            {menu.subMenu ? (
              <div>
                <div
                  onClick={toggleSubMenu}
                  className="flex items-center gap-3 rounded-md p-3 first:mt-0 cursor-pointer"
                >
                  <span className="text-2xl">{<menu.icon />}</span>
                  <span
                    className={`flex-1 duration-300 ease-in-out 
                    ${!isOpen && "hidden"}`}
                  >
                    {menu.title}
                  </span>

                  {/* Arrow icon with the submenu */}
                  {!isSubMenuOpen ? (
                    <span
                      className={`duration-300 ease-in-out 
                      ${!isOpen && "hidden"}`}
                    >
                      <MdKeyboardArrowRight />
                    </span>
                  ) : (
                    <span
                      className={`rotate-90 
                      ${!isOpen && "hidden"}`}
                    >
                      <MdKeyboardArrowRight />
                    </span>
                  )}
                </div>
                <ul
                  className={`pl-4  duration-500 ease-in-out
                   ${!isSubMenuOpen && "hidden"}`}
                >
                  {menu.subMenu.map((subMenuItem, subIndex) => (
                    <li key={subIndex} className="mt-2">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "bg-gray-100 text-blue-500 flex items-center gap-3 rounded-md p-2 list-none"
                            : "flex items-center gap-3 rounded-md p-2 list-none"
                        }
                        to={subMenuItem.url}
                      >
                        <span className="text-xl">{<subMenuItem.icon />}</span>
                        <span className="flex-1">{subMenuItem.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 text-blue-600 flex items-center gap-3 rounded-md p-3 first:mt-0 list-none"
                    : "flex items-center gap-3 rounded-md p-3 first:mt-0 list-none"
                }
                to={menu.url}
              >
                <span className="text-2xl">{<menu.icon />}</span>
                <span
                  className={`flex-1 duration-300 ease-in-out 
                  ${!isOpen && "hidden"}`}
                >
                  {menu.title}
                </span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
