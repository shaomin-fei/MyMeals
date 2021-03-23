1. press rr(press r twic) on emulator screen to refresh android emulator after change the code.(if the code is not in effect),If you want to see developer options of react native in Android emulator then you just need to press ctrl + M

2. could install npm install -g react-devtools, this powerful tool help us inspect ui and performance things

3.How to turn off Production mode?
There is post which says turn off production mode -> it took me time to find in which settings -> I was looking in emulator settings, it was in expo-cli. This post is it clarify it.

Production mode off
In the expo-cli http://localhost:19002/, there is Production Mode (left side bar) -> turn it off

Open AVD Emulator and your application, press ctrl+M
It should work.

4. On Android emulator, CTRL+M doesn't work
   https://stackoverflow.com/questions/50622617/react-native-ctrl-m-or-dev-tool-not-showing-in-my-emulator

Content as below:
FOR WINDOWS 10 YOU NEED TO ADD THIS SO THAT YOU CAN USE CRTL+M to open debug and reload

Add environment variables

Open a File Explorer, copy and paste the following into the address bar.

Control Panel\System and Security\System

Click on Advanced system settings on the left menu.

Click on Environmental Variables at the bottom.

Click on New to add a user variable (the top section).

You’ll be adding two:

Variable Value
ANDROID_HOME C:\Users\username\AppData\Local\Android\Sdk

JAVA_HOME C:\Program Files\Android\Android Studio\jre\jre

Then under System variables (the bottom section), click on the Path variable and click on Edit.

On the pop-up window, click on New to add another variable:

C:\Users\username\AppData\Local\Android\Sdk\platform-tools C:\Program Files\nodejs\

Click OK, OK

5. install eslint and configuration

https://www.npmjs.com/package/@react-native-community/eslint-config

a. yarn add --dev eslint prettier @react-native-community/eslint-config
or npm install eslint prettier @react-native-community/eslint-config -D
then,maybe you should add a new file named .eslintrc,the directory should be same as node_modules
b. Add to your eslint config (.eslintrc, or eslintConfig field in package.json):

{
"extends": "@react-native-community",
"rules":{
"quotes":[2,"double",{"avoidEscape":true}]
}
}
c. go to package.json, add "lint":"eslint . --ext .js" to scripts section. this means ask eslint check all js file, we could use npm run lint to run this command.
If there are too many formate issues, use yarn lint --fix to formate, then a lot of error will be eliminated

6.  How to do prettier-eslint in react app
    https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672

7.  install eslint plugin, help find error immediately
    go to extension, input eslint, initially it's disabled, click fix, then click "allow everywhere"
8.  install prettier - code formatter extension
    then, go to preference-setting, input 'format on save',check "Format a file on save", then every time when the file is saving, it'll be formated automatically, if not, go to preference-setting, input 'file formate'
    ,set default formatter to 'esbenp.prettier-vscode'

    9. extensions (except prettier and eslint)
       a. Debugger for chrome
       b. Javascript (ES6) Code Snippets
       c.Live server
       d. Bracket Pair Colorizor
       e. Auto Rename Tag
       f. Quokka
       g. Path Intellisense
       h. Project Manager
       i.Browser Preview
       j. ES7 React/Redux/GraphQL/React-Native snippets

    10 regarding the folder collapsed/merged when it doesn't have any file
    In VsCode on MAC go to Code (top left hand corner)

             Select Preferences
             then Settings
             then Search for compact folders
             Uncheck the

    11 use Flow to do static check

    https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672
    Once you are ready, install Flow running:
    npm install --save flow-bin
    then install : yarn flow-typed install, this will install types, or flow will complain couldn't resolve moudle
    And add its config file .flowconfig in the project root:
    [ignore]
    <PROJECT_ROOT>/node_modules/.\*
    [include]
    [libs]
    [lints]
    [options]
    [strict]
    Extend your lint script in package.json to include Flow:
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint . && flow"
    },
    Notiece, if add flow after "lint", lint --fix will not work, I recommand add a new line "check":"eslint . && flow", then use this one to check whole syntax.
    Now you can start using Flow adding // @flow on top of any files you want to type check.
    To learn more about Flow and Flow Typed, check out the official docs:
    https://flow.org/
    https://github.com/flow-typed/flow-typed

12 Configure ESLint, Prettier, and Flow in VS Code for React Development
https://medium.com/@sgroff04/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213

13 Error about:can only be used in TypeScript
go to preference-setting, search "javascript.validate.enable", untick it

14 Error about:Cannot resolve module `react-native`.

Solutions:
Create a folder called type-def-libs in your project root and inside create a file called react-native.js with these contents

