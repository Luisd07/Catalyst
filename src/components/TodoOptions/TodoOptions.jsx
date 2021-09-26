import React from "react";

import Options from "../Options/Options";

const TodoOptions = props => {
  const options = [
    {
      name: "Manage To Do List",
      handler: props.actionProvider.handleManageToDo,
      id: 1
    },
    {
      name: "View To Do List",
      handler: props.actionProvider.handleViewToDo,
      id: 2
    }
  ];
  return <Options options={options} title="To Do List Options" {...props} />;
};

export default TodoOptions;
