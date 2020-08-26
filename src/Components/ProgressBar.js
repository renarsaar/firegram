import React, { useEffect } from 'react';
import useStorage from '../Firebase/useFirebaseStorage';

export default function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div style={{ width: `${progress}%` }} className="progress-bar" />
  );
}
