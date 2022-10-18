import { initializeApp } from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyBpiCFb7w6kx1SOFDeJT-pYk_8zhPaLTKA",
    authDomain: "dragon-news-portal-8dbe6.firebaseapp.com",
    projectId: "dragon-news-portal-8dbe6",
    storageBucket: "dragon-news-portal-8dbe6.appspot.com",
    messagingSenderId: "389902834451",
    appId: "1:389902834451:web:2537ad52c76fb773aa98e6"
  };

  const app = initializeApp(firebaseConfig)

  export default app