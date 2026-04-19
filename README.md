# tyagitalrst — Personal Portfolio

Personal portfolio website built with Nuxt 3, Vue, and Tailwind CSS.

**Live:** [tyagitalrst.com](https://tyagitalrst.com)

## Tech Stack

- [Nuxt 3](https://nuxt.com) — Vue framework with SSR/SSG
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [Nuxt Color Mode](https://color-mode.nuxtjs.org) — light/dark toggle
- [Nuxt Icon](https://github.com/nuxt/icon) — icon system (Phosphor Icons)
- [Nuxt Fonts](https://github.com/nuxt/fonts) — Google Fonts (Syne, DM Sans, JetBrains Mono)
- [Nuxt Schema.org](https://nuxtseo.com/schema-org) — structured data

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:3000
npm run dev

# Build for production
npm run build

# Generate static output
npm run generate

# Preview production build
npm run preview
```

## Project Structure

```
├── assets/css/        # Global styles & Tailwind config
├── components/        # Vue components
│   ├── TheHeader.vue
│   ├── TheFooter.vue
│   ├── SectionHero.vue
│   ├── SectionAbout.vue
│   ├── SectionExperience.vue
│   ├── SectionSkills.vue
│   ├── SectionContact.vue
│   └── ExperienceCard.vue
├── composables/
│   └── useResumeData.ts   # All resume content lives here
├── pages/
│   └── index.vue
├── public/
│   ├── favicon.svg
│   └── TyagitaLarasati_Resume.pdf
└── nuxt.config.ts
```

## Updating Content

All portfolio content (name, experience, skills, contact, etc.) is in one file:

```
composables/useResumeData.ts
```

Edit that file to update any information on the site.

## Deployment

Deployed via [Netlify](https://netlify.com) with automatic deploys from the `main` branch.

- **Build command:** `npm run generate`
- **Publish directory:** `.output/public`
