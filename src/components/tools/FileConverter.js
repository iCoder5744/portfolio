'use client'
import { useState, useRef } from "react";
import { Upload, Download, FileText, Image, Video, Music, Archive, RefreshCw, X, Check } from "lucide-react";
import Link from "next/link";

export default function FileConverter() {
  const [files, setFiles] = useState([]);
  const [targetFormat, setTargetFormat] = useState("");
  const [category, setCategory] = useState("document");
  const [converting, setConverting] = useState(false);
  const [converted, setConverted] = useState([]);
  const fileInputRef = useRef(null);

  const categories = {
    document: {
      name: "Documents",
      icon: FileText,
      formats: ["PDF", "DOCX", "DOC", "TXT", "RTF", "ODT", "PAGES", "XLS", "XLSX", "PPT", "PPTX", "CSV"],
      accept: ".pdf,.doc,.docx,.txt,.rtf,.odt,.pages,.xls,.xlsx,.ppt,.pptx,.csv"
    },
    image: {
      name: "Images",
      icon: Image,
      formats: ["JPG", "PNG", "GIF", "WEBP", "BMP", "TIFF", "SVG", "ICO", "HEIC", "RAW", "PSD"],
      accept: ".jpg,.jpeg,.png,.gif,.webp,.bmp,.tiff,.svg,.ico,.heic,.raw,.psd"
    },
    video: {
      name: "Videos",
      icon: Video,
      formats: ["MP4", "AVI", "MOV", "WMV", "FLV", "MKV", "WEBM", "3GP", "M4V", "ASF", "VOB"],
      accept: ".mp4,.avi,.mov,.wmv,.flv,.mkv,.webm,.3gp,.m4v,.asf,.vob"
    },
    audio: {
      name: "Audio",
      icon: Music,
      formats: ["MP3", "WAV", "FLAC", "AAC", "OGG", "WMA", "M4A", "AIFF", "AU", "RA", "AMR"],
      accept: ".mp3,.wav,.flac,.aac,.ogg,.wma,.m4a,.aiff,.au,.ra,.amr"
    },
    archive: {
      name: "Archives",
      icon: Archive,
      formats: ["ZIP", "RAR", "7Z", "TAR", "GZ", "BZ2", "XZ", "CAB", "ISO", "DMG"],
      accept: ".zip,.rar,.7z,.tar,.gz,.bz2,.xz,.cab,.iso,.dmg"
    }
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = selectedFiles.map(file => ({
      id: Date.now() + Math.random(),
      file: file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'ready'
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const newFiles = droppedFiles.map(file => ({
      id: Date.now() + Math.random(),
      file: file,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'ready'
    }));
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (id) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setConverted(prev => prev.filter(f => f.id !== id));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const simulateConversion = async () => {
    if (!targetFormat || files.length === 0) return;

    setConverting(true);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Update status to converting
      setFiles(prev => prev.map(f =>
        f.id === file.id ? { ...f, status: 'converting' } : f
      ));

      // Simulate conversion time
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));

      // Mark as converted
      setFiles(prev => prev.map(f =>
        f.id === file.id ? { ...f, status: 'completed' } : f
      ));

      // Add to converted files
      const convertedFile = {
        id: file.id,
        originalName: file.name,
        convertedName: file.name.replace(/\.[^/.]+$/, `.${targetFormat.toLowerCase()}`),
        format: targetFormat,
        size: file.size * (0.8 + Math.random() * 0.4) // Simulate size change
      };

      setConverted(prev => [...prev, convertedFile]);
    }

    setConverting(false);
  };

  const downloadFile = (convertedFile) => {
    // In a real app, this would download the actual converted file
    const link = document.createElement('a');
    link.href = '#';
    link.download = convertedFile.convertedName;
    link.click();
    alert(`Downloaded: ${convertedFile.convertedName}`);
  };

  const clearAll = () => {
    setFiles([]);
    setConverted([]);
    setTargetFormat("");
  };

  const CategoryIcon = categories[category].icon;

  return (
    <div className="text-white min-h-screen px-3 sm:p-4">

      {/* Back to Tool */}
      <Link href="/tools" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
        <span className="mr-2">←</span>
        Back to Tools
      </Link>

      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Universal File Converter</h2>
        <p className="text-gray-300 text-center mb-10">Convert between 200+ file formats instantly</p>

        {/* Category Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(categories).map(([key, cat]) => {
            const Icon = cat.icon;
            return (
              <button
                key={key}
                onClick={() => {
                  setCategory(key);
                  setTargetFormat("");
                  setFiles([]);
                  setConverted([]);
                }}
                className={`p-4 rounded-xl border-2 transition-all ${category === key
                    ? 'border-blue-500 bg-blue-500/20'
                    : 'border-gray-600 hover:border-gray-500'
                  }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* File Upload Area */}
        <div
          className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center mb-6 hover:border-gray-500 transition-colors"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg mb-2">Drop files here or click to browse</p>
          <p className="text-sm text-gray-400 mb-4">
            Supported: {categories[category].formats.join(', ')}
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={categories[category].accept}
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors cursor-pointer "
          >
            Choose Files
          </button>
        </div>

        {/* Format Selection */}
        {files.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Convert to:</label>
            <select
              value={targetFormat}
              onChange={(e) => setTargetFormat(e.target.value)}
              className="w-full p-3  bg-gray-800 border border-gray-600 rounded-lg text-white"
            >
              <option value="" className="">Select target format</option>
              {categories[category].formats.map(format => (
                <option key={format} value={format}>{format}</option>
              ))}
            </select>
          </div>
        )}

        {/* File List */}
        {files.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Files ({files.length})</h3>
              <button
                onClick={clearAll}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.id} className="bg-gray-800 p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CategoryIcon className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-400">{formatFileSize(file.size)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {file.status === 'converting' && (
                      <RefreshCw className="w-5 h-5 animate-spin text-blue-400" />
                    )}
                    {file.status === 'completed' && (
                      <Check className="w-5 h-5 text-green-400" />
                    )}
                    <button
                      onClick={() => removeFile(file.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Convert Button */}
            <div className="mt-6 text-center">
              <button
                onClick={simulateConversion}
                disabled={!targetFormat || converting}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${!targetFormat || converting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                  }`}
              >
                {converting ? (
                  <span className="flex items-center">
                    <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                    Converting...
                  </span>
                ) : (
                  `Convert to ${targetFormat || 'Format'}`
                )}
              </button>
            </div>
          </div>
        )}

        {/* Converted Files */}
        {converted.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Converted Files</h3>
            <div className="space-y-3">
              {converted.map((file) => (
                <div key={file.id} className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Check className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="font-medium">{file.convertedName}</p>
                      <p className="text-sm text-gray-400">
                        {file.originalName} → {file.format} ({formatFileSize(file.size)})
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => downloadFile(file)}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}