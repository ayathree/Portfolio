

const Projects = () => {
    return (
        <div>
             <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl mt-20">Projects</h1>
             <section className=" dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-red-400 dark:border-blue-300 rounded-xl">
                

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">ARTISTRY</h1>
                 <p>art gallery website</p>
                
                <h1 className="text-lg text-red-400 font-semibold  capitalize dark:text-white">Technologies</h1>
                 <p className="text-gray-500">HTML | CSS | JavaScript | React.js | Node.js | Express.js | MongoDB |Firebase | Tailwind CSS | DaisyUI | React Awesome Components</p>
                <a href="https://assignment-10-ceab3.web.app" className="inline-flex p-2 text-red-500 capitalize transition-colors duration-300 transform bg-red-200 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-red-400 dark:border-blue-300 rounded-xl">
                
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Best For You </h1>
<p>alternative information website</p>
               
                <h1 className="text-lg text-red-400 font-semibold  capitalize dark:text-white">Technologies</h1>
                 <p className="text-gray-500">Axios | JWT | HTML | CSS | JavaScript | React.js | Node.js | Express.js | MongoDB |Firebase | Tailwind CSS | DaisyUI | Meraki UI | React Awesome Components</p>

                <a href="https://best-for-you-2df59.web.app" className="inline-flex p-2 text-red-500 capitalize transition-colors duration-300 transform bg-red-200 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-red-400 dark:border-blue-300 rounded-xl">
                

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">GYMNECIA</h1>
                <p>fitness gym website</p>

                
                <h1 className="text-lg text-red-400 font-semibold  capitalize dark:text-white">Technologies</h1>
                 <p className="text-gray-500">Axios | JWT | Stripe.js react | HTML | CSS | JavaScript | React.js | Node.js | Express.js | MongoDB | Firebase | Tailwind CSS  | React Flowbite | Mamba UI | Meraki UI | React Awesome Components</p>

                <a href="https://fitness-tracker-e7f1d.web.app" className="inline-flex p-2 text-red-500 capitalize transition-colors duration-300 transform bg-red-200 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-red-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
            
        </div>
    );
};

export default Projects;