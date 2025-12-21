import { useState, forwardRef } from 'react';

const Contact = forwardRef(({cuteMode}, ref) => {
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
      <h2 className="text-3xl font-semibold text-center mb-8"> {cuteMode ? "contact me" : "Contact Me"}</h2>

      <form className="space-y-6 px-20 sm:px-40" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1"> {cuteMode ? "name" : "Name"}</label>
          <input type="text" name="name" placeholder="Your name" required className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring "
            ${cuteMode ? "border-gray-700 focus:ring-[#9C7777]" : "border-gray-300 focus:ring-[#B7AABF]"}`}/>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{cuteMode ? "email" : "Email"}</label>
          <input type="email" name="email" placeholder="Email" required className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring "
            ${cuteMode ? "border-gray-700 focus:ring-[#9C7777]" : "border-gray-300 focus:ring-[#B7AABF]"}`}/>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{cuteMode ? "message" : "Message"}</label>
          <textarea name="message" required rows="5" placeholder="Your message" className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring "
            ${cuteMode ? "border-gray-700 focus:ring-[#9C7777]" : "border-gray-300 focus:ring-[#B7AABF]"}`}></textarea>
        </div>

        <button type="submit" className={`w-full text-white font-semibold py-3 rounded-lg hover:cursor-pointer transition
            ${cuteMode ? "bg-[#9C7777] hover:bg-[#bf9393]" : "bg-[#B7AABF] hover:bg-[#9884A3]" }
        `}> {cuteMode ? "send message" : "Send Message"}</button>
      </form>
    </section>
    );
});

export default Contact;
