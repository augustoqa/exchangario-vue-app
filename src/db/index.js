import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDQwcpr_gQBNJLTS-LcCI_mT0eIlQQ48g8',
  authDomain: 'exchangario-1c508.firebaseapp.com',
  projectId: 'exchangario-1c508',
  storageBucket: 'exchangario-1c508.appspot.com',
  messagingSenderId: '41058796837',
  appId: '1:41058796837:web:2ee325d372aa5a20c186cc',
}

const app = initializeApp(firebaseConfig)
export default getFirestore(app)
