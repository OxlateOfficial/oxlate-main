# OXLATE — HERO EXECUTION SPECIFICATION

Version: 1.0
Status: AUTHORITATIVE
Scope: Homepage Hero only

--------------------------------------------------
0. PURPOSE
--------------------------------------------------

This document defines the actual visual construction,
composition, layers, states, transitions, animation,
micro-interactions, responsive behavior, and asset
requirements of the Oxlate homepage hero.

THIS IS AN EXECUTION SPECIFICATION.

The current hero implementation is NOT a reference.

Do not redesign the current hero divs.

Do not preserve the current layout and change colors.

Do not "improve" the existing hero.

DELETE / REPLACE the existing hero implementation
where necessary and construct this hero from the
specification below.

The supplied screenshots are visual references for:

1. Initial hero composition
2. Full-screen giant Oxlate X identity
3. Scroll choreography
4. Architectural micro-elements
5. Transition from experimental hero into the actual website

The screenshots are references for intent and composition,
not a requirement to copy pixels literally.

--------------------------------------------------
1. HERO EXPERIENCE IN ONE SENTENCE
--------------------------------------------------

The visitor enters a quiet architectural environment,
encounters an enormous Oxlate X identity, scrolls through
a controlled construction sequence in which the X remains
dominant while lines, labels, navigation and interface
elements assemble around it, and finally reaches a fully
resolved website hero that naturally transitions into the
rest of the site.

The feeling should be:

ARRIVAL
→ PRESENCE
→ CONSTRUCTION
→ ALIGNMENT
→ RESOLUTION

--------------------------------------------------
2. HERO PRINCIPLES
--------------------------------------------------

The hero is NOT:

- a normal agency hero
- a centered logo followed by text
- a static banner
- a giant image with text on top
- a single animation followed by a normal page
- a collection of decorative divs

The hero IS:

- an architectural environment
- a choreographed scroll sequence
- a visual identity statement
- a spatial composition
- a system of independently animated elements

The giant Oxlate X is the central object.

It is intentionally oversized.

It is allowed to cover most or effectively all of
the viewport.

DO NOT SHRINK IT INTO A SMALL LOGO.

--------------------------------------------------
3. HERO STRUCTURE
--------------------------------------------------

The hero has THREE MAJOR VISUAL STATES.

STATE A — ARRIVAL
STATE B — CONSTRUCTION
STATE C — RESOLUTION

These are not separate pages.

They are three states of one continuous hero environment.

--------------------------------------------------
4. GLOBAL CANVAS
--------------------------------------------------

Background:

Warm Ivory
#F5F2EC

Primary structure:

Deep Black

Secondary structural tone:

Muted graphite / warm gray

Accent:

Bronze
#A87445

The background should feel like an architectural sheet,
not a website card.

There should be no obvious card background around the
hero itself.

The viewport is the canvas.

--------------------------------------------------
5. HERO LAYERS
--------------------------------------------------

Use explicit visual layers.

LAYER 0
Background

Purpose:
Base ivory canvas.

LAYER 1
Very subtle grid / spatial construction

Purpose:
Provide structural depth.

Must remain subtle.

LAYER 2
Architectural geometry

Includes:
- large X structure
- diagonal beams
- frames
- rails
- structural lines

LAYER 3
Micro architectural elements

Includes:
- measurement marks
- tiny labels
- section numbers
- dots
- arrows
- small lines
- index indicators

LAYER 4
Primary Oxlate identity

Includes:
- giant X / logo geometry

LAYER 5
Hero media where required

LAYER 6
Typography/content

LAYER 7
Navigation

LAYER 8
Scroll indicator / state indicator

Do not scatter arbitrary z-index values.

Use a controlled stacking model.

--------------------------------------------------
6. STATE A — ARRIVAL
--------------------------------------------------

STATE A is the first thing the visitor sees.

The composition should initially feel intentionally sparse.

The visitor should not immediately see the complete
website.

They should encounter the identity first.

--------------------------------------------------
6.1 STATE A COMPOSITION
--------------------------------------------------

Viewport:

100vw
100vh

Background:

Warm ivory.

Primary object:

GIANT OXLATE X.

The X should occupy a substantial percentage of the viewport.

The composition may crop the X outside the viewport.

This is intentional.

The X should feel physically larger than the screen.

It should not look like a logo placed inside a hero.

It should look like the visitor is standing INSIDE the
brand mark / structure.

