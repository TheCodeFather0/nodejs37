import fs from "fs";
import { fileName } from "../app.js";

const deleteFile = () => {
  fs.unlink(fileName, () => {
    console.log("fayl ugurla silindi!");
  });
};

export default deleteFile;
