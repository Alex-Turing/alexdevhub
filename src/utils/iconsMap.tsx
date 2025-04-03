import { SiTypescript, SiReact, SiHtml5, SiCss3, SiPython, SiDotnet, SiAngular, SiNodedotjs, SiMongodb, SiJavascript } from 'react-icons/si';
import { FaJava, FaUnity } from "react-icons/fa";
import { TbSql, TbBrandCSharp } from "react-icons/tb";
import { JSX } from 'react';

export const iconsMap: Record<string, JSX.Element> = {
    javascript: <SiJavascript size="1.5rem" />,
    csharp: <TbBrandCSharp size="1.5rem" />,
    aspnet: <SiDotnet size="1.5rem" />,
    typescript: <SiTypescript size="1.5rem" />,
    html: <SiHtml5 size="1.5rem" />,
    css: <SiCss3 size="1.5rem" />,
    python: <SiPython size="1.5rem" />,
    apsnet: <SiDotnet size="1.5rem" />,
    angular: <SiAngular size="1.5rem" />,
    nodedotjs: <SiNodedotjs size="1.5rem" />,
    mongodb: <SiMongodb size="1.5rem" />,
    java: <FaJava size="1.5rem" />,
    hlsl: <FaUnity size="1.5rem" />,
    sql: <TbSql size="1.5rem" />,
    react: <SiReact size="1.5rem" />
}