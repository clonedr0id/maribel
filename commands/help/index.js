const Embed = require("../../structures/Embed");
const Button = require("../../structures/Button");
const { CommandBuilder } = require("../../structures/SlashCommandBuilder");

module.exports.options = new CommandBuilder()
.name("help")
.desc("General information of LOLO.")
.category("mi cola")
.stringOption("command", "Shows a command info.", false)
.get();

module.exports.run = async(bot, i, data) => {
  const github_b = new Button()
  .label("LOLO's Source Code")
  .style("link")
  .url("https://github.com/clonedr0id/maribel")
  .disabled(false)
  .custom_id("github")
  .get();
  const commands = new Button()
  .label("See the list of commands")
  .style("primary")
  .disabled(false)
  .custom_id("commands")
  .get();
    const embed = new Embed()
    .title("Maribel | Help commmand")
    .desc("Maribel is a general purpose discord bot")
    .field("Campo 1", "Valor 1")
    .field("Campo 2", "Valor 2")
    .field("hola", "adios")
    .color(bot.color)
    .footer("Pie de página")
    .timestamp(new Date())
    .get();
   await i.createMessage({ embeds: [embed] , components: [github_b, commands] })
  }
