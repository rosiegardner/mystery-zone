import { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { collection, onSnapshot, query, where } from "firebase/firestore";

const useFirestore = (albumId) => {
  const [docs, setDocs] = useState([]);

  useEffect (() => {
    const queryByTimestamp = query(
      collection(db, "images"),
      where("albumId", "==", albumId),
    );

    const unSubscribe = onSnapshot(
      queryByTimestamp,
      (querySnapshot) => {
        let documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id})
        });
        setDocs(documents);
      });

      return () => unSubscribe();
    

  }, [albumId])

  return { docs };
}

export default useFirestore;

  // ** Old CODE **
    // const useFirestore = (collection) => {
    //   const [docs, setDocs] = useState([]);
    
    //   useEffect (() => {
    //     const unSubscribe = db.collection(collection)
    //       .orderBy('createdAt', 'desc')
    //       .onSnapshot((snap) => {
    //         let documents = [];
    //         snap.forEach(doc => {
    //           documents.push({...doc.data(), id: doc.id})
    //         });
    //         setDocs(documents);
    //       });
    
    //     return () => unSubscribe();
    
    //   }, [collection])
    
    //   return { docs };
    // }