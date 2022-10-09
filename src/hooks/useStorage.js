import { useState, useEffect} from "react";
import { imgStorage, db } from '../firebase.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';


const useStorage = (file, albumId) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(imgStorage, file.name);
    const collectionRef = collection(db, 'images');
  
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',(snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
      }, (err) => {
        setError(err);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        addDoc(collectionRef, { url, albumId });
        setUrl(url);
      });
    })

  }, [file, albumId]);

  return { progress, url, error }
}


export default useStorage;
