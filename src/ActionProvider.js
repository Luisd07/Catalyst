class ActionProvider {
    // The action provider receives createChatBotMessage which you can use to define the bots response, and 
    // the setState function that allows for manipulating the bots internal state.
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
    }
  
    handleToDos = () => {
        const messages = this.createChatBotMessage(
            "What would you like to do with your To-Dos?",
            {
                widget: 'TodoOptions',
            }
        );

        this.addMessageToBotState(messages)
    }
  
    handleDefault = () => {
      const messages = this.createChatBotMessage("Input not recognized, please try again.", {
        withAvatar: true,
      });
  
      this.addMessageToBotState(messages)
    };
  
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };
  }
  
  export default ActionProvider;