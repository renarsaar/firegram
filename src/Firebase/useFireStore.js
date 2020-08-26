import { useState, useEffect } from 'react';
import { projectFirestore } from './config';

// Real time image updates
export default function useFireStore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const documents = [];

        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
}
