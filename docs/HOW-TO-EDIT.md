# How to edit your website

Website: https://howardhuangme.github.io/
Repository: https://github.com/HowardHuangME/HowardHuangME.github.io

## Easiest: ask Codex
Open this Portfolio folder and say, for example:

“Change the hero headline to [text]. Keep the yellow background, green accent, animated robot, and project gallery. Preview it, then publish it.”

For changes you want to review first, end the request with “Show me before publishing.” Use docs/EDIT-REQUESTS.md to track edits and elements to preserve.

## Use the visual template editor
Online editor: https://howardhuangme.github.io/editor.html. Edits there change only the browser preview until downloaded and published.

1. Open the online editor above.
2. Change the accent or page color using the controls at the top.
3. Turn on Edit text, then click the headline, introduction, ribbon, or project names to rewrite them.
4. Select Download edited homepage. Your browser saves index.html; the folder is not updated automatically.
5. Replace this folder's index.html with the downloaded file. Keep a backup if desired.
6. Ask Codex: “Preview my edited homepage and publish it.”

Changes in your browser affect only that preview until index.html is saved to GitHub. Keep site.css and site.js alongside it; the downloaded page uses these files.

## Edit directly on GitHub
1. Open index.html in the repository and select the pencil button.
2. Find the exact text you want to change.
3. Edit it and choose Commit changes to main.
4. Wait for the Pages deployment to finish, then refresh the live site.

This is useful for quick wording fixes. index.html is the current source; no build is required. For structural or animation edits, ask Codex to update the appropriate file.

## Where things live
| File | Purpose |
| --- | --- |
| index.html | Public website served by GitHub Pages |
| site.css | Colors, typography, layout, and animation styles |
| site.js | Scroll behavior, robot motion, dialogs, project descriptions |
| editor.html | Current visual editor |
| template/refined-builder.html | Archived previous design |
| docs/BIKEBEAR-DESIGN.md | Current design decisions and section descriptions |
| docs/EDIT-REQUESTS.md | Your change requests and preservation notes |
| docs/WEBSITE-STATE.md | Current implementation and verification status |
| docs/REMAINING-WORK.md | Features and content still to complete |

Project detail text is in the `projects` object in site.js. Colors are in the :root rule in site.css. The public homepage has no editing toolbar.

## Publishing and undoing
GitHub Pages serves main from the repository root. Save updated index.html, site.css, or site.js to GitHub to update the site. Review the Actions tab for deployment status. GitHub file history stores previous versions so a change can be reverted.

The repository is public, including these documentation and template files. Keep passwords, unpublished private material, and confidential project files out of it.

This version has résumé-derived experience, four project descriptions, and a brief interests section. Actual project images, a newer résumé PDF, education details, and expanded case studies remain future work. The fixed middle-left Resume tab provides view/download access to the existing September 10 PDF.

## Current interactive features

The 3D mascot is in robot.js with a locally bundled Three.js dependency in assets/vendor. The animated timeline and dialog behavior are in site.js. The left Resume tab uses assets/Howard-Huang-Resume.pdf and its image preview. Keep these assets together when publishing. Tab color and menu transitions are in site.css. WEBSITE-CONTENT.md is the primary content and design specification.
