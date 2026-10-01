import { test as base } from '@playwright/test';
import { ClockPage } from '../pages/clockPage';
import { StopwatchPage } from '../pages/stopwatchPage';

// Declare the types of your fixtures.
type MyFixtures = {
  clockPage: ClockPage;
  stopwatchPage: StopwatchPage;
  alarmsPage: ClockPage;
  timersPage: ClockPage;
  worldClockPage: ClockPage;
};

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  clockPage: async ({ page }, use) => {
    // Set up the fixture.
    const clockPage = new ClockPage(page);
    await clockPage.goToPageURL();

    // Use the fixture value in the test.
    await use(clockPage);
  },

  stopwatchPage: async ({ clockPage }, use) => {
    await clockPage.goToStopwatch();
    await use(new StopwatchPage(clockPage.page));
  },

  alarmsPage: async ({ clockPage }, use) => {
    await clockPage.goToAlarms();
    await use(clockPage);
  },

  timersPage: async ({ clockPage }, use) => {
    await clockPage.goToTimers();
    await use(clockPage);
  },

  worldClockPage: async ({ clockPage }, use) => {
    await clockPage.goToWorldClock();
    await use(clockPage);
  },
});
export { expect } from '@playwright/test';