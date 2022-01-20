import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCUVNyX-zcrZpkMBZLQjfZM8VArlHw4fgs',
    authDomain: 'airbnb-ec0dc.firebaseapp.com',
    projectId: 'airbnb-ec0dc',
    storageBucket: 'airbnb-ec0dc.appspot.com',
    messagingSenderId: '777401636199',
    appId: '1:777401636199:web:1779d323d09506dcd24bc2',
    measurementId: 'G-GVNZ0KXPV9',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db

export const authentication = getAuth(app)
