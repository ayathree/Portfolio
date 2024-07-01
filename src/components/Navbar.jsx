// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";




const Navbar = () => {
    return (
        <div className="navbar lg:px-10 fixed z-10 bg-opacity-10 bg-red-500 ">
  <div className="navbar-start">
    <a className="hidden lg:block text-lg lg:text-xl font-bold ">Nobanita Ayathree</a>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="">
        <div className="indicator flex flex-row gap-4">
        <ScrollLink to="home" smooth={true} duration={500}><a className="text-white lg:font-bold">Myself</a></ScrollLink>
        <ScrollLink to="skill" smooth={true} duration={500}><a className="text-white lg:font-bold">skills</a></ScrollLink>
        <ScrollLink to="project" smooth={true} duration={500}><a className="text-white lg:font-bold">projects</a></ScrollLink>
          
         <ScrollLink to="resume" smooth={true} duration={500}> <a className="text-white lg:font-bold">Resume</a></ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}><a className="text-white lg:font-bold">contact</a></ScrollLink>
          

        </div>
        
      </div>
      
    </div>
    
  </div>
</div>
    );
};

export default Navbar;