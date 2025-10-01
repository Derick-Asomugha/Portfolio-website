"use client"
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#e3e3e7] dark:bg-[#121213] text-black dark:text-white py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">Derick</h2>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            Building digital experiences with code and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <button
            onClick={() => handleScroll("about")}
            className="text-left hover:text-purple-500 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="text-left hover:text-purple-500 transition"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("skills")}
            className="text-left hover:text-purple-500 transition"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="text-left hover:text-purple-500 transition"
          >
            Contact
          </button>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/Derick-Asomugha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/Asomugha-Derick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/NnamdiDerek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-500 hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Derick. All rights reserved.
      </div>
    </footer>
  );
}
