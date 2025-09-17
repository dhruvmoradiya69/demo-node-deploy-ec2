module.exports = {
  apps: [
    {
      name: "backend",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
