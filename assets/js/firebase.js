import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
export const firebaseConfig = {
    apiKey: "AIzaSyC9EPD4nShi3CJ0Zb91VoZY0fDjqshuPUk",
    authDomain: "pruea-a1aa3.firebaseapp.com",
    projectId: "pruea-a1aa3",
    storageBucket: "pruea-a1aa3.appspot.com",
    messagingSenderId: "669722024803",
    appId: "1:669722024803:web:84df5fe2905bdfd240d156"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);