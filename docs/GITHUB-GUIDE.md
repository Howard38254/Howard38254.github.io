# GitHub website guide

A repository stores the website files and their version history. GitHub Pages serves those files as a website employers can visit. A custom domain is optional.

Current published personal site: https://howardhuangme.github.io using a repository named HowardHuangME.github.io. HowardHuangME is the configured repository owner. Only one account-level Pages site is allowed per account.

An accessible existing repository is HowardHuangME/morph-lab.github.io. Its name does not make it an account-level site. If configured with GitHub Pages and no custom domain, its normal project-site address would be https://howardhuangme.github.io/morph-lab.github.io/. Hosting is not verified. Prefer a separate personal portfolio repository unless Howard chooses otherwise.

Current publication verified October 14, 2026. Website files include index.html, site.css, site.js, robot.js, résumé PDF/preview, and bundled Three.js. WEBSITE-CONTENT.md is the main editing source.

## Setup reference
1. Sign into GitHub as HowardHuangME.
2. Create a new public repository named HowardHuangME.github.io. Public repositories support Pages on GitHub Free.
3. Put the approved website files and docs in the repository. For a simple static site, index.html belongs at the root.
4. Open repository Settings → Pages.
5. For the simple static setup, choose Deploy from a branch, main, and /(root), then Save. If the final site requires a build, use its prepared GitHub Actions workflow instead.
6. Check the deployment result and visit the displayed site address.

Keep working drafts and source-only material out of the public repository. Public repository files can be read by anyone, including docs.

The first site preview will be reviewed before publishing. No paid domain or hosting purchase is needed for this plan.

Official instructions: https://docs.github.com/en/pages/quickstart
Hosting explanation: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
