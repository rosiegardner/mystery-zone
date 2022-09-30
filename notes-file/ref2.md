import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import Album from './Album';

function App() {
  const [albums, setAlbums] = useState([]);

 useEffect(() => {
  const unmount = db.collection('albums').onSnapshot((snapshot) => {
    const tempAlbums = [];
    snapshot.forEach(doc => {
      tempAlbums.push({
        ...doc.data(), 
        id: doc.id})
    })
    setAlbums(tempAlbums)
  })
  return unmount;
 }, [])


-- Album.js --

import React, {useState, useEffect} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import NewPhoto from './NewPhoto';
import { db } from './firebase';


const Album = () => {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const match = useRouteMatch('/:album');
  const {album} = match.params

  useEffect(() => {
    const unmount = db.collection("albums")
      .doc(album)
      .onSnapshot((doc) => {
        setImages(doc.data().images);
        setAlbumName(doc.data().name);
    });
    return unmount;
  }, []);



-- NewAlbumForm.js --

import React, {useState} from 'react';
import { db } from './firebase';

const NewAlbumForm = () => {
  const [albumName, setAlbumName] = useState("");

  const onAlbumNameChange = (e) => {
    setAlbumName(e.target.value)
  }

  const onAlbumCreate = () => {
    if (!albumName){
      return
    } db.collection("albums").doc(albumName).set({
      name: albumName
    })
    setAlbumName("")
  }







-- NewPhoto.js --

import React, {useState} from 'react';
import { db, albumStorage } from './firebase';

const NewPhoto = ({currentAlbum}) => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onUpload = async () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    db.collection('albums').doc(currentAlbum).update({
      images: albumStorage({
        name: file.name,
        url: await fileRef.getDownloadURL()
      })
    })
  }