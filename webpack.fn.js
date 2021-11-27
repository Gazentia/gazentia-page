const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports.htmlWpPlugin = function () {
  const dir = './src/';
  const extFilter = new RegExp(/\.html$/);
  const fileLists = fs.readdirSync(path.resolve(__dirname, 'src'));
  const htmlFiles = fileLists.filter((filename) => extFilter.test(filename));
  const result = htmlFiles.map((filename) => {
    return new HtmlWebpackPlugin({
      filename: filename.replace(/\.html$/, '.html'),
      template: dir + filename,
      inject: 'body',
      scriptLoading: 'defer',
    });
  });
  return result;
};

module.exports.assetHanlder = function (url, resourcePath, context) {
  const relativePath = path
    .relative(context, resourcePath)
    .replace(/\\/g, '/')
    .replace(/^src\//, './');
  return relativePath;
};

module.exports.importRedirectFile = function () {
  const dir = './src/';
  const extFilter = new RegExp(/^_redirects$/);
  const fileLists = fs.readdirSync(path.resolve(__dirname, 'src'));
  const textFiles = fileLists.filter((filename) => extFilter.test(filename));
  const entryPointPath = path.resolve(
    __dirname,
    'src',
    'assets',
    'js',
    'main.js'
  );
  if (textFiles.length) {
    const entryFile = fs
      .readFileSync(entryPointPath, {
        encoding: 'utf8',
      })
      .split('\n');
    const isFileExist = entryFile.findIndex((filePath) => {
      return /_redirects/.test(filePath);
    });
    if (isFileExist < 0) {
      fs.appendFileSync(entryPointPath, '\nimport "../../_redirects";');
    }
  }
};
