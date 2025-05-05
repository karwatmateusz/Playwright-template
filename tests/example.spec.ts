import test, { expect } from "@playwright/test"

test("has title", async ({ page }) => {
  console.log('TEST FOR RUNNING WORKFLOW')
  console.log('GITHUB_ENVSEC:', process.env.ENVSEC);
  console.log('GITHUB_ENV_SECRET:', process.env.ENV_SECRET);
  await page.waitForTimeout(5000)
  console.log('RUNNING TESTS IN PW REPO')
  expect(1).toBe(1)
})