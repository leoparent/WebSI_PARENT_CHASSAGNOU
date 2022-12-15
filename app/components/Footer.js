import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import logo from "../public/logo.png"

const Footer = () => {
    return (

        <footer className="dark:bg-black dark:border-gray-800 p-4 md:px-10 md:py-5 border-t-2  border-gray-200 mt-10">

            <div className=" sm:flex sm:items-center sm:justify-between">
                <Link href="https://openai.com/dall-e-2/" className="flex items-center mb-4 sm:mb-0">
                    <Image src={logo}  className="rounded-full mr-3 w-8 h-8" />
                    <span className="self-center dark:text-gray-400 text-gray-500 hover:text-black dark:hover:text-white text-base font-medium whitespace-nowrap ">Designed with DALL.E</span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
                    <li>
                        <Link href="https://github.com/adaltas/ece-webtech-2022-fall" className="mr-4 hover:underline md:mr-6 "><GitHubIcon /></Link>
                    </li>
                    <li>
                        <Link href="https://lecavalierdelatourelle.blogspot.com/2011/06/top-jeunes-leo-parent.html" className="mr-4 hover:underline md:mr-6"><InstagramIcon/></Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/paul-adrien-chassagniou-518442204/" className="hover:underline"><LinkedInIcon /></Link>
                    </li>
                </ul>
                <span className=" text-sm text-gray-500 sm:text-center dark:text-white mt-4">© 2022 IArtist, Inc.</span>
            </div>  
        </footer>
    )
}

export default Footer