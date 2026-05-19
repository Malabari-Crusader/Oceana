---
name: awesome-design-md
description: "Curated collection of DESIGN.md files from top websites and brands. Use this to apply consistent, high-end design languages to your project."
risk: safe
source: "https://github.com/VoltAgent/awesome-design-md"
date_added: "2026-04-16"
---

# Awesome DESIGN.md Skill

This skill provides access to a curated collection of `DESIGN.md` files extracted from real-world websites and premium brands. Use these to give your AI-generated user interfaces a professional, tailored look.

## When to Use This Skill

- When starting a new project and wanting a specific "look and feel" (e.g., "Make it look like Stripe").
- When you want to upgrade the aesthetic of an existing page.
- When you need inspiration for a design system that works well with AI agents.

## Overview

A `DESIGN.md` file is a plain-text design system that AI agents (like Google Stitch or Antigravity) read to understand:
- **Visual Theme & Atmosphere** (Mood, density, etc.)
- **Color Palettes** (With hex codes and semantic roles)
- **Typography Rules** (Hierarchy and font families)
- **Component Stylings** (Buttons, cards, inputs)
- **Layout Principles** (Whitespace and grids)

## How to Use This Collection

1.  **Browse**: Look through the directories in `.agent/skills/awesome-design-md/design-md/` to find a design system you like.
2.  **Select**: Choose a subdirectory (e.g., `stripe`, `linear.app`, `apple`).
3.  **Apply**: Copy the `DESIGN.md` from that directory to your project root.
4.  **Prompt**: Tell your AI agent: *"I've added a DESIGN.md file to the root. Please build the [Page Name] following this design language exactly."*

## Available Design Categories

- **AI Platforms**: Claude, Cohere, Mistral, Ollama, RunwayML, etc.
- **Dev Tools**: Cursor, Expo, Vercel, Warp, etc.
- **Productivity**: Notion, Linear, Cal.com, etc.
- **Fintech**: Stripe, Coinbase, Revolut, Wise, etc.
- **Consumer Tech**: Apple, IBM, NVIDIA, SpaceX, etc.
- **Automotive**: Tesla, Lamborghini, Ferrari, BMW, etc.

## Best Practices

- **One at a time**: Only have one `DESIGN.md` in your project root to avoid confusing the AI agent.
- **Customize**: After copying, feels free to tweak the hex codes in `DESIGN.md` to match your specific brand while keeping the layout principles.
- **Check Previews**: Many sites include a `preview.html` file in their directory. Open it to see a visual gallery of the design tokens.

## Related Skills

- `design-md` - Use this to generate your *own* `DESIGN.md` based on an existing project.
- `stitch-ui-design` - Advanced UI generation within the Stitch ecosystem.
