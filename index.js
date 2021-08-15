#!/usr/bin/env node
import chalk from "chalk";
import { projectBuilder } from "./builder.js";
import { checkPath, commandRunner, getNewPath } from "./helpers.js";

(async () => {
  const args = process.argv.slice(2);
  if (args.length == 1) {
    if (args[0] === "builder") {
      projectBuilder();
    }
    return;
  }
  const validPath = checkPath(args[0] + "/package.json");
  if (!validPath) {
    console.log(chalk.white.bgRed("Your Path is not valid"));
    var { newPath } = await getNewPath();
    args[0] = newPath;
  }
  commandRunner(args[0], args.slice(1));
})();
