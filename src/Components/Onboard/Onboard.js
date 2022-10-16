import React from "react";
import "./Onboard.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import Images from "../../Image/Images";

const Onboard = () => {
  return (
    <>
      <div className="main-div">
        <h5 className="mobileTitle">Onboarding #Exploration</h5>
        <div className="heading">
          <div className="profileDetails">
            <div className="profileImg">
              <ProfileImage />
            </div>
            <div className="profile-text">
              <h5>Onboarding #Exploration</h5>
              <div className="profileWrapper">
                <span>Eren ツ</span>
                <ul className="list">
                  <li title="Follow Eren ツ">Follow</li>
                  <li
                    className="hire-me"
                    title="Send a message about a work opportunity"
                  >
                    <span>Hire Me</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="btn btn-light">Save</button>
            <button className="btn like-btn">❤ Like</button>
          </div>
        </div>
        <section className="moving">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators indicatorWrapper">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="indicatorButton active"
                aria-current="true"
                aria-label="Slide 1"
              >
                <img src={Images.Eden1} className="d-block w-100" alt="..." />
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="indicatorButton"
              >
                <img src={Images.Eden2} className="d-block w-100" alt="..." />
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="indicatorButton"
              >
                <img src={Images.Eden3} className="d-block w-100" alt="..." />
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                className="indicatorButton"
              >
                <img src={Images.Eden4} className="d-block w-100" alt="..." />
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
                className="indicatorButton"
              >
                <img src={Images.Eden5} className="d-block w-100" alt="..." />
              </button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Images.Eden1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Images.Eden2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Images.Eden3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Images.Eden4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Images.Eden5} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon arrow"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden ">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon arrow"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden ">Next</span>
            </button>
          </div>
        </section>
        <div className="info">
          <p>Yo, what's up guys! 🥳</p>
          <p>
            It's tiring to write a different description for each shot, just
            like the shot and move on, love ya! 😘
          </p>
          <p>
            Let's create something amazing together! 🧑&zwj;🎨
            <br />
            Feel free to contact me -{" "}
            <a href="mailto:ertuken@gmail.com" rel="noreferrer nofollow">
              ertuken@gmail.com
            </a>
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="hr-line">
          <hr className="hr" />
          <ProfileImage />
          <hr className="hr" />
        </div>
        <p className="footer-p1">Eren ツ</p>
        <p className="footer-p2">let's create something amazing together →</p>
        <button
          title="Send a message about a work opportunity"
          className="btn like-btn"
        >
          ✉ Hire Me
        </button>
      </footer>
    </>
  );
};

export default Onboard;
