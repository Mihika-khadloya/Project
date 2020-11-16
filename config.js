import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBJlDMxySbTkEqzB90DzMbvZbdxNYR-9aQ",
  authDomain: "barter-app-f416b.firebaseapp.com",
  databaseURL: "https://barter-app-f416b.firebaseio.com",
  projectId: "barter-app-f416b",
  storageBucket: "barter-app-f416b.appspot.com",
  messagingSenderId: "693628218711",
  appId: "1:693628218711:web:34c161abdda5f2447f6212"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
