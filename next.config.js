/** @type {import('next').NextConfig} */

const isGithubActions = process.env.NEXT_PUBLIC_GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.NEXT_PUBLIC_BASE_PATH;

  assetPrefix = `${repo}`;
  basePath = `${repo}`;
}
const nextConfig = {
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
