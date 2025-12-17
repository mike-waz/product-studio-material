
# Alert Monitoring – AI Explanations Setting PRD

## 1. Summary

Add an **optional AI explanations setting** to the **Monitoring Preferences** page in Lightspeed Alert (org-level settings).

This setting controls whether **AI-generated explanations (“justifications”) are shown on alert cases**. It should:

- Be visible to all orgs.
- Be **off by default** for new orgs.
- Use a **“Beta”** label.
- Not imply that Alert’s AI can be turned off, only that **explanations are shown or hidden**.

For the design review, the coded prototype should also include a simple way to **cycle through several copy variants** (label + description) so stakeholders can easily compare and choose.

---

## 2. Background

- Alert already has an **AI justification / explanation** feature that surfaces text like *“Why did AI predict this?”* on a case.
- This feature is currently **behind a feature flag** and only enabled for a couple of customers.
- Customer feedback is **mixed**:
  - Some admins value the extra transparency.
  - Others are uneasy about AI “assessing student intent.”
- For SKO, we’d like a **quick win**:
  - Announce that customers can now **optionally** show these explanations.
  - Make it safe and self-service, instead of a hidden flag.

This is also the **first optional AI setting** in Alert, so copy and placement will set a precedent.

---

## 3. Goals & Non-Goals

### Goals

1. Allow admins to **control** whether AI explanations/justifications appear on cases.
2. Make this safe to roll out broadly by:
   - Framing it as **additional visibility**, not extra monitoring.
   - Making it clear it **doesn’t change which alerts fire**.
3. Support a **“Beta” announcement** at SKO.
4. Provide a **coded UI prototype** that Jennifer can click through and react to, including multiple copy variants.

### Non-Goals

- Changing how alerts are **scored, generated, or escalated**.
- Redesigning the **case details** experience.
- Adding new AI detection/intelligence features.
- Building analytics or admin dashboards for usage (can be future work).

---

## 4. Users & User Stories

**Primary users**

- District / org administrators configuring Alert.
- Safety / IT leaders who manage alert policy.

**User stories**

1. *As a district admin*, I want to decide whether staff can see AI explanations on alert cases, so I can balance transparency with local comfort and policy.
2. *As a safety lead*, I want to understand **what the AI saw** in the content so I can quickly triage alerts.
3. *As a Lightspeed PM/CS leader*, I want to safely roll this out beyond feature-flag customers and be able to say at SKO that customers can self-enable it.

---

## 5. UX / UI Requirements

### 5.1 Placement

- Page: **Settings → [District] (e.g., Rollingwood ISD)**.
- Section: **Monitoring Preferences**.
- **Position:**
  - Directly **below the Categories table** (Self-harm, Bullying, etc.).
  - Directly **above the “Monitored Languages”** sub-section.

This keeps it in the same conceptual area as “what gets surfaced as an alert” and separates it from language coverage and privacy settings.

### 5.2 Control type & layout

- Use the same visual pattern as **“Hide Personally identifiable Information (PII)”** under *Privacy Preferences*:
  - **Checkbox** on the left.
  - **Bold label** next to the checkbox.
  - Supporting description text on the next line, all within the Monitoring Preferences section.
- Add a small **“Beta” pill** to the right of the label, visually matching the **“Early Access”** pill used for languages but with the text **“Beta”**.

Example layout (rough):

```text
[Monitoring Preferences]

Categories                Level of concern
...

-------------------------------------------------------

[ ] Show AI explanations on cases      [Beta]
Display AI-generated explanations on alert cases so staff can understand
why content was flagged. This does not change which alerts are generated.
Learn more
```

- **“Learn more”** is an inline text link at the end of the description (same pattern as other help links on the page).

### 5.3 Copy variants (for prototype)

The prototype should support **four copy variants** for this setting. The implementation should treat them as data (e.g., an array of objects) and provide a way to switch between them.

Each variant defines:

- Checkbox label
- Description text
- Optional note about whether it’s “recommended” (for internal eyes only)

#### Variant A – “Explanations (Recommended)”

