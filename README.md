# Boilerplate for a Server Side Rendered React App in a TypeScript Monorepo with only Yarn Workspaces

The purpose of this project is to make developing a quality TypeScript react app easy and fast. You can organize your code into packages to keep it seperate and neat. This repoistory does NOT use [Lerna](https://lerna.js.org/) and instead uses only [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). The goal of this monorepo boilerplate in contrast to others is that it does not include extraneous dependencies like linting or webpack plugins and is clearly organized.

## Structure

Most of code is contained in the `packages` folder. There are three packages: `web`, `server`, and `components`. The `web` package contains the `React.render` call and imports the `<App />` from `components`. The `server` package runs an express server that server side renders the `<App />` from `components` while serving a statically built version of `web`.

## Getting Started

    git clone git@github.com:woodpav/server-side-react-typescript-monorepo.git
    cd server-side-react-typescript-monorepo
    yarn 
    cd packages/web 
    yarn start 
    cd ../server
    yarn start 

## How to Use 

Run `cd packages/web` and run `yarn start`. You can now change anything in the components folder and it will be reflected on refresh of your browser. Everytime you start the server it rebuilds the web app so your changes will NOT be reflected when running the app from the server until you run yarn start again. 

## Adding More Packages

In order to add another package:
1. Add a folder with a `package.json` to the `packages` folder. 
2. Set the `name` flag to something like `@app/my-package`
3. Add the dependency `"@app/my-package": "*"` as a dependency to `components` or wherever you need it. Look at `web` or `server` for an example.

I encourage you to learn more about [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) before diving in too deep. 
 

