import React, { useState } from "react";
import "./main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

export default function Nav() {
  const [navstate, changenav] = useState(false);

  return (
    <nav>
      <Link to="/" className="mainlink">
        Name
      </Link>

      <ul className={navstate ? "show" : null}>
        <li>
          <Link to="/about" onClick={() => changenav(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/product" onClick={() => changenav(false)}>
            Product
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="contact" onClick={() => changenav(false)}>
        <FontAwesomeIcon icon={faAddressBook} color="#fff" size="xl" />
        <p>Contact</p>
      </Link>

      <FontAwesomeIcon
        icon={navstate ? faX : faBars}
        onClick={() => changenav(!navstate)}
        color="#fff"
        className="toggle"
      />
    </nav>
  );
}
