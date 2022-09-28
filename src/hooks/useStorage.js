import { useState, useEffect} from "react";
import { imgStorage, db } from '../firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';


const useStorage = (file) => {
  // console.log('why are you still running')
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
   // console.log('running too much')
    const storageRef = ref(imgStorage, file.name);
    const collectionRef = collection(db, 'albums', 'images');
  
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',(snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
      }, (err) => {
        setError(err);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        const createdAt = serverTimestamp();
        addDoc(collectionRef, { url, createdAt });
        setUrl(url);
       console.log('ran')
      });
    })

  }, [file]);

  return { progress, url, error }
}


export default useStorage;


// import { useState, useEffect } from 'react';
// import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

// const useStorage = (file) => {
//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState(null);
//   const [url, setUrl] = useState(null);

//   useEffect(() => {
//     // references
//     const storageRef = projectStorage.ref(file.name);
//     const collectionRef = projectFirestore.collection('images');

//     storageRef.put(file).on('state_changed', (snap) => {
//       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
//       setProgress(percentage);
//     }, (error) => {
//       setError(error);
//     }, async () => {
//       const url = await storageRef.getDownloadURL();
//       const createdAt = timestamp();
//       collectionRef.add({ url, createdAt });
//       setUrl(url);
//     })
//   }, [file]);

//   return { progress, url, error }

// }

// export default useStorage;