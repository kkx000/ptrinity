const { PREFIX } = require("../../config");
const { gpt4p } = require("../../services/gpt4p");

module.exports = {
  name: "gn",
  description: "Comando de inteligência artificial do chat gpt4!",
  commands: ["gnp"],
  usage: `${PREFIX}ct com quantos paus se faz uma canoa?`,
  handle: async ({
    sendSuccessReply,
    sendWaitReply,
    sendSuccessReact,
    args,
  }) => {
    await sendWaitReply();

    await sendSuccessReact();

    const responseText = await gpt4p(args[0]);

    await sendSuccessReply(responseText);
  },
};
