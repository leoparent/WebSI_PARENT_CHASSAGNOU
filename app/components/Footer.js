import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (

        <footer class="p-4 bg-white rounded-lg border-2 shadow-2xl md:px-10 md:py-5 dark:bg-gray-90 fixed bottom-0 w-screen">

            <div class="sm:flex sm:items-center sm:justify-between ">
                <Link href="https://tailwindcss.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" class="mr-3 h-8" alt="Tailwind Logo" />
                    <span class="self-center text-4 font-semibold whitespace-nowrap dark:text-white">Powered by Tailwind</span>
                </Link>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link href="https://github.com/adaltas/ece-webtech-2022-fall" class="mr-4 hover:underline md:mr-6 "><GitHubIcon /></Link>
                    </li>
                    <li>
                        <Link href="https://lecavalierdelatourelle.blogspot.com/2011/06/top-jeunes-leo-parent.html" class="mr-4 hover:underline md:mr-6"><InstagramIcon/></Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/paul-adrien-chassagniou-518442204/" class="hover:underline"><LinkedInIcon /></Link>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> Nous ne sommes rien sans React, Tailwind et l&apos;amour de nos parents.
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-4"><Link href="https://flowbite.com/" class="hover:underline">© 2022 PARENT et . All Rights Reserved.</Link>
            </span>

        </footer>
    )
}

export default Footer