import readFile from "./helpers/readFile.js";
import deleteFile from "./helpers/deleteFile.js";
import createFile from "./helpers/createFile.js";

const command = process.argv[2].toLowerCase();
export const fileName = process.argv[3];
export const content = process.argv[4];

switch (command) {
  case "create":
    createFile();
    break;
  case "read":
    readFile();
    break;
  case "delete":
    deleteFile();
    break;
}
