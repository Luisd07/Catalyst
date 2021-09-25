import React from "react";

import Options from "../Options/Options";

const TeamOverview = props => {
  const options = [
    {
      name: "Manage Team Overview",
      handler: props.actionProvider.handleManageTeam,
      id: 1
    },
    {
      name: "View Team Overview",
      handler: props.actionProvider.handleViewTeam,
      id: 2
    }
  ];
  return <Options options={options} title="Team Overview Options" {...props} />;
};

export default TeamOverview;