--------------------------------------------------
6.2 X POSITION — STATE A
--------------------------------------------------

The X should be slightly offset rather than mathematically
centered.

Suggested visual bias:

X mass:
approximately 55–75% of visual weight

Text/UI:
approximately 25–45% of visual weight

The X may extend:

- beyond the top edge
- beyond the right edge
- beyond the lower edge

The crop creates scale.

Do not force the entire X to remain visible.

--------------------------------------------------
6.3 STATE A TEXT
--------------------------------------------------

Text should occupy a quieter region of the viewport.

The text should NOT compete with the X.

Preferred arrangement:

LEFT SIDE:
small brand statement / intro

LOWER or MID LEFT:
primary hero message

LOWER LEFT:
CTA

The text is anchored within a clean negative-space area
created by the architectural geometry.

--------------------------------------------------
6.4 STATE A NAVIGATION
--------------------------------------------------

Navigation exists but is visually restrained.

Suggested:

LEFT:
Oxlate small logo/mark

CENTER/RIGHT:
About
Capabilities
Work
Contact

PRIMARY ACTION:
Contact / Start a conversation

Navigation is secondary to the X.

It should not look like the most important thing
on the screen.

--------------------------------------------------
6.5 STATE A MICRO-ELEMENTS
--------------------------------------------------

Micro-elements should already exist but remain subtle.

Examples:

- tiny section index
- short architectural lines
- one or two measurement marks
- very small service label
- scroll indicator
- small directional arrow
- tiny bronze marker

These should not create noise.

They establish the language that will later animate.

--------------------------------------------------
7. STATE A INITIAL ANIMATION
--------------------------------------------------

On initial page load, use a staged entrance.

DO NOT animate everything simultaneously.

Sequence:

T+0ms

Background visible.

T+100–250ms

Very subtle grid / structural baseline appears.

T+250–500ms

Primary X begins its entrance.

Motion:
small scale or translation.

Example:
scale 0.97 → 1
or
translate 20px → 0

Use ease-out.

T+450–700ms

Small architectural lines appear.

They should feel like they are being drawn into place.

T+600–850ms

Micro labels appear.

T+700–1000ms

Navigation resolves.

T+800–1100ms

Hero typography enters.

T+1000–1300ms

CTA resolves.

T+1200–1500ms

Scroll indicator becomes active.

Do not make the entrance cinematic for the sake of
being cinematic.

It should feel precise and mechanical.

--------------------------------------------------
8. MICRO-ANIMATION RULE
--------------------------------------------------

Every meaningful hero element should have its own
animation identity.

Do not animate the entire hero as one grouped div.

BAD:

hero-wrapper
    transform: scale(...)
    opacity: ...

GOOD:

X:
independent transform

structural lines:
independent reveal

labels:
independent opacity + translation

navigation:
independent reveal

CTA:
independent reveal

section indicator:
independent position/opacity

scroll marker:
independent pulse

Each system can be choreographed together,
but elements must remain independently controllable.

--------------------------------------------------
9. STATE B — CONSTRUCTION
--------------------------------------------------

STATE B begins as the visitor scrolls.

This is the most important state.

The visitor is NOT simply scrolling past the hero.

The viewport enters a pinned / controlled sequence.

The page feels like the website is being assembled.

--------------------------------------------------
9.1 SCROLL BEHAVIOR
--------------------------------------------------

When the user reaches the hero:

Pin the hero environment temporarily.

Map scroll progress to animation progress.

The visitor scroll becomes the timeline.

DO NOT create a separate animation that ignores user scroll.

The user should feel that:

scroll amount = construction progress.

--------------------------------------------------
9.2 X BEHAVIOR DURING STATE B
--------------------------------------------------

The giant X remains visually dominant.

DO NOT:

- immediately shrink it into a small logo
- fade it away
- move it entirely off-screen
- replace it with a normal navbar logo

Instead:

The X changes position / scale / rotation / crop
progressively while still maintaining its identity.

Suggested progression:

START:
X enormous.

25%:
X begins repositioning.

50%:
X shifts toward a more intentional structural position.

75%:
X integrates with the page's architectural frame.

100%:
X becomes a resolved major structural element.

The final X can still be large.

The objective is NOT:
"turn giant logo into tiny logo."

The objective is:
"turn giant identity into organized architecture."

--------------------------------------------------
10. CONSTRUCTION ELEMENTS
--------------------------------------------------

