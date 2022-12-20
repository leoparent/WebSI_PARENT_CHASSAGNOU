import { useState,useEffect } from "react";
import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function My_Collection() {
  const user = useUser();
  const session = useSession();
  const supabase = useSupabaseClient();
  const CDN_URL = "http://localhost:8000/storage/v1/object/public/images/";

  const [infos, setInfos] = useState([])
  const router = useRouter()

  useEffect(() => {
    getCollection()
  }, [session]);

  async function getCollection() {
    try {
      let {data , error } = await supabase
      .from("articles")
      .select(`id,name,theme,description`)
      .eq(`user_id`, user.id)

      if(data)
      {
        console.log(data)
        setInfos(data)
      }

      if (error) {
        throw error;
      }
    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  return (
    <> 
        <h1 className="mb-20 text-center text-2xl font-medium text-gray-400 ">My collection </h1>
        <div className="ml-20 gap-x-10 gap-y-20 grid grid-cols-3">
            {
                infos.map( (image)=> {
                    return (
                        <>
                            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <Link href= { '/page/'+ image.id } >
                                    <img className="rounded-t-lg" src={CDN_URL + user.id + "/" + image.id} alt="" />
                                    <div className="p-5">
                                        <h5 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">{image.name}</h5>
                                        <p className="mt-5 mb-3 font-normal text-gray-700 dark:text-gray-400">{image.description}</p>
                                    </div>
                                </Link>
                                
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  );
}
