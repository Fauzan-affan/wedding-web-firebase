import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJRKKHNlOn2EK82lK5kX4DwaR2AywrNpQ",
    authDomain: "vue-wedding-website.firebaseapp.com",
    databaseURL: "https://vue-wedding-website.firebaseio.com",
    projectId: "vue-wedding-website",
    storageBucket: "vue-wedding-website.appspot.com",
    messagingSenderId: "1002797576035",
    appId: "1:1002797576035:web:365b23a58a4e3bc33f6d56"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
// firestore.settings({ timestampsInSnapshots: true }) Menghilangkan error di console ketika menggunakan timestamps

export default firestore;
