# Project Instructions & Autonomous Execution Rules

## Autonomous Operation (Hands-Off Mode)
- **Do Not Pause for Plan Approval**: Whenever the user requests a feature, change, or new functionality, proceed directly to execution without creating a blocking plan or stopping to wait for user approval.
- **Autonomous Decision Making**: Make sensible architectural, styling, and design decisions independently. Do not prompt the user with clarifying questions unless strictly blocked by missing credentials or external dependencies.
- **End-to-End Execution**: Complete the full task lifecycle in one turn:
  1. Make all required file creations and edits.
  2. Run necessary terminal commands (e.g., `npm run build`, `npm install`).
  3. Automatically diagnose, fix, and verify any build or lint errors.
  4. Only report back once the requested work is fully implemented, verified, and ready.

## Project Context & Conventions
- **Stack**: Astro 5 (Static Site Generation), TypeScript, Markdown content collections.
- **Node Environment**: Node.js 20+ (`C:\Users\wizardbeard\.nvm\versions\node\v20.18.0`).
- **Styling**: Nostalgic dark-mode minimalism inspired by `oneclickkill.net`:
  - Pure black background with subtle textures and 1px text-shadows (`1px 1px 2px #000`).
  - Signature purple bracketed links (`[text]`).
  - Translucent frosted glass card containers (`.dh-card` with `rgba(0,0,0,0.35)` and `backdrop-filter: blur(6px)`).
  - Pipe-separated compact inline navigation and footers.
