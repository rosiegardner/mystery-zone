-- useFirestore.js --

import { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const useFirestore = () => {
  const [docs, setDocs] = useState([]);

    useEffect (() => {
      const queryByTimestamp = query(
       collection(db, "images"),
       orderBy('createdAt', 'desc')
      );

      const unSubscribe = onSnapshot(
       queryByTimestamp,
       (querySnapshot) => {
         let documents = [];
         querySnapshot.forEach((doc) => {
          documents.push({
            ...doc.data(), 
            id: doc.id})
         });
         setDocs(documents);
       });

       return () => unSubscribe();
  }, [])

   return { docs };
}







--- useStorage.js ---

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
    const collectionRef = collection(db, 'albums');
  
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