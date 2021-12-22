import React from "react";
import "./HomeSection.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import MainBackground from "../MainBackground"
import ScheduleSection from "./ScheduleSection";
import SponsorsSection from "./SponsorsSection";
import FAQSection from "./FAQSection";
// import FooterSection from "./FooterSection";

// Top most section of the Home Page 

const HomeSection = () => {
  const history = useHistory();
  const authenticationButtonHandler = () => history.push("/signup");

  return (
    <div className="sections-holder">
      <MainBackground>
        <div className="HeroContent">

          {/* Main Logo  */}
          <svg
            className="ShMainLogo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 529.1 164.57"
          >
            <defs>
              <linearGradient
                id="main_sh_logo_svg__linear-gradient"
                x1={135.58}
                y1={101.36}
                x2={522.45}
                y2={101.36}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.03} stopColor="#fde2e3" />
                <stop offset={0.07} stopColor="#f9b9bb" />
                <stop offset={0.12} stopColor="#f69397" />
                <stop offset={0.18} stopColor="#f47378" />
                <stop offset={0.24} stopColor="#f2575d" />
                <stop offset={0.3} stopColor="#f04148" />
                <stop offset={0.38} stopColor="#ef3138" />
                <stop offset={0.48} stopColor="#ee252c" />
                <stop offset={0.62} stopColor="#ed1e26" />
                <stop offset={1} stopColor="#ed1c24" />
              </linearGradient>
              <style>
                {
                  ".main_sh_logo_svg__cls-1,.main_sh_logo_svg__cls-2,.main_sh_logo_svg__cls-3,.main_sh_logo_svg__cls-4,.main_sh_logo_svg__cls-5,.main_sh_logo_svg__cls-7{fill:none}.main_sh_logo_svg__cls-1,.main_sh_logo_svg__cls-3,.main_sh_logo_svg__cls-5{stroke:#fff}.main_sh_logo_svg__cls-1,.main_sh_logo_svg__cls-7{stroke-width:4.34px}.main_sh_logo_svg__cls-2,.main_sh_logo_svg__cls-4,.main_sh_logo_svg__cls-7{stroke:#231f20}.main_sh_logo_svg__cls-2{stroke-width:3.74px}.main_sh_logo_svg__cls-3{stroke-width:4.51px}.main_sh_logo_svg__cls-4{stroke-width:4.39px}.main_sh_logo_svg__cls-5{stroke-width:6.51px}.main_sh_logo_svg__cls-14{letter-spacing:.26em}.main_sh_logo_svg__cls-15{letter-spacing:.24em}.main_sh_logo_svg__cls-21{letter-spacing:.2em}.main_sh_logo_svg__cls-24{letter-spacing:.26em}"
                }
              </style>
            </defs>
            <g id="main_sh_logo_svg__Layer_2" data-name="Layer 2">
              <g id="main_sh_logo_svg__Layer_1-2" data-name="Layer 1">
                <path
                  className="main_sh_logo_svg__cls-1"
                  d="M137.12 99.68a50.36 50.36 0 00-26-44.07M90.24 104.09V30.4v73.69l21.26-75.38-21.26 75.38 32.71-73.39-32.71 73.39 27.82-80.74-27.82 80.74M88.79 104.09L15.68 34.42"
                />
                <path
                  className="main_sh_logo_svg__cls-2"
                  d="M88.74 105.49l28.36-73.43z"
                />
                <path
                  className="main_sh_logo_svg__cls-1"
                  d="M88.79 104.09l-2.43-78.41M88.79 104.09L28.23 42.91"
                />
                <path
                  className="main_sh_logo_svg__cls-3"
                  d="M88.79 104.09L72.03 20.14"
                />
                <path
                  className="main_sh_logo_svg__cls-1"
                  d="M89.74 105.49l10.23-77.04-10.23 77.04 12.08-71.07M88.79 104.09l34.16-82.41"
                />
                <path
                  className="main_sh_logo_svg__cls-4"
                  d="M117.9 31.06L100.98 72.5M112.2 36.19l-9.22 32.49"
                />
                <path
                  className="main_sh_logo_svg__cls-3"
                  d="M72.51 16.84l16.28 86.25"
                />
                <path
                  className="main_sh_logo_svg__cls-5"
                  d="M65.88 93.84L26.06 74.13m39.82 19.71l-54.23-22m54.23 22L14.28 77.3"
                />
                <path
                  d="M77.47 98.06L14 87.3m63.47 10.76l-69.8-7.14"
                  strokeWidth={4.24}
                  stroke="#fff"
                  fill="none"
                />
                <path
                  className="main_sh_logo_svg__cls-5"
                  d="M65.8 115.62l-39.87 16.45m39.87-16.45l-50.92 25.94m50.92-25.94L6.85 152"
                />
                <path
                  className="main_sh_logo_svg__cls-1"
                  d="M1.16 161.07l76.66-48.48-54.13 39.31M87.14 99l-53.49 10.92M87.14 99l-55.93 14.85M87.14 99l-52.49 16.57"
                />
                <path
                  className="main_sh_logo_svg__cls-7"
                  d="M61.87 117.75L19.12 142.5zM30.04 141.21l35.42-23.37"
                />
                <path
                  className="main_sh_logo_svg__cls-1"
                  d="M19.11 104.27l67.25-4-59.39 7M81.49 94.43L28.23 39.18m53.26 55.25l-38.3-45.68m38.3 45.68l-43.92-60M77.39 92L10.1 35m67.29 57L21 49.67M77.39 92L34 64.08M77.39 92L21.05 61.14"
                />
                <path
                  d="M83 90.51L26.79 48.16M83 90.51L39.69 62.57M83 90.51L26.84 59.62M83 90.51L30.2 66.29"
                  strokeWidth={4.33}
                  stroke="#fff"
                  fill="none"
                />
                <path
                  className="main_sh_logo_svg__cls-2"
                  d="M72 86.3L30.39 54.22M72 86.3L41.25 66.85M72 86.3L45.74 63.24l-26.3-23.06M72 86.3L51 63.24"
                />
                <path
                  className="main_sh_logo_svg__cls-1"
                  d="M88.74 105.49L56.28 45.05m32.46 60.44l-33-69.3m33 69.3l-24.42-60.9m24.42 60.9L69.33 46.83"
                />
                <path
                  className="main_sh_logo_svg__cls-3"
                  d="M88.17 87.65l-6.08-71.49m6.08 71.49L75.18.33m13 87.32l-13-71m13 71L68.59 13.46"
                />
                <path
                  className="main_sh_logo_svg__cls-4"
                  d="M29.85 79.25l58.93 24.84-67.73-26.03M81.24 27.82l5.32 59.57-8.86-63.55"
                />
                <circle
                  cx={87.75}
                  cy={99.19}
                  r={41.2}
                  fill="#231f20"
                  strokeWidth={4.34}
                  stroke="#fff"
                />
                <path
                  transform="rotate(-43.43 73.725 134.326)"
                  fill="#231f20"
                  d="M42.02 122.71h63.43v23.24H42.02z"
                />
                <circle
                  className="main_sh_logo_svg__cls-7"
                  cx={87.75}
                  cy={99.19}
                  r={45.54}
                />
                <path
                  className="main_sh_logo_svg__cls-1"
                  d="M44.12 149.1l44.71-41.74L103 122.47"
                />
                <path
                  fill="url(#main_sh_logo_svg__linear-gradient)"
                  d="M135.58 99.53h386.86v3.66H135.58z"
                />
                <text
                  transform="translate(154.01 89.04)"
                  fill="#fff"
                  fontSize={33}
                  fontFamily="Helvetica Neue"
                  fontWeight={300}
                  letterSpacing=".26em"
                >
                  {"S"}
                  <tspan x={27.39} y={0} letterSpacing=".2em">
                    {"P"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-14" x={53.99} y={0}>
                    {"A"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-15" x={85.73} y={0}>
                    {"R"}
                  </tspan>
                  <tspan x={114.54} y={0} letterSpacing=".2em">
                    {"T"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-14" x={139.75} y={0}>
                    {"AH"}
                  </tspan>
                  <tspan x={204.33} y={0} letterSpacing=".24em">
                    {"A"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-14" x={235.49} y={0}>
                    {"C"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-15" x={266.9} y={0}>
                    {"K"}
                  </tspan>
                  <tspan x={297.69} y={0} letterSpacing=".24em" />
                  <tspan className="main_sh_logo_svg__cls-14" x={313.8} y={0}>
                    {"VII"}
                  </tspan>
                </text>
                <text
                  transform="translate(139.12 121.74)"
                  fontSize={10}
                  fontFamily="Helvetica Neue"
                  fontWeight={700}
                  letterSpacing=".26em"
                  fill="#fff"
                >
                  {"MICHIGAN "}
                  <tspan x={78.93} y={0} letterSpacing=".24em">
                    {"S"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-21" x={87.27} y={0}>
                    {"TA"}
                  </tspan>
                  <tspan x={104.29} y={0}>
                    {"TE UNIVERSI"}
                  </tspan>
                  <tspan x={193.9} y={0} letterSpacing=".24em">
                    {"T"}
                  </tspan>
                  <tspan x={202.15} y={0}>
                    {"Y\u2019S OFFICIA"}
                  </tspan>
                  <tspan x={289.05} y={0} letterSpacing=".23em">
                    {"L"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-24" x={296.63} y={0}>
                    {" H"}
                  </tspan>
                  <tspan x={311.89} y={0} letterSpacing=".24em">
                    {"A"}
                  </tspan>
                  <tspan x={321.56} y={0}>
                    {"C"}
                  </tspan>
                  <tspan x={331.08} y={0} letterSpacing=".24em">
                    {"K"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-21" x={340.63} y={0}>
                    {"A"}
                  </tspan>
                  <tspan className="main_sh_logo_svg__cls-24" x={349.88} y={0}>
                    {"THON"}
                  </tspan>
                </text>
              </g>
            </g>
          </svg>

          {/* Date */}
          <h3 className="Date"> January 28-30, 2022</h3>
          {/* Location */}
          <h3 className="Location"> Wells Hall | MSU</h3>

          <Button
            variant="danger"
            size="lg"
            onClick={authenticationButtonHandler}
            style={{ fontFamily: "Montserrat", fontWeight: "bold" }}
          >
            Sign Up/Log In
          </Button>

          <h3 className="scroll"> Scroll</h3>

          <svg
            className="ScrollIndicator"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            color="red"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </MainBackground>
      <ScheduleSection/>
      <FAQSection/>
      <SponsorsSection/>
      {/* <FooterSection/> */}
    </div>
  );
};

export default HomeSection;
