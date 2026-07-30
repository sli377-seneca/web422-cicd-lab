# Week 12 — CI/CD demo **starter** (`my-app`)

This is the Week 11 testing demo exactly as we left it: the Vehicles app with a
full Jest unit suite and a Cypress end-to-end suite, and **no pipeline of any
kind**.

Week 12 turns it into `../../cicd-demo/my-app` by adding one file
(`.github/workflows/ci.yml`), pushing the project to GitHub, and connecting it
to Vercel. Follow [`../../week-12-notes.md`](../../week-12-notes.md).

## Install

```bash
npm install
```

## Confirm the Week 11 state

```bash
npm run test:ci
```

4 suites, 8 tests, all green. For Cypress, start the app in one terminal:

```bash
npm run dev
```

and run the specs in another:

```bash
npm run cypress:headless
```

3 passing. Sign in with **bob / myPassword**.

## Scripts

| Script | Does | Safe in CI? |
| --- | --- | --- |
| `npm run dev` | dev server on port 3000 | no |
| `npm run build` | production build | yes |
| `npm start` | serve the production build | yes (as a background step) |
| `npm run lint` | ESLint via `next lint` | yes |
| `npm run test` | `jest --watchAll` | **no — never exits** |
| `npm run test:ci` | `jest` (single run) | yes |
| `npm run cypress` | interactive Cypress runner | no |
| `npm run cypress:headless` | `cypress run` | yes |

## When you push this to GitHub

Push **the contents of this `my-app` folder** as the repository root, so that
`package.json` sits at the top level. Both GitHub Actions and Vercel expect it
there.

```bash
git init
git add .
git commit -m "Initial commit - Vehicles app with Jest and Cypress tests"
git remote add origin https://github.com/<your-username>/web422-cicd-demo.git
git branch -M main
git push origin main
```

`node_modules/`, `.next/`, and Cypress videos/screenshots are already excluded
by `.gitignore`. **`package-lock.json` is not** — it must be committed, because
CI installs with `npm ci`.
