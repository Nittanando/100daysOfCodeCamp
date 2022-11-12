import React from "react";
import MenuItem from "./MenuItem";
import "./sideBar.scss";
import { SidebarData } from "./SidebarData";

function Sidebar({ toggle }) {
  return (
    <div className={`sidebar-area ${toggle ? "" : "sBar-toggle"}`}>
      <div className="sidebar-wrapper">
        <ul>
          {SidebarData.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              iconClass={item.iconClass}
              submenus={item.submenus || []}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
