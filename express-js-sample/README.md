# Express JS tutorial and testing

## Setup

- Create Node project 
```
npm init
```
- Add express library 
```
npm install --save express
```
- Create `index.js` in `src` directory
- Add start script to `package.json` in the `scripts`
```
"start": "node src/index.js"
```

## Start project

```
npm start
```

### Auto restart project when saved file

First need to install `nodemon` by `npm install -g nodemon` to install `nodemon` in your laptop. If you want to in your project use `npm install --save-dev nodemon`. To start watching file changes run `nodemon src/index.js`.
