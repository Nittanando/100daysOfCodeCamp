// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   AiOutlineHome,
//   AiOutlineTable,
//   AiOutlineSetting,
//   AiOutlineDashboard,
// } from "react-icons/ai";
// import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
// import { TbFileInvoice } from "react-icons/tb";

// const MenuItem = () => {
//   const location = useLocation();

//   const [menuItems, setMenuItems] = useState([
//     {
//       title: "Home",
//       icon: AiOutlineHome,
//       path: "/home",
//       subMenus: [],
//     },
//     {
//       title: "Dashboard",
//       icon: AiOutlineDashboard,
//       path: "/dashboard",
//       subMenus: [],
//     },
//     {
//       title: "Invoice",
//       icon: TbFileInvoice,
//       path: "/invoice",
//       subMenus: [],
//     },
//     {
//       title: "Table",
//       icon: AiOutlineTable,
//       path: "/table",
//       subMenus: ["Submenu 1", "Submenu 2"],
//     },
//     {
//       title: "Components",
//       icon: AiOutlineSetting,
//       path: "/components",
//       subMenus: ["Submenu 3", "Submenu 4"],
//     },
//   ]);

//   const [activeIndex, setActiveIndex] = useState(null);
//   const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);

//   const toggleSubMenu = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const toggleSubmenuItem = (index, submenuIndex, event) => {
//     event.preventDefault();
//     event.stopPropagation();

//     const updatedMenuItems = [...menuItems];
//     updatedMenuItems[index].activeSubmenuIndex =
//       updatedMenuItems[index].activeSubmenuIndex === submenuIndex
//         ? null
//         : submenuIndex;

//     setMenuItems(updatedMenuItems);
//     localStorage.setItem(
//       "activeSubmenuIndex",
//       JSON.stringify(updatedMenuItems)
//     );
//   };

//   useEffect(() => {
//     const activeMenuItem = menuItems.findIndex(
//       (menuItem) => menuItem.path === location.pathname
//     );
//     setActiveIndex(activeMenuItem);
//   }, [location.pathname]);

//   useEffect(() => {
//     const storedSubmenuIndex = localStorage.getItem("activeSubmenuIndex");
//     setActiveSubmenuIndex(
//       storedSubmenuIndex ? parseInt(storedSubmenuIndex) : null
//     );
//   }, []);

//   return (
//     <nav className="sidebar">
//       <ul>
//         {menuItems.map((menuItem, index) => (
//           <li key={index}>
//             <Link
//               to={menuItem.path}
//               className={`menu-item ${activeIndex === index ? "active" : ""}`}
//               onClick={() => toggleSubMenu(index)}
//               style={
//                 activeIndex === index ? { color: "blue" } : { color: "inherit" }
//               }
//             >
//               {React.createElement(menuItem.icon)}
//               {menuItem.title}
//               {menuItem.subMenus.length > 0 && (
//                 <>
//                   {activeIndex === index ? (
//                     <AiOutlineArrowUp className="submenu-icon" />
//                   ) : (
//                     <AiOutlineArrowDown className="submenu-icon" />
//                   )}
//                 </>
//               )}
//             </Link>
//             {menuItem.subMenus.length > 0 && (
//               <ul
//                 className={`submenu ${activeIndex === index ? "visible" : ""}`}
//               >
//                 {menuItem.subMenus.map((submenu, submenuIndex) => (
//                   <li key={submenuIndex}>
//                     <Link
//                       to={`${menuItem.path}/${submenuIndex}`}
//                       className={`submenu-item ${
//                         menuItem.activeSubmenuIndex === submenuIndex
//                           ? "active"
//                           : ""
//                       }`}
//                       onClick={(event) =>
//                         toggleSubmenuItem(index, submenuIndex, event)
//                       }
//                       style={
//                         menuItem.activeSubmenuIndex === submenuIndex
//                           ? { textDecoration: "underline" }
//                           : { textDecoration: "none" }
//                       }
//                     >
//                       {submenu}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default MenuItem;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineTable,
  AiOutlineSetting,
  AiOutlineDashboard,
} from "react-icons/ai";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";

const Sidebar = () => {
  const location = useLocation();

  const [menuItems, setMenuItems] = useState([
    {
      title: "Home",
      icon: AiOutlineHome,
      path: "/home",
      subMenus: [],
    },
    {
      title: "Dashboard",
      icon: AiOutlineDashboard,
      path: "/dashboard",
      subMenus: [],
    },
    {
      title: "Invoice",
      icon: TbFileInvoice,
      path: "/invoice",
      subMenus: [],
    },
    {
      title: "Table",
      icon: AiOutlineTable,
      subMenus: [
        { label: "Submenu 1", path: "/table/submenu-1" },
        { label: "Submenu 2", path: "/table/submenu-2" },
      ],
    },
    {
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

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSubmenuItem = (submenuIndex) => {
    setActiveSubmenuIndex(
      activeSubmenuIndex === submenuIndex ? null : submenuIndex
    );
  };

  const isSubmenuActive = (submenuPath) => {
    return location.pathname.startsWith(submenuPath);
  };

  return (
    <nav className="sidebar">
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link
              to={menuItem.path}
              className={`menu-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleSubMenu(index)}
              style={
                activeIndex === index ? { color: "blue" } : { color: "inherit" }
              }
            >
              {React.createElement(menuItem.icon)}
              {menuItem.title}
              {menuItem.subMenus.length > 0 && (
                <React.Fragment>
                  {activeIndex === index ? (
                    <AiOutlineArrowUp className="submenu-icon" />
                  ) : (
                    <AiOutlineArrowDown className="submenu-icon" />
                  )}
                </React.Fragment>
              )}
            </Link>
            {menuItem.subMenus.length > 0 && (
              <ul
                className={`submenu ${activeIndex === index ? "visible" : ""}`}
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
    </nav>
  );
};

export default Sidebar;