During scroll, introduce the website environment
around the X.

The following elements should appear independently:

1. Navigation
2. Section index
3. Structural grid
4. Measurement lines
5. Service labels
6. Horizontal/diagonal rails
7. Micro labels
8. Small markers
9. Hero heading
10. Supporting copy
11. CTA
12. Scroll state indicator

Each has separate timing.

--------------------------------------------------
11. MICRO-ELEMENT ANIMATION SEQUENCE
--------------------------------------------------

The animation should feel like construction.

Suggested sequence:

PHASE 1

A vertical structural line extends.

Direction:
top → bottom

PHASE 2

A horizontal line extends.

Direction:
left → right

PHASE 3

A small measurement marker snaps into alignment.

PHASE 4

A section number appears.

Example:

01 / INTRO

PHASE 5

Small service labels appear.

Example visual language:

WEB
MOBILE
SYSTEMS

These should remain secondary.

PHASE 6

A diagonal structural rail enters.

It should connect visually to the X.

PHASE 7

Navigation becomes fully resolved.

PHASE 8

Hero heading becomes clearer / more prominent.

PHASE 9

CTA becomes available.

PHASE 10

The composition stabilizes.

--------------------------------------------------
12. LINE ANIMATIONS
--------------------------------------------------

Structural lines should feel physically drawn.

Preferred technique:

scaleX
scaleY
clip-path
mask
stroke-dashoffset for SVG

Avoid animating width/height when avoidable.

Example:

horizontal line:

scaleX(0)
→
scaleX(1)

transform-origin:
left center

vertical line:

scaleY(0)
→
scaleY(1)

transform-origin:
top center

SVG geometry:

stroke-dashoffset
→
0

This makes the lines appear constructed rather than
simply faded in.

--------------------------------------------------
13. LABEL ANIMATIONS
--------------------------------------------------

Labels should NOT simply fade in.

Use:

opacity
+ small directional movement
+ optional clipping

Example:

opacity:
0 → 1

translateY:
8px → 0

Duration:

approximately 350–600ms

Ease:

ease-out / custom cubic-bezier

The movement should be subtle.

--------------------------------------------------
14. NAVIGATION ANIMATION
--------------------------------------------------

Navigation should feel like it is becoming part of the
architecture.

Initial state:

restrained.

During construction:

navigation items appear one by one or as a controlled group.

Do not use:

bounce
overshoot
elastic animation

Preferred:

opacity
+ 6–12px translation
+ slight line reveal

--------------------------------------------------
15. SECTION INDEX
--------------------------------------------------

A small section indicator should communicate progress.

Example:

01
INTRO

or

01 / 06

The exact visual treatment should follow the documented
global UI system.

When scroll progress changes, the indicator should update
subtly.

Do not make it visually dominant.

It is metadata.

--------------------------------------------------
16. SERVICE RAIL / DIAGONAL BAND
--------------------------------------------------

The diagonal service rail from the design reference
is an architectural element.

It must NOT be implemented as a simple gray rectangle
with text written on it.

That is explicitly incorrect.

Instead:

Create a real layered architectural rail.

Possible layers:

1. base structural rail
2. thin border/measurement line
3. internal service text
4. tiny category label
5. optional secondary line
6. moving/appearing markers

The rail may use:

- SVG
- CSS transform
- clipping
- pseudo-elements
- layered HTML

The text should follow the rail geometry.

The rail is part of the architecture.

--------------------------------------------------
17. ARCHITECTURAL TEXT
--------------------------------------------------

Large architectural text can be used.

Example:

WEB DEVELOPMENT
MOBILE
CUSTOM SYSTEMS

But it should be treated as part of the structure.

The text can be:

- rotated
- masked
- clipped
- partially hidden
- revealed along a path

Do not simply put large text on top of a rectangle.

--------------------------------------------------
18. BRONZE ACCENT ANIMATION
--------------------------------------------------

Bronze is extremely restrained.

Possible uses:

- tiny marker
- active line
- CTA
- selected index
- small highlight
- micro indicator

Do not animate bronze continuously.

Use bronze as a signal.

Example:

inactive:
black / graphite

active:
bronze

This provides visual hierarchy.

--------------------------------------------------
19. STATE B MIDPOINT
--------------------------------------------------

At approximately the middle of the construction sequence,
the visitor should feel:

"The website is assembling around the brand."

At this point:

