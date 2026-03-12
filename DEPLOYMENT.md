# Deployment to GitHub Pages

This document explains how to deploy the landing page project to GitHub Pages using the `cookpharma` GitHub account.

## 1. Prepare the repository

1. Make sure the repository is pushed to GitHub under `https://github.com/cookpharma/<repo-name>`.
2. Install dependencies locally with:
   ```bash
   npm install
   ```

## 2. Build the project

The site uses Vite and React with TypeScript. Run:

```bash
npm run build
```

This will create a production-ready static bundle in the `dist/` directory.

## 3. Deploy using the provided script

A helper script `deploy.sh` is included at the root of the project. Make it executable:

```bash
chmod +x deploy.sh
```

Then run:

```bash
./deploy.sh
```

The script will:

- Commit any outstanding changes.
- Build the project (`npm run build`).
- Create (or recreate) an orphan `gh-pages` branch.
- Copy the contents of `dist/` to the branch and commit them.
- Force‑push the branch to GitHub.
- Checkout back to the previous branch.

After a few minutes GitHub Pages will serve the static site from `https://cookpharma.github.io/<repo-name>`.

## 4. Manual deployment (alternative)

If you prefer to deploy without the script, the steps are:

```bash
git add .
git commit -m "prepare deploy"
npm run build

git branch -D gh-pages || true

git checkout --orphan gh-pages

git --work-tree dist add --all

git --work-tree dist commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

git checkout -
```

## 5. GitHub repository settings

1. Go to **Settings > Pages** for the repository.
2. Select branch `gh-pages` and folder `/ (root)` as the source.
3. Save and wait for the site to be published.

---

Keep this document updated for future reference.