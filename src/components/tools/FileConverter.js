'use client'
import { useState } from "react";

export default function FileConverter() {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState("DOCX");

  const handleConvert = () => {
    alert(`Pretending to convert ${file?.name} to ${format}`);
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Document Converter</h2>
      <p className="mb-6">Upload your file and convert it to a supported format.</p>
      <div className="flex items-center gap-4 mb-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <select
          className="border p-2"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="DOCX">DOCX</option>
          <option value="PDF">PDF</option>
          <option value="TXT">TXT</option>
        </select>
        <button className="border p-2" onClick={handleConvert}>Convert</button>
      </div>
      {file && <p className="text-sm text-gray-700">Selected: {file.name}</p>}
    </div>
  );
}
