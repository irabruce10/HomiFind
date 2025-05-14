// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
//       'nativewind/babel',
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'transform-inline-environment-variables',
        {
          include: [
            'EXPO_PUBLIC_APPWRITE_PROJECT_ID',
            'EXPO_PUBLIC_APPWRITE_ENDPOINT',
            'EXPO_PUBLIC_APPWRITE_DATABASE_ID',
            'EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID',
            'EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID',
            'EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID',
            'EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID',
          ],
        },
      ],
    ],
  };
};
