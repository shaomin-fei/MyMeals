//@flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-23 09:36:24
 */
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAE7KnPAS4UTyrkzQppDK-SMydMDLXVFd8",
  authDomain: "meals-6827d.firebaseapp.com",
  projectId: "meals-6827d",
  storageBucket: "meals-6827d.appspot.com",
  messagingSenderId: "229780013927",
  appId: "1:229780013927:web:1ae7ebe390182d217025c2",
  measurementId: "G-1D7PRSXD22",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  //only initialize once
  const app = firebase.initializeApp(firebaseConfig);
}
export const loginService = (
  username: string,
  password: string
): Promise<Object> => {
  return firebase.auth().signInWithEmailAndPassword(username, password);
};

export const register = (
  username: string,
  password: string
): Promise<Object> => {
  return firebase.auth().createUserWithEmailAndPassword(username, password);
};

export const accountLogout = () => {
  firebase.auth().signOut();
};
let authStateChangeCallback: null | ((Object) => void) = null;
export const setAutStateChangeCallBack = (callBack: () => void) => {
  authStateChangeCallback = callBack;
};
// firebase.auth().onAuthStateChanged((usr) => {
//   authStateChangeCallback && authStateChangeCallback(usr);
// });
