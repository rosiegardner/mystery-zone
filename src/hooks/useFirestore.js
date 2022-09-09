import { useState, useEffect } from 'react';
import { db } from '../firebase.js';
// import { collection, addDoc } from 'firebase/firestore';
// import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from "firebase/firestore";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect (() => {
    const unSubscribe = db.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id})
        });
        setDocs(documents);
      });

    return () => unSubscribe();

  }, [collection])

  return { docs };
}

export default useFirestore;


  // ** Possible Updated code for R.V18 ** 
  
    // const queryByTimestamp = query(
    //   collection(db, "images"),
    //   orderBy('createdAt', 'desc')
    // );

    // const unSubscribe = onSnapshot(
    //   queryByTimestamp,
    //   (querySnapshot) => {
    //     let documents = [];
    //     querySnapshot.forEach((doc) => {
    //       documents.push({...doc.data(), id: doc.id})
    //     });
    //     setDocs(documents);
    //   });

    //   return () => unSubscribe();
    // )