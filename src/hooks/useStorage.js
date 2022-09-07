import { useState, useEffect} from "react";
import { imgStorage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';


const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(imgStorage, file.name);
    // const collectionRef = db.collection('images');
  
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',(snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) =>
      setUrl(url));
    });
  }, [file]);

  return  { progress, url, error }
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