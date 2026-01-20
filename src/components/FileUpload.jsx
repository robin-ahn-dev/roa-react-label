import React, { useState, useEffect } from "react";
import { Upload, X } from "lucide-react";


const FileUpload = ({  }) => {
   
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [preview, setPreview] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Prüfe ob es ein Bild ist
            if (!file.type.startsWith('image/')) {
                setError("Bitte wählen Sie eine Bilddatei aus.");
                return;
            }

            setError(null);
            setFileName(file.name);
            setUploading(true);
            setUploadProgress(0);

            // Erstelle Preview-URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);

            // Simuliere Upload-Progress (kann durch echten Upload ersetzt werden)
            const interval = setInterval(() => {
                setUploadProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setUploading(false);
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200);
        }
    };

    const handleRemoveFile = (e) => {
        e.stopPropagation();
        setPreview(null);
        setFileName(null);
        setUploadProgress(0);
        setUploading(false);
        setError(null);
    };
   
    return (
        <div className="w-full">
            <div className="mb-4 w-full">
                <label
                    className={`file-upload !border-2 !border-dashed flex ${preview ? 'flex-row items-center gap-4' : 'flex-col items-center justify-center gap-4'} p-4 rounded-md transition-colors`}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.add("fileDragOver");
                    }}
                    onDragLeave={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.remove("fileDragOver");
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.remove("fileDragOver");
                        const file = e.dataTransfer.files[0];
                        if (file)
                            handleFileUpload({ target: { files: [file] } });
                    }}
                >
                    {preview ? (
                        <>
                            <div className="file-upload-preview">
                                <img src={preview} alt="Preview" />
                                <button
                                    type="button"
                                    onClick={handleRemoveFile}
                                    className="file-upload-remove"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="file-upload-info flex-1">
                                <p className="file-upload-name">{fileName}</p>
                                {uploading && (
                                    <div className="file-upload-progress">
                                        <div 
                                            className="file-upload-progress-bar"
                                            style={{ width: `${uploadProgress}%` }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="select-none pointer-events-none flex flex-col items-center justify-center gap-3">
                            <Upload className="w-6 h-6 text-black dark:text-white" />
                            <span>Datei hierher ziehen oder klicken zum Hochladen</span>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        disabled={uploading}
                        hidden
                    />
                </label>

                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
        </div>
    );
};

export default FileUpload;