import React from "react";

import Options from "../Options/Options";

const GeneralOptions = props => {
  const options = [
    { name: "Todos",
      handler: props.actionProvider.handleTodoOptions,
      id: 1
    },
    { name: "Team Overview",
     handler: props.actionProvider.handleTeamOverview,
      id: 2 
    },
    { name: "View Upcoming Events",
      handler: props.actionProvider.handleUpcomingEvents,
      id: 3
    },
    { name: "Daily Outlook",
      handler: props.actionProvider.handleDailyOutlook,
      id: 4
    },
    { name: "Project Update",
      handler: props.actionProvider.handleProjectUpdate,
      id: 5
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;