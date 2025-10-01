// components/Experience.tsx
"use client";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Backend (Node.js) Intern",
    company: "Tech Solutions Ltd",
    duration: "Jun 2024 – Sep 2024",
    description:
      "Developed REST APIs, integrated third-party services (Mailchimp, GetResponse), and improved database schema design.",
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Self-Employed",
    duration: "Jan 2022 – Present",
    description:
      "Delivered 20+ projects for clients, including e-commerce platforms, blogs, and SaaS dashboards using React, Next.js, and Node.js.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Web Studio",
    duration: "Mar 2021 – Dec 2021",
    description:
      "Built responsive UIs with React, Tailwind, and optimized performance for client websites.",
  },
];

export default function Experience() {
  return (
    <section className=" w-full py-20 bg-[#e3e3e7] dark:bg-[#121213] text-black dark:text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center pb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          Experience
        </h2>
        <p className="font-light text-xs md:text-2xl ">My professional journey in software development</p>
       </div>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-white dark:bg-[#1f1f21] border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0 p-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
                <Briefcase className="text-white w-6 h-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold">
                  {exp.role} <span className="text-purple-500">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {exp.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
