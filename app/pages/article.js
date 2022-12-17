import { useUser } from "@supabase/auth-helpers-react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Article() {
  const user = useUser();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div className="" key={file.name}>
      <img className="object-cover h-48 w-48" src={file.preview} alt="uploaded image" />
    </div>
  ));


  return (
    <>
      <div className="items-center flex">
        <div {...getRootProps()}>
          <button className="mx-8 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            <input {...getInputProps()} />
            <p>Upload Image</p>
          </button> 
        </div>
        <aside>{thumbs}</aside>
      </div>

        <button className="mx-8 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Post
        </button>
    </>
  );
}
