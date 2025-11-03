# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
# React Task Manager (Vite + React + Tailwind)

A small task-manager demo built with Vite, React 18 and Tailwind CSS. It includes a component-based structure, custom hooks, and a local development setup using Vite.

Live demo: https://react-js-jsx-and-css-mastering-fron-black.vercel.app/

If you're here to run the project locally, this README will walk you through the exact steps.

## Quick links
- Live demo: https://react-js-jsx-and-css-mastering-fron-black.vercel.app/
- Project root: `react-js-jsx-and-css-mastering-front-end-development-Dinma1`

## Requirements

- Node.js (recommended: 18+)
- npm (or yarn)
- A modern browser (Chrome/Firefox/Edge)
- Git (for cloning / pushing changes)

## Setup — run locally (fast)

1. Open a terminal and change into the project folder:

```bash
cd /home/fnoticelk/Documents/plp/react-js-jsx-and-css-mastering-front-end-development-Dinma1
```

2. Install dependencies (fresh install):

```bash
npm install
# or: yarn
```

3. Start the dev server (with network access):

```bash
npm run dev -- --host
```

4. Visit in your browser:

- Local: http://localhost:5173/
- Network (if using `--host`): the address printed by Vite, e.g. http://192.168.x.x:5173/

Tip: Press `Ctrl+C` in the terminal to stop the dev server.

## Build & Preview

To create a production build and preview it locally:

```bash
npm run build
npm run preview
```

This will build the app into `dist/` and serve a production preview on a local port.

## Useful npm scripts (from package.json)

- `npm run dev` — start Vite dev server
- `npm run build` — produce a production build
- `npm run preview` — locally preview the production build

Run `npm run` to list all scripts available in `package.json`.

## Common tasks

- Open the app in the browser after running the dev server: `http://localhost:5173/`
- Reinstall dependencies (clean):

```bash
rm -rf node_modules package-lock.json
npm install
```

- Run a quick smoke test (from another shell):

```bash
curl -I http://localhost:5173/
# should return HTTP/1.1 200 OK when server running
```

## Git & deployment notes

- To push changes to GitHub (example flow):

```bash
git add -A
git commit -m "Describe changes"
git push -u origin HEAD
```

- If you plan to deploy to Vercel, Netlify or similar, connect your GitHub repo and the platform will build and deploy automatically.

## Important: cleanup tracked build artifacts

I noticed `node_modules` and other generated files may have been committed to the repository. That's usually unintended and will bloat your repo. To fix that:

1. Create/update a `.gitignore` at the project root with at least:

```
node_modules/
dist/
.env
/.idea
.DS_Store
```

2. Remove the tracked `node_modules` from the repo (keeps files locally):

```bash
git rm -r --cached node_modules
git commit -m "chore: remove node_modules from repository"
git push
```

If `package-lock.json` was committed accidentally you can keep it tracked (recommended) — but do not track `node_modules/`.

If you want to remove large files from repository history, use the BFG Repo Cleaner or `git filter-branch` (this rewrites history and should be coordinated with collaborators).

## Troubleshooting

- Error: `Failed to resolve import "./App.css" from "src/App.jsx"`
   - Fix: ensure `src/App.jsx` imports the correct stylesheet. This project uses `src/index.css` with Tailwind directives; you can remove `import './App.css'` from `App.jsx`.

- Error: port 5173 already in use
   - Fix: specify a different port when running Vite: `npm run dev -- --port 5174`

- Git push failing with authentication errors
   - If using HTTPS, create a GitHub Personal Access Token (PAT) and use it as the password, or switch to SSH and set up an SSH key, or use `gh auth login`.

## Project structure (high level)

```
src/
├─ components/      # UI components (Button, Card, Navbar, TaskList, TaskManager...)
├─ contexts/        # Theme/context providers
├─ hooks/           # Custom hooks (eg. useLocalStorage)
├─ pages/           # Page components (ApiDataPage)
├─ App.jsx          # Main app
├─ main.jsx         # Bootstraps React and index.css
└─ index.css        # Tailwind directives + base styles
```

## Where to go next

- Add tasks, wire up TaskManager and persist to localStorage (there's already a `useLocalStorage` hook stub).
- Connect to a backend or external API (see `src/pages/ApiDataPage.jsx`).
- Add tests and linting if required.

## Credits & resources

- React: https://react.dev/
- Vite: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/

---

If you'd like, I can:
- Add the `.gitignore` and remove `node_modules` from the index and push the cleanup for you.
- Create a short CONTRIBUTING.md or a deployment guide for Vercel.
- [React Router Documentation](https://reactrouter.com/) 
