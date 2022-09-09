import { useState, useEffect } from 'react';
import { db } from '../firebase.js';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  return { docs };
}

export default useFirestore;