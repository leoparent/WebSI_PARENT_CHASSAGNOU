import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { v4 as uuidv4, v4 } from "uuid";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useRouter } from "next/router";

export default function Article() {
  const user = useUser();
  const supabase = useSupabaseClient();
  const CDN_URL = "https://skosgopoasczfbihkylx.supabase.co/storage/v1/object/public/images/";
  const session = useSession();
  const router = useRouter();

  const [title, setTitle] = useState(null);
  const [theme, setTheme] = useState(null);
  const [desc, setDesc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setPreviewUrl(URL.createObjectURL(file));
      setImage(file);
    },
  });

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }  
  }, [session]);  

  const [previewUrl, setPreviewUrl] = useState(null);

  async function Share({ title, theme, desc }) {
    try {
      setLoading(true);

      const uuid = v4()
      const file = image
      const { data, err } = await supabase.storage
        .from("images")
        .upload(user.id + "/" + uuid, file);

      if (data == null) {
        alert("Error Uploading Image");
      }

      let { error } = await supabase.from("articles").insert({
        id: uuid,
        user_id: user.id,
        name: title,
        theme: theme,
        description: desc,
        created_at: new Date().toISOString(),
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert("Error INSERT the data!");
      console.log(error);
    } finally {
      setLoading(false);
      setTitle("") 
      setTheme("") 
      setDesc("")
      setPreviewUrl(null)
    }
  }

  return (
    <>
      <div className="p-10 mx-2 justify-between grid grid-cols-2 gap-20">
        <div className="text-center">
          <div className="mb-14">
            <text className="dark:text-white  text-black-500 text-xl font-bold italic ">
              Share your{" "}
            </text>
            <text className="dark:text-white  text-black-500 text-xl font-bold ">
              IA
            </text>
            <text className="dark:text-white  text-black-500 text-xl font-bold italic">
              rt
            </text>
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-base font-medium dark: text-gray-700 bg-white dark:bg-gray-400 bg-clip-padding  border border-solid border-gray-300 rounded
                    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="Title" placeholder="Title" value={title || ""} onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-gray-400 bg-clip-padding  border border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="Theme"
              value={theme || ""}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Category"
            />
          </div>
          <div className="mb-6">
            <textarea
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white dark:bg-gray-400 bg-clip-padding  border border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea13"
              value={desc || ""}
              onChange={(e) => setDesc(e.target.value)}
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <button
            className="mt-12 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            onClick={() => Share({ title, theme, desc })}
            disabled={loading}>
            {loading ? "Loading ..." : "Share it ;)"}
          </button>
        </div>

        <div className="text-center" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="mb-10 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Drag and drop ;{")"}</p>
          ) : (
            <p className="mb-10 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"><UploadFileIcon/> Upload image</p>
          )}
          <img src={previewUrl} alt="" className="rounded-lg" />
        </div>

        
      </div>
    </>
  );
}
