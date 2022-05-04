import React from "react";
import "../static/aboutUs.css";

const AboutUs = () => {
  return (
    <div class="main">
      <h1 className="aboutTitle">A little About us</h1>
      <ul class="aboutCards">
        <li class="cards_item">
          <div class="aboutCard">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=2" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="aboutCard">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=2" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="aboutCard">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=2" />
            </div>
            <div class="card_content">
              <h2 class="card_title">Card Grid Layout</h2>
              <p class="card_text">
                Demo of pixel perfect pure CSS simple responsive card grid
                layout
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
