import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from 'firebase/firestore'
import firebaseConfig from './firebase-config'

initializeApp(firebaseConfig)

async function getComments(matchID) {
  const commentsQuery = query(
    collection(getFirestore(), 'comments'),
    where('matchID', '==', `${matchID}`),
    orderBy('time', 'asc'),
  )

  const comments = []

  const querySnapshot = await getDocs(commentsQuery)
  if (querySnapshot.empty) {
    return comments
  }

  querySnapshot.forEach((doc) => {
    comments.push(doc.data())
  })
  return comments
}

export { getComments }
