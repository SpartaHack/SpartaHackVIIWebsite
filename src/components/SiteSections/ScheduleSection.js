import React from "react";
import "./ScheduleSection.css";
import ScheduleCard from "../ScheduleCard";
import { Container } from "react-bootstrap";

const ScheduleSection = () => {
  return (
    <div className="schedule-section" id="Schedule">
      <Container className="schedule-section-container pt-5">
        <div className="schedule-header-underline-container">
          <p className="schedule-header-text"> Schedule</p>
          <div className="schedule-header-text-underline"></div>
        </div>
        <div className="schedule-cards-holder">
          {/* <ScheduleCard
            date="Jan 28th"
            eventOne="5:00 PM - Check-In"
            eventTwo="5:30 PM - Kickoff Event"
            eventThree="6:00 PM - Sponsor Fair"
            eventFour="7:00 PM - Dinner"
            eventFive="8:00 PM - Social Events"
            eventSix="9:00 PM - Team Formation"
            eventSeven="9:30 PM - Hacking Begins!"
          />
          <ScheduleCard
            date="Jan 29th"
            eventOne="9:00 AM - Breakfast"
            eventTwo="10:00 AM - Keynotes"
            eventThree="12:00 PM  - Lunch"
            eventFour="1:00 PM - Keep Hacking!"
            eventFive="7:00 PM - Dinner"
            eventSix=""
            eventSeven=""
          />
          <ScheduleCard
            date="Jan 30th"
            eventOne="9:00 AM - Breakfast"
            eventTwo="10:00 AM - Hacking Ends"
            eventThree="12:00 PM - Lunch"
            eventFour="9:00 AM - Judging"
            eventFive="9:00 AM - Closing Event"
            eventSix=""
            eventSeven=""
          /> */}
          <ScheduleCard
            date="Jan 28th"
            eventOne="Coming Soon!"
            eventTwo=""
            eventThree=""
            eventFour=""
            eventFive=""
            eventSix=""
            eventSeven=""
          />
          <ScheduleCard
            date="Jan 29th"
            eventOne="Coming Soon!"
            eventTwo=""
            eventThree=""
            eventFour=""
            eventFive=""
            eventSix=""
            eventSeven=""
          />
          <ScheduleCard
            date="Jan 30th"
            eventOne="Coming Soon!"
            eventTwo=""
            eventThree=""
            eventFour=""
            eventFive=""
            eventSix=""
            eventSeven=""
          />
        </div>
      </Container>
    </div>
  );
};

export default ScheduleSection;