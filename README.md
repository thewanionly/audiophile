# audiophile

An **e-commerce web application** built with **NextJS 13** using the **app directory** making use of **Server Side Rendering (SSR)** and **React Server Components (RSC)**.

Here's a snapshot of the home page of the application:
![Audiophile home page](public/images/audiophile-wani.png)
View the rest of the project [here](https://audiophile-wani.vercel.app/).

## Technologies used

1. NextJS 13
2. React
3. TypeScript
4. Material UI and Emotion (for styling)
5. Jest and RTL (for unit and integration testing)
6. Sanity (for CMS)
7. Zustand (for State Management)
8. React Hook Form (for form handling)
9. Zod (for handling form validation)

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

5. To run the test files:

```bash
npm run test:watch
```

## Sanity CMS Integration

I use Sanity CMS to manage the content of this web app. I created two different projects to handle the `page content` and `products` data.

We need to acess the Sanity Studio (which is unique per project) to manage the data of our projects. Sanity CMS allows us to self-host and integrate Sanity Studio to our application. In other words, the Sanity Studio of these projects will be hosted under the same domain of our application.

Links to the projects:

1. [Content Studio](https://audiophile-wani.vercel.app/audiophile-content-studio)
2. [Product Studio](https://audiophile-wani.vercel.app/audiophile-products-studio)

## Other Technical Stuff

### Sorting the import order

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
