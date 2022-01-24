const { Plugin } = require('powercord/entities');
const { getModule } = require("powercord/webpack")
const { selectVoiceChannel } = getModule(["selectVoiceChannel"], false)

module.exports = class moveto extends Plugin {
  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'moveto',
      description: 'move to specified voice channel id',
      usage: '{c} moveto id',
      executor: this.handleCommand.bind(this),
    });
  }

  handleCommand(args) {
    if (args.length < 1)
      return;
    
    selectVoiceChannel(args);

    return {        
        send: false,
        result: `moving to ${args}...`
      };
  }
  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('moveto');
  }
};