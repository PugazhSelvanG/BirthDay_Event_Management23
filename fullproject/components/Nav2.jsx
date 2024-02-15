import { useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/css/nav1.css";
export default function Nav2() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div class="dv">
      <header id="header">
        <div className="header-head">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <h3>BirthDay Bumps</h3>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <div className="-navbar-center">
          <nav ref={navRef} class="n1">
            <Link to="/adminpage">Home</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/admintheme">theme</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/etheme">view theme</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/addonview">view addons</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        
            <Link to="/profile">Profile</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/adminpage">Admin-Dashboard</Link>
          
            <button
              className="-nav-btn nav-close-btn"
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </nav>
        </div>
        <button className="-nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
