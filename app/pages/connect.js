import {UserContext} from "../pages/UserContext"
import React, {useContext} from "react"

export default function connect() {
  const {user,setUser} = useContext(UserContext)
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <br></br>
        <br></br>
        <br></br>
        <div class="grid gap-6 mb-6 md:grid-cols-2"> 
        <div class="mb-6 mx-14">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            type="text"
            id="Email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="leo"
            required
          ></input>
        </div>
        <div class="mb-6 mx-14">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            required
          ></input>
        </div>
        <button
         onClick={async() =>{
          const user = document.getElementById("Email").value
          setUser(user)
        }}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-14"
        >
          Submit
        </button>
      </div>
      </div>
    </>
  );
}
