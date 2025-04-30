import test, { expect } from "@playwright/test"

test("has title", async ({ page }) => {
  console.log('TEST FOR RUNNING WORKFLOW')
  await page.waitForTimeout(5000)
  console.log('RUNNING TESTS IN PW REPO')
  expect(1).toBe(1)
})