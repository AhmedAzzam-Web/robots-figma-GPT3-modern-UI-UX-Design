import React, { useState, useEffect } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Menu = ({ props }) => {
  return (
    <>
      <ul className={props}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#whatGPT3">What is GPT?</a>
        </li>
        <li>
          <a href="#possibility">Open AI</a>
        </li>
        <li>
          <a href="#features">Case Studies</a>
        </li>
        <li>
          <a href="#blog">Library</a>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    let button = document.getElementById("gpt3__navbar-sing-up");

    button.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      button.style.setProperty("--sign-x", x + "px");
      button.style.setProperty("--sign-y", y + "px");
    });

    return () => {};
  }, []);

  return (
    <div className=" section__padding gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        {!toggleMenu && <Menu props="gpt3__navbar-links_container" />}

        <div className="gpt3__navbar-sign">
          <a href="#signin">sign in</a>
          <button type="button" id="gpt3__navbar-sing-up">
            sign up
          </button>
        </div>

        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <Menu props="gpt3__navbar_container-links" />

              <div className="gpt3__navbar_container-links-sign">
                <a href="#home">sign in</a>
                <button type="button" id="gpt3__navbar-sing-up">
                  sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
