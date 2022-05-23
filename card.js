#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const data = {
  name: chalk.bold.white("      Maicom chagas             👍( ͡❛ ͜ʖ ͡❛)👍"),
  title: chalk.bold.white("Estudante de Front end"),
  Instagram: chalk.hex("#787878")(
    "https://www.instagram.com/maicomchagass/?hl=pt-br"
  ),
  github: chalk.hex("#787878")("https://github.com/harshhhdev"),
  linkedin: chalk.hex("#787878")(
    "https://www.linkedin.com/in/maicom-chagas-358333239/"
  ),
  npx: chalk.hex("#00AB9E")(" npx maicom"),
  labelname: chalk.hex("#00AB9E").bold("          Name:"),
  labeltitle: chalk.hex("#00AB9E").bold("          title:"),
  labelinstagram: chalk.hex("#00AB9E").bold("      Instagram:"),
  labelGitHub: chalk.hex("#00AB9E").bold("         GitHub:"),
  labellinkedin: chalk.hex("#00AB9E").bold("       Linkedin:"),
  labelCard: chalk.hex("#FFF976").bold("                  Card:"),
};

const me = boxen(
  [
    `${data.labelname} ${data.name}`,
    `${data.labeltitle} ${data.title}`,
    `${data.labelinstagram} ${data.Instagram}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labellinkedin}  ${data.linkedin}`,
    `${data.labelCard}  ${data.npx}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "#004FF5",
  }
);

console.log(me);
