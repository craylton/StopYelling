# StopYelling

Firefox extension that converts shouty UPPERCASE Twitch & YouTube titles to readable sentence case.

Install: https://addons.mozilla.org/en-GB/firefox/addon/stopyelling/

## Use
Just browse Twitch or YouTube – titles that are mostly uppercase will be softened automatically.

For example: 'OMG CHECK OUT THIS AMAZING VIDEO' gets changed into 'Omg check out this amazing video'

## Develop / Test
Temporary load:
1. Firefox: open `about:debugging#/runtime/this-firefox`.
2. Click "Load Temporary Add-on" and pick `manifest.json`.

Or debug in VS Code (after installing the `firefox-devtools.vscode-firefox-debug` extension):
1. Run & Debug panel.
2. Choose either:
	* `Firefox: Debug StopYelling (Persistent Dev Profile)`
	* `Firefox: Debug StopYelling (Ephemeral)`
3. Press F5. Edit content scripts; they auto‑reload.

## Scripts
```powershell
npm install          # first time
npm run lint         # validate
npm run build        # produce dist/*.zip
```

## Packaging
`npm run build` creates a ZIP in `dist/` ready for AMO upload (you still need Mozilla signing).

## Releasing
Update the version in both `manifest.json` and `package.json`, then run the build.

## Notes
Manifest v3. If site markup changes, update selectors in `twitch.js` / `youtube.js`.

Enjoy quieter titles!