import firebase from "firebase/compat/app";
import "firebase/compat/storage"; 

const firebaseConfig = {
    apiKey: "AIzaSyBnNMi8OudJub67di3aE0YjNW77-PbY2C8",
    authDomain: "netflix-d22c4.firebaseapp.com",
    projectId: "netflix-d22c4",
    storageBucket: "netflix-d22c4.appspot.com",
    messagingSenderId: "394335983489",
    appId: "1:394335983489:web:c528662f6da8516dbf7a80",
    measurementId: "G-7R9Q7GP9LZ"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;