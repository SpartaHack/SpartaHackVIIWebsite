import React from "react";
import { Stack } from "react-bootstrap";
import "./ScheduleCard.css";

const ScheduleCard = (props) => {
  return (
    <div className="schedule-card-dots-holder">
      <div className="schedule-dark-overlay">
        <Stack>
          <p className="schedule-dark-overlay-date mx-auto"> {props.date} </p>
          <p className="schedule-dark-overlay-slot-one mx-auto">
            {" "}
            {props.eventOne}{" "}
          </p>
          <p className="schedule-dark-overlay-slot-two mx-auto">
            {" "}
            {props.eventTwo}
          </p>
          <p className="schedule-dark-overlay-slot-three mx-auto">
            {" "}
            {props.eventThree}
          </p>
          <p className="schedule-dark-overlay-slot-four mx-auto">
            {" "}
            {props.eventFour}
          </p>
          <p className="schedule-dark-overlay-slot-five mx-auto">
            {" "}
            {props.eventFive}
          </p>
          <p className="schedule-dark-overlay-slot-six mx-auto">
            {" "}
            {props.eventSix}
          </p>
          <p className="schedule-dark-overlay-slot-seven mx-auto">
            {" "}
            {props.eventSeven}
          </p>
          <div className="schedule-dark-overlay-line-accent ms-auto"></div>
        </Stack>
      </div>

      <div className="schedule-accent-circle"></div>
    </div>
  );
};

export default ScheduleCard;
