class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (
      message.toLowerCase().includes("options") ||
      message.toLowerCase().includes("help") ||
      message.toLowerCase().includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.toLowerCase().includes("todo") ||
      message.toLowerCase().includes("to-do") ||
      message.toLowerCase().includes("todos") ||
      message.toLowerCase().includes("to-dos") ||
      message.toLowerCase().includes("to do") ||
      message.toLowerCase().includes("to dos") 
    ) {
      return this.actionProvider.handleToDoOptions();
    }

    if (
      message.toLowerCase().includes("upcoming events") || 
      message.toLowerCase().includes("upcoming") ||
      message.toLowerCase().includes("events")
      ) {
      return this.actionProvider.handleUpcomingEvents();
    }

    if (
      message.toLowerCase().includes("project update") ||
      message.toLowerCase().includes("project") ||
      message.toLowerCase().includes("update")
      ) {
      return this.actionProvider.handleProjectUpdate();
    }

    if (
      message.toLowerCase().includes("team overview") ||
      message.toLowerCase().includes("team") ||
      message.toLowerCase().includes("overview")
      ) {
      return this.actionProvider.handleTeamOverview();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
