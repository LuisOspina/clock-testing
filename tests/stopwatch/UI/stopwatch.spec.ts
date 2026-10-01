import { test, expect } from '../../../common/fixtures/fixtures';

test.describe('Stopwatch Tests Group 1', () => {
    test('Verify Stopwatch page starting UI', async ({ stopwatchPage }) => {
        await stopwatchPage.verifyStopwatchPageUI();
    });
});