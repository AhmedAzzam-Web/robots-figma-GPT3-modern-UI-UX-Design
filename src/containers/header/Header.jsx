import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
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
          <button type="button">get started</button>
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
