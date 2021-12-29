const path = require('path');
const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist');

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR
}

function buildConfig(env, { mode }) {
  if (mode === 'development' || mode === 'production') {
    return require('./build/' + mode + '.js')(configDirs);
  } else {
    console.log('Wrong webpack build parameter. Possible choices: dev or prod.')
  }
}

module.exports = buildConfig;
