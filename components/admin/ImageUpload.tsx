'use client';

import { useRef, useState } from 'react';
import { Loader, Upload, X } from 'lucide-react';

interface ImageUploadProps {
  label: string;
  value?: string;
  onChange: (url: string) => void;
  folder?: string;
  required?: boolean;
  helpText?: string;
}

export default function ImageUpload({
  label,
  value,
  onChange,
  folder = 'general',
  required = false,
  helpText,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file: File | undefined) => {
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const body = new FormData();
      body.append('file', file);
      body.append('folder', folder);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      onChange(data.url);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setError(message);
    } finally {
      setUploading(false);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
        {required ? ' *' : ''}
      </label>

      {value ? (
        <div className="relative mb-3 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
          <img
            src={value}
            alt={label}
            className="w-full h-40 object-cover"
          />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-red-600 hover:bg-white shadow"
            aria-label="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="px-3 py-2 text-xs text-gray-500 break-all border-t border-gray-200">
            {value}
          </p>
        </div>
      ) : null}

      <div
        className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-green-500 transition-colors cursor-pointer bg-gray-50"
        onClick={() => !uploading && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleFile(e.dataTransfer.files?.[0]);
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {uploading ? (
          <div className="flex items-center justify-center gap-2 text-gray-600 py-2">
            <Loader className="w-5 h-5 animate-spin" />
            Uploading to /uploads...
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-2 text-gray-600">
            <Upload className="w-6 h-6 text-green-600" />
            <span className="text-sm font-medium">
              Click or drag image here
            </span>
            <span className="text-xs text-gray-400">
              JPG, PNG, WEBP, GIF · max 5MB
            </span>
          </div>
        )}
      </div>

      {helpText && <p className="mt-1 text-xs text-gray-500">{helpText}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}

      {/* Keep a hidden required input so native form validation still works */}
      {required && (
        <input
          type="text"
          value={value || ''}
          required
          readOnly
          tabIndex={-1}
          aria-hidden
          className="sr-only"
        />
      )}
    </div>
  );
}
