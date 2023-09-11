'use client';

import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';

type FileUploadProps = {
    onChange: (url?: string) => void;
    value: string;
    endpoint: 'serverImage' | 'messageFile';
};

const FileUpload = ({ endpoint, onChange, value }: FileUploadProps) => {
    const fileType = value.split('.').pop();

    if (value && fileType !== 'pdf') {
        return (
            <div className="relative h-20 w-20">
                <Image fill src={value} alt="upload" className="rounded-full" />
                <button
                    onClick={() => onChange('')}
                    className="absolute p-1 rounded-full top-0 right-0 bg-rose-500 text-white"
                    type="button"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        );
    }
    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => console.log(error)}
        />
    );
};

export default FileUpload;
