## Plan: White header logo in the footer

Goal: Replace the current text-only "SAV GROUP" in the footer with a white/monochrome version of the header logo, sized appropriately for the dark navy footer.

### Steps

1. **Generate a white version of the logo asset**
   - Create `src/assets/sav-logo-footer.png` — the same logo design as the header, recolored to pure white (so the symbol and wordmark both read clearly on the navy background).
   - Generate at high resolution (~1000px wide) so it stays crisp on retina displays.
   - Transparent background.

2. **Update `src/components/SiteFooter.tsx`**
   - Remove the current text-based `SAV / GROUP` block.
   - Import the new `sav-logo-footer.png` asset.
   - Render it as an `<img>` inside the existing left column with a sensible width (around `w-[220px] md:w-[260px]`, `h-auto`) so it visually matches the header logo's presence.
   - Keep the description paragraph and the rest of the footer (quick links, contact, bottom bar) unchanged.

3. **Verify**
   - Check the footer in the preview to confirm the white logo is clearly visible on the navy background, sized comparably to the header logo, and not blurry.

### Files touched
- `src/assets/sav-logo-footer.png` (new)
- `src/components/SiteFooter.tsx` (edited)
