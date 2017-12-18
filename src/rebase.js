import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

var app = firebase.initializeApp({
  apiKey: "AIzaSyCcKXgwoY50Modi7cZm_c2OkM4xQhnV8_w",
  authDomain: "rltprices-dev.firebaseapp.com",
  databaseURL: "https://rltprices-dev.firebaseio.com",
  projectId: "rltprices-dev",
  storageBucket: "rltprices-dev.appspot.com",
  messagingSenderId: "55630761607"
});

var db = firebase.firestore(app);
var base = Rebase.createClass(db);

export default base;