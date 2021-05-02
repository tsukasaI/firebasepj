import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyAckO-f-oczIqinTpu5Zpm-2alpTa0VYCU",
        authDomain: "fir-pj-eabe3.firebaseapp.com",
        projectId: "fir-pj-eabe3",
        storageBucket: "fir-pj-eabe3.appspot.com",
        messagingSenderId: "138440981954",
        appId: "1:138440981954:web:81bec3533c04c2bc3bea5b"
    }
  )
}

export default firebase
