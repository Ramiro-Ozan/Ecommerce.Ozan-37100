import { initializeApp } from "firebase/app";

/*Very Important information of my firebase*/
const firebaseConfig = {
  apiKey: "AIzaSyCykTUC7R8CaKsE-bCGsA84s54gOX0J1_A",
  authDomain: "ecommerce-ozan-react37100.firebaseapp.com",
  projectId: "ecommerce-ozan-react37100",
  storageBucket: "ecommerce-ozan-react37100.appspot.com",
  messagingSenderId: "319489704224",
  appId: "1:319489704224:web:267e5da6825d05f4c55745"
};

const app = initializeApp(firebaseConfig);

export const firebaseConnection = () => app