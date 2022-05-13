import React, { useEffect } from "react";
import people from "../../assets/people.webp";
import ai from "../../assets/ai.webp";
import "./header.css";

const Header = () => {
  useEffect(() => {
    let button = document.getElementById("header-content_start-button");

    button.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      button.style.setProperty("--mouse-x", x + "px");
      button.style.setProperty("--mouse-y", y + "px");
    });

    return () => {};
  }, []);

  return (
    <div className="section__padding gpt3__header" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text gpt3__h1">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button" id="header-content_start-button">
            get started
          </button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="How Many People Using Our Plateform" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-img">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
