# Poll Widget

This is a poll widget project which can be embedded in an iframe as a standalone.

The project has:
- Polls 
- Poll Result

## Getting Started

Please check your node version:
```bash
node -v
```

### Installing

First, install the dependencies:

```bash
cd poll-app/
yarn install
```

### Running
You can run the project in two ways:

```bash
yarn build
```

#### First way
```bash
yarn global add serve
serve -s build
```

- Minified Build
- Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.
Make sure 5000 port is available and your page is accessible.

#### Second way

```bash
yarn start
```
- Unminified Builds
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Make sure 3000 port is available and your page is accessible.

### To run as a widget:
- Start the server in one of the two ways
- Run `<rootDir>/demo_iframe.html`

### Test
```bash
yarn test
```

### Data Injection to Poll App
```bash
cd <root-dir>/poll-app/src/data/
```
- Open `index.ts` and add questions data as per type mentioned in type file
- Where is type file? `<root-dir>/poll-app/src/types/`

## Built With

* [CRA](https://create-react-app.dev/) - The web environment used.
* [ReactJS](https://reactjs.org/docs/getting-started.html) - The library used to build the website
* [Yarn](https://classic.yarnpkg.com/en/docs) - Dependency Management with Yarn

## Repository referenced to create Boilerplate

*[CRA Official Repository Examples](https://github.com/facebook/create-react-app#creating-an-app) - Thanks to everyone who contributed to this project.

## Analyze


## Contributing

Not available right now. ;)

## TechDebt

- Able to inject config from html embed file.
- Persist state in the database.
- Modularize and Refactor Poll.tsx Component
- More Tests


## Authors

* **Paresh Salunke** -  [Github Profile](https://github.com/pareshsalunke)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
