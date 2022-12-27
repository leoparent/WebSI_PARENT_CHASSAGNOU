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

      let { data, error } = await supabase
        .from("articles")
        .select(`id,user_id,name,theme,description`)

      if (data) {
        setInfos(data)
      }

      if (error) {
        throw error;
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="md:mx-auto lg:mx-auto flex flex-col gap-8 md:gap-x-5 md:gap-y-10 md:grid md:grid-cols-2 lg:gap-x-10 lg:gap-y-20 lg:grid lg:grid-cols-3 ">
        {
          infos.map((image) => {
            return (
              <div className="lg:max-w-lg  max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={image.id}>
                <Link href={'/page/' + image.id} >
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
