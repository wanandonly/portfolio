import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Pandas",
  "Selenium",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill"></div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
