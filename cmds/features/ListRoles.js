const Command = require('../BaseCmd')
const mongo = new (require('../../util/db/MongoTools'))()

class GetRoles extends Command {
  constructor (client) {
    super(client, {
      name: 'list-roles',
      group: 'features',
      memberName: 'list-roles',
      description: 'List the available roles to join for this server.',
      examples: ['+list-roles']
    })
  }

  async run (msg, args) {
    let roles = await mongo.getAvailableRoles(msg.guild.id)
    let content = ''

    if (roles.length !== 0) {
      content = 'Available Roles:\n' + '```markdown\n'

      roles.forEach(val => {
        content += `- ${val.name}\n`
      })

      content += '```'
    } else content = 'There are no roles currently available for this server.'

    return Command.sendMessage(msg.channel, content, this.client.user)
  }
}

module.exports = GetRoles
