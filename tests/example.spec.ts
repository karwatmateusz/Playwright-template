import test from "@playwright/test"

test("has title", async ({ page }) => {
  console.log('TEST FOR RUNNING WORKFLOW')
  await page.waitForTimeout(1000)
})