import React from "react";
import "./brand.css";
import { google, slack, shopify, dropbox, atlassian } from "./imports";

const Brand = () => {
  return (
    <div className="section__padding gpt3__brand">
      <div className='gpt3__brand-box'>
        <img src={google} alt="google" />
      </div>
      
      <div className='gpt3__brand-box'>
        <img src={slack} alt="slack" />
      </div>
      
      <div className='gpt3__brand-box'>
        <img src={atlassian} alt="atlassian" />
      </div>

      <div className='gpt3__brand-box'>
        <img src={dropbox} alt="dropbox" />
      </div>

      <div className='gpt3__brand-box'>
        <img src={shopify} alt="shopify" />
      </div>
      
    </div>
  );
};

export default Brand;
