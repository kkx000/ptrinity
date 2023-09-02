const { PREFIX } = require("../../config");
const { gpt4 } = require("../../services/gpt4");

module.exports = {
  name: "gn",
  description: "Comando de inteligência artificial do chat gpt4!",
  commands: ["gn"],
  usage: `${PREFIX}ct com quantos paus se faz uma canoa?`,
  handle: async ({
    sendSuccessReply,
    sendWaitReply,
    sendSuccessReact,
    args,
  }) => {
    await sendWaitReply();

    await sendSuccessReact();

    const responseText = await gpt4(args[0]);

    await sendSuccessReply(responseText);
  },
};
