const url = require("url");
const { Page } = require("puppeteer/lib/Page");
const { run } = require("react-snap");
const {
  reactSnap,
  homepage,
  devDependencies,
  dependencies,
} = require("../package.json");

const originalWaitFor = Page.prototype.waitFor;

Page.prototype.waitFor = function waitForCompat(target, options = {}, ...args) {
  if (
    typeof target === "string" &&
    (target.includes("window.") || target.includes("document."))
  ) {
    return this.waitForFunction(target, options, ...args);
  }

  return originalWaitFor.call(this, target, options, ...args);
};

const publicUrl = process.env.PUBLIC_URL || homepage;

const reactScriptsVersion = parseInt(
  (devDependencies && devDependencies["react-scripts"]) ||
    (dependencies && dependencies["react-scripts"])
);

let fixWebpackChunksIssue;
switch (reactScriptsVersion) {
  case 1:
    fixWebpackChunksIssue = "CRA1";
    break;
  case 2:
    fixWebpackChunksIssue = "CRA2";
    break;
}

run({
  publicPath: publicUrl ? url.parse(publicUrl).pathname : "/",
  fixWebpackChunksIssue,
  ...reactSnap,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
