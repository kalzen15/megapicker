#!/usr/bin/env node
import { findCommand } from "./options.js";
import { execSync } from "child_process";

(() => {
  const args = process.argv.slice(2);
  console.log(args);
  console.log(findCommand(args[0], args));
  var command = findCommand(args[0], args);
  return execSync(command, { stdio: "inherit" }, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
})();
