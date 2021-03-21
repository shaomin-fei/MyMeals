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
    sometimes when expo go is not the latest one, simulator will not work, then we need to update
    **npm install -g expo-cli
    **delete virtual device, because in the previous device, the expo go is not latest one
    **add new virtual device
    **run npm run android, this command will install latest expo go on the new virtual device
