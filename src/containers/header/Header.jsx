import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="sp_header section__padding" id="home">
    <div className="sp_header-content">
      <h1 className="gradient__text">S P Solutions Point Pvt. Ltd.</h1>
      <p>We coordinate with government and corporate clients to assist them with their outsourcing requirements. We offer the industry’s most complete selections of products, systems, software and services to provide customers comprehensive solutions in Information Technology and System-Hardware.</p>

      <div className="sp_header-content__input">
        <button type="button">Service Request</button>
        <button type="button">Shop</button>
      </div>

    </div>

    <div className="sp_header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
