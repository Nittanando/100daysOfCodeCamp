import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <section className="search py-4">
        <div className="container-lg d-flex align-items-center justify-content-between">
          <h1 className="logo">Fish Buy</h1>
          <div className="d-flex align-items-center justify-content-center search-wrap mx-3">
            <i className="fa fa-search border border-dark d-flex align-items-center justify-content-center px-3 border-end-0"></i>
            <input
              className="search-input border border-dark ps-3"
              type="text"
              placeholder="search"
            />
            <span className="input-category border border-dark d-flex align-items-center justify-content-center px-3 border-start-0">
              All Category
            </span>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-user cart-bg p-2 rounded-circle"></i>
            <div className="cart ms-3">
              <Link className="text-dark position-relative" to="/cart">
                <i className="fa fa-shopping-bag cart-bg p-2 rounded-circle"></i>
                <span className="position-absolute text-dark shadow cart-count">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
