"use strict";

// Monaco webpack plugin required for Import / Export Strapi Plugin
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const monaco = new MonacoWebpackPlugin();

module.exports = (config) => {
  config.plugins.push(monaco);

  return config;
};
