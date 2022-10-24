import React from "react";

const Navigation = () => {
  return (
    <div>
      <header>
        <h1>John Doe</h1>
        <ul className="navmenu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
