'use client';

import JSZip from 'jszip';
import { useState, useRef } from 'react';
import {
  File,
  UploadCloud,
  Trash,
  Download,
  Loader2,
  Scissors,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function FileCompressor() {
  const [file, setFile] = useState(null);
  const [compressedBlob, setCompressedBlob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const fileInputRef = useRef();

  const handleFileInput = (e) => {
    setFile(e.target.files[0]);
    setCompressedBlob(null);
    setStep(2);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setCompressedBlob(null);
      setStep(2);
    }
  };

  const handleCompress = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const zip = new JSZip();
      zip.file(file.name, file);
      const blob = await zip.generateAsync({ type: 'blob' });
      setCompressedBlob(blob);
      setStep(4);
    } catch (error) {
      console.error('Compression failed:', error);
    }
    setLoading(false);
  };

  const handleDownload = () => {
    if (!compressedBlob) return;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(compressedBlob);
    link.download = `${file.name}.zip`;
    link.click();
  };

  const removeFile = () => {
    setFile(null);
    setCompressedBlob(null);
    setStep(1);
  };

  return (
    <div className="text-white min-h-screen px-3 sm:p-4 ">
      <Link href="/tools" className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-6 sm:ml-10  sm:mb-6 transition-colors">
        <span className="mr-2">←</span>
        Back to Tools
      </Link>

      <div className="max-w-3xl mx-auto mt-14 p-10 bg-gray-800 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <UploadCloud className="w-7 h-7 text-blue-400" />
          Advanced File Compressor
        </h1>

        {/* Step 1: Upload */}
        {step === 1 && (
          <div
            className="border-dashed border-2 border-blue-500 bg-[#2a2a40] p-10 mx-auto rounded-xl text-center cursor-pointer hover:bg-[#33334d] transition"
            onClick={() => fileInputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              hidden
              ref={fileInputRef}
              onChange={handleFileInput}
            />
            <p className="text-lg text-blue-300 font-medium mb-2">
              Drag & Drop your file here
            </p>
            <p className="text-sm text-gray-400">or click to browse</p>
          </div>
        )}

        {/* Step 2: Preview + Options */}
        {step === 2 && file && (
          <div>
            <div className="flex items-center justify-between bg-[#2d2d44] rounded-xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <File className="w-5 h-5 text-blue-300" />
                <div>
                  <p className="text-sm font-semibold">{file.name}</p>
                  <p className="text-xs text-gray-400">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
              </div>
              <button onClick={removeFile}>
                <Trash className="w-5 h-5 text-red-400 hover:text-red-500 transition" />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">Compression Options:</label>
              <select
                className="w-full p-2 bg-gray-700 rounded-lg text-white"
                defaultValue="deflate"
              >
                <option value="store">No Compression (Fastest)</option>
                <option value="deflate">Standard Compression</option>
              </select>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold flex justify-center items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" /> Next Step
            </button>
          </div>
        )}

        {/* Step 3: Compressing */}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
            <p className="text-gray-300">Compressing your file...</p>
            <button
              onClick={handleCompress}
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg"
            >
              Compression
            </button>
          </div>
        )}

        {/* Step 4: Done */}
        {step === 4 && compressedBlob && (
          <div className="text-center">
            <p className="text-green-400 font-semibold mb-4">✅ Compression Successful!</p>
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto"
            >
              <Download className="w-5 h-5" /> Download Compressed File
            </button>
            <button
              onClick={removeFile}
              className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
            >
              Compress Another File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
