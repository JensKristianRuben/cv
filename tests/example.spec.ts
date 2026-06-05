import { test, expect } from '@playwright/test'

test("My first test", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle(/Jens Kristian Ruben | Datamatiker med fokus på automatisering, udvikling og devops/)

  const cvLink = page.getByRole('link', {name: "cv"});
  await cvLink.click();

  await expect(page).toHaveURL("http://localhost:5173/cv/")
})