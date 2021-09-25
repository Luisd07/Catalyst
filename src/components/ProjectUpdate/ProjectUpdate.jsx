import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import "./ProjectUpdate.css";

const ProjectUpdate = ({ selectedProject, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [projects, setProjects] = useState([]);

  const ProjectUpdate = [
    {
      iata: "OSL",
      nameCompact: "Oslo",
    },
    {
      iata: "BOO",
      nameCompact: "Bodo",
    },
    {
      iata: "BGO",
      nameCompact: "Bergen",
    },
    {
      iata: "KRS",
      nameCompact: "Kristiansand",
    },
    {
      iata: "SVG",
      nameCompact: "Stavanger",
    },
    {
      iata: "TOS",
      nameCompact: "Tromso",
    },
    {
      iata: "TRD",
      nameCompact: "Trondheim",
    },
    {
      iata: "AES",
      nameCompact: "Alesund",
    },
  ];

  useEffect(() => {
    setProjects(ProjectUpdate);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedProjects: projects.find(
        (project) => project.iata === e.target.value
      ),
    }));
  };

  const handleConfirm = () => {
    actionProvider.handleOptions();
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!projects) return null;

  const createProjectOptions = () => {
    return projects.map((item) => {
      return (
        <option key={item.iata} value={item.iata}>
          {item.nameCompact}
        </option>
      );
    });
  };

  return (
    <div className="project-selector-container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}
            <h2 className="project-selector-heading">Project</h2>
            <select
              className="project-selector"
              value={selectedProject.iata}
              onChange={handleSubmit}
            >
              {createProjectOptions()}
            </select>
            <button className="Project-button-confirm" onClick={handleConfirm}>
              Confirm
            </button>
          </>
        }
        elseShow={
          <>
            <h2 className="project-selector-heading">Project</h2>
            <p>
              Great! You have chosen this Project: {selectedProject.nameCompact}
            </p>
          </>
        }
      />
    </div>
  );
};

export default ProjectUpdate;