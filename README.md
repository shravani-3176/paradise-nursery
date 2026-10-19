# Paradise Nursery

Paradise Nursery is a responsive plant-shop experience built with React. Browse a curated selection of indoor plants, air-purifying plants, and succulents, then manage a shared shopping cart with live quantities and totals.

## Features

- Botanical landing page with company story and product entry points
- Categorized catalog with responsive product cards and image fallbacks
- Redux Toolkit cart with unique product rows, quantity controls, and removal
- Live cart item badge, subtotals, and grand total
- Responsive layouts, accessible keyboard focus, semantic page structure
- Demo-only checkout confirmation; no payment is collected

## Technology

- React 18 and Vite
- JavaScript and JSX
- React Router DOM
- Redux Toolkit and React Redux
- Responsive CSS

## Project structure

```text
.gitignore
index.html
package.json
package-lock.json
vite.config.js
public/
  images/
    botanical-hero.jpg
    leafy-home.jpg
    leafy-texture.jpg
    monstera.jpg
    potted-plant.jpg
    plant-placeholder.svg
    succulent.jpg
    tropical-green.jpg
src/
  components/
    AboutUs.jsx
    CartItem.jsx
    ProductList.jsx
  data/
    products.js
  redux/
    CartSlice.jsx
    store.js
  App.css
  App.jsx
  index.css
  main.jsx
index.html
package.json
```

## Installation

Install Node.js 20.19+ (or 22.12+) and npm, then run from the project directory:

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL printed by Vite. To create and locally preview the production build:

```bash
npm run build
npm run preview
```

## Usage

Choose **Get Started** or **Plants** to browse the catalog. Add a plant to the cart; its card button prevents repeated additions from that card. Open **Cart** to change quantities or remove products. The cart badge and totals update immediately. The Checkout button displays a demo confirmation and does not process payments.

Product and hero photography is stored locally for reliable loading without an internet connection. If a product image cannot load, the local illustration in `public/images/plant-placeholder.svg` is used. Photography is sourced from Unsplash.

## GitHub publication

This project has not been published to GitHub. Create a new public repository in your GitHub account, then follow the publication steps provided with your delivery. Add a real repository link here after publishing; no repository URL is claimed before one exists.
