/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import './main.css'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle);
  }
  const changeBackground = () => {
    if(window.scrollY >= 160) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", changeBackground)

    return (
      <>
        <header className={scroll ? "main-head Scroll" : "main-head"}>
          <Draggable>
            <div className="logo-div">
              <img
                className={scroll ? "logo shrink" : "logo"}
                src={`${process.env.PUBLIC_URL}/images/lagann.png`}
                alt="logo"
              />
            </div>
          </Draggable>
          <div className="bars" onClick={handleToggle}>
            <FontAwesomeIcon icon={toggle ? faTimes : faBars} />
          </div>
          <div className={toggle ? "nav toggle" : "nav"}>
            <ul className="nav-list">
              <li onClick={() => setToggle(!toggle)}>
                <a href="#Projects">Projects</a>
              </li>
              <li onClick={() => setToggle(!toggle)}>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>
      </>
    );
}

export default Navbar
