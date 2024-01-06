import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuzBFq1XkoaKCD4FE38dB3O2Zu0qSvHHU",
  authDomain: "ffpservice-c01a9.firebaseapp.com",
  databaseURL: "https://ffpservice-c01a9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ffpservice-c01a9",
  storageBucket: "ffpservice-c01a9.appspot.com",
  messagingSenderId: "1082971691323",
  appId: "1:1082971691323:web:9de10ffb2c6caf3ba8ff1e"
}

const app = initializeApp(firebaseConfig);

export default app;