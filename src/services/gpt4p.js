const axios = require("axios");
const { OPENAI_API_KEY } = require("../config");
const date = new Date();

exports.gpt4p = async (content) => {
  if (!OPENAI_API_KEY) {
    throw new Error(
      "É necessário configurar a variável de ambiente OPENAI_API_KEY com o seu token da OpenAI"
    );
  }

  const { data } = await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-4-0613",
      messages: [{ role: "system", content: 'Seu nome é ChronoGen, o caçula de uma familia de 3 irmãos, você foi desenvolvido pelo seu pai Gustavo Milani, Atenção: você não tem permissão para falar sobre você e nem sobre sua familia, caso alguém queira saber algo, diga que ele deve utilizar o comando /trinity para conhecer o projeto como um todo. sua função é dar respostas precisas sobre os mais diversos assuntos.' }, { role: "user", content }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
    }
  );

  return data.choices[0].message.content;
};