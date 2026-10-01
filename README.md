# Clock tests

Playwright UI tests for https://clock.luisospina.ca/.

## Run locally

```sh
npm ci
npx playwright install
npx playwright test
npx playwright show-report
```

## Latest public report

https://luisospina.github.io/clock-testing/

Push tests to `main` to run all configured browsers and replace the public
report. You can also select **Actions → Playwright Tests → Run workflow** on GitHub.
Failed test runs publish their report too; pull requests only upload a downloadable
artifact and do not replace the public report. If no report can be generated,
the previously published report remains available.

The Clock app also triggers this workflow on `main` after a successful production
deployment. The app repository needs the Actions secret `CLOCK_TESTING_TOKEN`:
a fine-grained GitHub token limited to this repository with Actions read/write.
The test checkout uses the dispatched `main` ref, not `develop`.

The Clock home page embeds this standard Playwright HTML report. Report contents,
including failure traces and attachments, are public. Keep passwords, tokens,
authentication state, and private test data out of published reports.

Local reports, dependencies, `.env`, and saved authentication state are ignored by Git.
