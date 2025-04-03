import { GoHome } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FiBriefcase } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { JSX } from "react";

export const navMenuItems : Record<string, JSX.Element> ={
    About: <GoHome size="1.5rem" />,
    Projects: <CiFolderOn size="1.5rem" />,
    Education: <HiOutlineAcademicCap size="1.5rem" />,
    Experience: <FiBriefcase size="1.5rem" />,
    Contact: <CiMail size="1.5rem" />,
}



