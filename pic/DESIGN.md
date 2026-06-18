---
name: Executive Precision
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system embodies a premium, modern corporate identity tailored for high-stakes SaaS environments. It balances the authority of a legacy enterprise with the agility of a next-generation technology stack. The aesthetic is "Technical Luxury"—where precision meets high-end editorial design.

The style leverages **Modern Corporate Minimalism** with strategic **Glassmorphism** to signify depth and transparency. It utilizes heavy whitespace to allow complex data to breathe, paired with sharp, high-contrast typography and subtle motion to guide the user's focus. The emotional response should be one of absolute reliability, sophistication, and technological edge.

## Colors
This design system utilizes a high-contrast palette anchored by Deep Navy and Slate to establish trust. The Royal Blue and Sky Blue accents are used sparingly for primary actions, data visualization, and status indicators.

**Key Implementation Rules:**
- **Primary & Secondary:** Reserved for text hierarchy and structural elements (sidebars, headers).
- **Accents:** The "Brand Flow" gradient is used for high-impact buttons and progress indicators.
- **Glass Surfaces:** Semi-transparent white overlays with a 20px-40px backdrop blur to create a sense of layering over the clean background.

## Typography
The typography strategy uses **Sora** for display and headlines to provide a distinct, geometric character that feels modern and technical. **Inter** is used for all functional text, body copy, and UI labels to ensure maximum legibility and a systematic feel.

Headlines should utilize tighter letter-spacing to appear more "locked-in" and architectural. Labels are often set in uppercase with increased tracking to differentiate them from body text and to serve as clear structural markers.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Content is centered within a 1440px max-width container for desktop, while the internal grid uses a 12-column structure with 24px gutters.

**Spacing Philosophy:**
- Use a strict 8px base grid.
- **Generous Whitespace:** Elements are separated by large margins (48px+) to prevent visual clutter in data-heavy SaaS dashboards.
- **Adaptive Reflow:** On mobile, margins shrink to 16px and the 12-column grid collapses to a single column, with glass surfaces becoming more opaque to maintain readability.

## Elevation & Depth
Depth is created through a combination of **Glassmorphism** and **Ambient Shadows**. 

- **Surface Tiers:** Background is pure #FFFFFF. Tier 1 surfaces (cards) use white with a very subtle 1px border (#E2E8F0). Tier 2 surfaces (modals, popovers) use the `surface_glass` gradient with a 32px backdrop blur.
- **Shadows:** Use ultra-diffused shadows with a hint of Slate. Example: `0 20px 25px -5px rgba(15, 23, 42, 0.05)`. Shadows should never look heavy; they should feel like natural light diffusion.
- **Glass Borders:** Transparent elements should have a 1px inner border of semi-transparent white (top/left) and semi-transparent slate (bottom/right) to simulate light catching on glass edges.

## Shapes
The design system uses a "Rounded" geometry (0.5rem base) to soften the corporate edge while remaining professional. 

- **Buttons & Inputs:** 0.5rem (8px).
- **Cards & Containers:** 1rem (16px) for standard cards; 1.5rem (24px) for large hero sections.
- **Icons:** Use 24px bounding boxes with a 2px stroke weight to match the refined line work of the typography.

## Components
- **Buttons:** Primary buttons use the `brand_flow` gradient with white text. Secondary buttons use a white background with a 1px Slate border. All buttons utilize a 200ms ease-in-out transition on hover, subtly increasing the shadow spread.
- **Cards:** White or glass backgrounds with rounded corners and a soft ambient shadow. Avoid heavy borders; let the elevation do the work.
- **Input Fields:** Use a subtle Slate-50 background and a 1px border that transitions to Royal Blue on focus. Labels sit strictly above the field in `label-sm` style.
- **Chips/Badges:** Small, high-contrast pills with light backgrounds (e.g., Sky Blue at 10% opacity) and dark blue text for status-level communication.
- **Lists:** Clean rows separated by 1px Slate-100 dividers, featuring generous vertical padding (16px-20px) and interactive hover states.
- **Glass Overlays:** For sidebars or top-level navigation, use the glass effect to allow background content to peek through, creating a sense of spatial awareness.