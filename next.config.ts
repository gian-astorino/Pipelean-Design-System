import type { NextConfig } from "next";

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
// so every asset/link needs that repo name as a base path. The deploy
// workflow sets GITHUB_PAGES=true; locally (pnpm dev / pnpm build) the app
// still runs at the root as usual.
const repoName = "Pipelean-Design-System";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

export default nextConfig;
