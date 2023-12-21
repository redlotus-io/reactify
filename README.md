![RedLotus-Logo-Dark](.github/base-logo-dark-mode.svg#gh-dark-mode-only)
![RedLotus-Logo-Light](.github/base-logo-light-mode.svg#gh-light-mode-only)

Get started with React and tailwind. **Get a super boost to your development** 🚀

## 📖 Documentation
This boilerplate has all the tooling configured (eslint, prettier, husky, lint-staged, typescript and testing)

Tailwind 3 is used for styling.
Its using [RedLotusUI](https://github.com/redlotus-io/ui) as the component library, which is built with React and Tailwind 3.  It's all configured out of the box.

Routing, folder structure and main page is setup

Vite and PWA is working out of the box

---

## Quickstart
Update names in `vite.config.ts`, `package.json` and `index.html` to your project name.

Update icons in `public` folder.

# Development
Ensure you have the latest LTS version of Node.js installed

### Install dependencies
`yarn`

### Start server with hot reload
`yarn start` or `yarn dev`

---
# 📦 Converting project to reactify standards

- Copy everything from `tsconfig.json` to your project's `tsconfig.json`
  - Remove tsconfig.node.json
- Add .eslintrc.yaml file
```bash
extends:
  - eslint-config-redlotus-react/dist/main
```
- Remove old eslintrc and prettierrc files
- Copy .prettierignore and .eslintignore

- Add `npx lint-staged` to husky pre-commit
- Add this to your package.json
```bash
  "lint-staged": {
    "*.{js,jsx,ts,tsx,md,graphql}": "yarn lint:fix"
  }
```
- Add these scripts to package.json
  -  `"lint:fix": "eslint --fix --ext .js,.ts,.tsx ./src --ignore-path .gitignore",`
  -  `"clean": "rm -rf node_modules/ && rm -rf yarn.lock && yarn",`


- Copy next line from tailwind.config.js

    `content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],`

- Also there may be other things that you need to copy from tailwind.config.js

- Remove `prepare` and `prettier` script

- Remove following packages
  - These come from eslint-config-redlotus-react
    - @typescript-eslint/eslint-plugin
    - @typescript-eslint/parser
    - eslint
    - eslint-config-prettier
    - eslint-import-resolver-typescript
    - eslint-plugin-import
    - eslint-plugin-jest-dom
    - eslint-plugin-jsx-a11y
    - eslint-plugin-react
    - eslint-plugin-react-hooks
    - eslint-plugin-tailwindcss
    - eslint-plugin-testing-library
    - prettier

`yarn remove @emotion/react @emotion/styled @headlessui/react @react-hook/window-size clsx`

`yarn remove date-fns`

`yarn remove formik framer-motion react-icons`

`yarn remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-tailwindcss eslint-plugin-testing-library prettier`

`yarn add -D @redlotus/typescript-config eslint-config-redlotus-react lint-staged`

run `yarn clean` to make sure there are no missing packages

Just incase copy vite.config.ts from this project to your project and check if there are major changes

Make sure the project runs

Fix eslint errors by running `yarn lint:fix`

!!Update packages

Add from src/types/pwa.d.ts to your project

### If everything works, then proceed with next steps

Move routing to routes.tsx Find example [here](https://github.com/redlotus-io/ui/blob/main/src/routes/routes.tsx)

Remove moment and replace it with date-fns

Remove from src folder:
- useIsMobile hook
- SidebarContext
- Most of the components

## To add threejs

`yarn add three @react-three/fiber @react-three/drei`
`yarn add -D r3f-perf @react-three/editor @types/three`

In vite.config.ts
`// import { r3f } from "@react-three/editor/vite";`
add `// r3f(),` above `react(),`, if you want to use @react-three/editor

---

## License

[MIT](./LICENSE)

Copyright (c) 2022, tomimarkus991