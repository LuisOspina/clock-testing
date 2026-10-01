import { type Page, type Locator, expect } from '@playwright/test';

export class StopwatchPage {

    readonly moduleTitle: Locator;
    readonly primaryTimer: Locator;
    readonly startButton: Locator;
    readonly stopButton: Locator;
    readonly resetButton: Locator;
    readonly lapButton: Locator;
    readonly lapCards: Locator

    constructor(page: Page) {
        this.moduleTitle = page.getByRole('heading', { name: 'Stopwatch' });
        this.primaryTimer = page.getByTestId('stopwatch-time');
        this.startButton = page.getByRole('button', { name: 'Start' });
        this.stopButton = page.getByRole('button', { name: 'Stop', exact: true});
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.lapButton = page.getByRole('button', { name: 'Lap' });
        this.lapCards = page.getByTestId(/^lap-card-/);
    }

    async verifyStopwatchPageUI(): Promise<void>{
        await expect(this.moduleTitle).toBeVisible();
        await expect(this.primaryTimer).toContainText('00:00.00');
        await expect(this.startButton).toBeVisible();
        await expect(this.startButton).toBeEnabled();
    }
}