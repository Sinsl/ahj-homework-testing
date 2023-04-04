const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack.dev");

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, "localhost", (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send("ok");
  }
});

// const Webpack = require("webpack");
// const WebpackDevServer = require("webpack-dev-server");
// const webpackConfig = require("../webpack.dev");

// const compiler = Webpack(webpackConfig);
// const devServerOptions = webpackConfig.devServer;
// const server = new WebpackDevServer(devServerOptions, compiler);

// const runServer = async () => {
//   console.log("Starting server...");
//   await server.start();
// };

// runServer();
