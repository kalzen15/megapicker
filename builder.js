import prompts from "prompts";
import { checkPath, commandRunner } from "./helpers.js";
import { findOption } from "./options.js";

const builderMap = {
  React: "react",
  "React Native": "react-native",
  Next: "next",
  Angular: "angular",
  Vue: "vue",
  Preact: "preact",
  Gatsby: "gatsby",
  Nest: "nest",
  Express: "express",
  VanillaJS: "vanilla",
  "Lit Element": "lit-element",
};

export const projectBuilder = async () => {
  var createdCommand = [];
  var choices = ["Frontend", "Backend"];
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
      choices: (prev) => (prev == 0 ? frontend : backend),
    },
  ]);
  const tempProject =
    builderMap[
      scope.scope == 0 ? frontend[scope.project] : backend[scope.project]
    ];
  const options = findOption(tempProject);
  const chosenOption = await prompts({
    type: "select",
    name: "option",
    message: "Choose an option from below",
    choices: options,
  });
  createdCommand.push(scope.path, tempProject);
  options[chosenOption.option] === "Basic"
    ? null
    : createdCommand.push(options[chosenOption.option]);

  commandRunner(createdCommand[0], createdCommand.slice(1));
};
