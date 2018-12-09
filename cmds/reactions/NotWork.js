const Command = require('../BaseCmd')
const ioTools = new (require('../../util/IOTools'))()

class NotWork extends Command {
  constructor (client) {
    super(client, {
      name: 'notwork',
      memberName: 'notwork',
      group: 'reactions',
      description: 'Returns a random not working image/gif.',
      aliases: ['nowork', 'not-work', 'no-work'],
      examples: ['+nowork', '+notwork @Alcha#0042']
    })
  }

  async run (msg, args) {
    ioTools.getRandomImage('not_working', args).then(image => {
      Command.sendMessage(msg.channel, '', this.client.user, { files: [image] })
    })
  }
}

module.exports = NotWork
