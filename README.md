# How to do commits and pushes/pulls

<!-- Writing a comment here-->
Done with a code change?

On your branch, website-dev, first add and commit your changes
git add . 
git commit -m "Commit title"

Then pull from the github repo for the latest changes:
Git switch main
Git pull origin main
git switch website-dev

Finish pushing:
git push origin website-dev

Go to repo on website, and create the pull request



Immediate Installation

Node.js - to have access to npm installs and React


In terminal

Create directory inside your documents folder

Inside directory:
npm create vite@latest - install vite to install react by npm

follow instructions: 
In installation: project-name -> React -> JavaScript ->ESLint -> Yes -> no to install and start now


cd project-name
npm install
npm install @mui/material @emotion/react @emotion/styled
npm install @supabase/supabase-js
code . - opens folder in vs studio code
npm run dev - to run demo inside new terminal








# React + Vite




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
