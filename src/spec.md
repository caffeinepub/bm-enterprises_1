# Specification

## Summary
**Goal:** Add the uploaded BM logo as a faint background behind the “About BM ENTERPRISES” section on the Trusted Electrical Contractors landing page while keeping the text clearly readable.

**Planned changes:**
- Update the “About BM ENTERPRISES” section in `frontend/src/pages/TrustedElectricalContractorsPage.tsx` to render `BMLOGO-1.jpg` as a low-opacity background image behind the section content.
- Apply positioning/layering styles so the background does not affect layout or overlap/interfere with text/buttons, and remains readable on desktop and mobile.
- Ensure the image is referenced/loaded as a static frontend asset (no backend routing).

**User-visible outcome:** The “About BM ENTERPRISES” section shows a subtle, faint BM logo in the background, with all text and content remaining easy to read across screen sizes.
