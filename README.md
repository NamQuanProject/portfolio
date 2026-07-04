# Nguyễn Nam Quân — Portfolio

Personal portfolio site: AI research, projects, publications and contact info.

Live site (after enabling GitHub Pages): `https://namquanproject.github.io/portfolio/`

## Deploying to GitHub Pages

1. Push this repo to GitHub (if not already there).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose branch `main` and folder `/ (root)`, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/portfolio/` within a minute or two.

## Structure

```
index.html            Main page
assets/css/style.css  Styles
assets/js/main.js     Scroll reveal, nav, active-link highlighting
assets/img/           Profile photo + favicon
assets/files/         Downloadable CV
```

## Local preview

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
