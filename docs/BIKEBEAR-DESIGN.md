# Bike Bear inspired portfolio — current design

Updated October 13, 2026. Howard requested closer alignment with https://www.bikebear.com.my/, including its animations and formatting.

## Scope and reference fidelity
The current design follows the observed yellow opening, oversized typography, mascot over the headline, pill menu, moving text strips, large typography-led sections, gallery, and giant contact footer. This is an adaptation using Howard's content and original robot and project artwork. The reference could not be reloaded reliably during implementation; exact timing and every reference interaction are not verified. The robot is made from original CSS shapes with depth effects, not Bike Bear's 3D bear asset.

## Section map
| Section | Purpose | File/selector |
| --- | --- | --- |
| Opening | Name, positioning, headline, robot, main action | index.html / #home |
| Three chapters | Think bigger, build bolder, make it better | #approach / .chapter |
| About | Professional introduction | #about |
| Toolbox | Design, simulation, manufacturing, programming | #skills |
| Experience | Research and robotics roles | #experience |
| Projects | Four illustrated project entries and detail dialogs | #work; detail text in site.js / projects |
| Activities | Personal interests | #activities |
| Contact | Email, phone, GitHub, back to top | #contact |
| Menu | Full-screen section navigation | #menu |

## Motion map
- Scroll moves the giant hero headline and rotates the robot.
- Pointer movement changes the robot's tilt.
- Robot floats gently; clicking triggers an arm wave.
- Text strips move continuously.
- Three approach chapters change with scrolling through a sticky section.
- Sections reveal as they enter view.
- Skill objects appear on row hover.
- Project illustration shapes move and corners round on hover.
- Curiosity badge rotates when clicked.
- Contact arrow rotates on hover.
- Top-right motion button pauses ongoing animation; reduced-motion preferences disable transitions.

## Editing and preservation
Current editable source: index.html, site.css, site.js. The previous Refined Builder template remains archived in template/ and is not the current design source.

Colors: --yellow #ffdf00, --green #33d487, --ink #101010, --paper #f4f2e9.

Online visual editor: /editor.html. Change colors and marked text, download index.html, then publish through Codex or GitHub. Deep project descriptions are in site.js. Changes to contact addresses must update both visible text and mailto/tel link targets.

## Remaining content
Actual project photographs and CAD images, résumé PDF, education dates/status, expanded activities, and additional case studies remain pending. Gallery artwork is illustrative and labeled as such. No contact form backend has been created; contact links open the visitor's email or phone application.
