import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

export default function UserPage() {
  const router = useRouter();
  const ImageID = router.query.image
  const user = useUser()
  const session = useSession();
  const supabase = useSupabaseClient();
  const CDN_URL = "http://localhost:8000/storage/v1/object/public/images/";

  useEffect(() => {
    getImage()
  }, [session]);

  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  async function getImage()
  {
      console.log(session)
      let {data , error} = await supabase
      .from("articles")
      .select(`name,theme,description`)
      .eq(`id`, ImageID).single()

      if(data)
      {
        setTitle(data.name)
        setTheme(data.theme)
        setDesc(data.description)
      }
      else alert("Error")
  }

  async function Update({ title, theme, desc }) {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("articles")
        .update(
          {
             name : title,
             theme : theme,
             description : desc
          }
          )
        .eq(`id`, ImageID)

      if (data == null) {
        alert("Error Updating Image");
      }
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function Delete()
  {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("articles")
        .delete()
        .eq(`id`, ImageID)

      if (error) {
        alert("Error Deleting Image");
      }

      let {err} = await supabase.storage
      .from("images")
      .remove([user.id + "/" + ImageID])

      if(err)
      {
        alert(err)
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
        <div className="p-10 mx-2 justify-between grid grid-cols-2 gap-20">
        <div className="text-center">
          <div className="mb-14">
            <text className="dark:text-white  text-black-500 text-xl font-bold italic ">
              Update your{" "}
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
              id="Title"
              placeholder="Title"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-base font-medium text-gray-700 bg-white dark:bg-gray-400 bg-clip-padding  border border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="Theme"
              value={theme || ""}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Category"
            />
          </div>
          <div className="mb-6">
            <textarea
              className="block w-full px-3 py-1.5 text-base font-medium text-gray-700 bg-white dark:bg-gray-400 bg-clip-padding  border border-solid border-gray-300 rounded
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
            onClick={() => Update({ title, theme, desc })}
            disabled={loading}>
            {loading ? "Loading ..." : "Update it ;)"}
          </button>
          <Link href="/my_collection" className="pr-10">
            <button
              className="mt-12 rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
              onClick={() => Delete()}
              disabled={loading}>
              {loading ? "Loading ..." : "Delete it :("}
            </button>
          </Link>
          
        </div>

        <div className="text-center">
          <img src={CDN_URL + session.user.id + "/" + ImageID} alt="" className="rounded-lg" />
        </div>

        
      </div>

      
    </div>
  )
}
