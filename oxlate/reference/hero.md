Yes. Now we should **freeze the hero concept completely** before the agent writes another line of UI code.

The hero should not be interpreted as “three different screens.” It is **one spatial composition that transforms through three controlled states**.

The most important correction from your latest instruction is:

> **The navigation/section sidebar belongs on the LEFT.**
>
> **The actual content progression—Intro → Capabilities → Work → Approach → Contact—belongs on the RIGHT.**

And there should be **no extra decorative UI invented by the agent**.

Below is the exact hero specification I would put into `docs/sections/01-HERO.md`.

---

# OXLATE HERO — FINAL SPATIAL & ANIMATION SPECIFICATION

```md
# OXLATE HERO
Version: 2.0
Status: AUTHORITATIVE

This document defines the exact visual composition and
animation behavior of the Oxlate homepage hero.

DO NOT reinterpret this as a generic landing page.

DO NOT add extra UI.

DO NOT introduce cards.

DO NOT invent additional panels.

DO NOT create decorative components that are not defined here.

The hero is one continuous architectural composition
with three visual states.

--------------------------------------------------
01. HERO MODEL
--------------------------------------------------

The hero consists of exactly:

STATE 01 — ARRIVAL
STATE 02 — TRANSITION
STATE 03 — RESOLUTION

There are no additional hero states.

The transition between the states is continuous.

The user scroll controls the progression.

The hero temporarily occupies the viewport while the
visual system transforms.

--------------------------------------------------
02. CANVAS
--------------------------------------------------

Viewport:

100vw × 100vh

Primary background:

Warm Ivory
#F5F2EC

Primary structure:

Deep Black
#111111

Secondary:

Graphite

Accent:

Bronze
#A87445

No gradients.

No glassmorphism.

No cards.

No floating content panels.

No shadows around information.

The canvas should feel like a large architectural sheet.

--------------------------------------------------
03. GLOBAL SCREEN ZONES
--------------------------------------------------

The hero uses two major information zones.

LEFT ZONE
Navigation / section index.

RIGHT ZONE
Primary visual content.

The left side remains structurally stable.

The right side is where the hero composition evolves.

--------------------------------------------------
04. LEFT SIDEBAR
--------------------------------------------------

The sidebar is a permanent vertical navigation structure.

Position:

LEFT EDGE.

Width:

approximately 72–120px desktop depending on viewport.

It must NOT become a floating card.

It is part of the architectural frame.

Contents:

01  INTRO
02  CAPABILITIES
03  WORK
04  APPROACH
05  ABOUT
06  CONTACT

Only these six navigation items exist.

The active section receives the bronze indicator.

Example:

01  INTRO     ●

Inactive:

02  CAPABILITIES
03  WORK
04  APPROACH
05  ABOUT
06  CONTACT

The indicator can be:

- small bronze line
- small bronze dot
- subtle bronze marker

No pill.

No rounded active background.

--------------------------------------------------
05. SIDEBAR ANIMATION
--------------------------------------------------

The sidebar is NOT the primary hero animation.

It has a quiet entrance.

Initial:

opacity: 0
translateX: -8px

Then:

opacity: 1
translateX: 0

Duration:

400–600ms

Stagger items slightly.

Once visible, the sidebar remains stable.

During hero scroll:

Only the active item changes.

The sidebar should NOT repeatedly fly around the screen.

--------------------------------------------------
06. RIGHT CONTENT FIELD
--------------------------------------------------

Everything else exists in the RIGHT content field.

Do not place primary content on the left.

Desktop composition:

LEFT:
navigation

CENTER:
architectural void / X structure

RIGHT:
hero information + architectural elements

The right field can occupy approximately:

70–85% of viewport width.

--------------------------------------------------
07. STATE 01 — ARRIVAL
--------------------------------------------------

Purpose:

Establish Oxlate identity before revealing the full website.

The user lands in an intentionally sparse environment.

The X is the dominant object.

--------------------------------------------------
08. STATE 01 — GIANT X
--------------------------------------------------

The X must be enormous.

It is not a logo inside a hero.

It is the hero's architectural structure.

The X may exceed the viewport.

It may be cropped.

It may touch:

TOP
RIGHT
BOTTOM

viewport boundaries.

It should occupy roughly:

65–95% of the visible hero area.

Its visual mass should dominate the screen.

The X is positioned primarily toward the
CENTER/RIGHT of the viewport.

Do NOT put the X predominantly on the left.

--------------------------------------------------
09. STATE 01 — X GEOMETRY
--------------------------------------------------

The X should be constructed from structural geometry.

Do not treat the X as a generic flat image if
independent transformation is required.

At minimum the system should conceptually contain:

X_LEFT_STRUCTURE
X_RIGHT_STRUCTURE
X_CENTER_STRUCTURE

These pieces may be implemented as:

- SVG
- CSS geometry
- layered vectors

They must remain independently transformable.

--------------------------------------------------
10. STATE 01 — CONTENT
--------------------------------------------------

Only essential content appears.

RIGHT CONTENT AREA:

small section identifier:

01 // INTRO

Then:

PRIMARY H1

Then:

supporting paragraph

Then:

bronze CTA

Nothing else is required.

No card.

No floating information panel.

No "Why Oxlate" box.

No "Who is Oxlate" box.

No statistics.

No fake proof.

--------------------------------------------------
11. STATE 01 — CONTENT POSITION
--------------------------------------------------

The main information block should begin around:

X = 55–60vw

Y = 30–36vh

The block width:

approximately 420–620px desktop.

The block is aligned vertically around the upper-middle
of the right field.

The giant X can overlap or pass behind the right side
of the composition.

Content must remain readable.

--------------------------------------------------
12. STATE 01 — MICRO ELEMENTS
--------------------------------------------------

Only a minimal set.

Allowed:

1. Section index
2. One or two thin datum lines
3. Scroll indicator
4. One tiny bronze marker

Nothing else.

The visual should breathe.

--------------------------------------------------
13. STATE 01 — INITIAL ENTRANCE
--------------------------------------------------

On page load:

T0
Ivory canvas.

T+150ms
Very faint structural line appears.

T+250ms
X enters.

X:
scale ~0.96 → 1
opacity 0 → 1

Duration:
800–1200ms

T+550ms
Section identifier appears.

T+700ms
H1 reveals.

T+850ms
Supporting text reveals.

T+1000ms
CTA appears.

T+1200ms
Sidebar finishes resolving.

T+1300ms
Scroll indicator becomes active.

No element should bounce.

No spring overshoot.

--------------------------------------------------
14. STATE 01 — MICRO MOTION
--------------------------------------------------

The X should have extremely subtle idle movement
only if necessary.

Maximum amplitude:

1–3px.

Do not make it float.

The architecture should feel heavy.

--------------------------------------------------
15. STATE 02 — TRANSITION
--------------------------------------------------

This begins when the user scrolls.

The hero becomes temporarily pinned.

The user's scroll becomes the animation timeline.

The viewport does not immediately leave the hero.

Instead, the composition transforms.

STATE 02 is the construction phase.

--------------------------------------------------
16. STATE 02 — PRIMARY OBJECT
--------------------------------------------------

The giant X remains visible.

It does not disappear.

It does not shrink into a tiny logo.

It begins moving toward its final architectural position.

The movement is slow.

The X changes:

position
scale
possibly slight rotation/correction

but retains visual dominance.

--------------------------------------------------
17. STATE 02 — ORANGE STRIPE
--------------------------------------------------

The orange stripe is a TRANSITIONAL STRUCTURAL PLANE.

It is NOT a section background.

It is NOT a permanent UI bar.

It is NOT a generic CTA banner.

It appears horizontally across the viewport.

Initial stripe state:

WIDTH:
100vw

HEIGHT:
approximately 12–16vh

POSITION:

vertical center around:

Y = 50% viewport height

X = 0

Color:

use the documented bronze/orange transition color.

The stripe crosses the giant X.

The X remains visible through / around the stripe
according to the layering specification.

--------------------------------------------------
18. STATE 02 — STRIPE ENTRANCE
--------------------------------------------------

The stripe should NOT simply fade in.

It enters as a structural plane.

Preferred:

scaleX 0 → 1

transform-origin:
center

combined with:

opacity:
0 → 1

The line/plane should feel like it has been
introduced into the architectural system.

--------------------------------------------------
19. STATE 02 — STRIPE / X RELATIONSHIP
--------------------------------------------------

At the beginning of STATE 02:

X:
large
dominant
center/right

Stripe:
horizontal
middle of viewport

The stripe crosses the X.

This creates the visual collision between:

BRAND STRUCTURE
and
TRANSITION PLANE.

--------------------------------------------------
20. STATE 02 — STRIPE TRANSFORMATION
--------------------------------------------------

The stripe is the main transitional object.

It should move from:

POSITION A

full-width horizontal center band

to:

POSITION B

a diagonal architectural rail that belongs to
the final composition.

Therefore:

The stripe does NOT disappear and get replaced.

It transforms.

Conceptually:

HORIZONTAL PLANE

        ↓

ROTATE / SHEAR / SCALE

        ↓

DIAGONAL SERVICE RAIL

The transformation should happen continuously.

--------------------------------------------------
21. STRIPE TRANSFORMATION GEOMETRY
--------------------------------------------------

Start:

left: 0vw
right: 0vw
top: approximately 42–50vh
rotation: 0deg

End:

diagonal rail crossing the lower half of the
right content field.

Suggested final orientation:

approximately +12° to +20°
depending on final viewport composition.

The final position should pass through the
lower-middle / bottom-right area.

It must visually connect with the X geometry.

Do not place the final rail randomly.

It should appear structurally attached to the X.

--------------------------------------------------
22. STRIPE CONTENT
--------------------------------------------------

The transition stripe may contain only the
service spectrum.

Example:

WEB DEVELOPMENT
MOBILE APPLICATIONS
CUSTOM SYSTEMS

Typography is part of the stripe.

No cards.

No badges.

No pills.

No giant filled containers.

The text follows the stripe geometry.

--------------------------------------------------
23. STATE 02 — X MOVEMENT
--------------------------------------------------

While the stripe transforms:

The X gradually transitions toward the
final hero composition.

Example interpolation:

STATE 02 START:

X scale:
~1.00

X position:
center/right

STATE 02 MID:

X scale:
~0.90–0.95

X position:
moves rightward/upward

STATE 02 END:

X scale:
~0.80–0.90

X becomes integrated into the right architectural frame.

These values are starting targets.

Visual composition overrides exact percentages.

--------------------------------------------------
24. STATE 02 — MICRO ELEMENT CONSTRUCTION
--------------------------------------------------

The environment now begins assembling.

Order:

1. Vertical datum line
2. Horizontal datum line
3. Crosshair marker
4. Section identifier
5. Small architectural label
6. Diagonal rail
7. Service typography
8. Hero content refinement

Each appears independently.

--------------------------------------------------
25. LINE ANIMATION
--------------------------------------------------

Structural line:

scaleX(0) → scaleX(1)

or:

scaleY(0) → scaleY(1)

or SVG stroke reveal.

Duration:

300–700ms

No opacity-only line appearance where drawing
makes more sense.

--------------------------------------------------
26. MICRO MARKER ANIMATION
--------------------------------------------------

Crosshair / plus marker:

scale:
0.6 → 1

opacity:
0 → 1

Duration:
250–400ms

No bounce.

--------------------------------------------------
27. ARCHITECTURAL LABEL ANIMATION
--------------------------------------------------

Initial:

opacity 0
translateY 6–10px

Final:

opacity 1
translateY 0

Optional clip/mask reveal.

Duration:
350–550ms.

--------------------------------------------------
28. STATE 02 — INFORMATION MOVEMENT
--------------------------------------------------

The main content does NOT disappear.

Instead:

Hero content transitions from:

INITIAL EDITORIAL BLOCK

toward:

FINAL RESOLVED CONTENT AREA.

The H1 may move slightly right.

The paragraph follows.

CTA remains stable relative to the content.

Do not make the content fly around dramatically.

--------------------------------------------------
29. STATE 03 — RESOLUTION
--------------------------------------------------

At the end of the transition the hero becomes
the final architectural homepage opening.

The visitor should immediately understand:

- where they are
- what Oxlate is
- what it builds
- how to navigate

The visual system stops behaving like a transition.

It becomes a stable interface.

--------------------------------------------------
30. STATE 03 — FINAL COMPOSITION
--------------------------------------------------

LEFT:

Permanent sidebar.

CENTER/RIGHT:

Large architectural X.

RIGHT:

Main intro content.

LOWER:

Diagonal service rail.

BACKGROUND:

Very subtle architectural grid.

MICRO:

Minimal labels and measurement marks.

No cards.

--------------------------------------------------
31. FINAL X POSITION
--------------------------------------------------

The X should occupy primarily:

RIGHT 35–55% of viewport.

It may continue beyond:

top
right
bottom

boundaries.

The left side must remain relatively calm so
the sidebar and navigation remain legible.

--------------------------------------------------
32. FINAL CONTENT POSITION
--------------------------------------------------

Primary content:

RIGHT SIDE.

Approximate starting region:

X = 50–58vw
Y = 28–35vh

The H1 should not collide with the primary X structure.

Use negative space created by the X.

The typography should feel anchored to the architecture,
not placed inside a panel.

--------------------------------------------------
33. FINAL SERVICE RAIL POSITION
--------------------------------------------------

The service rail occupies the:

LOWER THIRD.

It enters from the left/lower-left edge of the
right field.

It travels diagonally upward toward the center/right,
then exits toward the right.

The rail should intersect visually with the X.

It should feel like a structural beam.

It must NOT look like a footer banner.

--------------------------------------------------
34. FINAL SERVICE RAIL CONTENT
--------------------------------------------------

Order:

WEB DEVELOPMENT
→
MOBILE APPLICATIONS
→
CUSTOM SYSTEMS

Use typography separated by:

thin dividers
or
small bronze markers.

No pills.

No rounded tags.

No cards.

--------------------------------------------------
35. FINAL MICRO ELEMENTS
--------------------------------------------------

Only use:

01 // INTRO
02 // CAPABILITIES
03 // WORK
04 // APPROACH
05 // ABOUT
06 // CONTACT

plus:

- one or two datum lines
- a few registration marks
- one measurement/axis indication
- bronze active marker
- scroll/section indicator

Do NOT flood the screen.

--------------------------------------------------
36. WHAT MUST NOT EXIST IN FINAL HERO
--------------------------------------------------

No:

cards
feature cards
floating panels
white info boxes
rounded panels
dashboard elements
stats
testimonial blocks
fake client logos
extra buttons
extra CTAs
random badges
gradient blobs
3D objects unless explicitly approved
stock people
decorative UI unrelated to architecture

--------------------------------------------------
37. SCROLL PROGRESSION
--------------------------------------------------

Hero scroll range:

Use enough vertical space to allow the transformation
to breathe.

Suggested starting range:

300vh

The hero remains pinned through the major transition.

Suggested progress:

0.00–0.20
STATE 01

0.20–0.70
STATE 02

0.70–1.00
STATE 03

These are animation regions, not separate pages.

--------------------------------------------------
38. SCROLL MAPPING
--------------------------------------------------

Scroll progress controls:

X position
X scale
stripe position
stripe rotation
stripe scale
line visibility
micro-element visibility
service typography
content position
content opacity
navigation state

Use a centralized hero progress model.

Do not attach independent window scroll listeners
to every component.

--------------------------------------------------
39. REVERSE SCROLL
--------------------------------------------------

Reverse scroll must interpolate backward through
the same states.

STATE 03
→
STATE 02
→
STATE 01

No sudden resets.

No re-mount.

No flashing.

No jump.

The transformation should feel reversible.

--------------------------------------------------
40. SIDEBAR DURING SCROLL
--------------------------------------------------

Sidebar remains LEFT.

It does not participate in the large X transformation.

Its only changing property should be:

ACTIVE SECTION.

Example:

01 INTRO
becomes active initially.

When the next actual section begins:

02 CAPABILITIES
becomes active.

The sidebar itself remains spatially stable.

--------------------------------------------------
41. HERO → NEXT SECTION
--------------------------------------------------

The final service rail / structural line should
provide the transition into Capabilities.

Do not end hero abruptly.

The architectural line can continue into:

02 CAPABILITIES

The section number changes:

01
→
02

The giant X can progressively leave the primary
visual field as the next section begins.

--------------------------------------------------
42. MOBILE
--------------------------------------------------

Do NOT force the desktop architecture onto mobile.

Sidebar becomes a compact vertical/edge navigation
or documented mobile equivalent.

The giant X remains the identity monument.

The horizontal orange transition is retained only
if it remains visually meaningful.

If not:

convert it into a shorter structural plane.

Do not create a giant 300vh touch-scroll trap on mobile.

--------------------------------------------------
43. ELEMENT OWNERSHIP
--------------------------------------------------

HeroSection:
overall composition

HeroSidebar:
left navigation

HeroX:
giant X structure

HeroContent:
H1 / supporting content / CTA

HeroStripe:
transitional stripe

HeroArchitecture:
datum lines / structural geometry

HeroMicro:
markers / labels / measurements

HeroProgress:
single scroll progress source

HeroTransition:
state interpolation

Each file must own one responsibility.

--------------------------------------------------
44. DESIGN TEST
--------------------------------------------------

Remove all text.

The composition must still look intentional.

Remove the X.

The remaining architectural structure should still
have a clear framework.

Remove the architecture.

The typography must still have clear hierarchy.

Put everything together.

It should feel like ONE composition.

--------------------------------------------------
45. ACCEPTANCE TEST
--------------------------------------------------

STATE 01:

[ ] Ivory canvas
[ ] Giant X
[ ] X dominates
[ ] Sidebar left
[ ] Intro content right
[ ] Minimal micro-elements
[ ] No cards

STATE 02:

[ ] Hero pinned
[ ] X remains dominant
[ ] Orange stripe appears
[ ] Stripe crosses X
[ ] Stripe transforms
[ ] Lines construct
[ ] Micro elements appear independently
[ ] Content shifts subtly
[ ] Sidebar remains left

STATE 03:

[ ] Final X integrated right
[ ] Intro content right
[ ] Sidebar left
[ ] Diagonal service rail exists
[ ] Rail connects visually to X
[ ] Architecture remains coherent
[ ] No cards
[ ] No unnecessary UI
[ ] Hero connects to Capabilities

--------------------------------------------------
46. FINAL PRINCIPLE
--------------------------------------------------

THE HERO IS NOT A COLLECTION OF UI COMPONENTS.

IT IS A SINGLE ARCHITECTURAL OBJECT THAT BECOMES
A WEBSITE.

STATE 01:
IDENTITY

STATE 02:
CONSTRUCTION

STATE 03:
INTERFACE

The transformation itself is the Oxlate experience.

Do not add anything that is not required to support
that transformation.
```

