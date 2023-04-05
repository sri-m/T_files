//npx playwright test --headed      
import { test, expect } from '@playwright/test';
import {PracticeProjeect} from '../pages/google.page.js'

test('Practie Project Automation Tesing', async ({ page }) => {
  const practiceProject = new PracticeProjeect(page);
  await practiceProject.open();
  expect(2).toEqual(2);
});