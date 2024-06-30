import { FaDownload } from 'react-icons/fa';
import image from '../assets/portfolio2.jpg';
import pdf from '../assets/resume.pdf';

const Hero = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-56 ">
          <div>
          <img src={image} className="lg:max-w-sm border-2 border-red-400 rounded-lg shadow-2xl" />
          </div>
          <div>
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
           
            <a href={pdf} download>
            <button className='btn btn-outline bg-red-400' >Download Resume<FaDownload /> </button>
            </a>
           
           
          </div>
        </div>
      </div>
    );
};

export default Hero;