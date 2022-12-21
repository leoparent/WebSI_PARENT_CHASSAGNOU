import { useState, useEffect, useContext } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import UserAvatar from "../components/Gravatar";
import UserContext from "../contexts/UserContext"


export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
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
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { err } = await supabase.from("profiles").insert(inserts);
      
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url, email`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
      
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      
    } catch (error) {
        alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className ="bg-gray-300 rounded-3xl py-10 flex justify-center items-center flex-col mx-auto w-1/2">
      <h1 className="font-medium text-gray-600 pb-10"> Account Settings</h1>

      <UserAvatar email={session.user.email} size={200} />

      <div className="py-5">
        <label htmlFor="email">Email : </label>
        <input className="rounded-lg" id="email" type="text" value={session.user.email} disabled />
      </div>
      <div className="py-5">
        <label htmlFor="username">Username : </label>
        <input className="rounded-lg"
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="py-5">
        <label htmlFor="website">Website : </label>
        <input className="rounded-lg"
          id="website"
          type="text"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="py-5">
        <button
          className="rounded-lg p-2  bg-green-500 hover:bg-green-700"
          onClick={() => updateProfile({ username, website, avatar_url})}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div className="py-5">
        <button
          className="rounded-lg p-2 bg-red-600 hover:bg-red-800"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
      <div>
    <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="bleu" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">blue</button>
    <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="violet" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">purple</button>
    <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="blanc" className="inline-block px-6 py-2.5 bg-white-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white-700 hover:shadow-lg focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white-800 active:shadow-lg transition duration-150 ease-in-out">white</button>

    <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="vert" className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">green</button>
    <button type="button" onClick= {(e) => setAccentuation(e.target.value)} value="jaune" className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">orange</button>
    </div>
    </div>
  );
}
