import { useState } from "react";

const FormIsolationTest = () => {
  const [file, setFile] = useState(null);

  return (
    <div style={{ padding: 40 }}>
      <h2>FORM ISOLATION TEST</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p style={{ marginTop: 10, color: "green" }}>
          Selected: {file.name}
        </p>
      )}
    </div>
  );
};

export default FormIsolationTest;
