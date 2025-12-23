# Comparison Test: Web Browsing Schedule Manager

**Date**: 2024-12-22
**Tester**: Mike Waszazak

---

## Prompt

> I need a way for parents to set up time-based rules for their kids' web browsing. The idea is that a parent might want different rules at different times — like blocking distracting sites during homework time, or turning off the internet completely at bedtime.
>
> So basically they can create these "schedules" that override whatever their normal rules are during specific time windows. They pick the days, set a start and end time, and then decide what should be blocked during that period.
>
> It would be nice to have some templates to get people started quickly — something for focus/homework time, something for bedtime, and then a blank custom option if they want to build from scratch. The templates should have reasonable defaults already filled in so parents don't have to think too hard.
>
> For what actually gets blocked during a schedule, they should be able to either block everything (like full internet pause) or be more selective — maybe just block certain categories like games or entertainment or social media. They should also be able to apply their block list if they've set one up elsewhere.
>
> Schedules can be turned on and off without deleting them. And there should probably be some limit on how many they can create — maybe 10 or so.
>
> One thing to watch out for is overlapping schedules. We shouldn't let someone create two schedules that run at the same time on the same day. The system should catch that and let them know.
>
> Oh and bedtime schedules need to work overnight — like 9pm to 7am — so the end time being "before" the start time needs to be handled.
>
> The schedules should also show up on the main activity screen somewhere so parents can see what's active without having to dig into the schedules section.

---

## Tools Tested

| Tool | Model/Version | Time to Generate |
|------|---------------|------------------|
| Figma Make | Default (Sonnet) | |
| Figma Make | Gemini 3 | |
| Claude.app | Opus 4.5 | |
| Product Studio | Claude Opus 4.5 | |

---

## Results

### Figma Make (Default/Sonnet)

**Screenshots**: figma-make-1.png, figma-make-2.png, figma-make-3.png

**What worked well:**
- Generated multiple screens (Dashboard, Schedules, Edit modal)
- Included tab navigation between Dashboard and Schedules views
- Template cards with icons for Focus/Homework, Bedtime, Custom

**What didn't work:**
- Did NOT use Celeritas design system components despite being in Figma
- Visual design is extremely basic and generic
- Lacks depth of design thinking — feels like a wireframe, not a finished UI
- Typography hierarchy is weak
- Cards lack visual polish (minimal shadows, basic borders)
- Time picker UI is crude (--:-- -- format)
- "What to Block" section only shows one option
- Day selector doesn't show selected state
- No indication of how overlapping schedules would be handled
- "No Restrictions" label placement is awkward
- Would require extensive refinement to be usable

**Notes:**
- Despite prompt complexity, output feels like a first-pass wireframe
- Engineer would need significant design direction beyond this output
- Does not demonstrate understanding of the Lightspeed design language

---

### Figma Make (Gemini 3)

**Screenshots**: figma-make-gemini-1.png, figma-make-gemini-2.png

**What worked well:**
- Added product branding (SafeBrowse logo)
- Schedule cards show more info at a glance (toggle, time range, blocking status, day pills)
- Day selector uses compact pill format (S M T W T F S)
- Template selection is cleaner (Focus Time, Bedtime, Custom)
- "Blocks Everything" status label in red provides clear feedback
- Toggle switch for enabling/disabling schedules

**What didn't work:**
- Still not using Celeritas design system components
- Inconsistent day display: cards show "SUN MON TUE..." vs modal shows "S M T W T F S"
- Modal appears cut off — can't see full blocking rules options
- Generic styling, not Lightspeed design language
- Would still require significant refinement
- No visual indication of overnight schedules (9pm-7am)
- Blocking rules section incomplete/unclear

**Notes:**
- Improvement over Sonnet model but still wireframe-level
- Better information density in schedule cards
- Still missing design system compliance

---

### Claude.app (Opus 4.5)

**Screenshots**: claude-app-1.png, claude-app-2.png

