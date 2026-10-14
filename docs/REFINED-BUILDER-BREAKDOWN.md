# Refined Builder — design and editing guide

Design selected by Howard: October 13, 2026.
Status: editable concept template. Final content, project media, responsive QA, and publishing remain incomplete.

## Open and edit
Open `template/refined-builder.html` in your browser. Use the editor strip above the preview to change the accent and page color, switch text editing on, and click the introduction or project titles to rewrite them. Download the edited HTML to save your changes; browser edits alone do not update this repository. Replace the template file with your downloaded version when ready. Keep a backup of the previous version.

For broader changes, edit this document and `EDIT-REQUESTS.md`, or ask Codex using the section IDs below.

## Design foundation
| Element | Selected direction | Where to edit |
| --- | --- | --- |
| Page background | Warm ivory, #f0eee5 | Editor: page color; CSS `--paper` |
| Text | Nearly black, #111411 | CSS `--ink` |
| Accent | Orange, #e4552c | Editor: accent color; CSS `--accent` |
| Project section | Warm gray, #dedcd2 | CSS `--tile` |
| Typography | Arial/Helvetica sans serif; bold display headings | CSS font declarations |
| Hero headline | THINK IT. / BUILD IT. | Edit text mode; `.hero h1` |
| Buttons | Rounded controls with black main action | `.menu`, `.cta` |
| Illustration | Decorative conceptual robot arm | `.machine` and child shapes |
| Projects | Structured rows with numbers and arrows | `.project-list` |

The robot arm is illustrative concept artwork, not Howard's actual project hardware. Replace it with a real CAD render or project image if preferred.

## Section breakdown
| ID | Purpose | Current content | Editing guidance |
| --- | --- | --- | --- |
| header | Identify Howard and expose navigation | HH monogram, name, menu | Keep name recognizable; change menu labels as needed |
| hero | First impression and career positioning | THINK IT. BUILD IT.; short introduction; robot arm | Edit headline and introduction; adjust size in CSS |
| hero-action | Lead employers into projects | VIEW PROJECTS | Keep the destination tied to selected work |
| ribbon | Reinforce personality | CURIOUS BY NATURE. ENGINEER BY TRAINING. | Change wording; avoid unsupported claims |
| selected-work | Make technical work easy to browse | UAV dynamics, robotics, architected materials | Add projects only with a corresponding detail entry |
| project-uav | Describe research | Python, AVL, center-of-mass shift modeling | Add role, dates, evidence, figures, and results |
| project-robotics | Explain design and leadership | Competition robots and team coordination | Add real robot photographs and your contribution |
| project-materials | Explain Caltech materials research | nTopology, 2PP, SEM, poster | Add approved microscopy images and verified findings |
| about | Personal professional introduction | Mechanical engineering, CAD, simulation, programming | Confirm current school and target roles |
| experience | Concise career history | Rose-Hulman, Caltech, FIRST Robotics | Verify titles and dates before publication |
| contact | Employer contact | Supplied email and phone | Keep visible text and mailto/tel targets consistent |

Project details and menu open as overlays. On the final website, long technical case studies may work better as dedicated pages; this is not yet decided.

## Animation and interaction
- Robot arm changes pose on hover.
- Main action lifts slightly on hover.
- Project titles receive an accent on hover.
- Project and menu controls open detail panels.
- Escape closes panels.
- Reduced-motion preferences disable transitions.
- No essential content depends on animation.

## Content source and limits
Content comes from Howard's résumé and selected research conversations. This template is not a verified complete career history. Missing: résumé download, education section, activities section, project images, detailed case studies, mobile/accessibility verification, and live hosting.

## Preserve and change
Selected overall direction: Refined Builder. Individual colors, wording, spacing, and illustration are editable and not separately locked.

For future requests, use: “Change [section ID] by [specific edit]. Preserve [named choices].”

Example: “Change hero to feature an aircraft CAD image. Preserve the ivory background, orange accent, headline typography, and project list.”
