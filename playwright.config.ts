import { devices, defineConfig } from "@playwright/test"

export default defineConfig({
  webServer: {
    command: "pnpm build && pnpm preview --host 127.0.0.1",
    port: 4173,
  },
  testDir: "tests/e2e",
  use: {
    baseURL: "http://127.0.0.1:4173",
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: {
        ...devices["iPhone 13"],
        browserName: "chromium",
      },
    },
  ],
})
