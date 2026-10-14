# Howard Huang — website content and editing plan

Website: https://howardhuangme.github.io/
Last synchronized: October 14, 2026
Status: matches the local website; 3D robot, animated menu, résumé tab, and animated timeline applied locally, publication authorized October 14, 2026; deployment pending.

## How to use this document

Edit the text below directly. Add new sections, change their order, or mark sections REMOVE or HIDE. Then tell Codex: **“Update the website according to WEBSITE-CONTENT.md.”**

Saving this Markdown file does not automatically change the live site. Codex will apply your edits, check the result, publish when requested, and update the synchronization record. Future website edits requested in chat will also be reflected here.

- **KEEP:** retain the section and its current content/design unless you edit a field.
- **CHANGE:** apply the edits written in that section.
- **ADD:** create a new section using your supplied content and instructions.
- **HIDE:** retain its content here but remove it from public view and navigation.
- **REMOVE:** remove it from the site; retain a brief removal record here.
- **UNDECIDED:** keep the current website behavior until you decide.

Write design instructions under “Requested changes.” Ordinary content paragraphs are website copy; notes and instructions are not published as copy. Blank optional fields mean “not supplied,” not permission to invent facts. To delete existing text, explicitly write REMOVE.

## Choices to preserve

- Audience: employers.
- Overall design: Bike Bear inspired, with Howard's engineering content.
- Main background: yellow (#ffdf00).
- Accent: green (#33d487).
- Text: nearly black (#101010).
- Secondary background: warm white (#f4f2e9).
- Typography: oversized bold sans serif headings; Arial/Helvetica.
- Mascot: original black robot with HH badge and green eyes.
- Motion: robot floating/tilting/waving, moving text strips, sticky approach chapters, section reveals, hover effects.
- Accessibility: pause control, reduced-motion support, keyboard controls, readable mobile layout.
- Scope rule: only make requested changes; preserve everything else.

Requested global changes: None.

## Page order

1. home — Opening / Hero
2. approach — Engineering approach
3. about — About Me
4. skills — My Toolbox
5. experience — Experience
6. work — Selected Projects
7. activities — Beyond the Work
8. contact — Contact / Footer

Edit this list to request a different order. Project details open from the project gallery; they are not separate scrolling sections.

## Navigation and shared controls

Status: KEEP

- Brand: HH / HOWARD HUANG; links to home.
- Menu links, in order: ABOUT → about; SKILLS → skills; EXPERIENCE → experience; PROJECTS → work; ACTIVITIES → activities; CONTACT → contact.
- Motion control: pause/resume animations.
- Menu style: full-screen overlay with large links. Top-right trigger begins as a white circle with a hamburger icon; on hover or keyboard focus it smoothly expands left into the white pill with green motion control and MENU label. Collapses on pointer/focus exit. Touch devices keep the full pill accessible; reduced-motion preferences disable the transition.
- Résumé tab: fixed vertical Resume tab at the middle-left edge; Bike Bear’s pale blue (#9bd4d7), verified from its left-side award tab SVG; dark text for readability and a slightly deeper blue (#86c7cb) hover state. Opens a résumé dialog with a readable image preview of the PDF, OPEN PDF in a new tab, DOWNLOAD PDF, close button, and Escape support. Asset: assets/Howard-Huang-Resume.pdf; source: existing Huang_Howard_Resume_9-10-2026.pdf. The newer Word résumé could not be converted because LibreOffice is unavailable.
- Project detail style: dialog with close button and Escape support.

Requested changes: None.

## home — Opening / Hero

Status: KEEP

Label: HOWARD HUANG / MECHANICAL ENGINEERING

Headline: BUILT TO MOVE.

Introduction:

I’m Howard. I turn ideas into
models, mechanisms, and working systems.

Main button: EXPLORE MY WORK
Destination: work

Moving text strip:

DESIGN WITH CURIOSITY ✳ BUILD WITH PURPOSE ✳ TEST. LEARN. REFINE. ✳

Visual: real WebGL 3D black robot overlapping the oversized headline; rounded metallic shell, articulated joints, green eyes, HH chest badge, studio lighting, and soft grounding shadow. Original CSS robot remains as a fallback if WebGL is unavailable.
Layout: full-screen yellow opening; large headline moves with scrolling.
Motion: frame-rate-independent easing for pointer tilt and scroll rotation; gentle floating, blinking eyes, and an articulated click/keyboard-triggered wave. Pause and reduced-motion controls freeze the 3D animation. Rendering stops when the hero is offscreen or the page is hidden.

Requested changes: None.

## approach — Engineering approach

Status: KEEP

Layout: three chapters change as the visitor scrolls through a sticky section.

### Chapter 1

Label: 01 / THE WAY I THINK
Headline: THINK / BIGGER.
Background: yellow
Graphic: green ring

Copy:

Start with a question.
Explore the physics.
Find the possibilities.

### Chapter 2

Label: 02 / THE WAY I WORK
Headline: BUILD / BOLDER.
Background: pale teal
Graphic: dimensional square

Copy:

Model it. Make it. Test it.
Bring analysis and hands-on
engineering together.

### Chapter 3

Label: 03 / THE WAY I GROW
Headline: MAKE IT / BETTER.
Background: nearly black
Graphic: rotating yellow star

Copy:

Learn from every iteration.
Refine the details.
Keep moving forward.

Requested changes: None.

## about — About Me

Status: KEEP

Label: ABOUT ME
Headline: CURIOUS MIND. / HANDS-ON / ENGINEER.
Badge: KEEP / ASKING / WHY. ↗

Copy:

I’m Howard Huang, a mechanical engineering student specializing in CAD, simulation, and programming. My work connects analytical models with physical systems—from aircraft dynamics to competition robots and architected materials.

Link: MY EXPERIENCE ↗
Destination: experience

Headshot: Not supplied.
Education: Not currently displayed; current school, attendance dates, and graduation details need confirmation.
Career goals: Not yet explicitly confirmed.

Requested changes: None.

## skills — My Toolbox

Status: KEEP

Label: MY TOOLBOX

| Category | Tools and skills |
| --- | --- |
| DESIGN | SolidWorks · Inventor · nTopology |
| SIMULATE | MATLAB · Simulink · Ansys · AVL |
| BUILD | CNC · Additive manufacturing · Arduino |
| PROGRAM | Python · Java · Embedded control |

Layout: large category rows with objects appearing on hover.

Requested changes: None.

## experience — Experience

Status: KEEP

Label: EXPERIENCE
Headline: RESEARCH. / BUILD. LEAD.

Layout: vertical animated timeline covering the engineering journey, ordered by start year: FIRST Robotics → Caltech research → Startup Weekend → Rose-Hulman research → two-player pinball. Milestones show a brief description; project buttons open the existing matching detail dialogs. The line fills as the visitor scrolls and cards reveal as they enter view. Pause/reduced-motion settings show a static timeline. Responsive single-column layout. Education dates remain pending confirmation.

### Rose-Hulman

Dates: 2025–2026
Description: Student researcher · UAV flight dynamics

### Caltech STEM Research

Dates: 2023–2024
Description: Student researcher · Architected materials

### FIRST Robotics Competition

Dates: 2020–2024
Description: Engineering VP · Mechanical design and team leadership

### Startup Weekend

Dates: 2024
Description: Entrepreneurship · Business model, prototyping, and customer research

### Two-player pinball

Dates: 2025
Description: Course project · Mechanical systems, sensing, and Arduino control

Timeline closing note: BEYOND ENGINEERING ↗ / Aviation, guitar, water polo, travel, and the next thing to build.

Moving tools strip: PYTHON ✳ SOLIDWORKS ✳ MATLAB ✳ ANSYS ✳ ARDUINO ✳

Requested changes: None.

## work — Selected Projects

Status: KEEP

Label: SELECTED PROJECTS
Headline: IDEAS MADE / REAL.
Layout: two-column gallery on desktop; single column on mobile.

Project order:

1. uav
2. robotics
3. materials
4. pinball

Image note displayed below gallery:

Illustrations represent project themes. Original project photographs and CAD renders are coming next.

### uav — UAV flight dynamics

Status: KEEP
Gallery title: UAV FLIGHT DYNAMICS
Gallery categories: Research / Python / AVL
Artwork caption: FLIGHT DYNAMICS / UAV
Image: illustrative aircraft artwork; actual image not supplied.

Detail title: UAV FLIGHT DYNAMICS
Context: ROSE-HULMAN / 2025–2026
Role: Student researcher

Overview:

Investigating how lateral center-of-mass shifts affect trim authority and control inputs in coordinated banked turns.

Methods and contributions:

- Built a Python nonlinear 6-DOF trim solver using interpolated AVL aerodynamic maps.
- Generated a 101,871-case AVL aerodynamic database across angle of attack and control-surface deflections.
- Compared solver predictions against AVL points and quantified center-of-mass shift versus required aileron deflection.

Tools: Python · AVL · Simulation
Additional results or evidence: Not supplied.
Links: Not supplied.

Requested changes: None.

### robotics — Competition robotics

Status: KEEP
Gallery title: COMPETITION ROBOTICS
Gallery categories: Mechanical design / Manufacturing / Leadership
Artwork caption: DESIGN / BUILD / COMPETE
Image: illustrative robot artwork; actual image not supplied.

Detail title: COMPETITION ROBOTICS
Context: FIRST ROBOTICS COMPETITION / 2020–2024
Role: Engineering VP

Overview:

Coordinating mechanical, electrical, and software subsystems to build competition robots under six-week design cycles.

Methods and contributions:

- Directed development of three competition robots.
- Led a 10–25 member interdisciplinary team.
- Iterated subsystem design for performance, manufacturability, and reliability.

Tools: CAD · Manufacturing · Team leadership
Additional results or evidence: Not supplied.
Links: Not supplied.

Requested changes: None.

### materials — Architected materials

Status: KEEP
Gallery title: ARCHITECTED MATERIALS
Gallery categories: Caltech / nTopology / SEM
Artwork caption: GEOMETRY → MATERIAL BEHAVIOR
Image: illustrative lattice artwork; actual image not supplied.

Detail title: ARCHITECTED MATERIALS
Context: CALTECH STEM RESEARCH / 2023–2024
Role: Student researcher

Overview:

Exploring how microstructure geometry influences material stiffness and failure behavior.

Methods and contributions:

- Fabricated architected materials using nTopology and two-photon polymerization.
- Analyzed microstructures through scanning electron microscopy.
- Combined experimental and theoretical findings in a technical poster.

Tools: nTopology · Two-photon polymerization · SEM
Additional results or evidence: Not supplied.
Links: Not supplied.

Requested changes: None.

### pinball — Two-player pinball

Status: KEEP
Gallery title: TWO-PLAYER PINBALL
Gallery categories: Mechatronics / Arduino / Embedded control
Artwork caption: SENSE / ACTUATE / PLAY
Image: illustrative pinball artwork; actual image not supplied.

Detail title: TWO-PLAYER PINBALL
Context: MECHATRONICS COURSE / 2025
Role: Course project

Overview:

An integrated mechanical, sensing, and embedded-control system for responsive two-player gameplay.

Methods and contributions:

- Integrated mechanical actuation, sensors, and Arduino-based real-time control.
- Implemented a finite state machine for scoring, timing, and multiplayer interaction.
- Refined the design through three iterations and more than 100 test cycles.

Tools: Arduino · Embedded control · Mechanical design
Additional results or evidence: Not supplied.
Links: Not supplied.

Requested changes: None.

## activities — Beyond the Work

Status: KEEP

Label: BEYOND THE WORK
Headline: ALWAYS / EXPLORING.

Copy:

Aviation, guitar, water polo, travel, and the next thing to build.

Tags: AVIATION ↗ / GUITAR ♪ / WATER POLO ≋ / TRAVEL ↗

Requested changes: None.

## contact — Contact / Footer

Status: KEEP

Label: LET’S TALK ENGINEERING
Main link: HELLO ↗
Main link destination: mailto:howardhuang43@gmail.com
Identity: HOWARD HUANG / MECHANICAL ENGINEERING
Email: howardhuang43@gmail.com
Phone: (626) 492-6728
Phone link: tel:+16264926728
GitHub: https://github.com/HowardHuangME
Copyright: © 2026 HOWARD HUANG
Back-to-top link: BACK TO TOP ↑ → home

Contact form: Not currently implemented.
Résumé download: assets/Howard-Huang-Resume.pdf via the middle-left Resume tab.
LinkedIn: Not supplied.

Requested changes: None.

## Add a new section

Copy this block, fill it out, and add its ID to Page order. This blank example is not a request to add a section.

### [new-section-id] — [Section name]

Status: UNDECIDED (change to ADD when ready)
Position: Before/after [existing section ID]
Show in menu: Yes/No
Menu label:
Section label:
Headline:

Copy:

[Write the content here.]

Items or entries:

- [First item]

Images/files and captions:
Links/buttons and destinations:
Layout preference:
Animation preference:
Elements to preserve:
Requested changes:

## Pending work

- Actual project images and CAD renders.
- Replace the September 10 résumé PDF with a newer PDF when supplied or converted.
- Confirm education dates and current status before adding education.
- Confirm specific career targets.
- Expanded project results, links, and evidence.

## Synchronization record — maintained by Codex

- October 14, 2026: User authorized publication of all completed changes. Reconciled page order, navigation destinations, four project details, timeline links, and résumé assets. Publishing the 3D robot, circle-to-pill menu, pale-blue left Resume tab, animated timeline, and current username links; deployment verification pending.

- October 14, 2026: Completed the corrected Resume tab color match to Bike Bear’s left-side tab fill #9BD4D7, verified directly from its homepage SVG. Dark text preserves readability; navigation status remains KEEP. Applied locally; publication pending.

- October 14, 2026: Completed the Resume tab color change to blue with white text and darker blue hover. Navigation status remains KEEP; placement, behavior, content, assets, and destinations unchanged. Applied locally; publication pending.

- October 14, 2026: Completed the brief animated overview timeline in the existing Experience section, using existing website/résumé dates and descriptions. Added Startup Weekend and pinball summaries and a personal-interests note; project buttons reuse existing detail dialogs. Experience status remains KEEP; section order, navigation, gallery content, assets, and destinations preserved. Verified scroll progress, project dialog opening/closing, and mobile layout without horizontal overflow.

- October 14, 2026: Completed the fixed vertical Resume tab at the middle-left edge, with résumé preview and PDF open/download and dialog closing. Copied the existing September 10 résumé PDF without editing its content; visually checked its one-page layout. Navigation and contact statuses remain KEEP. Other sections, menu links, projects, and destinations preserved.

- October 14, 2026: Completed the circle-to-pill hover animation for the top-right controls, including keyboard focus and touch access. Navigation status remains KEEP; section order, links, projects, and assets unchanged.

- October 14, 2026: Completed the robot depth and smoothness upgrade using an original procedural 3D model and locally bundled Three.js. Home status remains KEEP; section order, navigation, project details, and destinations preserved. Desktop and mobile rendering, click-to-wave, and pause/resume checked; exact Bike Bear animation parity not verified because the reference site timed out.

- October 14, 2026: Reverted the name placement changes from this chat; restored the original HH / stacked name header and mobile controls. No publication was made.

- October 14, 2026: Updated website address, GitHub links, and local remote for the new username HowardHuangME.

- October 13, 2026: Created this document from current index.html and site.js. No website content or design changes made.
- Website files: index.html (structure and visible copy), site.js (project details and behavior), robot.js (3D mascot and eased hero motion), assets/vendor (Three.js and license), site.css (appearance), editor.html (visual editor).
- Current pending changes: None.
- Publication state: All completed changes authorized for publication October 14, 2026; deployment verification pending.
