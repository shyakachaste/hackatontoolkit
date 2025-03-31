import React from 'react';
import './GetInvolved.css';

const GetInvolvedSection = () => {
  return (
    <section className="get-involved-section">
      <div className="get-involved-container">
        <h2 className="get-involved-title"> Get Involved</h2>
        <p className="get-involved-description">
          Help us improve the Hackathon Toolkit by contributing new resources!  
          Like theme generator, document templates, or other helpful tools,  
          your contributions can make hackathon organizing easier for high schoolers everywhere.
        </p>

        <p className="get-involved-description">
          Join <strong>#hackathon-organizers</strong> on Slack, where teenagers from around the world  
          share experiences, ask questions, and support each other in organizing hackathons.  
          Discuss everything from finding a venue to securing sponsorships and more.
        </p>

        <a href="https://hackclub.com/slack" target="_blank" rel="noopener noreferrer" className="join-slack-btn">
          Join us on Slack →
        </a>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
