## Types of Testing

- Unit testing
- Integration testing
- E2e testing

## Setting up Test in our app

- Install react testing library
- Install jest
- Install babel , and it is depency from the jest documentation
- configure .babel.config.js as per jest documentation
- to make our babel config work, we have to use .parcelrc which will get from
- parcel doc -> javascript -> babel -> usage with other tools
- Jest configuration
  - npx jest init
  - typescript - no, test_env - jsdom , coverage report - yes, code-coverage- yes, clear mock calls- yes
- install JSDOM library (using the react testing library documentation)
- to render the componet for unit testing install the this libraray in DEV mode
   - npm i -D @babel/preset-react
  -   ["@babel/preset-react", { runtime: "automatic" }], add this presets   

- create test folder __test___
to use toBeInTheDocument() use @testing-library jest/dom

- to run test cases automagically 
  "watch-test": "jest --watch",