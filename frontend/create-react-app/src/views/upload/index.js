import React, { useState } from 'react';
// material-ui
// import { Typography } from '@mui/material';

// project imports
// import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log(selectedFile);
  };

  const handleUpload = async (file) => {
    uploadFile(file, config)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
  );
}

export default Upload;
