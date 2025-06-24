import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.png";
import FooterLinks from "./footerLinks/FooterLinks";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <h2 className="gradient__text">
        Do you want to step in to the future before others
      </h2>

      <button className="gpt3__footer-btn" type='button'>Request Early Access</button>

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
        <div>
          <p>
            © 2022 GPT-3 developed by
            <a href="www.linkedin.com/in/ahmed-azzam-dev">Ahmed Azzam</a>
          </p>
        </div>

        <div className="profile-icons">
          <a href="https://www.linkedin.com/in/ahmed-azzam-dev" target='_blank' rel="noopener noreferrer">
            <AiFillLinkedin className="social-icon" />
          </a>

          <a href="https://github.com/AhmedAzzam-Web" target='_blank' rel="noopener noreferrer">
            <AiFillGithub className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
