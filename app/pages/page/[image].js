import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {  useUser,  useSupabaseClient,  useSession,} from "@supabase/auth-helpers-react";
import UserAvatar from "../../components/Gravatar.js";
import { v4 as uuidv4, v4 } from "uuid";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputEmoji from "react-input-emoji";

export default function ImagePage() {
  const router = useRouter();
  const ImageID = router.query.image;
  const user = useUser();
  const session = useSession();
  const supabase = useSupabaseClient();
  const CDN_URL = "https://skosgopoasczfbihkylx.supabase.co/storage/v1/object/public/images/";

  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  const [surname , setSurname] = useState("");
  const [comments, setComments] = useState([]);
  const [comment_content, setComment_content] = useState(null)
  const [comment_content2, setComment_content2] = useState(null)
  const [postDate , setPostDate] = useState("");
  const [whoPostedUsername , setWhoPostedUsername] = useState("");
  const [whoPostedMAIL , setWhoPostedMAIL] = useState("");
  const [ hidden, setHidden] = useState(false)

  useEffect(() => {
    if (user) {
      getImage()
      getWhoPosted()
      getUsername()
      getComments()

    } else {
      router.push("/login");
    }
  }, [session , username]);  

  async function getImage() {
    let { data, error } = await supabase
      .from("articles")
      .select(`*`)
      .eq(`id`, ImageID)
      .single();

    if (data) {
      setUsername(data.user_id);
      setTitle(data.name);
      setTheme(data.theme);
      setDesc(data.description);
      setPostDate(data.created_at);
    } else {
      alert("Error image");
    }
  }

  async function getComments() {
    let { data, error } = await supabase
      .from("comments")
      .select(`*`)
      .eq(`article_id`, ImageID)
      
    if (data) {
      setComments(data);
      
    } else {
      alert("Error comment");
    }
  }

  async function getUsername()
  {
    let {data } = await supabase
    .from("profiles")
    .select("username")
    .eq("id",user.id)
    .single();

    if(data)
    {
      setSurname(data.username);
    }
  }

  async function getWhoPosted() {
    
    let { data, error } = await supabase
      .from("profiles")
      .select(`*`)
      .eq(`id`, username).single();
      
    if (data) {
      setWhoPostedMAIL(data.email);
      setWhoPostedUsername(data.username);

    } else {
      console.log("Error getting who posted");
    }
  }

  async function Update({ title, theme, desc }) {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("articles")
        .update({
          name: title,
          theme: theme,
          description: desc,
        })
        .eq(`id`, ImageID);

      if (data == null) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function Delete() {
    try {
      setLoading(true);
      DeleteComment_Image();
      DeleteImage();

      let {data, error} = await supabase
      .from("articles")
      .delete()
      .eq(`id`, ImageID)

      if(error)
      {
        throw error
      }

    } catch (error) {
      console.log("DELETE");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function DeleteComment_Image()
  {
    let { data } = await supabase
    .from("comments")
    .delete()
    .eq(`article_id`, ImageID);
  }

  async function DeleteImage()
  {
    let { data,error } = await supabase.storage
        .from("images")
        .remove([user.id + "/" + ImageID]);

      if (data) {
        console.log("Image supprimee")
      }
      else
      {
        alert(error)
      }
  }

  async function Comment({ comment_content }) {
    try {
      setLoading(true);
      const uuid = v4()
      console.log(surname)
      console.log(session.user.email)

      let { error } = await supabase.from("comments").upsert({
        id: uuid,
        user_id: user.id,
        article_id: ImageID,
        content: comment_content,
        email : session.user.email,
        username : surname,
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
      getComments();
      setComment_content("");
    }
  }

  async function DeleteComment(comment_id)
  {
    try {
      setLoading(true);

      let { data, error } = await supabase
        .from("comments")
        .delete()
        .eq(`id`, comment_id);

      if (error) {
        alert("Error Deleting Image");
      }
    } catch (error) {
      console.log("DELETE comments");
      console.log(error);
    } finally {
      setLoading(false);
      getComments();
    }
  }

  async function UpdateComment(comment_id,commentaire) 
  {

      setHidden(comment_id);
    if(comment_content2 !== null && comment_content2 !== "") 
    {
      setLoading(true);
      let { data, error } = await supabase
      .from("comments")
      .update({content:comment_content2})
      .eq('id',comment_id)

      setLoading(false);

      setHidden(null)
      setComment_content2(null)
    }
      getComments()

  }

  return (
    <>
    
      {username == session?.user?.id ? (
        <>
          <div className="p-10 mx-2 grid lg:grid-cols-2 gap-20">
            <img src={CDN_URL + username + "/" + ImageID} alt="" className="rounded-lg w-auto h-auto"/>
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
              <div className="my-20 grid grid-cols-2 text-start gap-10 items-center text-gray-700 dark:text-gray-400">
                <p className="font-medium">{"Posted at : " + new Date(postDate).toLocaleString('fr-FR', { hour:'2-digit', minute :'2-digit',year: '2-digit',month: '2-digit', day: '2-digit'}) }</p>
                <div className="flex justify-end items-center gap-5 lg:gap-10 md:gap-10">
                  <p className="font-bold text-gray-700 dark:text-gray-400">{whoPostedUsername}</p>
                  <UserAvatar email={whoPostedMAIL} size={45} />
                </div>
              </div>
              <button className="mt-12 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                onClick={() => Update({ title, theme, desc })} disabled={loading}>
                {loading ? "Loading ..." : "Update it ;)"}
              </button>
              <Link href="/my_collection" className="px-10">
                <button className="mt-12 rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
                  onClick={() => Delete()} disabled={loading}>
                  {loading ? "Loading ..." : "Delete it :("}
                </button>
              </Link>
            </div> 
          </div>
          <div className="mx-12 my-10 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800" >
              <InputEmoji value={comment_content || ""} onChange={(e) => setComment_content(e)}/>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => Comment({ comment_content })}>
                Post
              </button>

              <div className="flex pl-0 space-x-1 sm:pl-2 text-center items-center gap-10 text-gray-900 dark:text-white">
                {surname}
                <UserAvatar email={session.user.email} size={45} />
              </div>
            </div>
          </div>
          {
          comments.map((comment) => {
            return (
                <div className="bg-gray-50 mx-12 my-8 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600" key={comment.id}>
                  <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    { hidden === comment.id ?
                    (
                      <InputEmoji value={comment_content2 || ""} onChange={(e) => setComment_content2(e)} required/>
                      
                    ):
                    (
                      <p id="comment" rows="4" className="w-full px-0 text-lg font-medium text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
                        {comment.content}
                      </p>
                    )
                      
                    }
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <div className="flex justify-start md:flex md:justify-start items-center gap-5 pl-0 space-x-1 sm:pl-2 text-gray-900 dark:text-white">
                      <UserAvatar email={comment.email} size={45} />
                      <p className="font-bold">{comment.username}</p>
                      <p className="hidden sm:block font-normal">{"posted at : " + new Date(comment.created_at).toLocaleString('fr-FR', { hour:'2-digit', minute :'2-digit',year: '2-digit',month: '2-digit', day: '2-digit'}) }</p>
                    </div>
                    
                      {
                        comment.user_id == user.id ?
                        (
                          <div className="justify-end grid grid-rows-2 lg:flex lg:justify-end items-center gap-5">
                            <button onClick={()=> UpdateComment(comment.id)} className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700" value="hdh"> 
                              Modify
                            </button>
                            <button onClick={()=> DeleteComment(comment.id,comment.content)} className="rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"> 
                              <DeleteForeverIcon/>
                            </button>
                          </div>
                        ) :
                        (
                          <>
                            <div className="justify-end grid grid-rows-1 lg:flex lg:justify-end items-center gap-5">
                            <button onClick={()=> DeleteComment(comment.id,comment.content)} className="rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"> 
                              <DeleteForeverIcon/>
                            </button>
                          </div>
                          </>
                        )
                      }
                  </div>
                </div>
            );
          })}
        </>
      ) : (
        <>       
          <div className="p-10 mx-2 grid lg:grid-cols-2 md:grid-cols-2 gap-20">
            <img className="rounded-lg w-auto h-auto" src={CDN_URL + username + "/" + ImageID} alt="" />
            <div className="flex flex-col justify-start gap-10">
              <h5 className="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-6 font-medium text-gray-700 dark:text-gray-400">
                {desc}
              </p>
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
                Categories : {theme} 
              </p>
              <div className="grid grid-cols-2 space-x-1 items-center gap-5 text-gray-700 dark:text-gray-400">
                <p className="font-medium">{"Posted at : " + new Date(postDate).toLocaleString('fr-FR', { hour:'2-digit', minute :'2-digit',year: '2-digit',month: '2-digit', day: '2-digit'}) }</p>
                <div className="flex justify-end items-center gap-10">
                  <p className="font-bold text-gray-700 dark:text-gray-400">{whoPostedUsername}</p>
                  <UserAvatar email={whoPostedMAIL} size={45} />
                </div>
              </div>
              
            </div>
            
          </div>
          
          <div className="mx-12 my-10 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800" >
              <InputEmoji value={comment_content || ""} onChange={(e) => setComment_content(e)}/>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => Comment({ comment_content })}>
                Post
              </button>

              <div className="flex pl-0 space-x-1 sm:pl-2 text-center items-center gap-10 text-gray-900 dark:text-white">
                {surname}
                <UserAvatar email={session?.user.email} size={45} />
              </div>
            </div>
          </div>
          {
          comments.map((comment) => {
            return (
                <div className="bg-gray-50 mx-12 my-8 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600" key={comment.id}>
                  <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    { hidden === comment.id ?
                    (
                      
                      <InputEmoji value={comment_content2 || ""} onChange={(e) => setComment_content2(e)} required/>
                    ):
                    (
                      <p id="comment" rows="4" className="w-full px-0 text-lg font-medium text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
                        {comment.content}
                      </p>
                    )
                    }
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <div className="flex items-center gap-5 pl-0 space-x-1 sm:pl-2 text-gray-700 dark:text-white">
                      <UserAvatar email={comment.email} size={45} />
                      <p className="font-bold">{comment.username}</p>
                      <p className="hidden sm:block font-normal">{"posted at : " + new Date(comment.created_at).toLocaleString('fr-FR', { hour:'2-digit', minute :'2-digit',year: '2-digit',month: '2-digit', day: '2-digit'}) }</p>
                    </div>
                    {
                        comment.user_id == user.id ?
                        (
                          <div className="justify-end grid grid-rows-2 lg:flex lg:justify-end items-center gap-5">
                            <button onClick={()=> UpdateComment(comment.id)} className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700" value="hdh"> 
                              Modify
                            </button>
                            <button onClick={()=> DeleteComment(comment.id,comment.content)} className="rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"> 
                              <DeleteForeverIcon/>
                            </button>
                          </div>
                        ) :
                        (
                          <></>
                        )
                      }
                    
                  </div>
                  
                </div>
            );
          })}
        </>
      )}
    </>
  );
}
