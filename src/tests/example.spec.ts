import { expect, test } from "@playwright/test"
import dayjs = require("dayjs")
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
// import { secret } from "@setup/getAwsData"
// import { configEnv } from "@setup/config"
// import { forTest } from "@utils/sample.util"

// test("has title", async ({ page }) => {
//   console.log(forTest)
//   await page.waitForTimeout(5000)
// })

test("TESTING COMMIT", { tag: "@qa" }, async ({ page }) => {
  expect(1).toEqual(1)
  console.log("TESTING COMMIT QA ENV")
  await page.waitForTimeout(100)
  // console.log(await secret())
})

test.only("failing test", { tag: "@test" }, async ({ page }) => {
  console.log("TEST ENV")
  // console.log(configEnv)
  // console.log(process.env)
  // console.log(configEnv.ENV)
  // console.log(process.env.ENV)
  // console.log(process.env._test_beta_acc)
  // console.log(process.env.TEST_BETA_ACC)
  expect(1).toEqual(1)
  await someAsyncFunction("1", 2)
  await page.waitForTimeout(5000)
})

test("something", async ({ page }) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)

  console.log(dayjs.utc().tz("Europe/Warsaw", true).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"))

  const response = await page.request.get("https://playwright.dev")
  expect(response.status()).toBe(200)
  expect(response.url()).toBe("https://playwright.dev/")
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
