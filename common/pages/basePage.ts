import { type Page, type Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly pageURL: string;

    constructor(page: Page, pageURL: string) {
        this.page = page;
        this.pageURL = pageURL;
    }

    async goToPageURL(): Promise<void> {
        await this.page.goto(this.pageURL);
    }
}