/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
import { test, expect } from "@playwright/test"
import { forTest } from "@utils/sample.util"
import uiPages from "@utils/ui-pages"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

test.only("has title", async () => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  console.log(forTest)
  console.log("timezones")
  const serverDate = dayjs()
  console.log(`dayjs(): ${serverDate.format()}`)
  const serverDate3 = dayjs.utc()
  console.log(`dayjs.utc(): ${serverDate3.format()}`)
  const serverDate5 = dayjs().tz("America/New_York")
  console.log(`dayjs().tz("America/New_York"): ${serverDate5.format()}`)
  const serverDate6 = dayjs().tz("America/New_York", true)
  console.log(`dayjs().tz("America/New_York", true): ${serverDate6.format()}`)
  const serverDate7 = dayjs().tz("America/New_York", false)
  console.log(`dayjs().tz("America/New_York", false): ${serverDate7.format()}`)
  console.log(`test america to utc: ${dayjs.tz(serverDate6, "utc").format()}`)

  const testDate = dayjs().startOf("month").startOf("day")
  console.log(`testDate: ${testDate.format()}`)
  console.log(`testDate: ${testDate.toISOString()}`)
  console.log(`testDate: ${testDate.toDate()}`)
  console.log(`testDate to america: ${dayjs.tz(testDate, "America/New_York").toISOString()}`)
  console.log(`testDate to america: ${dayjs(testDate).tz("America/New_York").toISOString()}`)
  console.log(`testDate to america: ${dayjs.tz(testDate, "America/New_York")}`)
  console.log(`testDate to america: ${dayjs(testDate).tz("America/New_York")}`)
  console.log(`testDate to america: ${dayjs.tz(testDate, "America/New_York").format()}`)
  console.log(`testDate to america: ${dayjs(testDate).tz("America/New_York").format()}`)

  console.log(`start of the month in current timezone: ${dayjs().startOf("month").format()}`)
  console.log(`start of the month in utc timezone: ${dayjs.utc().startOf("month").format()}`)
})

test("failing test", async ({ page }) => {
  expect(1).toEqual(1)
  await someAsyncFunction("1", 2)
  await page.waitForTimeout(5000)
  uiPages.home
})

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/")

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible()

  await page.waitForTimeout(5000)
})

async function someAsyncFunction(name: string, id: number) {
  console.log(name, id)
}
