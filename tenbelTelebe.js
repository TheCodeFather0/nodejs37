import chalk from "chalk";

const students = [
  "Entiqe",
  "Nergiz",
  "Medine",
  "Necef",
  "Huseyn",
  "Emil",
  "Boyuk Rauf",
  "Balaca Rauf",
  "Kenan",
  "Miri",
  "Kamran",
  "Ferid",
  "Seccad",
];

const getLazyStudent = (arr) => {
  let i = 0;
  while (i <= 5) {
    const randomIndex = Math.floor(Math.random() * students.length);
    const lazyUser = students[randomIndex];
    console.log(chalk.red(lazyUser));
    i++;
  }
};

export default getLazyStudent;
