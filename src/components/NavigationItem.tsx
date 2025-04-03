import { NavigationMenuItem } from "@/components/ui/navigation-menu"
import { MenuLinks } from "./NavigationBar";
import { NavLink } from 'react-router-dom';
import { navMenuItems } from "@/utils/navMenuItems";
import styled from 'styled-components';

interface NavigationItemProps {
    links: MenuLinks[];
}

const Tooltip = styled.span`
    visibility: hidden;
    background-color: black;
    color: white;
    text-align: center;
    padding: 0;
    border-radius: 4px;
    position: absolute;
    bottom: -8px;
    left: 28%;
    transform: translateX(-50%);
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
`;

const NavItemWrapper = styled.div`
    position: relative;
    display: inline-block;

    &:hover ${Tooltip} {
        visibility: visible;
        opacity: 1;
    }
`;

const NavigationItem = ({ links }: NavigationItemProps) => {
    return (
        <>
            {links &&
                links.map(link => (
                    <NavigationMenuItem key={link.href}>
                        <NavItemWrapper>
                            <NavLink
                                to={link.href}
                                style={({ isActive }) => ({
                                    backgroundColor: isActive ? '#4B6387' : 'transparent',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '5px',
                                    color: isActive ? 'white' : 'gray',
                                    transition: 'background-color 0.2s ease-in-out',
                                })}
                                onMouseEnter={(e) => {
                                    if (!e.currentTarget.classList.contains('active')) {
                                        e.currentTarget.style.backgroundColor = '#4B6387';
                                        e.currentTarget.style.color = 'white';
                                    }                                    
                                }}
                                onMouseLeave={(e) => {
                                    if (!e.currentTarget.classList.contains('active')) {
                                       e.currentTarget.style.backgroundColor = '';
                                        e.currentTarget.style.color = 'gray'; 
                                    }    
                                }}
                            >
                                {navMenuItems[link.name]}
                            </NavLink>
                            <Tooltip>
                                {link.name}
                            </Tooltip>
                        </NavItemWrapper>
                    </NavigationMenuItem>
                ))}
        </>
    )
};

export default NavigationItem;