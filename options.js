const commands = {
  react: {
    command: "npx create-react-app name",
    alias: ["react", "cra", "create-react-app"],
  },
  "react-native": {
    command: "npx react-native init AwesomeProject",
    alias: ["react-native", "rn"],
  },
};

export const findCommand = (dirName, args) => {
  for (const [key, value] of Object.entries(commands)) {
    for (const arg of value.alias) {
      if (arg === args[1]) {
        console.log(arg, arg[1]);
        return value.command;
      }
    }
  }
};
