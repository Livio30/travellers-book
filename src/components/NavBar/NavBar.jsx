import { useState } from "react";
import "./navBar.css";
import Card from "../card/Card"
import data from "../../asserts/data";

export default function NavBar() {
  const [category, setCategory] = useState("Beaches");

  return (
    <div>
      <div className="nav-bar">
        <h3 className="brand-name">Travels &nbsp; Book</h3>
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
      <div className="content">
        {
          data[category].map((place) => {
            return(
              <Card name={place.name} imageUrl={place.imageUrl} location={place.location} info={place.info} />
            )
          })
        }
      </div>
    </div>
  );
}
