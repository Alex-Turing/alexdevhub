import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import NavigationItem from "./NavigationItem";
import { useEffect } from "react";

export interface MenuLinks {
    name: string;
    href: string;
}
const linksInNavMenu: MenuLinks[] = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" }     
];

const NavigationBar = () => {
    useEffect(() => {
        setTimeout(() => {
          document.querySelector("nav")?.classList.add("loaded");
        }, 50);
      }, []);

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList style={{gap: '3rem'}}>
                    <NavigationItem links={linksInNavMenu} />
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
};

export default NavigationBar;