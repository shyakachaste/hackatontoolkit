import React from 'react';
import './SponsorContacts.css';

const sponsors = [
  { name: "Google", link: "https://www.google.com/nonprofits/" },
  { name: "Yubico", link: "https://www.yubico.com/why-yubico/secure-it-forward/" },
  { name: "Hack Club", link: "https://hackclub.com" },
  { name: "Desmos", link: "mailto:support@desmos.com" },
  { name: "DigitalOcean", link: "mailto:sponsorships@digitalocean.com" },
  { name: "Wolfram", link: "https://www.wolfram.com/hackathons/sponsor-request/" },
  { name: "Code Crafters", link: "mailto:thea@codecrafters.io" },
  { name: "Interview Cake", link: "mailto:yourfriends@interviewcake.com" },
  { name: ".XYZ", link: "https://forms.clickup.com/f/24dah-2737/KW96U8I4VU1CDZOFCF?genxyz= " },
];

const SponsorContacts = () => {
  return (
    <section className="sponsor-section">
      <div className="sponsor-container">
        <h2 className="sponsor-title">Contacting Sponsors</h2>
        <p className="sponsor-description">
          Need sponsors for your hackathon? Here are some companies that often support student-led events:
        </p>
        <ul className="sponsor-list">
          {sponsors.map((sponsor, index) => (
            <li key={index} className="sponsor-item">
              {sponsor.name}:
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                {sponsor.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SponsorContacts;
