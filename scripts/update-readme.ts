import fs from "fs";
import path from "path";

const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

const dependencies = {
  ElectronJS: packageJson.devDependencies.electron,
  "Electron Builder": packageJson.devDependencies["electron-builder"],
  NodeJS: packageJson.devDependencies["@types/node"],
  TypeScript: packageJson.devDependencies.typescript,
  NestJS: packageJson.devDependencies.next,
  ReactJS: packageJson.devDependencies.react,
  Sequelize: packageJson.dependencies.sequelize,
};

const badgeColors = {
  ElectronJS: "46816e",
  "Electron Builder": "blue",
  NodeJS: "44883e",
  TypeScript: "blue",
  NestJS: "black",
  ReactJS: "61DAFB",
  Sequelize: "52B0E7",
};

const badges = Object.entries(dependencies).map(([name, version]) => {
  if (typeof version === "string") {
    return ` <img alt="Static Badge" src="https://img.shields.io/badge/${name.replace(
      / /g,
      "%20"
    )}-v${version.replace("^", "")}-${badgeColors[name]}">`;
  }
  return ` <img alt="Static Badge" src="https://img.shields.io/badge/${name.replace(
    / /g,
    "%20"
  )}-vN/A-${badgeColors[name]}">`;
});

const badgesString = `<div align="center">\n${badges.join("\n")}\n</div>`;

console.log(badgesString);
