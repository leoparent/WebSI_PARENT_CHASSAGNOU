import { useState } from 'react';
import { useDropzone } from "react-dropzone";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";


export default function Article()
{
    const supabase = useSupabaseClient();
    const user = useUser();
    const [imageData, setImageData] = useState(null);
    const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
        
    reader.addEventListener('load', () => {
      setImageData(reader.result);
    });

    reader.readAsArrayBuffer(file);
  };
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
    return(
        <div class="container my-24 px-6 mx-auto">
        
          <section class="mb-32 text-center text-gray-800">
            <div class="max-w-[700px] mx-auto px-3 lg:px-6">
              <h2 class="text-3xl font-bold mb-12">add your work of art</h2>
              <form>
                <div class="form-group mb-6">
                  <input type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="Name"
                    placeholder="Name"/>
                </div>
                <div class="form-group mb-6">
                  <input type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="Theme"
                    placeholder="theme"/>
                </div>
                <div class="form-group mb-6">
                  <textarea class="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                </div>
                <div>
                <input type="file" onChange={handleImageChange} accept="image/*" />
                {imageData && <img src={imageData} alt="Image sélectionnée" />}
                </div>
                
                <br>
                </br>
                <button type="submit" class="
                  w-full
                  px-6
                  py-2.5
                  bg-blue-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
                  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out">Send</button>
              </form>
            </div>
            
          </section>
            <div>
            <div className="items-center flex">
        <div {...getRootProps()}>
          <button className="mx-8 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            <input {...getInputProps()} />
            <p>Upload Image</p>
          </button> 
        </div>
        <aside>{thumbs}</aside>
      </div>
            </div>
        </div>
        
    );
}