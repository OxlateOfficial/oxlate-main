import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: './screenshots',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
  projects: [
    {
      name: 'Desktop-1440',
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'Laptop-1280',
      use: { viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'Tablet-1024',
      use: { viewport: { width: 1024, height: 768 } },
    },
    {
      name: 'Mobile-390',
      use: { viewport: { width: 390, height: 844 }, isMobile: true },
    },
    {
      name: 'Small-Mobile-375',
      use: { viewport: { width: 375, height: 812 }, isMobile: true },
    },
  ],
});
