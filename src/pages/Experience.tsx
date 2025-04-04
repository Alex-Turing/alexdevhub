import { motion } from "framer-motion";
import { useState } from "react";

const experienceData = [
    {
        year: "2024",
        company: "Lincoln Electric",
        role: "Software Developer Intern",
        description: "Full Stack .NET Developer",
        logo: '/alexdevhub/img/le_logo.png',
        details: [
            "Developed a REST API using ASP.NET and Entity Framework Core, significantly improving troubleshooting efficiency. Created unit tests and documentation to ensure reliable, repeatable functionality.",
            "Built a WinForms tool to read, classify, and filter VersaFAB logs, dramatically enhancing the engineering team’s ability to diagnose and debug plasma cutting robot issues swiftly.",
            "Employed Agile (SCRUM) methodologies to ensure efficient project delivery and adaptability, promoting continuous improvement throughout development cycles.",
            "Wrote scalable, maintainable code adhering to SOLID principles and clean architecture, reducing technical debt and enabling long-term success.",
            "Collaborated closely with teammates, utilizing Azure DevOps for seamless version control, project management, and code integration.",
            "Developed comprehensive unit tests for C# projects in the VersaFAB PythonX software, ensuring reliability and catching issues early, which significantly improved software quality and stability.",
        ],
    },
    {
        year: "2019 - 2023",
        company: "Aerospace and Defense / Test & Measurement Account Engineer",
        role: "RF Engineer",
        description: "RF Engineer",
        logo: '/alexdevhub/img/rs_logo.png',
        details: [
            "Partnered with application engineers to gather user requirements and deliver Latin America’s first 5G FR1 and FR2 device test lab for Claro Colombia, setting a new benchmark in the region.",
            "Led the design and deployment of Colombia’s first spectrum-monitoring drone for the National Spectrum Agency, advancing national capabilities in spectrum management.",
            "Directed the design and early implementation of an Electromagnetic Compatibility test lab for CubeSats, ensuring compliance with MIL-STD 461 standards for the Colombian Air Force. This project sharpened my time management and collaboration skills, driving our team to achieve precision and success.",
        ],
    },
];

const Experience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="relative border-l-2 border-gray-700 pl-6 mt-20">
            {experienceData.map((exp, index) => (
                <motion.div
                    key={index}
                    className="relative mb-10 p-6 rounded-xl shadow-lg w-1/2 max-w-[50%] mx-auto bg-[#4B6387] bg-opacity-80 backdrop-blur-lg border border-gray-400 border-opacity-30"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-400 rounded-l-xl"></div>
                    <div className="absolute top-2 left-70 w-60 h-auto">
                        <img
                            src={exp.logo}
                            alt={`${exp.company} Logo`}
                            className="w-60 h-15 object-contain"
                        />
                    </div>
                    <p className="text-white text-sm">{exp.year}</p>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-gray-200">{exp.company}</p>
                    <p className="text-gray-300 text-sm mt-2">{exp.description}</p>

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden text-gray-300 text-sm mt-2"
                    >
                        <ul className="list-none space-y-2 pl-5">
                            {exp.details.map((detail) => (
                                <li
                                    key={detail}
                                    className="relative before:content-['•'] before:text-blue-400 before:absolute before:-left-4 before:top-1 transition-all hover:text-white"
                                >
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <button
                        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] bg-[#0c121d] hover:bg-blue-600 hover:text-[#0c121d] text-white px-4 py-1 rounded-full text-sm transition-all duration-300"
                        onClick={() => toggleExpand(index)}
                    >
                        {expandedIndex === index ? "Show Less" : "See More"}
                    </button>
                </motion.div>
            ))}
        </div>
    );
};

export default Experience;
