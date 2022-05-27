// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgtHWx1l-cnJaRs839Q6YNa4vVloOvDQQ',
  authDomain: 'dotabeef.firebaseapp.com',
  projectId: 'dotabeef',
  storageBucket: 'dotabeef.appspot.com',
  messagingSenderId: '536523263578',
  appId: '1:536523263578:web:0f2c9bff8ea2098c9d5263',
  measurementId: 'G-YRS6615PJ6',
}

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export { fireBaseApp }
