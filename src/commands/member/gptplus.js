const { PREFIX } = require("../../config");
const { gptp } = require("../../services/gptp");

module.exports = {
  name: "gpt",
  description: "Comandos de inteligência artificial!",
  commands: ["ctp"],
  usage: `${PREFIX}ct com quantos paus se faz uma canoa?`,
  handle: async ({
    sendSuccessReply,
    sendWaitReply,
    sendSuccessReact,
    args,
  }) => {
    await sendWaitReply();

    await sendSuccessReact();

    const responseText = await gptp(args[0]);

    await sendSuccessReply(responseText);
  },
};
