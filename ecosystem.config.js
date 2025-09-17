module.exports = {
  apps: [
    {
      name: "backend-dev",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
    },
    {
      name: "backend-prod",
      script: "./server.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
