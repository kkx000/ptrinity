const { PREFIX } = require("../../config");
const { gpt } = require("../../services/gpt")


module.exports = {
  name: "gpt",
  description: "Comandos de inteligência artificial!",
  commands: ["ct", "pov", "CT", "Ct", "cT", "Pov", "POV"],
  usage: `${PREFIX}ct com quantos paus se faz uma canoa?`,
  handle: async ({
    sendSuccessReply,
    sendWaitReply,
    sendSuccessReact,
    args,
  }) => {
    await sendWaitReply();

    await sendSuccessReact();

    const responseText = await gpt(args[0]);

    await sendSuccessReply(responseText);
  },
};
