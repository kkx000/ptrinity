const { PREFIX } = require("../../config");
const { buyMessage } = require("../../utils/messages");

module.exports = {
  name: "buy",
  description: "Compra e opções de pagamento",
  commands: ["pay", "buy", "pix"],
  usage: `${PREFIX}buy`,
  handle: async ({ sendReply }) => {
    await sendReply(buyMessage());
  },
};
