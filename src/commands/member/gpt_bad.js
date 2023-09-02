const { PREFIX } = require("../../config");
const { gpt_bad } = require("../../services/gpt_bad");

module.exports = {
  name: "gpt_bad",
  description: "Comandos de inteligência artificial!",
  commands: ["bad", "bd"],
  usage: `${PREFIX}bad vai tomar no cu`,
  handle: async ({
    sendSuccessReply,
    sendWaitReply,
    sendSuccessReact,
    args,
  }) => {
    await sendWaitReply();

    await sendSuccessReact();

  const responseText = await gpt_bad(args[0]);

    await sendSuccessReply(responseText);
  },
};
