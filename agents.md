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

### 2. The "Journey" System
The CV page uses a unique SVG-based coordinate system:
- **`LineCanvas.svelte`**: Dynamically generates SVG paths that connect milestones. It uses `pathLength="1"` and `stroke-dashoffset` tied to scroll position to "draw" the lines as the user moves.
- **`Milestone.svelte`**: Positioned absolutely using `top (px)` and `left (%)`. These must be children of the same container as the canvas to maintain alignment.

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
