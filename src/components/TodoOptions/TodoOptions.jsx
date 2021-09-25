import React from "react";

import Options from "../Options/Options";

const ParkingOptions = props => {
  const options = [
    {
      name: "Add To-do List item",
      handler: props.actionProvider.handleBookParking,
      id: 1
    },
    {
      name: "Manage To-do List",
      handler: props.actionProvider.handleManageParking,
      id: 2
    }
  ];
  return <Options options={options} title="To-do List Options" {...props} />;
};

export default ParkingOptions;