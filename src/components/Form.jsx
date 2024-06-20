

const Form = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        formData.append("access_key", "931590cf-e308-4adc-ab72-3cf8a662f7c1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                form.reset();
                // Optionally, display a success message to the user
                alert("Your message has been sent successfully!");
            } else {
                console.log("Error", res);
                // Optionally, display an error message to the user
                alert("There was an error sending your message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting the form", error);
            // Optionally, display a network error message to the user
            alert("There was a problem submitting your message. Please check your network and try again.");
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit} noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <label className="block">
                    <span className="mb-1 text-red-400 font-bold">Email address</span>
                    <input type="email" name="email" placeholder="Your email" className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" required />
                </label>
                <label className="block">
                    <span className="mb-1 text-red-400 font-bold">Message</span>
                    <textarea rows="3" name="message" placeholder="Your message" className="block w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" required></textarea>
                </label>
                <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-red-400 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 font-bold">Submit</button>
            </form>
        </div>
    );
};

export default Form;
