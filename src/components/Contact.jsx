import { FaGithub, FaLinkedin } from "react-icons/fa";
import Form from "./Form";


const Contact = () => {
    return (
        <div id="contact">
            <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl mt-20 ">Contact</h1>
            <section  className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div data-aos="fade-up" data-aos-duration="1000" className="grid hover:bg-[#fbd786] max-w-6xl grid-cols-1 px-6 p-20 mx-auto lg:px-8 md:grid-cols-2 md:divide-x border-2 border-red-400 rounded-xl">
		<div className="py-6 md:py-0 md:px-6 ">
			<h1 className="text-4xl font-bold text-red-400">Get in touch</h1>
			<p className="pt-2 pb-4 font-bold "> <span className="bg-red-400 p-1">Fill in the form to start a conversation</span></p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Jamal Khan, Kotowali, Chattogram City, Bangladesh</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>880-1862986204</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>nobanitaayathree333@gmail.com</span>
				</p>
				<p className="flex gap-7 items-center">
				<FaLinkedin />
					<a href="https://www.linkedin.com/in/nobanitaayathree/" className="underline">in/nobanitaayathree</a>
				</p>
				<p className="flex gap-7 items-center">
				<FaGithub />
					<a href="https://github.com/ayathree" className="underline">github.com/ayathree</a>
				</p>
			</div>
		</div>
		<Form></Form>
	</div>
</section>
            
        </div>
    );
};

export default Contact;