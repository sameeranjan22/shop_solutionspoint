import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Internet Services',
    text: 'Connectivity, Leased line, ISDN, Broadband -DSL, T1, Satellite, Web Hosting, E-mail, ASP Services, Firewalls, Wireless Connectivity, Cloud Sevices',
  },
  {
    title: 'Networking Services',
    text: 'Voice, Video and Data, CAT 6e and Fiber Cable Installation, Demolition Services, Structured Cable Solutions, Infrastructure Upgrades, Test and Verification, Project Management, Information Management Support, Business Process Reengineering, Systems/Applications Support, Network Systems Design & Integration',
  },
  {
    title: 'Security services',
    text: 'Security Audits, Intrusion Detection Design and Deployment, Document Configuration and Knowledge Transfer, Managed Security Services, Security Policy Design, Security Architecture Design, Firewall Implementation, Anti-Virus Solutions',
  },
  {
    title: 'AMC & On-site Repair of All IT Items',
    text: 'Service Level Agreements, Server & UPS Online-offline, Cloud Solutions, Data Recovery & Disaster Recovery Services',
  },
];

const Features = () => (
  <div className="sp_features section__padding" id="features">
    <div className="sp_features-heading">
      <h1 className="gradient__text">Our Services</h1>
    </div>
    <div className="sp_features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
