import React from "react";
import "./footerLinks.css";

const FooterLinks = ({ title, links }) => {
  return (
    <>
      <h4 className="gpt3__footer-ul-header">{title}</h4>

      <ul>
        {links.map((link, index) => (
          <li className="gpt3__footer-ul-link" key={index}>
            <a href={`#${Object.values(link)}`}>{Object.keys(link)}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(FooterLinks);
