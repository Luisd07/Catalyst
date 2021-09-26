import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';

import config from "./config";
import MessageParser from "./messageParser";
import ActionProvider from "./actionProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </header>
    </div>
  );
}

export default App;
