import React from "react";

import Options from "../Options/Options";

const UpcomingEvents = props => {
  const options = [
    {
      name: "Add an Upcoming Event",
      handler: props.actionProvider.handleAddEvent,
      id: 1
    },
    {
      name: "View Upcoming Events",
      handler: props.actionProvider.handleViewEvent,
      id: 2
    }
  ];
  return <Options options={options} title="Upcoming Event Options" {...props} />;
};

export default UpcomingEvents;