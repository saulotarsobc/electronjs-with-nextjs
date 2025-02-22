import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const packageJsonPath = join(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
const nodeVersion = process.version.split("v")[1];

const dependencies = {
  NodeJS: nodeVersion,
  ElectronJS: packageJson.devDependencies.electron,
  "Electron Builder": packageJson.devDependencies["electron-builder"],
  TypeScript: packageJson.devDependencies.typescript,
  NextJS: packageJson.devDependencies.next,
  ReactJS: packageJson.devDependencies.react,
  Sequelize: packageJson.dependencies.sequelize,
};

const badgeColors = {
  ElectronJS: "46816e",
  "Electron Builder": "blue",
  NodeJS: "44883e",
  TypeScript: "blue",
  NextJS: "black",
  ReactJS: "61DAFB",
  Sequelize: "52B0E7",
};

const badges = Object.entries(dependencies).map(([name, version]) => {
  if (typeof version === "string") {
    return ` <img alt="static badge from ${name.toLocaleLowerCase()}" src="https://img.shields.io/badge/${name.replace(
      / /g,
      "%20"
    )}-v${version.replace("^", "")}-${badgeColors[name]}">`;
  }
  return ` <img alt="static badge from ${name.toLocaleLowerCase()}" src="https://img.shields.io/badge/${name.replace(
    / /g,
    "%20"
  )}-vN/A-${badgeColors[name]}">`;
});

const badgesString = `<div align="center">\n${badges.join("\n")}\n</div>`;

console.log(badgesString);

const readmePath = join(__dirname, "../README.md");
const readmeContent = readFileSync(readmePath, "utf-8");

const badgeStart = "<!-- Badge Start -->";
const badgeEnd = "<!-- Badge End -->";

const updatedReadmeContent = readmeContent.replace(
  new RegExp(`${badgeStart}[\\s\\S]*?${badgeEnd}`),
  `${badgeStart}\n${badgesString}\n${badgeEnd}`
);

writeFileSync(readmePath, updatedReadmeContent, "utf-8");
