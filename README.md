# EcoForecast App

EcoForecast is a React and Google Earth Engine app for exploring sagebrush ecosystem forecasts across climate scenarios.

Live demo: [ecoforecast.vercel.app](https://ecoforecast.vercel.app)

The app helps researchers and land managers visualize future ecological changes in sagebrush habitat. Forecast data was generated with [STEPWAT2](https://github.com/DrylandEcology/STEPWAT2) on Yale cluster compute, then served through an embedded [Google Earth Engine](https://developers.google.com/earth-engine) application.

Built with researchers from [Yale School of the Environment](https://environment.yale.edu/), the [USGS](https://www.usgs.gov/), [Marshall University](https://www.marshall.edu/), and [Utah State University](https://www.usu.edu/).

## Features

- Public landing page for the EcoForecast project and collaborators.
- Embedded Google Earth Engine app for interactive ecosystem forecast exploration.
- Pages for getting started, model context, contact, privacy, and terms of use.
- Responsive React UI with Tailwind CSS and Framer Motion.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Google Earth Engine
- Vercel

## Running Locally

Use Node.js 24 (also pinned for hosted builds in `package.json`).

```bash
npm ci
npm start
```

Open `http://localhost:3000` to view the app. `npm run build` typechecks and
bundles the app into `build/`; `npm run preview` serves that production output.
There are no test files or remote CI workflows: run the build before pushing.

## Assets and shared UI

- Import application images from `src/assets`; `public/assets` owns only the
  stable favicon URLs used by the HTML and manifest. Do not duplicate imported
  images in `public`, because Vite copies those into every build.
- Use lossless WebP for screenshots and transparent logos, preserving UI text
  and alpha exactly (`cwebp -lossless -exact -m 6 input.png -o output.webp`).
  Photos use WebP quality 85–90. Keep dimensions and aspect ratios unchanged
  unless the layout is reviewed at desktop and mobile widths.
- `src/assets/featureImages.ts` owns feature-image dimensions. `FeatureCard`
  reserves that space before lazy loading; `LinkWithUnderline` owns its shared
  link treatment. `tailwind.config.cjs` owns the existing accent, neutral colors,
  and four used font families; `src/index.css` owns their font-face declarations.

## Project Context

EcoForecast presents simulation outputs from climate and vegetation models in a browser-based interface. The React shell handles project documentation, routing, and responsive layout, while the launch page embeds the Earth Engine visualization used for interactive map exploration.
