import fs from "fs";
import { fileName, content } from "../app.js";

const createFile = () => {
  fs.writeFile(fileName, content, () => {
    console.log("fayl ugurla yaradildi");
  });
};

export default createFile;
