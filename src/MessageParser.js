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
      message.includes("upcoming events") || 
      message.includes("upcoming") ||
      message.includes("events")
      ) {
      return this.actionProvider.handleUpcomingEvents();
    }

    if (
      message.includes("project update") ||
      message.includes("project") ||
      message.includes("update")
      ) {
      return this.actionProvider.handleProjectUpdate();
    }

    if (
      message.includes("team overview") ||
      message.includes("team") ||
      message.includes("overview")
      ) {
      return this.actionProvider.handleTeamOverview();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;