---

## The most important spatial idea

This is the composition I would now lock:

```text
┌──────────────────────────────────────────────────────────┐
│                                                          │
│ SIDEBAR        ARCHITECTURAL FIELD                       │
│                                                          │
│ 01 INTRO                         ┌──────────┐             │
│ 02 CAPABILITIES                  │          │             │
│ 03 WORK            H1            │    X     │             │
│ 04 APPROACH       paragraph      │          │             │
│ 05 ABOUT          CTA            │          │             │
│ 06 CONTACT                         │          │             │
│                                    └──────────┘             │
│                                                          │
│                    ╲                                     │
│                     ╲  SERVICE RAIL                      │
│                      ╲ WEB / MOBILE / SYSTEMS             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

Then the transformation:

```text
STATE 01

                GIANT X
                  ╲
                   ╲


        CONTENT
        RIGHT


       ↓ SCROLL


STATE 02

                 GIANT X
                   ╲
════════════════════════════════════
        TRANSITION STRIPE
════════════════════════════════════
                   ╲


       ↓ SCROLL


STATE 03

                         GIANT X
                           ╲
                            ╲
                             ╲

             CONTENT

        ╱────────────────────────
       ╱  WEB DEVELOPMENT
      ╱   MOBILE APPLICATIONS
     ╱    CUSTOM SYSTEMS
```

And **the sidebar never moves to the right**.

---

## One subtle but very important point about the stripe

I would **not literally animate the orange rectangle into a rotated rectangle**.

That will look like:

> rectangle → rotated rectangle.

Instead, the visual idea should be:

**plane → structural beam**

The geometry should change as a single object:

```text
horizontal plane
      ↓
thins slightly
      ↓
rotates
      ↓
contracts
      ↓
reveals its internal typography
      ↓
becomes the final service rail
```

So when it reaches State 3, the user shouldn't think:

> “the orange bar disappeared.”

They should think:

> “the same object became part of the architecture.”

That is the interaction that makes this hero special.

---

### And this is the final rule I would give the agent:

> **Do not ask what component should be added. Ask what existing architectural object should transform.**

That one sentence captures your entire design direction.

The **X transforms**.
The **stripe transforms**.
The **lines construct**.
The **micro-elements reveal**.
The **content repositions**.
The **sidebar stays anchored**.
The **final composition resolves**.

Nothing else needs to happen.

That is the clean hero.
