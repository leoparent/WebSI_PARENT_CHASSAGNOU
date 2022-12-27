import timeline from "../public/timeline.png"
import timeline_blanc from "../public/timeline_blanc.png"
import Image from "next/image"
import UserContext from "../contexts/UserContext"
import { useContext } from "react"

export default function About() {

  const { darkMode, setDarkMode } = useContext(UserContext)

  return (

    <>
      <div className="">
        
        <div className="lg:w-1/2 w-2/3 mx-auto mb-20">
          <h1 className="text-center text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-20">Thanks for your interest about IArtist gallery !</h1>
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400">
          We are a team of art enthusiasts who are passionate about showcasing the talents of artists working with artificial intelligence. Our gallery is dedicated to showcasing the unique and innovative artwork created by AI, and we believe that this new medium has the potential to revolutionize the art world.
          </p>
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10">
          At our gallery, you will find a wide range of styles and mediums, from digital paintings and photographs to sculptures and installations. Each piece on display has been carefully selected for its creativity and originality, and we are constantly on the lookout for new and exciting work to feature.
          </p> 
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10 mb-20 lg:mb-32">
          We believe that AI art has the power to inspire and challenge us, and we are excited to be a part of this exciting new movement. We hope that you will join us in exploring the possibilities of this groundbreaking new medium. Thank you for visiting our gallery, and we hope to see you soon !
          </p> 
          <Image src={darkMode ? timeline : timeline_blanc} />
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10">Art has been a part of human culture for thousands of years, and throughout that time, it has undergone countless changes and evolution.</p>
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10">In prehistoric times, art was often created for practical purposes, such as for hunting or for religious rituals. These early works were often simple and crude, made with basic tools and materials like stone, bone, and wood.</p>
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10">As human societies developed and became more complex, so did the art that they produced. The ancient civilizations of Egypt, Greece, and Rome are famous for their sophisticated artworks, which ranged from massive sculptures and intricate paintings to delicate jewelry and intricate mosaics.</p>
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10">In the Middle Ages, art took on a more religious role, with the creation of illuminated manuscripts and ornate cathedrals. The Renaissance saw a renewed interest in classical forms and techniques, and the Baroque and Rococo periods that followed were characterized by grandiose and ornate styles.</p>
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10">In the modern era, art has continued to evolve and change, with new styles and movements emerging all the time. In recent years, the rise of artificial intelligence has led to the development of a new form of art known as IA generated art. This type of art is created using AI algorithms and techniques, and it has the potential to push the boundaries of what we consider to be "art" even further.</p>
          <p className="text-center text-md lg:text-lg font-medium text-gray-600 dark:text-gray-400 mt-10">Overall, the history of art is a long and varied one, and it is constantly evolving as new technologies and techniques are developed. From the earliest prehistoric creations to the latest IA generated art, art has always been a reflection of the society and culture that created it, and it will continue to be so in the future.</p>

        </div>
        

      </div>

    </>

  )
}