**What worked well:**
- Clean, modern aesthetic — visually appealing
- Good information architecture on schedule cards (time, days, what's blocked)
- "(overnight)" label for bedtime schedule — smart detail addressing prompt requirement
- "2 of 10 schedules" counter addresses the schedule limit requirement
- Three blocking options clearly presented (Block Everything, Block Categories, Use Block List)
- Category selection with icons (Games, Entertainment, Social Media, Streaming)
- Dashed "Add Schedule" button is a nice empty-state pattern
- Day selector with clear selected state (teal filled vs grey outline)
- Icons for each info row improve scannability

**What didn't work:**
- Generic components, not Celeritas design system
- No Lightspeed design language
- Cards are very tall — inefficient use of vertical space
- Full day names in cards take up excessive space (could be abbreviated)
- Missing template selection flow that was specified in the prompt
- Toggle positioning inconsistent with Lightspeed patterns
- No indication of overlapping schedule handling
- Would require significant iteration to match production standards

**Notes:**
- Best visual quality among non-Product Studio tools
- Same underlying model as Product Studio, but lacks design system context
- Demonstrates what Opus 4.5 can do with generic styling
- Good for early concept exploration, not production-ready
- Shows the value of design system knowledge — this is the baseline without it

---

### Product Studio (Claude Opus 4.5 + Celeritas)

**Screenshots**: product-studio-1.png, product-studio-2.png, product-studio-3.png

**What worked well:**
- **Uses actual Celeritas components** (Toggle, Modal, Button, etc.)
- **Looks like a Lightspeed product** — consistent with production design language
- Compact, efficient schedule cards with excellent information density
- Day pills (S M T W T F S) with clear selected/unselected states
- "(overnight)" label handled correctly for bedtime schedule
- "3 of 10 schedules" counter addresses limit requirement
- Template selection modal with all three options (Focus/Homework, Bedtime, Custom)
- Quick select links: "Weekdays", "Weekends", "Every day" — smart UX addition
- "No active schedules" status widget at top of page
- Three blocking options in create form (Block Everything, Block Categories, Block List)
- Teal primary color consistent with Celeritas design system
- Toggle placement follows Lightspeed conventions
- Modal structure and spacing looks production-ready

**What didn't work:**
- More Actions button (kebab menu) is oversized and too visually prominent
- More Actions button doesn't function (prototype limitation)
- Time picker shows "--:-- --" placeholder (same crude format as other tools)
- "Block Categories" option visible but category selection may be cut off
- Some visual polish still needed
- Would benefit from additional design refinement

**Notes:**
- **Best foundation for iteration** — starts much closer to production than competitors
- Same model as Claude.app, but design system context makes dramatic difference
- Demonstrates value proposition: Opus 4.5 + Celeritas knowledge = production-quality output
- Issues are refinement-level, not foundational rewrites
- Could improve with additional "training" via enhanced instructions

---

## Side-by-Side Comparison

| Criteria | Figma Make (Sonnet) | Figma Make (Gemini 3) | Claude.app | Product Studio | Winner |
|----------|---------------------|----------------------|------------|----------------|--------|
| Visual accuracy | Basic/wireframe | Slightly better | Good | Production-level | **Product Studio** |
| Component quality | Generic | Generic | Generic | Celeritas components | **Product Studio** |
| Design system compliance | None | None | None | Full compliance | **Product Studio** |
| Information density | Low | Medium | Medium | High | **Product Studio** |
| Accessibility | Minimal | Minimal | Minimal | Better (via Celeritas) | **Product Studio** |
| Code quality | N/A (Figma only) | N/A (Figma only) | React/JSX | React/JSX + Celeritas | **Product Studio** |
| Prompt coverage | Partial | Partial | Good | Excellent | **Product Studio** |
| Design depth/thinking | Low | Low-Medium | Medium | High | **Product Studio** |

---

## Key Insights

### What Product Studio did better:
1. **Design system compliance** — Only tool that used actual Celeritas components
2. **Production-ready output** — Looks like a real Lightspeed product, not a wireframe
3. **Information density** — Compact cards show all relevant info without wasting space
4. **Prompt coverage** — Addressed nearly all requirements (templates, overnight, limits, status widget)
5. **UX additions** — "Weekdays/Weekends/Every day" quick-select links show design thinking
6. **Iteration foundation** — Issues are polish-level, not structural rewrites

### What competitors did better:
1. **Claude.app** — Visually appealing generic styling; good for early concept exploration
2. **Figma Make (Gemini 3)** — Product branding (SafeBrowse) added context; red "Blocks Everything" status label

### Actionable improvements for Product Studio:
1. **Kebab menu sizing** — More Actions button is too large/prominent; needs to be subtler
2. **Time picker UX** — All tools struggled here; consider better Celeritas time input pattern
3. **Functional prototypes** — Actions like kebab menu should work in prototype
4. **Category selection visibility** — Ensure full blocking options are visible in modal
5. **Additional "training"** — Document patterns for common UI elements to improve consistency

---

## Overall Winner

**Product Studio** — Clear winner across all categories. While it has refinement-level issues (oversized kebab menu, non-functional actions), it's the only tool that:
- Uses the actual design system
- Produces output that looks like production Lightspeed UI
- Addresses complex prompt requirements thoroughly
- Provides a foundation that requires iteration, not rebuilding

The comparison between Claude.app and Product Studio is particularly instructive: same model (Opus 4.5), but the design system context transforms generic output into production-quality UI. This validates the core Product Studio value proposition.

---

## Raw Outputs

<details>
<summary>Figma Make Screenshots</summary>

See: figma-make-1.png, figma-make-2.png, figma-make-3.png

</details>

<details>
<summary>Product Studio Code</summary>

```jsx
// (pending)
```

</details>
