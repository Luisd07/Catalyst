class ActionProvider {
    // The action provider receives createChatBotMessage which you can use to define the bots response, and 
    // the setState function that allows for manipulating the bots internal state.
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage
    }
  
    handleToDoOptions = () => {
        const messages = this.createChatBotMessage(
            "What would you like to do with your To-Dos?",
            {
                widget: 'TodoOptions',
            }
        );

        this.addMessageToBotState(messages)
    };

    handleTeamOverview = () => {
        const messages = this.createChatBotMessage(
            "That sounds Purrfect, here are some of the available options!",
            {
                widget: 'TeamOverview',
            }
        );

        this.addMessageToBotState(messages)
    };
  
    handleDefault = () => {
      const messages = this.createChatBotMessage("Something isnt right, please try again!", 
      { withAvatar: true, }
      
      );
  
      this.addMessageToBotState(messages)
    };

    handleOptions = (GeneralOptions) => {
        const messages = this.createChatBotMessage(
            "Humans are confusing when they talk like this. Here are some options, Meow!",
            {
                widget: "GeneralOptions",
                loading: true,
                terminateloading: true,
                ...GeneralOptions,
            }
        );

        this.addMessageToBotState(messages)
    };

    handleProjectUpdate = () => {
        const messages =this.createChatBotMessage(
            "Here are you project options!",
            {
                widget: "ProjectUpdate",
                loading: true,
                terminateloading: true,
            }
        );

        this.addMessageToBotState(messages)
    };

    handleUpcomingEvents = () => {
        const messages = this.createChatBotMessage(
            "Upcoming event options",
            {
                widget: "UpcomingEvents",
                loading: true,
                terminateloading: true,
            }
        );
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