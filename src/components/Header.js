import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/fontawesome-free-solid";

export default function Header() {
  const changeTheme = () => {
    const moon = document.querySelector(".fa-moon");
    const header = document.querySelector(".header");

    moon.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      header.classList.toggle("light-theme");
    });
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Where is the world ? </h1>
        </div>

        <div>
          <FontAwesomeIcon icon={faMoon} onClick={() => changeTheme()} />
        </div>
      </header>
    </>
  );
}
