import React from 'react';
import Feature from '../../components/feature/Feature';
import './About.css';

const About = () => (
  <div className="gpt3__whatgpt3 section__margin" id="about">
    {/* <div className="gpt3__whatgpt3-feature">
      <Feature title="About Us" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div> */}
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">About Us</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
  </div>
);

export default About;
