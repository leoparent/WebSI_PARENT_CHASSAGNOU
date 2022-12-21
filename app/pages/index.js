import { useState,useEffect } from "react";
import { useUser, useSupabaseClient, useSession } from "@supabase/auth-helpers-react";

export default function Home() {
  const user = useUser();
  const session = useSession();
  const supabase = useSupabaseClient();
  const CDN_URL = "http://localhost:8000/storage/v1/object/public/images/";
  const [classe, setClasse] = useState("w-1/2 p-1 md:p-2")
  const [infos, setInfos] = useState([])
  const [username, setUsername] = useState([])

  useEffect(() => {
    getCollection()
  }, [session]);

  async function getCollection() {
    try {
      let {data , error } = await supabase
      .from("articles")
      .select(`id,name,theme,description,user_id`)

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
          <section className="overflow-hidden text-gray-700">
            <div className="grid grid-cols-3 gap-4 items-center">

                 {
                  
                  infos.map((image)=>{
                    return (
                  <div className="mb-4">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                      src={CDN_URL + image.user_id + "/" + image.id}/>
                  </div>   
                    )
                   })
                  } 

            </div>
          </section>
    </>
  );
}


function compteur(a)
{
let result = a ;
let classe = "";
switch (result) {
  case '1':
    classe ="w-1/2 p-1 md:p-2"
    break;
    case '2':
     classe="w-1/2 p-1 md:p-2"
     break;
    case '3':
      classe="w-full p-1 md:p-2"
      break;
    case '4':
       classe="flex flex-wrap w-1/2"
      break;
    case '5':
    classe="w-1/2 p-1 md:p-2"
      break;
    case '6':
      classe="w-1/2 p-1 md:p-2"
   break;
}
if(result == 6)
  {
    result = 1 ;
  }else{
result = a+1;
  }
return classe;
}