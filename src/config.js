const path = require("path");

exports.PREFIX = "/";
exports.BOT_EMOJI = "🥸";
exports.BOT_NAME = "CHRONOTECH";

exports.COMMANDS_DIR = path.join(__dirname, "commands");
exports.TEMP_DIR = path.resolve(__dirname, "..", "assets", "temp");

exports.TIMEOUT_IN_MILLISECONDS_BY_EVENT = 100;

exports.OPENAI_API_KEY = "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";
