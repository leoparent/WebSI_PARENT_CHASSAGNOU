import UserContext from "../contexts/UserContext"
import React, { useContext } from "react"

export default function connect() {
  const { user, setUser } = useContext(UserContext)
  const { isLogged, setLog } = useContext(UserContext)

  return (
    <>
      <div className="min-h-screen mt-5">
        <br></br>
        <br></br>
        <br></br>
        <div class="gap-6 mb-6 md:grid-cols-2">
          <div class="mb-6 mx-14 inline-block">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="Email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              required
            ></input>
          </div>
          <div class="mb-6 mx-14 inline-block">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required
            ></input>
          </div>
          <button
            onClick={async () => {
              const pseudo = document.getElementById("Email").value
              setUser(pseudo)
              setLog(true)
            }}
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-14"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
