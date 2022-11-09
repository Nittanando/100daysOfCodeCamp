import React, { useState } from "react";

function MenuItem(props) {
  const { title, iconClass, submenus } = props;
  const [arrow, setArrow] = useState(false);

  return (
    <div>
      <li
        onClick={() => {
          setArrow(!arrow);
        }}
        className="nav-item"
      >
        <span className="nav-item-wrap">
          <div>
            <i className={iconClass}></i>
            <a href="#">{title}</a>
          </div>
          {submenus && submenus.length > 0 ? (
            <div className="arrow">
              <i
                className={`fa-solid ${
                  arrow ? "fa-chevron-up arrow" : "fa-chevron-down arrow"
                }`}
              ></i>
            </div>
          ) : (
            ""
          )}
        </span>

        {submenus && submenus.length > 0 ? (
          <ul className={arrow ? "expand" : "not-expand"}>
            {submenus.map((item, index) => (
              <li key={index} className="nav-sub-item">
                <a href="">{item.title}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </li>
    </div>
  );
}

export default MenuItem;
