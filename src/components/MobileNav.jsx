import Button from "./Button";
import { navigation } from "../data/data";
import MobileNavItem from "./MobileNavItem";
import { useState } from "react";

const MobileNav = ({ isOpen }) => {
    const [nav, setNav] = useState(navigation);

    const toggleNav = (id) => {
        setNav((prevNav) => {
            return prevNav.map((nav) => {
                if (nav.id !== id) return nav;
                return { ...nav, isOpen: !nav.isOpen };
            });
        });
    };

    return (
        <div
            className={`absolute left-0 px-6 xl:hidden ${
                isOpen
                    ? "pointer-events-auto top-[7rem] z-50 opacity-100"
                    : "pointer-events-none top-[-100%] opacity-0"
            }  w-full duration-500`}
        >
            <div className={`box-shadow rounded-[5px] bg-white px-6 pt-6 pb-8`}>
                <ul className="space-y-6">
                    {nav.map((nav) => (
                        <MobileNavItem
                            {...nav}
                            toggleNav={toggleNav}
                            key={nav.id}
                        />
                    ))}
                </ul>

                <div className="mt-6 border-t border-solid border-t-[#e8e4e4] pt-6">
                    <div className="flex flex-col items-center">
                        <Button>Login</Button>
                        <Button type="gradient">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
