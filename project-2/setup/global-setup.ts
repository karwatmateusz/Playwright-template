import { chromium } from "@playwright/test"
import { configEnv } from "../setup/config"

export async function globalSetup() {
  const baseURL = configEnv.url
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(baseURL)
}
