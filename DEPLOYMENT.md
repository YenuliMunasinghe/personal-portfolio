# 🌐 Deployment Guide

This document provides instructions for building and deploying the **Yenuli Munasinghe Personal Web Portfolio** to **GitHub Pages** or alternative cloud static hosting platforms.

---

## 📦 Deployment via GitHub Pages (`gh-pages` CLI)

The project includes pre-configured deployment scripts utilizing the `gh-pages` npm package.

### Steps to Deploy

1. Ensure all local changes are committed on the `main` branch.
2. Execute the deployment script:
   ```bash
   npm run deploy
   ```
3. The script will automatically:
   - Run `vite build` to compile production assets into `dist/`.
   - Publish the `dist/` directory to the `gh-pages` branch on GitHub.

---

## 🤖 Automated Deployment via GitHub Actions

To enable automatic continuous deployment whenever changes are pushed to `main`:

1. In your GitHub repository, navigate to **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Create `.github/workflows/deploy.yml` with the following contents:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install Dependencies
        run: npm ci

      - name: Run Linter & Tests
        run: |
          npm run lint
          npm test

      - name: Build Application
        run: npm run build

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🌐 Custom Domain Setup

If mapping a custom domain (e.g., `yenulimunasinghe.com`):

1. Create a `public/CNAME` file containing your domain name.
2. Update your DNS provider with ALIAS/ANAME or A records pointing to GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Verify domain enforcement under **Repository Settings > Pages**.
