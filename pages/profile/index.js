import {useState} from 'react'

function ProfilePage() {
    const [profiles,setProfiles] =useState([])
    const [profile,setProfile] =useState('')
    const [password,setPassword] =useState('')

    const fetchProfile = async () => {
        const response = await fetch ('/api/profile')
        const data = await response.json()
        setProfiles(data)
    }

    const submitProfile = async() => {
        const response = await fetch('/api/profile',{
            method:'POST',
            body: JSON.stringify({profile,password}),
            headers:{
                'Content-Type':'application/json',
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const deleteProfile = async profileId => {
        const response = await fetch(`/api/profile/${profileId}`,{
        method:'DELETE',
        })
        const data = await response.json()
        console.log(data)
        fetchProfile()
    }

    return ( 
        <>
      <div class="mb-6 mx-14 flex-col min-h-screen">
        <input
        placeholder = 'name'
        type='name' 
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        class="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        /> 
       <input
        placeholder = 'password'
        type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        class="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        /> 
        <button onClick={submitProfile}
        class="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-14"
        >Submit Profile</button>
        <button onClick={fetchProfile}
        class="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-14"
        >Load Profile</button>
        { profiles.map((profile) =>{

                return(
                    <div key={profile.id}>
                     {profile.id} {profile.password} {profile.name}  
                     <button
                     class="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-14"
                     onClick={()=>deleteProfile(profile.id)}
                     > 
                        Delete 
                        </button>

                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default ProfilePage