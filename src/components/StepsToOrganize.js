import React from 'react';
import './StepsToOrganize.css';

const StepsToOrganize = () => {
  const steps = [
    {
      title: "Define Your Hackathon's Purpose",
      description: "Decide on the theme, target audience, and goals. Will it be a beginner-friendly event, or focused on solving a specific problem?",
    },
    {
      title: "Assemble Your Organizing Team",
      description: "You'll need a team for logistics, marketing, sponsorships, technical support, and judging.",
    },
    {
        title: "Choose a Venue & Date",
        description: "Decide if your event will be in-person or online. Book a venue or set up a virtual platform.",
      },
    {
      title: "Secure Sponsorships & Budget",
      description: "Find sponsors for prizes, food, and venue costs. Create a sponsorship prospectus outlining why companies should support your event.",
    },
    {
      title: "Plan the Hackathon Structure",
      description: "Set the event timeline, workshops, mentorship sessions, and judging criteria.",
    },
    {
      title: "Set Up Registration & Promotion",
      description: "Create a website and promote your hackathon through social media, school communities, and hackathon directories.",
    },
    {
      title: "Prepare Logistics & Tech Setup",
      description: "Ensure you have internet access, hardware, tools, and software ready for participants.",
    },
    {
      title: "Run the Hackathon!",
      description: "Kick off with an opening ceremony, provide mentorship, track projects, and ensure a smooth experience.",
    },
    {
      title: "Judging & Awards Ceremony",
      description: "Have judges review projects, announce winners, and celebrate participants' hard work.",
    },
    {
      title: "Post-Hackathon Follow-Up",
      description: "Send thank-you emails, gather feedback, and share highlights from the event.",
    },
  ];

  return (
    <section className="steps-section">
      <div className="steps-container">
        <h2 className="steps-title">Steps to Organize a Hackathon</h2>
        <div className="steps-list">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <span className="step-number">{index + 1}</span>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsToOrganize;