- X remains large
- structural grid is visible
- lines are present
- labels exist
- navigation is established
- service rail exists
- hero typography is clearly visible
- CTA is becoming obvious

The composition should be visually dense enough to be
interesting but still retain negative space.

--------------------------------------------------
20. STATE C — RESOLUTION
--------------------------------------------------

The final state is NOT another dramatic transition.

It is the moment the architectural experiment becomes
a usable website.

The visual system resolves.

The giant X no longer behaves like a floating artwork.

It becomes part of the page architecture.

The user can now naturally continue scrolling.

--------------------------------------------------
21. STATE C COMPOSITION
--------------------------------------------------

Required:

- clear hero heading
- supporting text
- CTA
- resolved navigation
- stable architectural elements
- subtle section indicator
- clear continuation into the next section

The user's attention should finally shift:

FROM:

brand identity

TO:

what Oxlate actually does.

--------------------------------------------------
22. STATE C X BEHAVIOR
--------------------------------------------------

The X remains visible.

It may:

- become slightly smaller
- move toward an edge
- become partially cropped
- become integrated into an architectural frame

But it should not suddenly disappear.

The transition should feel continuous.

--------------------------------------------------
23. STATE C FINAL MOTION
--------------------------------------------------

Once the hero resolves:

Stop large-scale motion.

The hero becomes stable.

Only subtle effects remain:

- hover
- tiny parallax
- active navigation
- section progress
- micro line movement if genuinely needed

Do not keep the entire hero moving forever.

--------------------------------------------------
24. HERO → CAPABILITIES TRANSITION
--------------------------------------------------

The final hero structural line should provide the visual
connection to the next section.

For example:

A horizontal architectural line from the hero can extend
into the next section.

OR:

A diagonal rail can continue beyond the hero boundary.

OR:

The giant X geometry can establish the alignment/grid
used by the next section.

The next section should not feel like:

"hero ended, now random cards begin."

It should feel like:

"the structure continues."

--------------------------------------------------
25. SCROLL LENGTH
--------------------------------------------------

Do NOT make this a normal 100vh hero followed immediately
by the next section.

The hero animation requires scroll space.

Use a controlled scroll duration sufficient to let the
three states breathe.

The exact height should be tested visually.

Suggested starting point:

approximately 250vh–450vh total hero scroll range,

with the viewport pinned for the core construction phase.

Do not blindly use this number.

Tune according to actual animation pacing.

--------------------------------------------------
26. TIMING PHILOSOPHY
--------------------------------------------------

Avoid:

- fast flashy transitions
- bounce
- elastic effects
- excessive blur
- excessive scale
- random floating

Prefer:

- 350–800ms micro transitions
- 800–1800ms structural transitions
- scroll-driven interpolation for major movement
- controlled easing
- low-amplitude movement

Major movement:
slow

Micro movement:
precise

Navigation:
quiet

CTA:
clear

X:
dominant

--------------------------------------------------
27. EASING
--------------------------------------------------

Use consistent easing.

Preferred:

cubic-bezier based ease-out.

Example direction:

cubic-bezier(0.22, 1, 0.36, 1)

Avoid using a different easing function for every element.

The experience should feel mechanically related.

--------------------------------------------------
28. MOTION HIERARCHY
--------------------------------------------------

Highest motion importance:

1. X / primary architecture
2. structural lines
3. major rails
4. hero typography
5. navigation
6. micro labels
7. metadata
8. tiny indicators

Do not give a tiny label more movement than the X.

--------------------------------------------------
29. RESPONSIVE — DESKTOP
--------------------------------------------------

Desktop receives the full composition.

Use:

- large X
- architectural geometry
- full micro-element system
- diagonal rail
- complete navigation
- large typography

Desktop is the reference composition.

--------------------------------------------------
30. RESPONSIVE — TABLET
--------------------------------------------------

Preserve:

- giant identity
- architectural language
- hierarchy
- major scroll sequence

Reduce:

- number of micro-elements
- decorative complexity
- extreme crop
- typography size

Do not simply scale desktop down proportionally.

Recompose it.

--------------------------------------------------
31. RESPONSIVE — MOBILE
--------------------------------------------------

Mobile is NOT:

desktop shrunk to 375px.

Mobile should have its own composition.

The giant X remains important.

But it may occupy:

- background plane
- side wall
- cropped upper/lower region

Reduce architectural clutter.

Keep only the most important micro-elements.

