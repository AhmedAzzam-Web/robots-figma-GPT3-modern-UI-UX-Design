import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

const whatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whatGPT3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on."
        />
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p className="gpt3__whatgpt3-explore-library">Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"
        />
      </div>
    </div>
  );
};

export default whatGPT3;
