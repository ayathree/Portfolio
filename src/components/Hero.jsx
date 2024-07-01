import { FaDownload } from 'react-icons/fa';
import image from '../assets/portfolio2.jpg';
import pdf from '../assets/Nobanita Ayathree Resume .pdf';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import 'aos/dist/aos.css';
import Aos from 'aos';
Aos.init();

const Hero = () => {
    return (
        <div id='home' className="hero min-h-screen mt-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-56 ">
          <div data-aos="fade-up" data-aos-duration="1000" >
          <img src={image} className="lg:max-w-sm border-2 border-red-400 rounded-lg shadow-2xl" />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" >
            <h1 className="text-5xl font-bold">Nice to meet you!
                <br />
                I am <span className='text-red-400'>Nobanita Ayathree</span>
            </h1>
            <p className="py-6">I am a junior <span className='text-red-400 font-semibold text-xl'>front end developer </span>
                <br />
                passionate about building accessible  
                <br />
                websites that users love
            </p>
           
           <div className='flex flex-row items-center gap-5'>
           <a href={pdf} download>
            <button className='btn btn-outline bg-red-400' >Download Resume<FaDownload /> </button>
            </a>
            <div className="indicator flex flex-row gap-4">
        <a href="https://github.com/ayathree"><FaGithub className="text-2xl text-red-400 hover:text-gray-900" /></a>
        <a href="https://www.linkedin.com/in/nobanitaayathree"><FaLinkedin className="text-2xl text-red-400 hover:text-gray-900" />
        </a>
         
        </div>
           </div>
           
           
          </div>
        </div>
      </div>
    );
};

export default Hero;