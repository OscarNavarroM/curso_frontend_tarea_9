import React from "react";
import "./slider.scss";

function Slider() {
  return (
    <section className="main__slider" id="main__slider">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 img-desktop"
              src="images/slider-img-1.jpg"
              alt="Tech image 1"
            />
            <img
              className="d-block w-100 img-tablet"
              src="images/slider-img-1-tablet.jpg"
              alt="Tech image 1"
            />
            <img
              className="d-block w-100 img-mobile"
              src="images/slider-img-1-mobile.jpg"
              alt="Tech image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-desktop"
              src="images/slider-img-2.jpg"
              alt="Tech image 2"
            />
            <img
              className="d-block w-100 img-tablet"
              src="images/slider-img-2-tablet.jpg"
              alt="Tech image 2"
            />
            <img
              className="d-block w-100 img-mobile"
              src="images/slider-img-2-mobile.jpg"
              alt="Tech image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-desktop"
              src="images/slider-img-3.jpg"
              alt="Tech image 3"
            />
            <img
              className="d-block w-100 img-tablet"
              src="images/slider-img-3-tablet.jpg"
              alt="Tech image 3"
            />
            <img
              className="d-block w-100 img-mobile"
              src="images/slider-img-3-mobile.jpg"
              alt="Tech image 3"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-desktop"
              src="images/slider-img-4.jpg"
              alt="Tech image 4"
            />
            <img
              className="d-block w-100 img-tablet"
              src="images/slider-img-4-tablet.jpg"
              alt="Tech image 4"
            />
            <img
              className="d-block w-100 img-mobile"
              src="images/slider-img-4-mobile.jpg"
              alt="Tech image 4"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="message">
        <h2>Planning</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </section>
  );
}

export default Slider;
