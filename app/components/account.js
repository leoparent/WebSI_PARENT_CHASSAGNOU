import { useState, useEffect, useContext } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import UserAvatar from "./Gravatar";
import UserContext from "../contexts/UserContext"
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Link from "next/link";

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [getusername, getUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const { Accentuation, setAccentuation } = useContext(UserContext)


  useEffect(() => {
    getProfile()
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      const inserts = {
        id: user.id,
        username,
        website,
        email : user.email,
        updated_at: new Date().toISOString(),
      };

      let { err } = await supabase.from("profiles").insert(inserts);
      
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, email`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        getUsername(data.username);
        setWebsite(data.website);
      }
      
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateComments()
  {
      console.log(username)
      console.log(getusername)
      let {data , error} = await supabase
      .from("comments")
      .update({username : username})
      .eq(`username`, getusername);
      
      updateProfile();
      if(data)
      {
        console.log("updateComments");
      }
      else
      {
        console.log("error update comments")
      } 
  }
  

  async function updateProfile() {
    try {
      setLoading(true);
      const updates = {
        id: user.id,
        username : username,
        website : website,
        updated_at: new Date().toISOString(),
      };

      let { data, error } = await supabase.from("profiles").update(updates);

      if(error)
      {
        throw error
      }
      
    } catch (error) {
        alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className ="bg-gray-100 dark:bg-gray-700 lg:rounded-3xl md:rounded-3xl lg:border md:border border-gray-300 py-10 flex justify-center items-center flex-col mx-auto lg:w-1/2 md:w-3/4 sm:w-full">
      <h1 className="font-medium text-gray-600 dark:text-gray-400 pb-10"> Account Settings</h1>

      <Link href="https://fr.gravatar.com"><UserAvatar email={session.user.email} size={200} /></Link>

      <div className="py-5 items-center ">
        <div className="">
          <div className="my-5 grid grid-cols-2">
            <label htmlFor="email" className="dark:text-gray-400"><MailIcon/> Email : </label>
            <label className="dark:text-gray-400">{session.user.email}</label>
          </div>
          <div className="my-5 grid grid-cols-2">
            <label htmlFor="username" className="dark:text-gray-400"><AccountBoxIcon/> Username : </label>
            <input className="rounded-lg text-center bg-gray-200 " id="username" type="text" value={username || ""} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          
          <div className="my-5 grid grid-cols-2">
            <label htmlFor="website" className="dark:text-gray-400"><LanguageIcon/> Website : </label>
            <input className="rounded-lg text-center bg-gray-200" id="website" type="text" value={website || ""}  onChange={(e) => setWebsite(e.target.value)}/>
          </div>
          
        </div>
      </div>

      <div className="py-5">
        <button
          className="rounded-lg p-2  bg-green-500 hover:bg-green-700"
          onClick={() => updateComments()}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div className="pt-5 pb-10">
        <button
          className="rounded-lg p-2 bg-red-600 hover:bg-red-800"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
      <h1 className="font-medium text-gray-600 dark:text-gray-400 pb-5 mt-5">Select the color theme <ColorLensIcon/></h1>
      <div className="">
        <div className="flex gap-2 ">
          <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="bg-theme-bleu" className="flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">blue</button>
          <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="bg-theme-violet" className="flex items-center px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">purple</button>
          <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="bg-theme-blanc" className="flex items-center px-6 py-2.5 dark:bg-white bg-white-600 text-gray-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white-700 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white-800 active:shadow-lg transition duration-150 ease-in-out">white</button>
          <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="bg-theme-vert" className="flex items-center px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">green</button>
          <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="bg-theme-jaune" className="flex items-center px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">orange</button>
        </div>
        
      </div>
    </div>
  );
}
