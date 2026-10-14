# How to edit your website

Website: https://howard38254.github.io/
Repository: https://github.com/Howard38254/Howard38254.github.io

## Easiest: ask Codex
Open this Portfolio folder and say, for example:

“Change the hero headline to [text]. Keep the ivory background, orange accent, robot illustration, and project layout. Preview it, then publish it.”

For changes you want to review first, end the request with “Show me before publishing.” Use docs/EDIT-REQUESTS.md to track edits and elements to preserve.

## Use the visual template editor
Online editor: https://howard38254.github.io/template/refined-builder.html. Edits there change only the local browser preview until downloaded, rebuilt, and published.

1. Open template/refined-builder.html in Chrome by double-clicking it.
2. Change the accent or page color using the controls at the top.
3. Turn on Edit text, then click the headline, introduction, ribbon, or project names to rewrite them.
4. Select Download edited template. Your browser saves an HTML file; the folder is not updated automatically.
5. Replace this folder's template/refined-builder.html with the downloaded file. Keep a backup if desired.
6. Ask Codex: “Rebuild the website from my edited template, preview it, and publish it.”

Changes in your browser affect only that preview until the rebuilt index.html is committed and pushed to GitHub.

## Edit directly on GitHub
1. Open index.html in the repository and select the pencil button.
2. Find the exact text you want to change.
3. Edit it and choose Commit changes to main.
4. Wait for the Pages deployment to finish, then refresh the live site.

This is useful for quick wording fixes. Make the matching change to template/refined-builder.html too, otherwise a later rebuild can overwrite your fix. For structural or design edits, the local editor plus Codex is easier.

## Where things live
| File | Purpose |
| --- | --- |
| index.html | Public website served by GitHub Pages |
| template/refined-builder.html | Editable design source, including visual editing controls |
| build.cjs | Converts the template to the public homepage |
| docs/REFINED-BUILDER-BREAKDOWN.md | Design decisions and section descriptions |
| docs/EDIT-REQUESTS.md | Your change requests and preservation notes |
| docs/WEBSITE-STATE.md | Current implementation and verification status |
| docs/REMAINING-WORK.md | Features and content still to complete |

The template's project detail text is in its `content` object near the bottom. Color variables are in the `.refined` rule. The public homepage has no editing toolbar.

## Publishing and undoing
GitHub Pages serves main from the repository root. Commit and push a rebuilt index.html to update the site. Review the Actions tab for deployment status. GitHub file history stores previous versions so a change can be reverted.

The repository is public, including these documentation and template files. Keep passwords, unpublished private material, and confidential project files out of it.

This first published version is the selected design with current résumé-derived text. Project images, résumé download, education, activities, and full technical case studies remain future work.
