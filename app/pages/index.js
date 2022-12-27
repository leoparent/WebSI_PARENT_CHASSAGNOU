import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  useSession,
} from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function Home() {
  const user = useUser();
  const session = useSession();
  const supabase = useSupabaseClient();
  const CDN_URL =
    "https://skosgopoasczfbihkylx.supabase.co/storage/v1/object/public/images/";

  const [classe, setClasse] = useState([
    "w-1/2 p-1 md:p-2",
    "w-1/2 p-1 md:p-2",
    "w-full p-1 md:p-2",
    "flex flex-wrap w-1/2",
    "w-1/2 p-1 md:p-2",
    "w-1/2 p-1 md:p-2",
  ]);
  const [infos, setInfos] = useState([]);
  const [infos2, setInfos2] = useState([]);
  const [infos3, setInfos3] = useState([]);
  const [infos4, setInfos4] = useState([]);

  const [username, setUsername] = useState([]);
  let compteur = 0;
  let compteur2 = 0;

  useEffect(() => {
    getCollection();
    getCollection2();
    getCollection3();
    getCollection4();
  }, [session]);

  async function getCollection() {
    try {
      let { data, error } = await supabase
        .from("random_articles")
        .select(`id,name,theme,description,user_id`)
        .limit(3);

      if (data) {
        console.log(data);
        setInfos(data);
      }

      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCollection2() {
    try {
      let { data, error } = await supabase
        .from("random_articles")
        .select(`id,name,theme,description,user_id`)
        .limit(3);

      if (data) {
        console.log(data);
        setInfos2(data);
      }

      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCollection3() {
    try {
      let { data, error } = await supabase
        .from("random_articles")
        .select(`id,name,theme,description,user_id`)
        .limit(3);

      if (data) {
        console.log(data);
        setInfos3(data);
      }

      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCollection4() {
    try {
      let { data, error } = await supabase
        .from("random_articles")
        .select(`id,name,theme,description,user_id`)
        .limit(3);

      if (data) {
        console.log(data);
        setInfos4(data);
      }

      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="items-center text-center dark:lg:bg-test-dark lg:bg-test-light bg-auto bg-top bg-no-repeat overflow-hidden dark:bg-black">
        <div className="pb-15">
          <h1 className="mb-10 text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-400">
            {" "}
            The new gallery for IA generated Art
          </h1>
          <Link href="./collection">
            <button className="text-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Go to gallery
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <section className="flex text-gray-700 lg:ml-10">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                  {infos.map((image) => {
                    compteur = compteur + 1;
                    return (
                      <div className={classe[compteur - 1]}>
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src={CDN_URL + image.user_id + "/" + image.id}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap w-1/2">
                  {infos2.map((image) => {
                    compteur = 3;
                    return (
                      <div className={classe[compteur - 1]}>
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src={CDN_URL + image.user_id + "/" + image.id}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="flex text-gray-700 lg:ml-10">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                  {infos3.map((image) => {
                    compteur2 = compteur2 + 1;
                    return (
                      <div className={classe[compteur2 - 1]}>
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src={CDN_URL + image.user_id + "/" + image.id}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-wrap w-1/2">
                  {infos4.map((image) => {
                    compteur2 = 3;
                    return (
                      <div className={classe[compteur2 - 1]}>
                        <img
                          alt="gallery"
                          className="block object-cover object-center w-full h-full rounded-lg"
                          src={CDN_URL + image.user_id + "/" + image.id}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
