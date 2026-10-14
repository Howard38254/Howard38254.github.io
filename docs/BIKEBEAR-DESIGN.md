# Bike Bear inspired portfolio — current design

Updated October 14, 2026. Howard requested closer alignment with https://www.bikebear.com.my/, including its animations and formatting.

All current features published and verified October 14, 2026.

## Scope and reference fidelity
The current design follows the observed yellow opening, oversized typography, mascot over the headline, pill menu, moving text strips, large typography-led sections, gallery, and giant contact footer. This is an adaptation using Howard's content and original robot and project artwork. The reference could not be reloaded reliably during implementation; exact timing and every reference interaction are not verified. The robot is an original procedural WebGL 3D model in robot.js, rendered with locally bundled Three.js. It has rounded metallic parts, joints, lighting, a soft shadow, green eyes, and an HH badge. CSS shapes remain as the fallback. The reference timed out again on October 14; exact motion parity is unverified.

## Section map
| Section | Purpose | File/selector |
| --- | --- | --- |
| Opening | Name, positioning, headline, robot, main action | index.html / #home |
| Three chapters | Think bigger, build bolder, make it better | #approach / .chapter |
| About | Professional introduction | #about |
| Toolbox | Design, simulation, manufacturing, programming | #skills |
| Experience | Animated overview timeline: robotics, research, entrepreneurship, course project | #experience |
| Projects | Four illustrated project entries and detail dialogs | #work; detail text in site.js / projects |
| Activities | Personal interests | #activities |
| Contact | Email, phone, GitHub, back to top | #contact |
| Menu | Full-screen section navigation | #menu |

## Motion map
- Scroll moves the giant hero headline and rotates the robot with time-based easing.
- Pointer movement smoothly changes the 3D robot's tilt.
- Robot floats gently and blinks; clicking or keyboard activation triggers an articulated arm wave. Rendering stops offscreen or when the page is hidden.
- Text strips move continuously.
- Three approach chapters change with scrolling through a sticky section.
- Sections reveal as they enter view; the Experience timeline line fills with scrolling and milestones reveal progressively.
- Skill objects appear on row hover.
- Project illustration shapes move and corners round on hover.
- Curiosity badge rotates when clicked.
- Contact arrow rotates on hover.
- Top-right menu starts as a circle and expands to the controls pill on hover or keyboard focus; touch devices show the full pill.
- Top-right motion button pauses ongoing animation; reduced-motion preferences disable transitions.

## Editing and preservation
Current editable source: index.html, site.css, site.js, robot.js; Three.js and its MIT license are in assets/vendor. The previous Refined Builder template remains archived in template/ and is not the current design source.

Colors: --yellow #ffdf00, --green #33d487, --ink #101010, --paper #f4f2e9.

Online visual editor: /editor.html. Change colors and marked text, download index.html, then publish through Codex or GitHub. Deep project descriptions are in site.js. Changes to contact addresses must update both visible text and mailto/tel link targets.

## Remaining content
Actual project photographs and CAD images, newer résumé PDF, education dates/status, expanded activities, and additional case studies remain pending. Gallery artwork is illustrative and labeled as such. No contact form backend has been created; contact links open the visitor's email or phone application.
