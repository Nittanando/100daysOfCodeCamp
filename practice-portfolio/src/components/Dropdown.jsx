import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = () => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button
        onClick={() => setDropdownToggle((prev) => !prev)}
        className="border-0 fw-bold dropdown-button px-2 py-1 d-flex"
        style={dropdownToggle ? { backgroundColor: "#D0D0D7" } : undefined}
      >
        Menu
        <div>
          {dropdownToggle ? (
            <MdKeyboardArrowUp className="ms-3" />
          ) : (
            <MdKeyboardArrowDown className="ms-3" />
          )}
        </div>
      </button>
      <ul
        className={`dropdown-menu rounded-0 ${dropdownToggle ? "d-block" : ""}`}
      >
        <li>
          <Link className="dropdown-item">Menu 1</Link>
        </li>
        <li>
          <Link className="dropdown-item">Menu 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
