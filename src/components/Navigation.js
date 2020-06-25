import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="linkBtn">
      <Link to="/">Home</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            fromNavigation: true,
          },
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