Suggested priority:

1. X
2. hero statement
3. navigation
4. one structural rail
5. section indicator
6. CTA

Remove low-value decorative geometry.

--------------------------------------------------
32. REDUCED MOTION
--------------------------------------------------

When prefers-reduced-motion is enabled:

Disable:

- large parallax
- complex scroll choreography
- continuous motion
- unnecessary transforms

Maintain:

- giant X
- architecture
- typography
- navigation
- content
- CTA

The hero must remain fully understandable.

--------------------------------------------------
33. ACCESSIBILITY
--------------------------------------------------

Important information must exist in semantic HTML.

Do not place critical information only inside:

- SVG
- canvas
- generated image
- animation
- background-image

Hero must contain:

- one H1
- supporting paragraph
- real links/buttons
- accessible navigation

Decorative SVGs should use appropriate accessibility treatment.

--------------------------------------------------
34. SEO
--------------------------------------------------

Hero must communicate clearly to search systems.

Required:

ONE H1.

The H1 must communicate what Oxlate does.

The visual animation must not control whether the H1
exists in the DOM.

Do not inject the H1 after animation.

Do not hide the H1 behind inaccessible rendering.

The giant X is decorative/branding architecture.

The semantic content remains HTML.

--------------------------------------------------
35. ASSET REQUIREMENTS
--------------------------------------------------

Required assets should be listed separately and tracked.

Potential hero assets:

A001
Oxlate primary logo / X SVG

A002
Architectural X geometry SVG

A003
Structural diagonal rail SVG

A004
Measurement / marker SVG set

A005
Optional hero texture

A006
Optional art-directed architectural image

Do not create raster images for geometry that can be
cleanly represented as SVG.

Do not use generic stock images.

--------------------------------------------------
36. SVG REQUIREMENTS
--------------------------------------------------

SVG geometry must be:

- responsive
- scalable
- crisp
- independently animatable where necessary
- free of unnecessary embedded text

Prefer separate SVG elements when they need independent
motion.

Do NOT combine the entire hero into one SVG if individual
parts require animation.

Example:

BAD:

hero.svg
  contains everything

GOOD:

oxlate-x.svg
structural-frame.svg
diagonal-rail.svg
measurement-line.svg
markers.svg

--------------------------------------------------
37. COMPONENT ARCHITECTURE
--------------------------------------------------

Do not create one giant Hero component.

Use focused feature-based architecture.

Suggested structure:

hero/
  components/
    Hero.tsx
    HeroCanvas.tsx
    HeroNavigation.tsx
    HeroContent.tsx
    HeroX.tsx
    HeroArchitecture.tsx
    HeroServiceRail.tsx
    HeroMicroElements.tsx
    HeroSectionIndicator.tsx
    HeroScrollIndicator.tsx

  animation/
    heroTimeline.ts
    heroScroll.ts
    heroMotion.ts
    heroStates.ts

  data/
    heroContent.ts
    heroElements.ts

  assets/
    heroAssets.ts

  hooks/
    useHeroProgress.ts
    useReducedMotion.ts

  types/
    hero.types.ts

Exact naming may follow the existing repository,
but preserve this separation of responsibility.

--------------------------------------------------
38. STATE MODEL
--------------------------------------------------

Represent the hero as a state/progress system.

Conceptually:

heroProgress = 0 → 1

STATE A:

0.00 → 0.20

STATE B:

0.20 → 0.80

STATE C:

0.80 → 1.00

Use interpolation.

Do not hardcode dozens of unrelated scroll listeners.

Prefer one controlled progress source.

--------------------------------------------------
39. ANIMATION OWNERSHIP
--------------------------------------------------

Each animation system must have one owner.

Example:

heroScroll.ts
owns scroll progress.

heroX.ts / HeroX component
owns X transformation.

HeroArchitecture
owns structural line progression.

HeroMicroElements
owns micro-element stagger/progress.

HeroNavigation
owns navigation reveal.

Avoid multiple components fighting over the same transform.

--------------------------------------------------
40. DEBUG MODE
--------------------------------------------------

Implement a development-only debug mode.

It should allow:

- viewing hero progress
- showing layer boundaries
- showing element IDs
- showing current hero state
- optionally pausing animation

Example:

STATE: CONSTRUCTION
PROGRESS: 0.57
X: 0.74 scale
GRID: 82%
RAIL: 60%
NAV: 100%

This is for development only.

