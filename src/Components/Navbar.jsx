import React from "react";

export const Navbar = ({setcategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        <span className="badge bg-danger btn fs-5">Info News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link font-blod" onClick={()=>setcategory("technology")} aria-current="page"  >
              Technology
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>setcategory("sports")} aria-current="page"  >
                Sports
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>setcategory("science")} aria-current="page"  >
                Science
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>setcategory("health")} aria-current="page"  >
                Health
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={()=>setcategory("entertainment")} aria-current="page"  >
                Entertainment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
