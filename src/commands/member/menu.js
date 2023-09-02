const { PREFIX } = require("../../config");
const { menuMessage } = require("../../utils/messages");

module.exports = {
  name: "menu",
  description: "Menu de comandos",
  commands: ["menu", "help", "trinity"],
  usage: `${PREFIX}menu`,
  handle: async ({ sendReply }) => {
    await sendReply(menuMessage());
  },
};
