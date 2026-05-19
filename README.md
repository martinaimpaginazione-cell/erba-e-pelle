# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.15.3 create --template minimal --types ts --add prettier eslint vitest="usages:unit,component" playwright sveltekit-adapter="adapter:static" mcp="ide:cursor+setup:remote" --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Pubblicazione su GitHub Pages

Il sito è statico (`@sveltejs/adapter-static`, prerender su tutte le pagine) e viene pubblicato con GitHub Actions (`.github/workflows/deploy.yml`).

### Primo deploy

1. Crea un repository su GitHub e pusha il codice sul branch `main`.
2. Su GitHub: **Settings → Pages → Build and deployment → Source** → seleziona **GitHub Actions**.
3. Fai push su `main` (o avvia manualmente il workflow da **Actions**).

L’URL sarà `https://<utente>.github.io/<nome-repo>/` (es. `https://tuousername.github.io/erba-e-pelle/`).

### Dominio personalizzato

Se usi un dominio proprio (es. `www.erbaepelle.it`), imposta `BASE_PATH` vuoto nel workflow e configura il dominio in **Settings → Pages**.

### Anteprima locale con base path GitHub Pages

```sh
# PowerShell
$env:BASE_PATH='/erba-e-pelle/'; npm run build; npm run preview
```