- **Label:** `Show AI explanations on cases` `Beta`
- **Description:**
  `Display AI-generated explanations on alert cases so staff can understand why content was flagged. This does not change which alerts are generated.`
- **Internal note:** Recommended default.

#### Variant B – “Alert explanations”

- **Label:** `Show AI alert explanations` `Beta`
- **Description:**
  `Help staff understand why content alerted by displaying AI-generated explanations on each alert case. Explanations provide additional context only and do not change which alerts are generated.`

#### Variant C – “Insights”

- **Label:** `Surface AI insights on cases` `Beta`
- **Description:**
  `Display AI-generated insights on alert cases to highlight what may be concerning in the content. Insights are informational only and do not affect when alerts are created.`

#### Variant D – “Justifications”

- **Label:** `Show AI case justifications` `Beta`
- **Description:**
  `Display AI-generated justifications on alert cases so staff can see why content was flagged. Justifications are informational only and do not change which alerts are generated.`

### 5.4 Prototype-only: copy variant selector

For design review, the coded prototype should include a **subtle control to switch between these copy options**. This is **for internal use only**, not intended to ship.

**Requirements:**

- Control appears somewhere near the new setting, for example:
  - Right-aligned in the same row as the label, or
  - As a small line directly below the new setting, visually de-emphasized.
- Suggested UI text:

  ```text
  Copy version: A of 4   ◀ Previous   Next ▶
  ```

- Behavior:
  - Clicking **Next/Previous** cycles through Variants A–D.
  - On change, the **label and description text** for the setting update live.
  - Optional: update the small text to “A of 4 / B of 4 / …” so the reviewer always knows which version they’re seeing.
- This selector does **not** affect any underlying functionality; it’s just for copy exploration.

Implementation hint:

- Represent variants as an array of objects, e.g.:

  ```ts
  const COPY_VARIANTS = [
    { id: 'A', label: 'Show AI explanations on cases', ... },
    ...
  ];
  ```

- The selector advances an `activeVariantIndex` and uses that to render the label + description.

---

## 6. Behavior & States

### 6.1 Scope

- This is an **org-level** setting, configured for each district (e.g., Rollingwood ISD).
- Applies to **all users** viewing Alert cases for that org.

### 6.2 Default state

- **New orgs:** setting is **OFF** (checkbox unchecked).
- **Existing orgs that already have justifications enabled via feature flag:**
  - For the prototype, assume they should map to **ON** (keep behavior unchanged).
  - In real implementation, migration details will be handled by engineering / feature-flag owner.

### 6.3 Effect on UI

- **When setting is ON:**
  - AI explanations/justifications **are shown** on alert cases using the existing justification UI.
- **When setting is OFF:**
  - AI explanations/justifications are **hidden** on alert cases.
  - There should be no error or placeholder; the case just appears without extra explanation.

The setting **never** changes:

- Which content is scanned.
- Which cases are created.
- How severity is calculated.

It only gates the **visibility** of explanatory text.

### 6.4 Error / edge states (for real implementation, optional for prototype)

- If explanations are temporarily unavailable for a specific case:
  - Do not break the case UI.
  - It’s acceptable to simply not show explanations for that case.

---

## 7. Visual Style Notes

- Follow existing Alert Settings styles:
  - Typography, spacing, checkbox component, and helper text style.
- **Do NOT**:
  - Give this setting a special “AI card” or purple background.
  - Use language that implies turning **all AI** on/off in Alert.
- **Do**:
  - Keep it visually consistent with other single-setting rows.
  - Use the existing “Early Access” pill style with the label text **“Beta”**.

---

## 8. Telemetry & Analytics (future)

(Not required in the coded prototype)

- Track adoption of the setting (on/off).
- Track percentage of orgs with explanations enabled.
- Potentially track feature usage to inform end of beta.

---

## 9. Open Questions

- Final terminology decision: **“explanations” vs “insights” vs “justifications.”**
- Exact scope of explanations:
  - Are they only for certain categories/content types?
  - Are there any regulatory/compliance constraints for some regions?
