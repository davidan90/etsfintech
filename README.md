# EtsFintech Test David

It shows a list of financial assets and its details.
This project get resources from [jsonstub.com](http://jsonstub.com/)

## Dependencies

- Vue
- Vuex
- Vue-i18n
- Vue-router
- Higcharts

## Start running

```bash
# install dependencies
npm i

# serve with hot reload at localhost:9000
npm start
```

## Build Setup

```bash
# install dependencies
npm i

# build for production
npm run build
```

## Run tests

```bash
# install dependencies
npm i

# execute all tests once
npm test

# watch all tests and show coverage
npm run test:watch

# open navigator with coverage
npm run coverage:open:mac
npm run coverage:open:linux
```

## Other scripts

```bash
# lint styles
npm run lint:css

# lint js and fix lint js error
npm run lint
npm run lint:js:fix

# compile svg icons
npm run icons
```

### Notes

> Precommit: I use husky dependecy to set a hook before commit changes with git. This hook check that there isn't style and js lint errors and run all the tests before commit.

> Dev enviroment:

- VsCode
- Node 9.8.0
- Npm 5.6.0
