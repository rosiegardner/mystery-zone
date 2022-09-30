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