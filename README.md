# StopYelling

A Firefox extension which converts obnoxious UPPERCASE stream/video titles to sentence-case.

Install from: https://addons.mozilla.org/en-GB/firefox/addon/stopyelling/

## Local Development / Testing

You can load the extension temporarily in Firefox to test code changes.

### Quick Manual Load
1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Click "Load Temporary Add-on".
3. Select this project's `manifest.json`.
4. Open a Twitch or YouTube page and watch uppercase titles convert automatically within ~1 second.

### VS Code Debugging
This repo includes a `.vscode/launch.json` with a configuration:
1. Install the recommended extension: `Firefox Debug` (see prompt to install or install manually: `firefox-devtools.vscode-firefox-debug`).
2. Go to Run & Debug panel and choose: `Firefox: Debug StopYelling (Temporary Add-on)`.
3. Press F5. A Firefox instance launches with the add-on loaded.
4. Set breakpoints in the content script files (`stopYelling.js`, `twitch.js`, `youtube.js`).

### Developing Content Scripts
The scripts run every second to find title elements and convert them if they appear to be "yelling" ( >30% uppercase in first 20 chars ).

Edit files and the debugger's auto-reload (from `reloadOnChange`) will refresh the extension.

### Packaging (Local Zip)
From the project root run:

```powershell
npm run zip
```

This creates `dist/StopYelling.zip` suitable for Web Store / AMO uploads (still subject to signing requirements on AMO).

### Notes
* Uses Manifest v3.
* If selectors on Twitch/YouTube change, update the query selectors in `twitch.js` / `youtube.js` accordingly.
* Consider throttling or using MutationObserver instead of `setInterval` if performance becomes an issue.

Enjoy quieter titles!