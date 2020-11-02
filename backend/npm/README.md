# NPM (Node Package Manager)

### TDLR; npm best practices
- Don't initialize projects within projects.
- Add `node_modules` to your `.gitignore` file. This directory stores all your dependencies (often lots of files) which should not be committed to your repository.
- Commit `package.json` and `package-lock.json` to your repository.
- Don't manually edit `package-lock.json`.
- Update `package.json` by the command line (or other tool) unless you're comfortable editing the file manually (see activities!).

## Introduction to npm
npm is the largest software package registry in the world. According to the [npm Wikipedia page](https://en.wikipedia.org/wiki/Npm_(software)) and [this Linux.com article](https://www.linux.com/news/state-union-npm/)
- npm, Inc. is a subsidiary of GitHub, which is itself a subsidiary of Microsoft.
- Over 477,000 packages are available in the main npm registry.
- In May 2016, users installed 18 billion packages, translating into 6 billion downloads, "because approximately 66 percent of the installs are now being served from the cache."
- The registry does not have any vetting process for submission, which means that packages found there can be low quality, insecure, or malicious. Registry quality is dependant on user reviews and moderation.
- [status.npmjs.org](https://status.npmjs.org/uptime) shows the historical uptime of the registry.
- Every week roughly 160 people publish their first package in the registry

### Why npm?
1. **Dependency management**: any npm package you install into your project becomes a dependency. Chances are, that package comes with its own set of dependencies, and so on. npm manages these interactions.
2. **Development and deployment**: npm includes many tools that help developers create and deploy software projects.
3. **Project collaboration**: npm ensures that multiple developers can reliably replicate a software project in their development environments.

## `package.json` file
See: [Anatomy of a `package.json` File](https://www.digitalocean.com/community/tutorials/nodejs-package-json) on Digital Ocean.

## Activities
- [Initialize a new project and install nodemon](hello-npm)
- [Install momentjs in an existing project](hello-moment)
- [`npm install`](hello-npm-install)