import { expect, test } from "@playwright/test"

test("core pages render without console errors or horizontal overflow", async ({ page }) => {
  const errors: string[] = []
  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(message.text())
    }
  })

  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("SvelteKit.Blog")

  for (const path of ["/journal", "/about", "/contact"]) {
    await page.goto(path)
    await expect(page.locator("main")).toBeVisible()
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBe(true)
  }

  expect(errors).toEqual([])
})

test("journal posts retain syntax highlighting and tag navigation", async ({ page }) => {
  await page.goto("/journal/css-custom-properties-guide")

  await expect(page.locator("pre.language-css").first()).toBeVisible()
  await expect(page.locator(".token.property").first()).toBeVisible()

  await page.getByRole("link", { name: "css", exact: true }).first().click()
  await expect(page).toHaveURL(/\/journal\/tags\/css$/)
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("#css (1 post)")
})
