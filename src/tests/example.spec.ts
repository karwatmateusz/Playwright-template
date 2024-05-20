import { expect, test } from "@playwright/test"
// import { forTest } from "@utils/sample.util"

// test("has title", async ({ page }) => {
//   console.log(forTest)
//   await page.waitForTimeout(5000)
// })

test("failing test", async ({ page }) => {
  expect(1).toEqual(1)
  await someAsyncFunction("1", 2)
  await page.waitForTimeout(5000)
})

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/")

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click()

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible()

//   await page.waitForTimeout(5000)
// })

async function someAsyncFunction(name: string, id: number) {
  console.log(name, id)
}
