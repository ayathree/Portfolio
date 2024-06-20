

const Skills = () => {
    return (
        <section className=" dark:bg-gray-100  dark:text-gray-800">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
            <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl mb-20">Skills</h1>
           
            <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-red-400 dark:divide-gray-300">
                <div className="flex flex-col w-full divide-y divide-red-400 dark:divide-gray-300">
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">CSS</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">HTML</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">JavaScript</a>
                </div>
                <div className="flex flex-col w-full divide-y divide-red-400 dark:divide-gray-300">
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">React.js</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">Node.js</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">Express.js</a>
                </div>
                <div className=" w-full divide-y sm:flex-col sm:flex divide-red-400 dark:divide-gray-300">
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400  p-4 sm:py-8 lg:py-12">MongoDB</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">Next.js</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">Git</a>
                </div>
                <div className=" w-full divide-y sm:flex-col sm:flex divide-red-400 dark:divide-gray-300">
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">Tailwind CSS</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">Firebase</a>
                    <a rel="noopener noreferrer" className="flex items-center justify-center hover:bg-red-400 p-4 sm:py-8 lg:py-12">Figma</a>
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default Skills;