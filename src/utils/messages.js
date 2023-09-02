const { BOT_NAME, PREFIX } = require("../config");

exports.waitMessage = "";

exports.menuMessage = () => {
  const date = new Date();

  return `*👋 Saudações! Que alegria receber você na família Chrono.*

*🤖 Estamos à disposição para lhe proporcionar um atendimento de excelência. Com quem você gostaria de se comunicar hoje?*

_🧑🏻❇️ ChronoTech, irmão mais velho_ *(GPT - 3.5-TURBO)*
_👦🏼❎ ChronoBad, irmão do meio_ *(GPT - BAD EDITION)*
_👦🏻✳️ ChronoGen, irmão caçula_ *(GPT - 4)*

*⚠️ Por favor, tenha cuidado ao utilizar o ChronoBad, ele possui linguagem imprópria e resultados informais, se você busca respostas mais concretas recomendo o ChronoTech ou ChronoGen. ⚠️*

*🌐Agora que ja conhecem a família, me diga, qual você gostaria de utilizar no momento?*

*🛜 /ct para chronotech*

*🛜 /bd para chronobad*

*🛜 /gn para chronogen*

*⚠️Após digitar o comando, adicione o conteúdo que deseja enviar⚠️*

*Ex:* /ct qual a capital do brasil?`;
};

exports.buyMessage = () => {
  const date = new Date();

  return ` 💼🤖 *Projeto Trinity* 🚀💻

Olá! O Projeto Trinity, um importante avanço no campo das inteligências artificiais, tem um valor bem acessível para usuários que desejam usa-lo em seu Whatsapp! 📱💬

O custo mensal por usuário é de R$15,00 💰 uma quantia bastante justa para explorar os vasto conhecimento deste projeto inovador.👌🎯

E sabe o que é melhor? Você tem a liberdade de escolher a melhor forma de pagamento de acordo com a sua conveniência! 💳📲

Aceitamos pagamentos através de PIX ou Cartão de Crédito. Ambas as opções seguras, rápidas e confiáveis, garantindo a satisfação do nosso cliente. 🔐👍

Portanto, não perca tempo! Seja parte do Projeto Trinity e veja a diferença que uma IA pode fazer no seu dia a dia. Esperamos vê-lo a bordo desta incrível jornada! 🌍🚀`;
};
