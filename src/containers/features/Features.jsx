import React from "react";
import Feature from "../../components/feature/Feature";
import './features.css'

const featuresData = [
  {
    id: 1,
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    id: 2,
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    id: 3,
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    id: 4,
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h2 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>

        <h4>Request Early Access to Get Started</h4>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((feature) => (
          <Feature {...feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default Features;
