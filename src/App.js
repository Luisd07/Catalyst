import React from 'react';
import './App.css';
import Chatbot from 'react-chatbot-kit'

import actionProvider from './ActionProvider'
import messageParser from './MessageParser'
import config from './Config'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={actionProvider}  messageParser={messageParser}/>
        <p>
          Catalyst
        </p>
      </header>
    </div>
  );
}

export default App;
