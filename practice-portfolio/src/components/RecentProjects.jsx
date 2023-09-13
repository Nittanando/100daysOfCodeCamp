import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const RecentItems = (props) => {
  return (
    <div className="recent-projects">
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="title-font-size">Recent {props.recentTitle}</h3>
        <Link className="text-dark">All {props.recentTitle}</Link>
      </div>
      <div className="row flex-wrap mt-3">
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default RecentItems;
