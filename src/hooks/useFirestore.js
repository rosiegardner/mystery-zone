// import { useState, useEffect } from 'react';
// import { db } from '../firebase.js';
// import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

// const useFirestore = () => {
//   const [docs, setDocs] = useState([]);

//   useEffect (() => {
//     const queryByTimestamp = query(
//       collection(db, "images"),
//       orderBy('createdAt', 'desc')
//     );

//     const unSubscribe = onSnapshot(
//       queryByTimestamp,
//       (querySnapshot) => {
//         let documents = [];
//         querySnapshot.forEach((doc) => {
//           documents.push({...doc.data(), id: doc.id})
//         });
//         setDocs(documents);
//       });

//       return () => unSubscribe();
    

//   }, [])

//   return { docs };
// }

// export default useFirestore;

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