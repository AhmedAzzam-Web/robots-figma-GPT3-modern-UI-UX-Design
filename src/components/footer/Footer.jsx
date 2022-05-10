import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
import FooterLinks from "./footerLinks/FooterLinks";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <h2 className="gradient__text">
        Do you want to step in to the future before others
      </h2>

      <button className="gpt3__footer-btn">Request Early Access</button>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_container">
          <FooterLinks
            title="Links"
            links={[
              { Home: "home" },
              { "What is GPT": "whatGPT3" },
              { "Open AI": "possibility" },
              { "Case Studies": "features" },
              { Library: "blog" },
            ]}
          />
        </div>

        <div className="gpt3__footer-links_container">
          <FooterLinks
            title="Company"
            links={[
              { "Terms & Conditions": "" },
              { "Privacy Policy": "" },
              { Contact: "" },
            ]}
          />
        </div>

        <div className="gpt3__footer-links_container">
          <FooterLinks
            title="Get in touch"
            links={[
              { "Crechterwoord K12 182 DK Alknjkcb": "" },
              { "085-132567": "" },
              { "info@payme.net": "" },
            ]}
          />
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3 Ahmed Azzam Developer. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
