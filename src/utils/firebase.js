import { initializeApp } from 'firebase/app';

const firebaseConfig = {
   apiKey: 'AIzaSyDDLUitotCsmLMZ5-473F5K1fSUARWM1WY',
   authDomain: 'my-keep-599f4.firebaseapp.com',
   projectId: 'my-keep-599f4',
   storageBucket: 'my-keep-599f4.appspot.com',
   messagingSenderId: '515430995355',
   appId: '1:515430995355:web:d964176b1fabb0b1e1fd3e',
};

const initFirebase = () => initializeApp(firebaseConfig);
export default initFirebase;
