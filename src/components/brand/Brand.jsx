import React from 'react';
import { nbcc, ficci, airindia, murugappa, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <>
    <div className="clients">
      <h1>Our Clients</h1>
    </div>
    <div className="sp__brand section__padding">
      <div>
        <img src={nbcc} />
      </div>
      <div>
        <img src={ficci} />
      </div>
      {/* <div>
        <img src={airindia} />
      </div> */}
      <div>
        <img src={murugappa} />
      </div>
      <div>
        <img src={shopify} />
      </div>
      <div>
        <img src={nbcc} />
      </div>
      <div>
        <img src={ficci} />
      </div>
      <div>
        <img src={airindia} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
      <div>
        <img src={nbcc} />
      </div>
      <div>
        <img src={ficci} />
      </div>
      <div>
        <img src={airindia} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  </>
);

export default Brand;
