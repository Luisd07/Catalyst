import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import TodoOptions from './components/TodoOptions/TodoOptions';
import GeneralOptions from './components/GeneralOptions/GeneralOptions';


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
        withAvatar: false,
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
  ],
};

export default config;