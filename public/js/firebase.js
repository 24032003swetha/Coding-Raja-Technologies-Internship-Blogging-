let firebaseConfig = {
    apiKey: "AIzaSyDvzIfKRdnWIm35u8cnROX8tXdUUOx4CYg",
    authDomain: "blogging-website-3f4f4.firebaseapp.com",
    projectId: "blogging-website-3f4f4",
    storageBucket: "blogging-website-3f4f4.appspot.com",
    messagingSenderId: "669808997951",
    appId: "1:669808997951:web:a419cd35d089a1aece2a8a",
    measurementId: "G-WXTS0BG7YH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();