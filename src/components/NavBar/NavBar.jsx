import { useState, useContext } from "react";
import "./navBar.css";
import { CategoryContext } from "../../contexts/CategoryContext";


export default function NavBar() {
  const {setCategory} = useContext(CategoryContext)
  return (
    <div>
      <div className="nav-bar">
        <h3 className="brand-name">Traveller's &nbsp;&nbsp; Book</h3>
        <ul className="nav-lists">
          <li onClick={() => setCategory("Beaches")} className="nav-list-item">
            Beaches
          </li>
          <li onClick={() => setCategory("Forts")} className="nav-list-item">
            Forts
          </li>
          <li
            onClick={() => setCategory("Waterfalls")}
            className="nav-list-item"
          >
            Waterfalls
          </li>
          <li onClick={() => setCategory("Churches")} className="nav-list-item">
            Churches
          </li>
          <li onClick={() => setCategory("Hotels")} className="nav-list-item">
            Hotels
          </li>
        </ul>
        <ul className="socials">
          <li className="contact-us">Contact Us:</li>
          <li className="social-icon">
            <a
              href="https://www.instagram.com/_mr.codeaddict_/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-icon">
            <a
              href="https://www.youtube.com/channel/UCeIc9MgSAPhvnsKeP7CPGfA"
              target="_blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="social-icon">
            <a
              href="https://www.facebook.com/Livio.Fran.Mascarenhas/"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
