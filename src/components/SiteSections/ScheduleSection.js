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
            date="Apr 8th"
            eventOne="5-8PM | Sponsor Check-in | Bus Loop Stairwell"
            eventTwo="6-8:30PM | Hacker Check-in | B115"
            eventThree="7-8PM | Dinner | B Atrium"
            eventFour="8:30PM | Late Check-in | A136"
            eventFive="9-10:30PM | Opening Ceremony | B115"
            eventSix="10:30-11:30PM | Team Forming | B106"
            eventSeven="10PM | Hardware Lab Opens | A136"
            eventEight="10:30-12PM | AI Club Tech Talk | B117"
            eventNine=""
            eventTen=""

          />
          <ScheduleCard
            date="Apr 9th"
            eventOne="12AM | Hacking Begins"
            eventTwo="12:30-1:00AM | Midnight Snack | Hacker Lounge"
            eventThree="1:00AM | Nap Rooms Open | 3rd floor A Wing"
            eventFour="1-2AM | Google Cloud Platform | B117"
            eventFive="2-3AM | Career QA w/Steven Kneiser | B117"
            eventSix="3-5AM | Shrek 1 | B119"
            eventSeven="7-9AM | Breakfast | A120"
            eventEight="10-11AM | Jun Wang Tech Talk | B119"
            eventNine="12-1PM | Lunch by ASMSU & MSUFCU | B Atrium"
            eventTen=""
          />
          <ScheduleCard
            date="Apr 9th (Part 2)"
            eventOne="1-2PM | SpartaSoft Talk | B119"
            eventTwo="2-3PM | Web Apps Talk (KL&A) | B117"
            eventThree="4:30-5:30PM | Fatima Taj Talk | CANCELED"
            eventFour="6-7PM | Dinner by Ford | B Atrium"
            eventFive="7-9PM | Meditation Room | B106"
            eventSix="8-9PM | MLH CUP Stacking | B117"
            eventSeven="9-10PM | Smash Bros Tourney | B119"
            eventEight="10:30-11:30PM | Chess Tourney  | B117"
            eventNine="11:30 PM -1AM | Shrek 2 | B119"
            eventTen=""
          />
          <ScheduleCard
            date="Apr 10th"
            eventOne="12AM | Midnight Snack | B Atrium"
            eventTwo="12:30-5:30AM | Saurik | B117"
            eventThree="7-9AM | Breakfast | A120"
            eventFour="8-9AM | Devpost Info Session | B117"
            eventFive="10-12PM | Judge Registration | A136"
            eventSix="12PM | Hacking Ends"
            eventSeven="12PM-1PM | Lunch | A120"
            eventEight="12:45PM | Judging Assignments | A136"
            eventNine="1-3:30PM | Hack Expo | B Hallway & Atrium"
            eventTen="4-5:30PM | Closing Ceremony | B115"
          />
        </div>
      </Container>
    </div>
  );
};

export default ScheduleSection;
