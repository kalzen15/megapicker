#!/usr/bin/env node
import { findCommand } from "./options.js";
import { execSync } from "child_process";

(() => {
  const args = process.argv.slice(2);
  var command = findCommand(args[0], args.slice(1));
  return execSync(command, { stdio: "inherit" }, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      return;
    }
    console.log(stdout);
  });
})();
