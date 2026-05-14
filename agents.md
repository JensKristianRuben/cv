# Agent Onboarding: CV & Portfolio Project

This document provides a comprehensive guide to the project's architecture, conventions, and engineering standards for AI agents and developers.

## Project Overview
This is a modern, minimalist CV and portfolio application built with **SvelteKit 2.0** and **Svelte 5**. It emphasizes smooth, scroll-driven interactions and a clean, high-contrast aesthetic.

## Architecture & Routing
The project follows the standard SvelteKit filesystem-based routing located in `src/routes/`.

- `/`: Landing page.
- `/cv`: The interactive CV timeline (primary feature).
- `/projects`: Showcase of technical work.
- `/contact`: Contact information.
- `+layout.svelte`: Global styles, navigation, and theme orchestration.

## Core Technical Concepts

### 1. Svelte 5 Runes
We use Svelte 5's reactive system exclusively.
- Use `$state()` for reactive data.
- Use `$derived()` for state that depends on other state.
- Use `$effect()` for side effects (e.g., adding event listeners in `onMount`).
- Use `$props()` for component inputs.

### 2. Internationalization (i18n)
The project supports both Danish (DA) and English (EN).
- **`src/lib/i18n.svelte.ts`**: Global state management using Svelte 5 runes. Import `lang` to access or toggle the current language (`lang.current`).
- **`src/lib/translations.ts`**: The central dictionary for all text. Every new feature or content update **MUST** include translations for both 'da' and 'en'.
- **Usage**: In components, use `$derived(translations[lang.current].your_key)` to ensure text updates immediately when the language is toggled.

### 3. The "Journey" System
The CV page uses a modern, scroll-snapping layout:
- **Scroll Snap**: The page uses `snap-y snap-mandatory` to ensure each milestone is centered in the viewport.
- **Milestone Component**: Each milestone is a full-viewport section (`min-h-screen`). It uses CSS Grid to align content: Work on the left, Education on the right.
- **Animations**: Staggered fade-in animations are triggered via Intersection Observer when a milestone enters the viewport.
- **Central Line**: A fixed background line grows as the user scrolls, providing a visual timeline.

## Development Standards (Do's and Don'ts)

### DO:
- **Use Tailwind Utility Classes:** Keep styling consistent with the existing Tailwind configuration.
- **Maintain Minimalism:** Stick to the established color palette (high contrast, subtle grays, transparent backgrounds).
- **Optimize for Performance:** Use `pathLength="1"` for SVG animations and ensure scroll listeners are passive.
- **Prefer Composition:** Break UI into small, reusable components in `src/lib/components/`.
- **Use TypeScript:** Ensure all components and functions are properly typed using `app.d.ts` where necessary.

### DON'T:
- **Don't use legacy Svelte syntax:** Avoid `let` for props or `onMount` (unless specifically needed for browser-only APIs). Use Runes.
- **Don't add "jitter":** Avoid constant animations (e.g., `requestAnimationFrame` for wiggles). Interactions should be strictly tied to user scroll or direct input.
- **Don't break the Coordinate System:** If adding milestones or changing paths, always verify that the pixel-based `top` values and percentage-based `left` values align correctly on the shared canvas.
- **Don't overcomplicate visuals:** Avoid shadows, gradients, or complex textures unless they serve a critical functional purpose.

## Visual Identity
- **Lines:** Clean, straight, `0.2` stroke-width.
- **Markers:** Empty circles with `border-content/30` rim.
- **Typography:** Wide tracking (`tracking-widest`), uppercase headers, and high-quality spacing.

## Key Files for Agents
- `src/lib/components/`: Reusable UI elements.
- `src/routes/cv/+page.svelte`: Data definition for the timeline.
- `src/routes/layout.css`: Global design tokens and theme variables.
