const commands = {
  react: {
    command: "npx create-react-app ${pathToDir}",
    alias: ["react", "cra", "create-react-app"],
    options: [],
  },
  "react-native": {
    command: "npx react-native init ${pathToDir}",
    alias: ["react-native", "rn"],
    options: [],
  },
  "react-native-expo": {
    command: "npx -p expo-cli@latest expo init ${pathToDir}",
    alias: ["react-native", "rn"],
    options: ["expo"],
  },
  next: {
    command: "npx create-next-app ${pathToDir}",
    alias: ["next", "cna", "create-next-app"],
    options: [],
  },
  "next-ts": {
    command: "npx create-next-app ${pathToDir} --typescript",
    alias: ["next", "cna", "create-next-app"],
    options: ["ts"],
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
          return value.command.replace("${pathToDir}", dirName);
        }
      }
    }
  }
  return 'echo "command not found"';
};