Do not ship visible debug UI to production.

--------------------------------------------------
41. HERO QUALITY BAR
--------------------------------------------------

The hero is NOT complete when:

- it builds
- it has a giant X
- it has text
- the colors are correct

The hero is complete only when:

[ ] Initial composition matches intended visual language
[ ] X dominates viewport
[ ] X can be intentionally cropped
[ ] X does not collapse into a tiny logo
[ ] Hero feels architectural
[ ] Scroll changes the composition
[ ] Hero becomes temporarily pinned
[ ] X moves through a controlled sequence
[ ] structural lines appear independently
[ ] micro-elements appear independently
[ ] navigation resolves independently
[ ] service rail is a real architectural element
[ ] architectural text follows intended geometry
[ ] bronze remains restrained
[ ] hero has three recognizable states
[ ] transition feels continuous
[ ] no random animation exists
[ ] no bounce/elastic animation exists
[ ] no generic card-based hero exists
[ ] typography uses approved fonts
[ ] responsive behavior is intentionally composed
[ ] reduced-motion mode works
[ ] SEO text exists semantically
[ ] no console errors
[ ] no hydration errors
[ ] no horizontal overflow
[ ] no giant unoptimized image
[ ] visual QA has been performed

--------------------------------------------------
42. FINAL TEST
--------------------------------------------------

Perform this exact user journey:

1. Open website.

2. Do not touch anything for several seconds.

3. Observe the initial composition.

4. Scroll slowly.

5. Verify giant X remains dominant.

6. Continue scrolling.

7. Verify the environment begins constructing itself.

8. Verify lines appear independently.

9. Verify labels appear independently.

10. Verify navigation resolves.

11. Verify architectural rail appears as a real
    composed element, not a rectangle.

12. Verify typography becomes the main informational
    focus.

13. Continue scrolling.

14. Verify hero resolves naturally.

15. Verify next section feels connected.

16. Scroll back upward.

17. Verify reverse scroll behavior is coherent.

18. Resize to tablet.

19. Resize to mobile.

20. Enable reduced motion.

21. Verify the hero remains fully usable.

--------------------------------------------------
43. CRITICAL FAILURE CONDITIONS
--------------------------------------------------

The implementation is considered FAILED if it does any
of the following:

FAILURE 01
Uses the existing hero with minor CSS changes.

FAILURE 02
Creates only one giant X animation.

FAILURE 03
Shrinks the giant X into a small centered logo.

FAILURE 04
Places a simple gray bar at the bottom with text.

FAILURE 05
Uses the wrong font.

FAILURE 06
Uses one parent animation for every element.

FAILURE 07
Does not have independently animated micro-elements.

FAILURE 08
Uses generic agency hero design.

FAILURE 09
Leaves other hero elements static while only the logo moves.

FAILURE 10
Treats the screenshot as a loose inspiration instead
of implementing its underlying spatial behavior.

FAILURE 11
Starts building unrelated sections before the hero
passes visual QA.

FAILURE 12
Changes documented architecture without recording
the change.

--------------------------------------------------
44. IMPLEMENTATION ORDER
--------------------------------------------------

STEP 1
Delete/disable current hero implementation.

STEP 2
Build static STATE A only.

STEP 3
Visually verify STATE A.

STEP 4
Build X architecture and layers.

STEP 5
Add independent micro-elements.

STEP 6
Build STATE A entrance animation.

STEP 7
Build scroll progress engine.

STEP 8
Build STATE B construction animation.

STEP 9
Build X transformation.

STEP 10
Build line/rail/label animations.

STEP 11
Build navigation reveal.

STEP 12
Build STATE C resolution.

STEP 13
Build hero → capabilities transition.

STEP 14
Responsive composition.

STEP 15
Reduced motion.

STEP 16
Accessibility.

STEP 17
SEO.

STEP 18
Visual QA.

DO NOT SKIP DIRECTLY FROM STEP 1 TO STEP 18.

--------------------------------------------------
45. FINAL CREATIVE DIRECTIVE
--------------------------------------------------

Do not interpret this hero as:

"large logo + agency text + animation."

Interpret it as:

"A physical architectural environment constructed from
the Oxlate identity."

The X is the structure.

The lines are the construction.

The labels are the annotations.

The navigation is the interface.

The typography is the information.

The scroll is the construction process.

The final hero is the completed structure.

Everything should feel like it belongs to the same system.

END.
