# audiophile

An e-commerce web application built with NextJS13 using the app directory.

## Technologies used

1. NextJS
2. React
3. TypeScript
4. Material UI
5. Emotion
6. Jest
7. RTL
8. Sanity (for CMS)
9. Zustand (for State Management)
10. React Hook Form (for handling forms)
11. Zod (for handling form validation)

## Running the app

1. Clone the application.
2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local server URL ([http://localhost:3000](http://localhost:3000)) in your web browser.

## Sorting the import order

1. Install `prettier-plugin-sort-imports` from https://github.com/trivago/prettier-plugin-sort-imports. (See this blog for more details: https://levelup.gitconnected.com/how-to-sort-imports-in-react-project-550f5ce70cbf)

2. In .prettierrc.json, add the ff:

```
// .prettierrc.json
{
  "importOrder": ["^react(.*)", "^next(.*)", "<THIRD_PARTY_MODULES>", "@/(.*)", "^[./]"],
  "importOrderSeparation": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}
```

3. You can which files is not following the rules by running `prettier --check .` in your terminal.

4. To update all files to use the newly defined rules, run `prettuer --write .` in your terminal.
