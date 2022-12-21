import { useState,useCallback } from "react";
import Link from "next/link";

export default function Button () {

    const useToggle = (initialState) => {
        const [isToggled, setIsToggled] = useState(initialState);
        const toggle = useCallback(
          () => setIsToggled(state => !state),
          [setIsToggled],
        );
      
        return [isToggled, toggle];
    }

    const [isToggled, toggle] = useToggle(false);

    return (
        <>
            {
                isToggled ?
                <>  
                    <div className="items-center text-center absolute z-50 right-52 top-9">
                        <button onClick={toggle} className="items-center flex ml-8 rounded-t-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" type="button">Options <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div className="z-10  bg-white border-gray-200 dark:border-gray-600 border-2 rounded-tl-md rounded-b-md divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li>
                                <Link onClick={toggle} href="/my_collection" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">My collection</Link>
                                </li>
                                <li>
                                <Link onClick={toggle} href="/article" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">New Post</Link>
                                </li>
                                <li>
                                <Link onClick={toggle} href="/login" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </>    
                 :
                <>
                    <div className="items-center text-center mr-7">
                       <button onClick={toggle} className="items-center flex ml-8 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" type="button">New <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> 
                    </div>
                    
                </> 
            }
            
        </>

  );
}


