module.exports = {
    presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
            modules: false, // ESMのサポートを有効化
          },
        ],
        "@babel/preset-typescript",
      ],
};