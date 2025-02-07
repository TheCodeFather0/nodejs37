import fs from "fs";
import { fileName } from "../app.js";

const readFile = () => {
  fs.readFile(fileName, "utf-8", (err, res) => {
    console.log(res);
  });
};

export default readFile;
