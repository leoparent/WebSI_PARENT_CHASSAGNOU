import { useState,useEffect } from "react";
import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { ComputerRounded } from "@mui/icons-material";

export default function Home() {
  const user = useUser();
  const session = useSession();
  const supabase = useSupabaseClient();
  const CDN_URL = "https://skosgopoasczfbihkylx.supabase.co/storage/v1/object/public/images/";

  const [classe, setClasse] = useState(["w-1/2 p-1 md:p-2","w-1/2 p-1 md:p-2","w-full p-1 md:p-2","flex flex-wrap w-1/2","w-1/2 p-1 md:p-2","w-1/2 p-1 md:p-2"])
  const [infos, setInfos] = useState([])
  const [info2, setInfo2] = useState([])

  const [username, setUsername] = useState([])
  let compteur = 0;
    useEffect(() => {
    getCollection()
    getCollection2()
  }, [session]);

  async function getCollection() {
    try {
      let {data , error } = await supabase
      .from("random_articles")
      .select(`id,name,theme,description,user_id`)
      .limit(3)

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


  async function getCollection2() {
    try {
      let {data , error } = await supabase
      .from("random_articles")
      .select(`id,name,theme,description,user_id`)
      .limit(3)

      if(data)
      {
        console.log(data)
        setInfo2(data)
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
<section class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
                 {
                  
               infos.map((image)=>{
               compteur = compteur+1
              return (
                    <div className={classe[compteur-1]}>
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={CDN_URL + image.user_id + "/" + image.id}/>
                    </div>   
                     )
                    })
                   } 
               </div>
               <div class="flex flex-wrap w-1/2">
               {
               info2.map((image)=>{
               compteur = 3
              return (
                    <div className={classe[compteur-1]}>
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={CDN_URL + image.user_id + "/" + image.id}/>
                    </div>   
                     )
                    })
                   } 
            </div>
          </div>
        </div>
    </section>
    </>
  );
}