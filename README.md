# DotaBeef

This is a project I have developed as my solution to the [Javascript Final Project](https://www.theodinproject.com/lessons/node-path-javascript-javascript-final-project) on The Odin Project's full stack Javascript path

Using the [OpenDota API](https://docs.opendota.com/) I have replicated the core functionality of [dotabuff](https://dotabuff.com) as closely as possible. Users can search for a player by name and find match details, including the statistics for each player in game and their item build (in image form).

I have done my best to minimise the amount of API calls as the OpenDota API is rate-limited to 60 calls/minute, and this presented some challenges particularly during testing in order to avoid hitting that limit.

Users can also submit comments on matches which are stored in Cloud Firestore and presented to all viewers of a particular match.

If you aren't familiar with Dota 2 and don't know where to start looking through this project, please take a look at my profile [here](http://tomfielder.co.uk/dotabeef/#/players/22984464)

and an [example match](http://tomfielder.co.uk/dotabeef/#/matches/6579013984)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
