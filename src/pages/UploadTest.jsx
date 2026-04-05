import { useState } from "react";
import api from "../api/axios";

const UploadTest = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const uploadFile = async () => {
    if (!file) {
      alert("No file selected");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await api.post("/uploads/upload", fd);

      const data = res.data;
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>UPLOAD TEST</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadFile}>
        Upload
      </button>

      <pre>{result}</pre>
    </div>
  );
};

export default UploadTest;