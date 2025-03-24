import { expect, request, test } from "@playwright/test";
import { apiFetch, apiGet, apiPost, apiPut, apiDelete, apiPatch, apiHead } from 'pw-api-plugin';
// import { secret } from "@setup/getAwsData"
// import { configEnv } from "@setup/config"
// import { forTest } from "@utils/sample.util"

// test("has title", async ({ page }) => {
//   console.log(forTest)
//   await page.waitForTimeout(5000)
// })

test("TESTING COMMIT", { tag: "@qa" }, async ({ page }) => {
  expect(1).toEqual(1);
  console.log("TESTING COMMIT QA ENV ");
  await page.waitForTimeout(100);
  // console.log(await secret())
});

test('apiFetch', async ({request, page }) => { 
        const responsePut = await apiPut({ request, page }, 'https://jsonplaceholder.typicode.com/posts/1', {
            body: {
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            },
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        expect(responsePut.ok()).toBeTruthy();
        const responseBodyPut = await responsePut.json();
        expect(responseBodyPut).toHaveProperty('id', 1);
})


test.only('apiFetchNoCustom', async ({ request, page }, TestConfig) => {
  console.log(process.env.ENVVAR)
  console.log(typeof process.env.ENVVAR)
  await page.goto('https://playwright.dev/');
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('id', 1);
  await expect(page.locator('.hero hero--primary heroBanner_UJJx')).toHaveScreenshot('responseBody.png');
})

test("failing test", { tag: "@test" }, async ({ page }) => {
  console.log("TEST ENV 1");
  // console.log(configEnv)
  // console.log(process.env)
  // console.log(configEnv.ENV)
  // console.log(process.env.ENV)
  // console.log(process.env._test_beta_acc)
  // console.log(process.env.TEST_BETA_ACC)
  expect(1).toEqual(1);
  await someAsyncFunction("1", 2);
  expect(1).toEqual(2);
  await page.waitForTimeout(5000);
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/")

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click()

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible()

//   await page.waitForTimeout(5000)
// })

async function someAsyncFunction(name: string, id: number) {
  console.log(name, id);
}
