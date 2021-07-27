import chalk from "chalk";
const commands = {
  react: {
    command: "npx create-react-app ${pathToDir}",
    alias: ["react", "cra", "create-react-app"],
    options: [],
    userOutput: `Creating your ${chalk.blue("React")} project`,
  },
  "react-ts": {
    command: "npx create-react-app ${pathToDir} --template typescript",
    alias: ["react", "cra", "create-react-app"],
    options: ["ts"],
    userOutput: `Creating your ${chalk.blue(
      "React"
    )} project with ${chalk.blueBright("Typescript")}`,
  },
  "react-vite": {
    command: "npm init vite@latest ${pathToDir} -- --template react",
    alias: ["react", "cra", "create-react-app"],
    options: ["vite"],
    userOutput: `Creating your ${chalk.blue(
      "React"
    )} project with ${chalk.yellow("Vite")}`,
  },
  "react-vite-ts": {
    command: "npm init vite@latest ${pathToDir} -- --template react-ts",
    alias: ["react", "cra", "create-react-app"],
    options: ["vite-ts"],
    userOutput: `Creating your ${chalk.blue(
      "React"
    )} project with ${chalk.yellow("Vite")} and ${chalk.blueBright(
      "Typescript"
    )}`,
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
  vue: {
    command: "npx -p @vue/cli@latest vue create ${pathToDir}",
    alias: ["vue", "vuejs", "vuecli"],
    options: [],
    userOutput: `Creating your ${chalk.green("Vue")} project`,
  },
  "vue-vite": {
    command: "npm init vite@latest ${pathToDir} -- --template vue",
    alias: ["vue", "vuejs", "vuecli"],
    options: ["vite"],
    userOutput: `Creating your ${chalk.green(
      "Vue"
    )} project with ${chalk.yellow("Vite")}`,
  },
  "vue-vite-ts": {
    command: "npm init vite@latest ${pathToDir} -- --template vue-ts",
    alias: ["vue", "vuejs", "vuecli"],
    options: ["vite-ts"],
    userOutput: `Creating your ${chalk.green(
      "Vue"
    )} project with ${chalk.yellow("Vite")} and ${chalk.blueBright(
      "Typescript"
    )}`,
  },
  preact: {
    command: "npx preact-cli create default ${pathToDir}",
    alias: ["preact", "preactjs"],
    options: [],
    userOutput: `Creating your ${chalk.magenta("Preact")} project`,
  },
  "preact-vite": {
    command: "npm init vite@latest ${pathToDir} -- --template preact",
    alias: ["preact", "preactjs"],
    options: ["vite"],
    userOutput: `Creating your ${chalk.magenta(
      "Preact"
    )} project with ${chalk.yellow("Vite")}`,
  },
  "preact-vite-ts": {
    command: "npm init vite@latest ${pathToDir} -- --template preact-ts",
    alias: ["preact", "preactjs"],
    options: ["vite-ts"],
    userOutput: `Creating your ${chalk.magenta(
      "Preact"
    )} project with ${chalk.yellow("Vite")} and ${chalk.blueBright(
      "Typescript"
    )}`,
  },
  gatsby: {
    command: "npx -p gatsby-cli@latest gatsby new ${pathToDir}",
    alias: ["gatsby", "gatsbyjs"],
    options: [],
    userOutput: `Creating your ${chalk.magenta("Gatsby")} project`,
  },
  "vanilla-vite": {
    command: "npm init vite@latest ${pathToDir} -- --template vanilla",
    alias: ["vanilla"],
    options: ["vite"],
    userOutput: `Creating your ${chalk.yellow(
      "Vanilla"
    )} project with ${chalk.yellow("Vite")}`,
  },
  "vanilla-vite-ts": {
    command: "npm init vite@latest ${pathToDir} -- --template vanilla-ts",
    alias: ["vanilla"],
    options: ["vite-ts"],
    userOutput: `Creating your ${chalk.yellow(
      "Vanilla"
    )} project with ${chalk.yellow("Vite")} and ${chalk.blueBright(
      "Typescript"
    )}`,
  },
  "svelte-vite": {
    command: "npm init vite@latest ${pathToDir} -- --template svelte",
    alias: ["svelte"],
    options: ["vite"],
    userOutput: `Creating your ${chalk.red(
      "Svelte"
    )} project with ${chalk.yellow("Vite")}`,
  },
  "svelte-vite-ts": {
    command: "npm init vite@latest ${pathToDir} -- --template svelte-ts",
    alias: ["svelte"],
    options: ["vite-ts"],
    userOutput: `Creating your ${chalk.red(
      "Svelte"
    )} project with ${chalk.yellow("Vite")} and ${chalk.blueBright(
      "Typescript"
    )}`,
  },
  "lit-element-vite": {
    command: "npm init vite@latest ${pathToDir} -- --template lit-element",
    alias: ["lit-element", "lit"],
    options: ["vite"],
    userOutput: `Creating your ${chalk.blue(
      "Lit-Element"
    )} project with ${chalk.yellow("Vite")}`,
  },
  "lit-element-vite-ts": {
    command: "npm init vite@latest ${pathToDir} -- --template lit-element-ts",
    alias: ["lit-element", "lit"],
    options: ["vite-ts"],
    userOutput: `Creating your ${chalk.blue(
      "Lit-Element"
    )} project with ${chalk.yellow("Vite")} and ${chalk.blueBright(
      "Typescript"
    )}`,
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
