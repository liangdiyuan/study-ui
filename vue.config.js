const path = require("path");
const fs = require("fs");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const join = path.join;

function getEntries(path) {
  let files = fs.readdirSync(resolve(path));
  const entries = files.reduce((res, item) => {
    const itemPath = join(path, item);
    console.log(itemPath);
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      res[item] = resolve(join(itemPath), "index.js");
    } else {
      const [name] = item.split(".");
      res[name] = resolve(itemPath);
    }

    return res;
  }, {});

  return entries;
}

const DEV_CONFIG = {
  pages: {
    index: {
      entry: "examples/main.js",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("examples"),
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        console.log(options);
        return options;
      });
  },
};

const BUILD_CONFIG = {
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        console.log(options);
        return options;
      });

    config.entryPoints.delete("app");
  },

  configureWebpack: {
    entry: {
      ...getEntries("packages"),
    },

    output: {
      filename: "[name]/index.js",
      libraryTarget: "commonjs2",
    },
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? DEV_CONFIG : BUILD_CONFIG;
