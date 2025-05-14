// webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');
require('dotenv').config(); // ← loads your .env into process.env

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Inject all of the EXPO_PUBLIC_* keys you need:
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID': JSON.stringify(
        process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
      ),
      'process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT': JSON.stringify(
        process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
      ),
      'process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID': JSON.stringify(
        process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
      ),
      'process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID': JSON.stringify(
        process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
      ),
      'process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID':
        JSON.stringify(
          process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
        ),
      'process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID': JSON.stringify(
        process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
      ),
      'process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID':
        JSON.stringify(
          process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
        ),
    }),
  );

  return config;
};
