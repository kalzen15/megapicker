import chalk from "chalk";
const commands = {
  react: {
    command: "npx create-react-app ${pathToDir}",
    alias: ["react", "cra", "create-react-app"],
    options: [],
    userOutput: `Creating your ${chalk.blue("React")} project`,
  },
  "react-native": {
    command: "npx react-native init ${pathToDir}",
    alias: ["react-native", "rn"],
    options: [],
    userOutput: `Creating your ${chalk.blue("React Native")} project`,
  },
  "react-native-expo": {
    command: "npx -p expo-cli@latest expo init ${pathToDir}",
    alias: ["react-native", "rn"],
    options: ["expo"],
    userOutput: `Creating your ${chalk.blue(
      "React Native"
    )} project with ${chalk.blackBright("Expo")}`,
  },
  next: {
    command: "npx create-next-app ${pathToDir}",
    alias: ["next", "cna", "create-next-app"],
    options: [],
    userOutput: `Creating your ${chalk.green("Next")} project`,
  },
  "next-ts": {
    command: "npx create-next-app ${pathToDir} --typescript",
    alias: ["next", "cna", "create-next-app"],
    options: ["ts"],
    userOutput: `Creating your ${chalk.green(
      "Next"
    )} project with ${chalk.blueBright("Typescript")}`,
  },
  nest: {
    command: "npx -p @nestjs/cli@latest nest new ${pathToDir}",
    alias: ["nest"],
    options: [],
    userOutput: `Creating your ${chalk.magenta("Nest")} project`,
  },
  angular: {
    command: "npx -p @angular/cli@latest ng new ${pathToDir}",
    alias: ["angular", "ng"],
    options: [],
    userOutput: `Creating your ${chalk.red("Angular")} project`,
  },
  express: {
    command: "npx express-generator-typescript ${pathToDir}",
    alias: ["express", "expressjs", "express-generator-typescript"],
    options: [],
    userOutput: `Creating your ${chalk.blue("Express")} project`,
  },
};

export const findCommand = (dirName, args) => {
  for (const [key, value] of Object.entries(commands)) {
    for (const appName of value.alias) {
      if (appName === args[0]) {
        var optionCheck = true;
        for (const option of value.options) {
          if (!args.includes(option)) {
            optionCheck = false;
            break;
          }
        }
        for (const arg of args.slice(1)) {
          if (!value.options.includes(arg)) {
            optionCheck = false;
            break;
          }
        }
        if (optionCheck) {
          return {
            userOutput: value.userOutput,
            command: value.command.replace("${pathToDir}", dirName),
          };
        }
      }
    }
  }
  return {
    userOutput: `${chalk.black.bgYellow("Could not find a suitable command")}`,
    command: 'echo "Please try another command !\n"',
  };
};
