import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyCxTOya2Xip7ojab95imVaYV_GdAZEhU9Q',
	authDomain: 'firegram-337a3.firebaseapp.com',
	projectId: 'firegram-337a3',
	storageBucket: 'firegram-337a3.appspot.com',
	messagingSenderId: '96128307862',
	appId: '1:96128307862:web:464b1b221157897e65a8b7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
