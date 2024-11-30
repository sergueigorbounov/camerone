import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules/**'],
  },
  // Essential Vue linting rules
  {
    ...pluginVue.configs['flat/essential'],
  },
  // TypeScript-specific Vue linting rules
  vueTsEslintConfig,
  // Recommended Vitest linting rules for tests
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  // Recommended Playwright linting rules for e2e
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
  // Skip Prettier formatting
  skipFormatting,
]
