# Hardik Vohra Portfolio

Premium recruiter-focused personal portfolio for Hardik Vohra, built with `Next.js`, `TypeScript`, `Tailwind CSS`, and `Framer Motion`.

## Stack

- `Next.js 15`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Lucide React`

## Features

- Premium dark engineering aesthetic inspired by performance brands and modern product design
- JSON-driven content architecture in [src/data/portfolio-content.json](./src/data/portfolio-content.json)
- Reusable recruiter-focused sections for experience, projects, certifications, leadership, achievements, education, and contact
- Animated project showcase with category filters and image lightbox
- Embedded resume viewer with direct PDF access
- Asset-ready structure for future project videos, CAD renders, and additional certificates
- Responsive layout optimized for desktop and mobile

## Project Structure

```text
hardik-portfolio/
  public/
    assets/
      certificates/
      images/
      resume/
  src/
    app/
    components/
    data/
    lib/
    types/
```

## Local Setup

1. Install Node.js `20.11+` or `22+`.
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a Git repository.
2. Import the repository into Vercel.
3. Framework preset: `Next.js`
4. Build command: `npm run build`
5. Output setting: default

## Content Editing

- Update personal details, skills, timeline items, and projects in [src/data/portfolio-content.json](./src/data/portfolio-content.json).
- Add new images, videos, or PDFs to `public/assets`.
- Point content entries to those assets using site-relative paths such as `/assets/images/example.jpg`.

## Recommended Next Content Drops

- Add GitHub and any demo/video links once available.
- Drop in CAD screenshots for the IC engine, e-HPV, and autonomous simulation projects.
- Replace certificate placeholders with local image or PDF assets for richer previews.
- Optionally hide the phone number publicly if you want the site to be more privacy-focused.

## Notes

- The current machine did not have `node` or `npm` installed during implementation, so the codebase was created but not executed locally.
- Existing copied assets already live under `public/assets`.
