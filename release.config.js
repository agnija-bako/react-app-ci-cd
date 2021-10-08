module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/agnija-bako/react-app-ci-cd",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build asset" },
          { path: "coverage.zip", label: "COverage asset" },
        ],
      },
    ],
  ],
};
