import React from "react";

import Options from "../Options/Options";

const ProjectUpdate = props => {
  const options = [
    {
      name: "View new Updates",
      handler: props.actionProvider.handleViewUpdate,
      id: 1
    },
    {
      name: "Make a new update",
      handler: props.actionProvider.handleNewUpdate,
      id: 2
    }
  ];
  return <Options options={options} title="Project Update Options" {...props} />;
};

export default ProjectUpdate;