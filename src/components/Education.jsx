import { FaGraduationCap } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import premier from '../assets/Logo_of_Premier_University_(PU).png';
import hero from '../assets/programming hero.jpeg'


const Education = () => {
    return (
        <div id="resume">
             <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl m-10">Resume</h1>  
           <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
            {/* 1 */}
           <div data-aos="fade-up" data-aos-duration="1000" >
          <div className="flex flex-row justify-center items-center ">
          <FaGraduationCap className="text-4xl" />
           <h1 className="text-xl font-bold leading-none text-center sm:text-2xl m-10">
            Education</h1> 
          </div>
           <div className="  px-8 py-4 mt-5 border-2 border-red-400 hover:bg-red-200  rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover bg-white w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={premier}/>
    </div>
<p className="font-bold">2019-current</p>
    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Premier University, Chittagong</h2>

    <p className="mt-2 font-bold text-sm text-gray-600 dark:text-gray-200">Computer Science & Engineering</p>

   
</div>
           </div>
{/* 2 */}
<div data-aos="fade-up" data-aos-duration="1000" >
<div className="flex flex-row justify-center items-center">
<PiCertificateFill className="text-4xl"/>
<h1 className="text-xl font-bold leading-none text-center sm:text-2xl m-10">Course</h1> 
</div>

<div className=" px-8 py-4 mt-5 border-2 border-red-400 hover:bg-red-200 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={hero}/>
    </div>
<p className="font-bold">2024</p>
    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Programming Hero</h2>

    <p className="mt-2 font-bold text-sm text-gray-600 dark:text-gray-200">MERN Stack Web Development</p>

    
</div>
</div>
           </div>
            
        </div>
    );
};

export default Education;