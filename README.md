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
- 
- Add .eslintrc.yaml file
```bash
extends:
  - eslint-config-redlotus-react/dist/main
```

- Copy .prettierignore and .eslintignore

- Copy next line from tailwind.config.js

    `content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],`

- Also there may be other things that you need to copy from tailwind.config.js

- Remove prepare script

- Remove following packages
  - These come from @redlotus/ui
    - @emotion/react
    - @emotion/styled
    - @headlessui/react
    - @react-hook/window-size
    - clsx
    - daisyui
    - date-fns
    - formik
    - framer-motion
    - react-icons
  - These come from eslint-config-redlotus-react
    - @typescript-eslint/eslint-plugin
    - @typescript-eslint/parser
    - eslint
    - eslint-config-prettier
    - eslint-config-redlotus-base
    - eslint-config-redlotus-react
    - eslint-import-resolver-typescript
    - eslint-plugin-import
    - eslint-plugin-jest-dom
    - eslint-plugin-jsx-a11y
    - eslint-plugin-react
    - eslint-plugin-react-hooks
    - eslint-plugin-tailwindcss
    - eslint-plugin-testing-library
    - prettier

`yarn remove @emotion/react @emotion/styled @headlessui/react @react-hook/window-size clsx daisyui date-fns formik framer-motion react-icons @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-redlotus-base eslint-config-redlotus-react eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-tailwindcss eslint-plugin-testing-library prettier`

`yarn add @redlotus/ui`
`yarn add -D @redlotus/typescript-config eslint-config-redlotus-react`

Remove from src folder:
- useIsMobile hook
- SidebarContext
- Most of the components

---

## License

[MIT](./LICENSE)

Copyright (c) 2022, tomimarkus991