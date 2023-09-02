const { PREFIX } = require("../../config");

module.exports = {
  name: "pong",
  description: "Verificar se o bot está online",
  commands: ["pong"],
  usage: `${PREFIX}pong`,
  handle: async ({ sendReply, sendReact }) => {
    await sendReact("🏓");
    await sendReply(`🏓 Ping!`);
  },
};
