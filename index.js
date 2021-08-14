#!/usr/bin/env node
import { findCommand } from "./options.js";
import { execSync } from "child_process";
import { existsSync } from "fs";
import prompts from "prompts";
import chalk from "chalk";

function checkPath(dirPath) {
  if (existsSync(dirPath)) return false;
  return true;
}

const getNewPath = async () => {
  const response = await prompts({
    type: "text",
    name: "newPath",
    message: "Enter a new Project name or Path",
    validate: (path) =>
      checkPath(path + "/package.json") ? true : `Path still not valid`,
  });
  return response;
};

const builderMap = {
  React: "cra ",
  "React Native": "rn ",
  Next: "cna ",
  Angular: "ng ",
  Vue: "vue ",
  Preact: "preact ",
  Gatsby: "gatsby ",
  Nest: "nest ",
  Express: "express ",
  VanillaJS: "vanilla ",
  "Lit Element": "lit ",
};

const projectBuilder = async () => {
  var command = "";
  var choices = ["Backend", "Frontend"];
  var frontend = [
    "React",
    "React Native",
    "Next",
    "Angular",
    "Gatsby",
    "Vue",
    "Preact",
  ];
  var backend = ["Nest", "Express", "VanillaJS", "Lit Element"];
  const scope = await prompts([
    {
      type: "text",
      name: "path",
      message: "Enter a new Project name or Path",
      validate: (path) =>
        checkPath(path + "/package.json") ? true : `Path not valid`,
    },
    {
      type: "select",
      name: "scope",
      message: "What do you want the project for?",
      choices,
    },
    {
      type: "select",
      name: "project",
      message: "What is the project?",
      choices: (prev) => (prev == 1 ? frontend : backend),
    },
  ]);
  console.log("scope", scope);
};

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
  var { userOutput, command } = findCommand(args[0], args.slice(1));
  console.log("*********************************\n\n");
  console.log(userOutput);
  console.log("\n\n*********************************\n\n");
  return execSync(command, { stdio: "inherit" }, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      return;
    }
    console.log(stdout);
  });
})();
