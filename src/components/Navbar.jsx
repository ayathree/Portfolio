import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="navbar ">
  <div className="flex-1">
    <a className=" text-lg lg:text-xl font-bold ">Nobanita Ayathree</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="">
        <div className="indicator flex flex-row gap-4">
        <a href="https://github.com/ayathree"><FaGithub className="text-2xl" /></a>
        <a href="https://www.linkedin.com/in/nobanitaayathree"><FaLinkedin className="text-2xl" />
        </a>
         
        </div>
      </div>
      
    </div>
    
  </div>
</div>
    );
};

export default Navbar;