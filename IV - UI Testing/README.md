## Installation

Open PowerShell in this folder and run:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install pytest selenium webdriver-manager
```

## Running the tests

```powershell
pytest -v test_lab_ui.py
```

The tests are currently marked with `@pytest.mark.skip` because they use the
live website. Remove the skip marker when you want to run a test.

## Selenium tests

[`test_lab_ui.py`](./test_lab_ui.py) contains tests for:

- checking the homepage title;
- checking that the main heading is visible;
- opening the Technology page;
- testing the page in a mobile-sized window (`390 x 844`);
- saving screenshots of the tested pages.

The tests use explicit waits so that Selenium waits for elements to become
available before interacting with them. The cookie banner is closed
automatically when it appears.

## Chrome DevTools test

For Task 1:

1. Open `https://lab.fi/en` in Chrome.
2. Open DevTools with `F12`.
3. Enable mobile device emulation.
4. Set the viewport to approximately `390 x 844`.
5. Use CPU and network throttling.
6. Start a recording in the **Performance** panel.
7. Open the navigation menu, click a link, or scroll the page.
8. Stop the recording and inspect loading time, long tasks, network requests,
   and page responsiveness.
9. Save screenshots of the mobile page and the Performance results.

Possible optimization points include large images, too many network requests,
long JavaScript tasks, and layout shifts. If no significant problem is found,
the report should explain that the page remained responsive under the selected
conditions.

## Comparison

Chrome DevTools is mainly used to investigate performance problems manually.
It provides a performance timeline, network information, and CPU activity.

Selenium is used to automate repeatable user actions and functional checks.
It is useful for regression testing after code or website changes.

DevTools gives more detailed performance information, while Selenium is easier
to repeat automatically and use in a test pipeline. Using both approaches
provides better coverage.

## Screenshots

The Selenium tests can create:

- `technology_page.png`
- `mobile_view.png`

Add these screenshots together with the DevTools screenshots to the final LAB
thesis-template PDF report.
