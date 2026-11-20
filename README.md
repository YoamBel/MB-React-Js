# Maud Bijoux — interactive portfolio demo

A jewellery catalogue and quote-request application by **Yoam Belhassen**, restored and modernized as a portfolio project. This is a local demonstration, with no real purchases or outgoing emails.

## Try the demo

The homepage includes **Essayer la démo sans inscription**: start a private visitor session, explore the catalogue, add items to the basket and save a printable quote without providing personal credentials.

## Features

- 561 historical catalogue items, category filters and catalogue-wide search.
- Basket quantities and notes, private quote history, print / PDF.
- Client accounts and an optional administration area for catalogue editing, photo uploads, account management and quote status updates.
- Manual quote pricing with VAT calculations and conflict detection.
- Local email previews and configurable draft business settings.
- Desktop and mobile layouts that preserve the original pages and visual style.

Missing historical photos use a neutral placeholder. Commercial pricing rules and an email provider are not required to explore the demo.

## Run locally on Windows

Keep both repositories side by side:

```text
Projets-GitHub-Yoam/
  MB-React-Js/
  Project-MB-ReactJs/
```

The local runtime requires Node.js, the .NET 10 SDK/runtime and SQL Server LocalDB. The restored historical catalogue must be available as **MaudBijouxArchiveLocal**; restoring and checking the supplied historical backup is a separate prerequisite, not an automatic part of the launcher. Do not execute the original destructive SQL scripts against an existing database.

From **MB-React-Js**, run **LANCER-MAUD-BIJOUX.cmd**, or open the folder in VS Code and choose **Terminal → Run Task → Maud Bijoux : lancer le site et l’API**. The site opens at `http://127.0.0.1:8771`. The launcher builds both projects; keep its terminal open.

The application creates a separate **MaudBijouxDemoLocal** working database. The original archive remains read-only. First-time administrative setup is optional for visitors.

## Repository layout

| Repository | Modernized application | Preserved historical source |
| --- | --- | --- |
| [MB-React-Js](https://github.com/YoamBel/MB-React-Js) | React 17 + Vite in `Relance-MaudBijoux/web` | Original React source at the repository root |
| [Project-MB-ReactJs](https://github.com/YoamBel/Project-MB-ReactJs) | ASP.NET Core / .NET 10 API in `Relance-API` | Original ASP.NET Framework project and historical assets |

Historical files are retained for reference. New account data, working SQL databases, backups, uploaded photos, session keys, dependencies and build outputs are not included in the modernization commit.

## Validation

React and .NET builds; 116 catalogue routes; desktop/mobile navigation; visitor sessions and isolated quote histories; basket-to-quote workflow and persistence; printing; account roles and session revocation; manual pricing and rounding; catalogue editing and image uploads; local email previews.

Basket checks can be run with `npm run test:cart` inside `Relance-MaudBijoux/web`.

See **[README-RELANCE.md](README-RELANCE.md)** for detailed French instructions and local data storage information. This repository update does not deploy an online site.

<details>
<summary>Original project documentation</summary>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>
