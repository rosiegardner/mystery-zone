#### Notes file 

* App.js - Root Component
* Header.js - Custom Component for content display
* UploadForm.js - Custom Component for file upload

## Firebase
* Firebase/firestore - Database
* Firebase/storage - Storing images

## UploadForm
* This component will allow users to select files from their computer to upload
* changeHandler function takes in the (e) - 'event' object of selecting a file. 
* This form will only allow png or jpeg image file to be uploaded and will return an error if file is not valid

## Styling

* Using the var() is a CSS variable used for styling in React



## useStorage.js 
* reference from tutorial previous tutorial that uses react 17 ( updated code )

A friend of mine who was new to React and doing this tutorial said he ran into a weird error around 37:05. I followed the tutorial to this point and tracked it down: You'll get an error saying that ProgressBar as a component is missing a render() method. This is strange because <ProgressBar/> is a functional component: it's not supposed to have a render() method as it's not a class-based React component! 

This is actually a symptom of a different root cause: When a file is uploaded to the <UploadForm /> component, the <ProgressBar /> component is rendered. The <ProgressBar /> component imports the useStorage() hook, which calls, for the first time, our projectStorage variable. At this point, things fail because what is imported and initialized inside config.js is actually outdated: with Firebase 9.0.0 and up, there are different imports than shown in the video. Here are the updated import statements and initializations: 

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    // your firebaseConfig object here
}

initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };

Inside the useStorage() hook, the useEffect() hook contents will also have to be updated to work too, because creating our storage ref now is now it's own function (and there are a few other ones that are now used to accomplish the upload process). You will need to import some new functions from firebase/storage directly:  

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';



useEffect(() => {
        // create reference
        console.log(projectStorage);
        const storageRef = ref(projectStorage, file.name);
        console.log(storageRef);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) =>
                    setUrl(url)
                );
            }
        );
    }, [file]);

Everything else inside the useStorage() hook can stay the same. 

TL;DR - React throws misleading errors sometimes. Video content for setting up config.js and useStorage.js is outdated.