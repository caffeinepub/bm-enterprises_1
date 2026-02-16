# Specification

## Summary
**Goal:** Remove the uploaded WhatsApp image “WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-3” from BM ENTERPRISES so it is no longer displayed anywhere on the website, and ensure there are no broken image references.

**Planned changes:**
- Remove the image from all gallery/image lists where it is referenced, including the Major Projects page (route `/projects`) “Ongoing Projects (Gallery)” section.
- Delete any remaining frontend code references to `/assets/WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-3.jpeg` and/or `WhatsApp Image 2026-02-16 at 8.58.51 PM (1)-3.jpg`.
- Remove the static asset file from public/assets (or the relevant assets folder) if present and unused after reference removal.

**User-visible outcome:** The specified WhatsApp image no longer appears anywhere on the site, and the Major Projects gallery loads normally without broken images or missing-asset errors.
