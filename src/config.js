import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import TodoOptions from './components/TodoOptions/TodoOptions';
import GeneralOptions from './components/GeneralOptions/GeneralOptions';
import TeamOverview from './components/TeamOverview/TeamOverview';
import ProjectUpdate from './components/ProjectUpdate/ProjectUpdate';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
//import KatBotAvatar from './domainComponents/KatBotAvatar';

const config = {
  botName: "Kat",
  lang: "english",
  customComponents: {
    // Replaces the default header
   //header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
   // Replaces the default bot avatar
   // botAvatar: (props) => <KatBotAvatar {...props} />,
 },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      "What would you like to do today?",
      {
        withAvatar: true,
        delay: 500,
      }
    ),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  widgets: [
    {
      widgetName: "TodoOptions",
      widgetFunc: (props) => <TodoOptions {...props} />,
    },
    {
      widgetName: "TeamOverview",
      widgetFunc: (props) => <TeamOverview {...props} />,
    },
    {
      widgetName: "GeneralOptions",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "ProjectUpdate",
      widgetFunc: (props) => <ProjectUpdate {...props} />,
    },
    {
      widgetName: "UpcomingEvents",
      widgetFunc: (props) => <UpcomingEvents {...props} />,
    },
  ],
};

export default config;