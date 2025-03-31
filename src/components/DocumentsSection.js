import React from 'react';
import './Documents.css';

const DocumentsSection = () => {
  return (
    <section className="documents-section">
      <div className="documents-container">
        <h2 className="documents-title">Documents You Must Prepare</h2>
        <ul className="documents-list">
          <li>Team List: A complete list of organizers and team members involved in the hackathon.</li>
          <li>
            Event Budget: Breakdown of all expenses, including food, swag, and venue costs. 
            Get quotes from vendors instead of relying on estimates. 
            <a href="https://docs.google.com/spreadsheets/d/1ADKWatCbC3AhBKlyWOtVSqMcD6O6Y3FcwMTZwynPwDA/edit?gid=1863528508#gid=1863528508" className="document-link" target="_blank" rel="noopener noreferrer">[View Example]</a>
          </li>
          <li>
            Sponsorship Packet: A well-prepared prospectus outlining sponsorship opportunities and benefits.
            <a href="https://github.com/MLH/mlh-hackathon-organizer-guide/tree/master/Organizer-Resources/Previous-Sponsorship-Decks" className="document-link" target="_blank" rel="noopener noreferrer">[View Example]</a>
          </li>
          <li>
            Potential Sponsors List: A curated list of companies and organizations that might be interested in sponsoring the event.
            <a href="https://docs.google.com/spreadsheets/d/1ADKWatCbC3AhBKlyWOtVSqMcD6O6Y3FcwMTZwynPwDA/edit?gid=230161683#gid=230161683" className="document-link" target="_blank" rel="noopener noreferrer">[View Example]</a>
          </li>
          <li>
            Event Schedule: A detailed schedule outlining activities, workshops, and key moments of the hackathon.
            <a href="https://docs.google.com/spreadsheets/d/1e2B4-AYUU3Y0xFmiTGLYfRosP2IdXxF1Ud5GvGh-6cE/edit?gid=0#gid=0" className="document-link" target="_blank" rel="noopener noreferrer">[View Example]</a>
          </li>
          <li>Proof of Venue: An official document from the venue provider confirming the booking for your event.</li>
        </ul>
      </div>
    </section>
  );
};

export default DocumentsSection;
