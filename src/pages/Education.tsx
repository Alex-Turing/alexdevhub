import { motion } from "framer-motion";

const educationData = [
    { year: "2025", school: "Alura Latam", degree: "React, Front End" },
    { year: "2024", school: "Mohawk College", degree: "Software Developer" },
    { year: "2014", school: "Universidad Distrital Francisco Jose de Caldas", degree: "B.Eng. Telecommunications Engineering" },
];

const Education = () => {
    return (
        <div className="relative border-l-2 border-gray-700 pl-6 mt-20">
            {educationData.map((edu, index) => (
                <motion.div 
                    key={index} 
                    className="mb-10 bg-[#4B6387] p-4 rounded-lg shadow-lg w-1/3"
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <p className="text-white text-sm">{edu.year}</p>
                    <h3 className="text-#0c121d text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.school}</p>
                </motion.div>
            ))}
        </div>
    )
};

export default Education;