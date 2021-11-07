import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyATmF-bJJEZrby_8oyPRnYiGUkUBJDvfYw',
  authDomain: 'uber-clone-698d8.firebaseapp.com',
  projectId: 'uber-clone-698d8',
  storageBucket: 'uber-clone-698d8.appspot.com',
  messagingSenderId: '630048530007',
  appId: '1:630048530007:web:90ff21e66f658c47cdcd12',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
