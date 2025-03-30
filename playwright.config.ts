import { defineConfig, devices } from "@playwright/test"
import { gitCommitInfo } from "playwright/lib/plugins"

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const parseBool = (value: string | undefined): boolean => {
  if (!value) return false;
  return ['true', '1', 'yes'].includes(value.toLowerCase());
};

// Get environment variables
const CI = parseBool(process.env.CI);
const IGNORE = parseBool(process.env.IGNORE);

// Logic for ignoreSnapshots:
// Truth table:
// IGNORE  |  CI    |  Result
//   T     |  F     |    T
//   T     |  T     |    T
//   F     |  F     |    T
//   F     |  T     |    F
const ignoreSnapshots = IGNORE || !CI;

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 0 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  //   //@ts-expect-error
  // '@playwright/test': {
  //   plugins: [gitCommitInfo()]
  // },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
    },
  ignoreSnapshots: ignoreSnapshots,
  /* Configure projects for major browsers */
  projects: [
    {
      name: "calculation",
      testMatch: /.*\.calculation\.ts/,
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      dependencies: ["calculation"],
    },
  ],
})
