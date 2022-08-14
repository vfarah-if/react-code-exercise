# react-code-exercise

The purpose if this is to create a quick latest template (August 2022), representing tools that make developing react applications and katas as easy as possible and allow developers to pracise on the latest versions of each space.

For the purpose of "best" practises, I will write down all the things I have included as purposeful key decisions to help me develop this library.

1. Create [react app using typescript](https://create-react-app.dev/docs/adding-typescript/)

   - Typescript because you solve 15% of bugs at compile time, which I have prooved converting JS projects with Typescript

   - Create react app reduce the complexity of creating a react app in the sense that I have worked on several bespokely generated node react applications and it has always been a problem to migrate to the next secure version. It is good to understand how it all works, but use this for simplicity and 9/10 times, it will be more helpful in reducing pain

     ```bash
     npx create-react-app react-recipes --template typescript

     ```

2. Install

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
