const { connect } = require("./connection");
const { load } = require("./loader");
require("http").createServer((_, res) => res.end("Chronotech ta na ativa!")).listen(8080)
async function start() {
  const bot = await connect();
  load(bot);
}

start();
