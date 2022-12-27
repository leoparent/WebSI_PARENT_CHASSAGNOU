import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/logo.png";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Footer = () => {
  const { Accentuation, setAccentuation } = useContext(UserContext);
  return (
    <footer
      className={
        "dark:bg-black dark:border-gray-800 p-4 md:px-10 md:py-5 border-t-2  border-gray-200 mt-10 " +
        Accentuation
      }
    >
      <div className="md:flex md:items-center md:justify-between flex-row items-center text-center">
        <Link
          href="https://openai.com/dall-e-2/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <Image src={logo} className="rounded-full mr-3 w-8 h-8" />
          <span className="self-center dark:text-gray-400 text-gray-500 hover:text-black dark:hover:text-white text-base font-medium whitespace-nowrap">
            Logo designed with DALL.E
          </span>
        </Link>

        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
          <li>
            <Link
              href="https://github.com/adaltas/ece-webtech-2022-fall"
              className="mr-4 hover:underline md:mr-6 "
            >
              <GitHubIcon />
            </Link>
          </li>
          <li>
            <Link
              href="https://midjourney.com/home/"
              className="mr-4 hover:underline md:mr-6"
            >
              <FaDiscord size={48} className="pt-5 pr-5" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/paul-adrien-chassagniou-518442204/"
              className="hover:underline"
            >
              <LinkedInIcon />
            </Link>
          </li>
        </ul>

        <span className="text-sm text-gray-500 sm:text-center dark:text-white sm:mb-0">
          © 2022 IArtist, Inc.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
