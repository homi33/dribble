import React from "react";
import "./NavBar.css";
import Images from "../../Image/Images";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a className="navbar-brand" href={"/jhf"}>
            <img
              title={"Dribbble: the community for graphic design"}
              className="logo"
              src={Images.Dribble}
              alt="Bootstrap"
              width="76"
              height="30"
              viewBox="0 0 76 19"
              fill="none"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="//facebook.com"
                >
                  Inspiration
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="//facebook.com"
                >
                  Find Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="//facebook.com"
                >
                  Learn Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="//facebook.com"
                >
                  Go Pro
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="//facebook.com"
                >
                  Design Files
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="//facebook.com"
                >
                  Hire Designers
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <img className="search-icon" src={Images.Search} alt="search" />
              <a
                className="sign-in nav-link active"
                aria-current="page"
                href="//facebook.com"
              >
                Sign in
              </a>
              <button className=" btn share-btn" type="submit">
                Share my work
              </button>
            </form>
          </div>
          <div>
            <a
              className="sign-in nav-link active showSignIn"
              aria-current="page"
              href="//facebook.com"
            >
              Sign in
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