declare module 'react-native' {
declare module.exports: any
}
Then in your .flowconfig add that folder under libs:

[libs]
./type-def-libs

PS: if other package doesn't recognized by flow (like react-native-paper), just add declare it in the same js file

15 Error: keep reporting "delete cr"

add follow rule to .eslintrc file
"rules": {
"prettier/prettier": ["error",{
"endOfLine": "auto"}
]

}

16 install font:
https://www.npmjs.com/package/@expo-google-fonts/inter

first: expo install expo-font
second: expo install @expo-google-fonts/lato
Lato is font you want,notice all font name is lowercase

17 debug environment
** install extension React Native Tool
** go to left-side bar, click bug icon, make sure there is no launch.json, then hit link "create json". notic: don't hit button "debug and run"
\*\* input react native in the input box, then select debug android
\*\*

18. update expo go
    sometimes when expo go is not the latest one, simulator will not work, then we need to update.
    but update operation usually doesn't work, then we need do some steps as follows:
    **create a new folder, use expo init create a new project
    **test if this project could run normally
    **if it is, then the environment is not broken,copy the code files and config files from the original director to the new director
    **rename the new project

19 install react native navigation,two steps
**yarn add @react-navigation/native
**expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

20 SafeArea
According to https://reactnavigation.org/docs/handling-safe-area, the SafeAreaView exported by react native has some incompatible issures and recommend us using the react-native-safe-area-context library to handle safe areas in a more reliable way

21 use export class name as type in flow
don't forget to add //@flow in both export and import file, or flow can't the declare class
22 use extension koroFileHeader to add file header and function comment
usage:
https://www.programmersought.com/article/944678456/
hot key for function:window：ctrl+alt+t,mac：ctrl+cmd+t
hot key for hearder:window：ctrl+alt+i,mac：ctrl+cmd+i
Custom template:

In user settings, search fileheader


Copy default configuration + modify configuration, RESTART is effective
  
  **find customMade, modify content:

  "fileheader.customMade": {
    
    "Description": "",
    "Author": "your name",
    "Date": ""
  },

  **find cursorMode, modify content:

  "fileheader.cursorMode": {
  
    "Author": "your name",
    "Description": "",
    "param": "",
    "return": ""
  },
**find Config Obj, click open json file, scroll down to find beforeAnnotation, modify content if you need flow to check syntax:
   "beforeAnnotation": {
      "js": "//@flow",
      "jsx": "//@flow"
    },


23 expo icons
https://icons.expo.fyi/
https://fontawesome.com/icons?d=gallery&p=2 
24 camelize
it's a package used to formalize string into cam style, like user_rating ---> userRating
25 how to set default value with Flow(
  // how to set default value with flow
  {
    location,
  }: {
    location: string,
  } = { location: "chicago" }
): Promise<any> =>{}

26 debug process:
** install extension "React Native Tools"
** config launch.json, add debug attach packager like:
{
      "name": "Attach to packager",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "attach",
      "port": "19000",
      "sourceMaps": true
    },
    NOTICE: some times the port is 19000, find the real one: when run the yarn start and it should be on the opened page.

** input yarn start to start the expo packager
** hit debug button, In the Debug Console window, you should see that the debugger is now attached to the packager.
** go back to the console and launch your app on the desired target. i.e: 'a' for android.
** set the breakpoint, go to the emulator, ctrl+m open the menue, turn on the Remote debuging options
** Reload on emulator

27 Flow ?: and :?
**the former one indicates the param could miss, the latter one means the param must have, but the type is not sure
28 Use map
https://docs.expo.io/versions/latest/sdk/map-view/
expo install react-native-maps

28 React Native Image doesn't support web image in Android, so we need use react native webview
https://docs.expo.io/versions/latest/sdk/webview/
expo install react-native-webview

29 async-storage
https://docs.expo.io/versions/latest/sdk/async-storage/
expo install @react-native-async-storage/async-storage

30 //Flow type casting
    return (result: RestaurantInfoDetail[]);
    result is any, use this syntax, function will return  RestaurantInfoDetail[]

31 install Firebase
https://docs.expo.io/guides/using-firebase/
dont use expo install firebase ,it will fail installation
use yar add firebase

32 Top 10 React Native UI libraries
 https://blog.logrocket.com/comparing-react-native-ui-libraries/

 33 Flow type of styled component, use React.ComponentType<any>
 export const AccountBackgroundCover: React.ComponentType<any> = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 25, 255, 0.3);
`;

34 firebase
https://console.firebase.google.com/project/meals-6827d/authentication/users