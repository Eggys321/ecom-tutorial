import React from "react";
import Marque from "./Marque";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { BsCart4 } from "react-icons/bs";
const NavBar = ({cart}) => {
  return (
    <div className="sticky-top">
      <Marque />
      <div className="navbar-content">
        <header className="container d-flex  justify-content-between align-items-center ">
          <ul>
            <li className="list-unstyled">
              <Link className="text-decoration-none" to="/">
                <h2 className="fst-italic text-light fw-bold">Eggys</h2>
              </Link>
            </li>
          </ul>
          <div className="w-50  d-none d-lg-block">
          <form className="">
            <input
              type='search'
              placeholder='search products, brands and categories...'
              className="w-100 form-control "
            />
          </form>
          </div>
          {/* nav links */}
          <nav className=" ">
            <ul className="gap-5 d-flex justify-content-between align-items-center list-unstyled ">
              <li className="">
                <Link className=" text-decoration-none text-light fs-4 " to="/">
                  Account
                </Link>
              </li>
              <li className="d-none d-lg-block">
                <Link className="text-decoration-none text-light fs-4" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-light fs-4"
                  to="/Cart"
                >
                  <BsCart4 />
                  ({cart.length})
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
