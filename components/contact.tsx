// import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";


// export default function Contact() {
//   return (
//     <section id="contact" className="text-black dark:text-white py-28 px-6 md:px-5 bg-white dark:bg-black">
//       <h2 className="font-bold text-2xl md:text-4xl mb-5 text-center">
//         Let&apos;s Build Something Together
//       </h2>
//       <p className="font-light text-sm md:text-lg mb-12 text-center max-w-2xl mx-auto">
//         I&apos;m always interested in new opportunities and exciting projects.
//         Let&apos;s discuss how we can work together.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
//         {/* Left: Form */}
//         <form
//   action="https://formspree.io/f/xeorgwgd"
//   method="POST"
//   className="bg-[#f6f6f8] dark:bg-[#121213] shadow-lg rounded-xl p-8 space-y-6"
// >
//   <h3 className="text-xl font-semibold mb-4">Send me a message</h3>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <div className="flex flex-col">
//       <label htmlFor="name" className="text-sm font-medium mb-1">
//         Name
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         placeholder="Your Name"
//         required
//         className="px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
//       />
//     </div>

//     <div className="flex flex-col">
//       <label htmlFor="email" className="text-sm font-medium mb-1">
//         Email
//       </label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         placeholder="your@example.com"
//         required
//         className="px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
//       />
//     </div>
//   </div>

//   <div className="flex flex-col">
//     <label htmlFor="message" className="text-sm font-medium mb-1">
//       Message
//     </label>
//     <textarea
//       id="message"
//       name="message"
//       placeholder="Tell me about your project..."
//       rows={5}
//       required
//       className="px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
//     />
//   </div>

//   <button
//     type="submit"
//     className="w-full md:w-full px-6 py-3 rounded-lg gradient-button text-white font-semibold shadow-lg hover:opacity-90 transition"
//   >
//     Send Message
//   </button>
// </form>


//         {/* Right: Contact Info */}
//         <div className="space-y-6 ">
//           <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

//           <div className="flex items-center gap-3">
//             <Mail className="w-5 h-5 text-purple-500" />
//             <a href="mailto:your@email.com" className="hover:underline">
//               Asomughaderick16@gmail.com
//             </a>
//           </div>

//           <div className="flex items-center gap-3">
//             <Phone className="w-5 h-5 text-purple-500" />
//             <a href="tel:+234 708 714 1013" className="hover:underline">
//               +234 708 714 1013
//             </a>
//           </div>
//               <div className="flex items-center gap-3">
//             <Phone className="w-5 h-5 text-purple-500" />
//             <a href="tel:+234 810 185 8265" className="hover:underline">
//               +234 810 185 8265
//             </a>
//           </div>


//           <h4 className="font-medium mt-8">Follow Me</h4>
//           <div className="flex gap-5 mt-3">
//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="https://twitter.com/yourusername"
//               target="_blank"
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
//             >
//               <Twitter className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // <-- clears the form
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="text-black dark:text-white py-28 px-6 md:px-5 bg-white dark:bg-black"
    >
      <h2 className="font-bold text-2xl md:text-4xl mb-5 text-center">
        Let&#39;s Build Something Together
      </h2>
      <p className="font-light text-sm md:text-lg mb-12 text-center max-w-2xl mx-auto">
        I&#39;m always interested in new opportunities and exciting projects.
        Let&#39;s discuss how we can work together.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left: Form */}
        <form
          ref={formRef}
          action="https://formspree.io/f/xeorgwgd"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-[#f6f6f8] dark:bg-[#121213] shadow-lg rounded-xl p-8 space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">Send me a message</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@example.com"
                required
                className="px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="px-4 py-2 rounded-lg border border-gray-600 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-full px-6 py-3 rounded-lg gradient-button text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-red-700" />
            <a href="mailto:Asomughaderick16@gmail.com" className="hover:underline">
              Asomughaderick16@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaWhatsapp className="w-5 h-5 text-green-600" />
            <a href="https://wa.me/2347087141013" target="_blank" className="hover:underline">
              +234 708 714 1013
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-700" />
            <a href="tel:+2348101858265" className="hover:underline">
              +234 810 185 8265
            </a>
          </div>

          <h4 className="font-medium mt-8">Follow Me</h4>
          <div className="flex gap-5 mt-3">
            <a
              href="https://github.com/Derick-Asomugha"
              target="_blank"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/Asomugha-Derick"
              target="_blank"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/NnamdiDerek"
              target="_blank"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
