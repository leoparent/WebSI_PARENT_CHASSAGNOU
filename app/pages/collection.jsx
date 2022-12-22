import { useUser, useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Collection() {

    const user = useUser();
    const session = useSession();
    const supabase = useSupabaseClient();
    const CDN_URL = "https://skosgopoasczfbihkylx.supabase.co/storage/v1/object/public/images/";

    const [infos, setInfos] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getCollection()
    }, [session]);

    async function getCollection() {
        try {

          let {d,e} = await supabase
          .from("profiles")
          .select(`id`)

          if(d)
          {
            setUsers(d)
            console.log(d)
          }

          let {data , error } = await supabase
          .from("articles")
          .select(`id,user_id,name,theme,description`)
    
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
            <div className="ml-20 gap-x-10 gap-y-20 grid grid-cols-3">
                {
                    infos.map( (image)=> {
                        return (
                            
                                <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={image.id}>
                                    <Link href= { '/page/'+ image.id } >
                                        <img className="rounded-t-lg" src={CDN_URL + image.user_id + "/" + image.id} alt="" />

                                        <div className="p-5">
                                            <h5 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">{image.name}</h5>
                                        
                                            <p className="mt-5 mb-3 font-normal text-gray-700 dark:text-gray-400">{image.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            
                        )
                    })
                }
            </div>
        </>
    )
}
