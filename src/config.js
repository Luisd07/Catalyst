import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import TodoOptions from './components/TodoOptions/TodoOptions';
import GeneralOptions from './components/GeneralOptions/GeneralOptions';
import TeamOverview from './components/TeamOverview/TeamOverview';
import ProjectUpdate from './components/ProjectUpdate/ProjectUpdate';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';

const config = {
  botName: "Kat",
  lang: "english",
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