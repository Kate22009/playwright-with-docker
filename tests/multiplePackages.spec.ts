import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'

test("Expect to have packages for subscription", async ({ page }) => {

  // Go to the Droplets product page of DigitalOcean web page
  await page.goto(endpoint.DIGITAL_OCEAN_URL);

  // Wait for the page to load
  await page.waitForLoadState('networkidle');

  // Get the number of packages to be 6
  const number_subscriptions_allowed = await page.locator("//body/div[@id='__next']/div/div[@id='plans']/div/div/div/div[1]/div[1]/div[1]//*[name()='svg']").count()

  // Verify that number equals 6
  expect(number_subscriptions_allowed).toBe(6)
});
