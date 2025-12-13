import { useState, forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e508cc8c-4f45-45aa-b2c1-7b6cc5c1ba32");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    
    };

    return (
    <section ref={ref} className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Contact Me
      </h2>

      <form className="space-y-6 px-20 sm:px-40" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Your name"/>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300" placeholder="E-mail"/>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" required rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Your message"></textarea>
        </div>

        <button type="submit" className="w-full bg-[#B7AABF] text-white font-semibold py-3 rounded-lg hover:bg-[#9884A3] hover:cursor-pointer transition">Send Message</button>
      </form>
    </section>
    );
});

export default Contact;
