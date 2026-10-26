import { test, expect } from "@playwright/test";

test("home page responds", async ({ page }) => {
    const res = await page.goto("/");
    expect(res?.status()).toBeLessThan(500);
});