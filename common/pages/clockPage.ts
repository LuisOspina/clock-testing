import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ClockPage extends BasePage{
  static readonly pageURL: string = 'https://clock.luisospina.ca/';

  readonly stopwatchButton: Locator;
  readonly alarmsButton: Locator;
  readonly timersButton: Locator;
  readonly worldClockButton: Locator;

  constructor(page: Page) {
    super(page, ClockPage.pageURL);

    this.stopwatchButton = page.getByRole('button', { name: 'Stopwatch' });
    this.alarmsButton = page.getByRole('button', { name: 'Alarms' });
    this.timersButton = page.getByRole('button', { name: 'Timers' });
    this.worldClockButton = page.getByRole('button', { name: 'World Clock' });
  }

  async goToStopwatch() {
    await this.stopwatchButton.click()
  }

  async goToAlarms() {
    await this.alarmsButton.click()
  }

  async goToTimers() {
    await this.timersButton.click()
  }

  async goToWorldClock() {
    await this.worldClockButton.click()
  }
}