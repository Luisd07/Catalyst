class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("todo") ||
      message.includes("To-do") ||
      message.includes("to-do") ||
      message.includes("todos") ||
      message.includes("to-dos")
    ) {
      return this.actionProvider.handleToDoOptions();
    }

    if (
        message.includes("team overview") || 
        message.includes("team") ||
        message.includes("overview")
        ) {
      return this.actionProvider.handleTeamOverview();
    }

    if (message.includes("flights") || message.includes("flight")) {
      return this.actionProvider.handleFlightsChoice();
    }

    if (message.includes("airport")) {
      return this.actionProvider.handleAirport();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }

  containsFlightId = (message) => {
    const regexp = /[A-Z]{2,}[0-9]{2,}/gim;
    return message.match(regexp);
  };
}

export default MessageParser;