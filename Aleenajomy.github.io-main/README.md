# Aleena Jomy Portfolio

Personal portfolio website built with React and Tailwind CSS.

## Overview

- Frontend-only portfolio project.
- Main app content is managed in `frontend/src/App.js`.
- Includes dark/light theme, smooth motion, and responsive layout.
- Backend, tests, and legacy scaffold files were removed from this repo.

## Features

- Hero, About, Skills, Services, Experience, Projects, Security, Education, Contact sections
- Resume download (`frontend/public/Aleena_Jomy_Resume.pdf`)
- Profile image (`frontend/public/profile-photo.png`)
- SEO metadata in `frontend/public/index.html`
- GitHub Pages workflow (`.github/workflows/deploy-pages.yml`)

## Profile Links

- LinkedIn: `https://www.linkedin.com/in/aleena-jomy`
- GitHub: `https://github.com/Aleenajomy`
- Email: `aleenajomy4@gmail.com`

## Tech Stack

- React 19
- Tailwind CSS
- Framer Motion
- Lucide React
- CRACO (CRA customization)

## Project Structure

```text
Portfolio-main/
  .github/workflows/
    deploy-pages.yml
  frontend/
    public/
      Aleena_Jomy_Resume.pdf
      profile-photo.png
      index.html
    src/
      App.js
      App.css
      index.css
      index.js
    package.json
    craco.config.js
```

## Local Development

```powershell
cd frontend
yarn install
yarn start
```

App URL: `http://localhost:3000`

## Production Build

```powershell
cd frontend
yarn build
```

## Deployment

### GitHub Pages

1. Push to `main`
2. Enable Pages with source set to `GitHub Actions`
3. Wait for workflow completion

### Vercel

- Root directory: `frontend`
- Build command: `yarn build`
- Output directory: `build`

## Customize Content

- Content and section data: `frontend/src/App.js`
- SEO/meta: `frontend/public/index.html`
- Resume file: `frontend/public/Aleena_Jomy_Resume.pdf`
- Profile image: `frontend/public/profile-photo.png`

## Notes

- If you deploy on GitHub Pages, keep `PUBLIC_URL`-based asset references as-is.
- This repository no longer contains backend code.
