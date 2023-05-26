/** @type {import('next').NextConfig} */

const isGithubActions = process.env.IS_GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
const nextConfig = {
  output: "export",
  assetPrefix: "/ams",
  basePath: "/ams",
};

module.exports = nextConfig;
