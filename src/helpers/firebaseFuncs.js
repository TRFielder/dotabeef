import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getFirestore,
} from 'firebase/firestore'
import './firebase-config'

async function getComments(matchID) {
  const commentsQuery = query(
    collection(getFirestore(), 'comments'),
    where('matchID', '==', matchID),
  )

  const querySnapshot = await getDocs(commentsQuery)

  const comments = []
  querySnapshot.forEach((doc) => {
    comments.push({
      id: doc.id,
      name: doc.data().name,
      comment: doc.data().comment,
      time: doc.data().time,
    })
  })

  return comments
}

async function postComment(matchID, name, comment) {
  await addDoc(collection(getFirestore(), 'comments'), {
    name,
    matchID,
    comment,
    time: new Date(),
  })
}

export { getComments, postComment }
