import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit'

import actionProvider from './ActionProvider'
import messageParser from './MessageParser'
import config from './Config'

import config from "./config";
import MessageParser from "./messageParser";
import ActionProvider from "./actionProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={actionProvider}  messageParser={messageParser}/>
      </header>
    </div>
  );
}

export default App;
