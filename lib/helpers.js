import { execSync } from "child_process";
import { existsSync } from "fs";
import { findCommand } from "./options.js";

export const checkPath = (dirPath) => {
  if (existsSync(dirPath)) return false;
  return true;
};

export const getNewPath = async () => {
  const response = await prompts({
    type: "text",
    name: "newPath",
    message: "Enter a new Project name or Path",
    validate: (path) =>
      checkPath(path + "/package.json") ? true : `Path still not valid`,
  });
  return response;
};

export const commandRunner = (path, args) => {
  var { userOutput, command } = findCommand(path, args);
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
};
