import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyCWrXsA6MxG36p7i6S4KyIUY5booqwuSgM",
    authDomain: "tienda-2f1f7.firebaseapp.com",
    projectId: "tienda-2f1f7",
    storageBucket: "tienda-2f1f7.appspot.com",
    messagingSenderId: "954149450548",
    appId: "1:954149450548:web:138133ba650b7f072eab61"
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);