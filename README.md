# React Technical Assessment

```
testing               -> jest
hooks                 -> husky, lint-staged
linting               -> eslint
code formatting       -> prettier
model validation      -> zod
XHR                   -> ofetch
styling               -> pollen
```

## Scripts

### Test

```sh
yarn jest
```

### Lint

```sh
yarn lint # lint all files with eslint
```

### Build

```sh
yarn build
```

### Dev

```sh
yarn start-server # start dev api
yarn dev # start dev server
```

## Code standards

Code standards are enforced using Eslint and Prettier. In addition, coverage must meet the following testing constraints before committing any code:

```js
{
  coverageThreshold: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: -10,
  }
}
```

## Code Structure

### infra/

Contains the infrastructure layer of the project. API handlers go here.

### domain/

Contains the domain layer of the project. A general view, independent of the application logic.

This layer can only have dependencies on itself and the infrastructure layer.

#### aggregates/

Aggregates are created by combining data from two or more different models. The models for this are here.

#### models/

The home for DTOs. In this application there's little need for model transformation, so we use the DTOs directly. If this changes, we will rename the .model.ts files to .dto.ts and use the .model.ts suffix for our "transformed" models.

Since we need validators for each model, we get them directly from the zod schemas in (/validators)

#### validators/

Validators used to check that the data we send is correct can be found here.

#### services/

Anything domain-related that doesn't fit any of the descriptions above goes here. Aggregators, utilities, etc.

### app/

Contains the application layer of the product, which may have dependencies on the domain and infrastructure layers.

It consists of the following:

#### Components

React components, usually separated in a `components/` folder.

#### Contexts

React contexts, usually separated in a `contexts/` folder.

#### Hooks

React contexts, usually separated in a `hooks/` folder.

#### Intl

Internationalisation, usually in the `(app-root)/intl/` folder.

#### Styles

- \*.module.css for CSS modules, usually kept in the same folder as the component being styled.

- \*.css for global styles to be used throughout the application, usually stored in the `(app-root)/styles/` folder.

#### Views

Views to be used by the router.

#### Utils

Any logic that doesn't belong in the other folders above goes here. Application layer mappers, reducers, aggregators and so on. Usually separated into a `utils/` folder

---

## TODO

- [ ] Tests
- [ ] Review accessibility
- [ ] Make transitions smoother
- [ ] Remove a product from all orders when said product is deleted
- [ ] Finish Dockerfile
