"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (resumeRef.current) {
      const canvas = await html2canvas(resumeRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "resume.jpg";
      link.click();
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-black dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>

      {/* Resume Image */}
      <div ref={resumeRef} className="border rounded-lg shadow-lg p-2 bg-white">
        <Image
          src="/Images/resume.jpg"
          alt="Resume"
          width={800}
          height={1000}
          className="rounded-lg w-[500px] h-[650px]"
          unoptimized
        />
      </div>

      <div className="mt-6 flex gap-4">
        {/* Download Resume as Image */}
        <button
          onClick={handleDownload}
          className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
        >
          Download Resume
        </button>

        {/* Go to About Page */}
        <Link
          href="/"
          className="px-6 py-2 gradient-button"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
