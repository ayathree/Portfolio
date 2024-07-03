import { Link as ScrollLink } from "react-scroll";


const Footer = () => {
    return (
        <div className="p-10 text-center z-10 bg-opacity-10 bg-red-500 ">

     <p className=" text-lg lg:text-xl   font-bold ">Nobanita Ayathree</p>
     <div className="m-5">
     <div className=" flex lg:flex-row flex-col justify-center items-center gap-4 cursor-pointer">
        <ScrollLink to="home" smooth={true} duration={500}><a className="text-white lg:font-bold">Myself</a></ScrollLink>
        <ScrollLink to="skill" smooth={true} duration={500}><a className="text-white lg:font-bold">Skills</a></ScrollLink>
        <ScrollLink to="project" smooth={true} duration={500}><a className="text-white lg:font-bold">Projects</a></ScrollLink>
          
         <ScrollLink to="resume" smooth={true} duration={500}> <a className="text-white lg:font-bold">Resume</a></ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}><a className="text-white lg:font-bold">Contact</a></ScrollLink>
          

        </div>
     </div>
<p>©All Rights Reserved by Nobanita Ayathree</p>
        </div>
    );
};

export default Footer;