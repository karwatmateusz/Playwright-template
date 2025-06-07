import test, { expect } from "@playwright/test"

test("has title", async ({ page }) => {
  console.log('TEST FOR RUNNING WORKFLOW')
  console.log('GITHUB_ENVSEC:', process.env.ENVSEC);
  console.log('GITHUB_ENV_SECRET:', process.env.ENV_SECRET);
  await page.waitForTimeout(5000)
  console.log('RUNNING TESTS IN PW REPO')
  expect(1).toBe(1)
  
})

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('fh1')).toContainText('Installation');
});