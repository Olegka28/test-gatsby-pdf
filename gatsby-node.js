/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  console.log(stage)
  return actions.setWebpackConfig({
    // plugins: [
    //   // Add the environment variables to webpack.DefinePlugin with define().
    //   plugins.define({
    //     process: "process",
    //     browser: "process/browser",
    //   }),
    // ],
    resolve: {
      fallback: {
        stream: require.resolve("stream-browserify"),
        zlib: require.resolve("browserify-zlib"),
        // util: require.resolve("util"),
        // assert: require.resolve("assert"),
        // buffer: require.resolve("buffer"),
      },
    },
  })
}
