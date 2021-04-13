module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue,ts, tsx, jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/registerServiceWorker.ts',
    '!**/tests/**',
    '!**.config.js',
    '!**/router/**',
    '!**/main.ts',
    '!**/App.vue'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
