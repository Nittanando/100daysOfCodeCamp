import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineTable,
  AiOutlineSetting,
  AiOutlineDashboard,
} from "react-icons/ai";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import Logo from "../paySuiteLogo.png";

const Sidebar = () => {
  const location = useLocation();

  const [menuItems] = useState([
    {
      id: 1,
      title: "Home",
      icon: AiOutlineHome,
      path: "/home",
      subMenus: [],
    },
    {
      id: 2,
      title: "Dashboard",
      icon: AiOutlineDashboard,
      path: "/dashboard",
      subMenus: [],
    },
    {
      id: 3,
      title: "Invoice",
      icon: TbFileInvoice,
      path: "/invoice",
      subMenus: [],
    },
    {
      id: 4,
      title: "Table",
      icon: AiOutlineTable,
      subMenus: [
        { label: "Submenu 1", path: "/table/submenu-1" },
        { label: "Submenu 2", path: "/table/submenu-2" },
      ],
    },
    {
      id: 5,
      title: "Components",
      icon: AiOutlineSetting,
      subMenus: [
        { label: "Submenu 1", path: "/components/submenu-1" },
        { label: "Submenu 2", path: "/components/submenu-2" },
      ],
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

  useEffect(() => {
    const activeMenuId = localStorage.getItem("activeMenuId");
    const activeSubmenuId = localStorage.getItem("activeSubmenuId");

    setActiveIndex(activeMenuId ? parseInt(activeMenuId) : 1); // Set the default active menu ID to 1 (Home)
    setActiveSubmenuIndex(activeSubmenuId ? parseInt(activeSubmenuId) : null);
  }, []);

  const toggleSubMenu = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
    setActiveSubmenuIndex(null);

    localStorage.setItem("activeMenuId", activeIndex === id ? null : id);
    localStorage.removeItem("activeSubmenuId");
  };

  const toggleSubmenuItem = (submenuIndex) => {
    setActiveSubmenuIndex(
      activeSubmenuIndex === submenuIndex ? null : submenuIndex
    );

    localStorage.setItem(
      "activeSubmenuId",
      activeSubmenuIndex === submenuIndex ? null : submenuIndex
    );
  };

  const isSubmenuActive = (submenuPath) => {
    return location.pathname.startsWith(submenuPath);
  };

  return (
    <nav className="sidebar">
      <img src={Logo} alt="Paysuite" />
      <div className="menu-items-wrapper">
        <ul className="menu-ul">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <Link
                to={menuItem.path}
                className={`menu-item ${
                  activeIndex === menuItem.id ? "active" : ""
                }`}
                onClick={() => toggleSubMenu(menuItem.id)}
                style={
                  activeIndex === menuItem.id
                    ? { color: "blue" }
                    : { color: "inherit" }
                }
              >
                {React.createElement(menuItem.icon)}
                <div className="menu-title">{menuItem.title}</div>
                {menuItem.subMenus.length > 0 && (
                  <React.Fragment>
                    {activeIndex === menuItem.id ? (
                      <AiOutlineArrowUp className="submenu-icon" />
                    ) : (
                      <AiOutlineArrowDown className="submenu-icon" />
                    )}
                  </React.Fragment>
                )}
              </Link>
              {menuItem.subMenus.length > 0 && (
                <ul
                  className={`submenu ${
                    activeIndex === menuItem.id ? "visible" : ""
                  }`}
                >
                  {menuItem.subMenus.map((submenu, submenuIndex) => (
                    <li key={submenuIndex}>
                      <Link
                        to={`${submenu.path}`}
                        className={`submenu-item ${
                          isSubmenuActive(submenu.path) ? "active" : ""
                        }`}
                        onClick={() => toggleSubmenuItem(submenuIndex)}
                        style={
                          isSubmenuActive(submenu.path)
                            ? { textDecoration: "underline" }
                            : { textDecoration: "none" }
                        }
                      >
                        {submenu.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
