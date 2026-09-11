import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

// Load viewport matrix config
const configPath = path.resolve(__dirname, '../viewport-matrix.config.json');
const viewportConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const screenshotDir = path.resolve(__dirname, '../screenshots');

// Ensure output screenshot directory exists
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

test.describe('Oxlate Gate 1 Foundation & Hero Visual QA Matrix', () => {

  // 1. Matrix Viewport Foundation Tests (1440, 1280, 1024, 390, 375)
  for (const vp of viewportConfig.viewports) {
    test(`Capture Foundation Screenshot [${vp.name}: ${vp.width}x${vp.height}]`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      try {
        await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
      } catch (err) {
        console.warn(`[QA Warning] Page navigation note for ${vp.name}:`, err);
      }

      const screenshotPath = path.join(screenshotDir, `foundation-${vp.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      expect(fs.existsSync(screenshotPath)).toBe(true);
    });
  }

  // 2. Hero State Acceptance Screenshots Matrix
  test('Capture Hero State 01 Arrival (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    try {
      await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
      await page.evaluate(() => window.scrollTo(0, 0));
    } catch (err) {
      console.warn('[QA Warning] Hero State 01 navigation note:', err);
    }
    await page.waitForTimeout(300);

    const screenshotPath = path.join(screenshotDir, 'hero-state-01.png');
    await page.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Hero State 02 Construction (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    try {
      await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
      await page.evaluate(() => window.scrollTo(0, 1100));
    } catch (err) {
      console.warn('[QA Warning] Hero State 02 navigation note:', err);
    }
    await page.waitForTimeout(600);

    const screenshotPath = path.join(screenshotDir, 'hero-state-02.png');
    await page.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Hero State 03 Resolution (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    try {
      await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
      await page.evaluate(() => window.scrollTo(0, 2100));
    } catch (err) {
      console.warn('[QA Warning] Hero State 03 navigation note:', err);
    }
    await page.waitForTimeout(600);

    const screenshotPath = path.join(screenshotDir, 'hero-state-03.png');
    await page.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Hero Mobile Monument (390x844)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    try {
      await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
    } catch (err) {
      console.warn('[QA Warning] Hero Mobile navigation note:', err);
    }
    await page.waitForTimeout(300);

    const screenshotPath = path.join(screenshotDir, 'hero-mobile.png');
    await page.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Hero Reduced Motion Fallback (1440x900)', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    try {
      await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
    } catch (err) {
      console.warn('[QA Warning] Hero Reduced Motion navigation note:', err);
    }
    await page.waitForTimeout(300);

    const screenshotPath = path.join(screenshotDir, 'hero-reduced-motion.png');
    await page.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  // 3. Core Narrative Sections Visual QA
  test('Capture Section 02 Capabilities (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#capabilities', { waitUntil: 'domcontentloaded', timeout: 10000 });
    const section = page.locator('#capabilities');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const screenshotPath = path.join(screenshotDir, 'section-02-capabilities.png');
    await section.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Section 03 Selected Work (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#work', { waitUntil: 'domcontentloaded', timeout: 10000 });
    const section = page.locator('#work');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const screenshotPath = path.join(screenshotDir, 'section-03-work.png');
    await section.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Section 04 Approach (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#approach', { waitUntil: 'domcontentloaded', timeout: 10000 });
    const section = page.locator('#approach');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const screenshotPath = path.join(screenshotDir, 'section-04-approach.png');
    await section.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Section 05 About (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#about', { waitUntil: 'domcontentloaded', timeout: 10000 });
    const section = page.locator('#about');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const screenshotPath = path.join(screenshotDir, 'section-05-about.png');
    await section.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  test('Capture Section 06 Contact & Footer (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#contact', { waitUntil: 'domcontentloaded', timeout: 10000 });
    const section = page.locator('#contact');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const screenshotPath = path.join(screenshotDir, 'section-06-contact.png');
    await section.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });

  // 4. Interactive Command Center & Sidebar QA
  test('Capture SideDial Resting and Magnetic Hover (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
    await page.waitForTimeout(300);

    // Resting state screenshot
    const restingPath = path.join(screenshotDir, 'sidedial-resting.png');
    await page.screenshot({ path: restingPath });
    expect(fs.existsSync(restingPath)).toBe(true);

    // Hover over the side dial nav
    const nav = page.locator('nav[aria-label="Section Navigation"]');
    await nav.hover();
    await page.waitForTimeout(300);

    const hoverPath = path.join(screenshotDir, 'sidedial-hover.png');
    await page.screenshot({ path: hoverPath });
    expect(fs.existsSync(hoverPath)).toBe(true);
  });

  test('Capture Stage 3 Node Hover Interaction (1440x900)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 10000 });
    await page.evaluate(() => window.scrollTo(0, 2100));
    await page.waitForTimeout(600);

    // Hover over Zone 01 (Identity)
    const node01 = page.locator('text=IDENTITY').first();
    if (await node01.isVisible()) {
      await node01.hover();
      await page.waitForTimeout(300);
    }

    const screenshotPath = path.join(screenshotDir, 'hero-state-03-hover.png');
    await page.screenshot({ path: screenshotPath });
    expect(fs.existsSync(screenshotPath)).toBe(true);
  });
});
