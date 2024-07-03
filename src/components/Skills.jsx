import { FaCss3Alt, FaFigma, FaGit, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import '../index.css'
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiVercel } from "react-icons/si";
import { RiFirebaseFill, RiTailwindCssLine } from "react-icons/ri";


const Skills = () => {
    return (
        <section id="skill" className=" dark:bg-gray-100  dark:text-gray-800">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
            <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl mb-10">Skills</h1>   
        </div>
        

<div className="grid lg:grid-cols-3 grid-cols-1 gap-5 items-center">
    {/* skills div one */}
<div data-aos="fade-up" data-aos-duration="1000"  className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <FaCss3Alt className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">CSS</h5>
      
  

      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <FaHtml5 className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">HTML</h5>
      
  

      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <IoLogoJavascript className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">JavaScript</h5>
      
  

      
   </div>
</div>
{/* 2 */}
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <FaReact className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">ReactJS</h5>
      
  
      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <SiMongodb className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">MongoDB</h5>
      
  

      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <FaNodeJs className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">NodeJS</h5>
      
  
      
   </div>
</div>
{/* 3 */}
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <SiExpress className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">ExpressJS</h5>
      
 

      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <RiFirebaseFill className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">Firebase</h5>
      
  

      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <FaFigma className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">Figma</h5>
      
 

      
   </div>
</div>
{/* 4 */}
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <FaGit className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">Git</h5>
      
  

      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <SiVercel className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">Vercel</h5>
      
  

      
   </div>
</div>
<div data-aos="fade-up" data-aos-duration="1000" className="card w-full max-w-sm bg-[#fbd786] hover:bg-[#f7797d] hover:text-[#fbd786] hover:progress-[#fbd786] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
   <div className="flex flex-col items-center p-10">
   <RiTailwindCssLine className="text-6xl " />
       <h5 className="mb-1 text-xl font-medium ">Tailwind CSS</h5>
      
 

      
   </div>
</div>



</div>

    </section>
    );
};

export default Skills;