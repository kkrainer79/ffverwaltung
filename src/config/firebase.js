import {initializeApp} from "firebase/app";

/*
PRODUCTIVE-DATABASE
START
*/
const firebaseConfig = {
  apiKey: "AIzaSyAuzBFq1XkoaKCD4FE38dB3O2Zu0qSvHHU",
  authDomain: "ffpservice-c01a9.firebaseapp.com",
  databaseURL: "https://ffpservice-c01a9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ffpservice-c01a9",
  storageBucket: "ffpservice-c01a9.appspot.com",
  messagingSenderId: "1082971691323",
  appId: "1:1082971691323:web:9de10ffb2c6caf3ba8ff1e"
}
/*
-----> END <-----*/



/*
DEVELOPMENT-DATABASE
-----> START <-----

const firebaseConfig = {
  apiKey: "AIzaSyAOk0zxaelfz0bPGWlU8dduDdVegzdJV0Y",
  authDomain: "ffpservicedev.firebaseapp.com",
  projectId: "ffpservicedev",
  storageBucket: "ffpservicedev.appspot.com",
  messagingSenderId: "77065195531",
  appId: "1:77065195531:web:ffeee0d778e51b1a88b70e"
};

-----> END <-----
*/




const app = initializeApp(firebaseConfig);

export default app;