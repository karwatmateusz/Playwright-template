import { test, expect } from "@playwright/test"
import { forTest } from "@utils/sample.util"

test("has title", async () => {
  console.log(forTest)
})

test("failing test", async () => {
  expect(1).toEqual(2)
})

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/")

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible()
})
