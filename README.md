spyfall
=======

React + Firebase implementation for the card game [Spyfall](http://boardgamegeek.com/boardgame/166384/spyfall)

### Localizations
[![Crowdin](https://d322cqt584bo4o.cloudfront.net/adrianocola-spyfall/localized.svg)](https://crowdin.com/project/adrianocola-spyfall)

Access [crowdin's](https://crowdin.com/project/adrianocola-spyfall) page to request new translations or help translating existing ones.

### Running the project (locally)

- Install [node.js](https://nodejs.org/)
- Clone this project, enter the cloned folder and install dependencies with `npm install`
- Open a terminal and run the command `npm run emulator`
- Open another terminal and run the command `npm run dev-emulator`
- Access it at `http://localhost:5173`

### Running the project (deploy fo Firebase)

- Install [node.js](https://nodejs.org/)
- Clone this project, enter the cloned folder and install dependencies with `npm install`
- Login to firebase with `npx firebase login`
- Setup a new firebase project with the `npx firebase init` command and follow the instructions (select only the feature `database`. Use the default values for everything and don't overwrite anything)
- Create a new web app with the command `npx firebase apps:create WEB`. The command will output the created `App Id`
- Execute the command `npx firebase apps:sdkconfig WEB <created app id>` to get the complete app configuration
- Create a copy of the file `.env.sample` named `.env.development` and fill it with the firebase configuration. You don't need to fill all fields.
- Access your firebase project in the [firebase console](https://console.firebase.google.com/) and enable anonymous authentication (Authentication → Sign-in method → Anonymous)
- Deploy firebase database security rules `npx firebase deploy --only database`
- Run the project with `npm run dev` and access it at `http://localhost:5173`
