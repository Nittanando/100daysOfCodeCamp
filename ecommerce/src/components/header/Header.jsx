import React from "react";
import Navbar from "./Navbar";
import Head from "./Head";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <Head />
      <Search />
      <Navbar />
    </div>
  );
};

export default Header;
