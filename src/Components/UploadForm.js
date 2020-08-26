import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowedFileTypes = ['image/jpeg', 'image/png'];

  function handleChange(e) {
    let selectedFile = e.target.files[0];

    if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file(png or jpeg)');
    }
  }

  return (
    <form>
      <label htmlFor="file" />
      <input type="file" id="file" onChange={handleChange} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}
