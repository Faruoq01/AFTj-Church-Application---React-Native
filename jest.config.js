module.exports = {
    // Load setup-tests.js before test execution
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: 
    [
      "<rootDir>/setup-tests.js"
    ],
    // ...
  };

  // module.exports = {
  //   preset: 'react-native',
  //   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  //   transformIgnorePatterns: [
  //     "node_modules/(?!(react-native"
  //       + "|react-navigation-tabs"
  //       + "|react-native-splash-screen"
  //       + "|react-native-screens"
  //       + "|react-native-reanimated"
  //     + ")/)",
  //   ],
  // }