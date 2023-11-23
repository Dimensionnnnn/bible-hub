const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [
    path.resolve(__dirname, './src/api'),
    path.resolve(__dirname, './src/app'),
    path.resolve(__dirname, './src/pages'),
    path.resolve(__dirname, './src/widgets'),
    path.resolve(__dirname, './src/features'),
    path.resolve(__dirname, './src/entities'),
    path.resolve(__dirname, './src/shared'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
