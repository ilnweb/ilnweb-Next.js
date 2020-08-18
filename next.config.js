const withSass = require("@zeit/next-sass");

module.exports = withSass({
  webpack(config, options) {
    const rules = [
      {
        test: /\.scss$/,
        use: [{ loader: "sass-loader" }],
      },
    ];
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rules],
      },
    };
  },
});

// module.exports = {
//   entry: './src/index.js',
//   module: {
//     rules: [
//       //...
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'images/[hash]-[name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   //...
// };
