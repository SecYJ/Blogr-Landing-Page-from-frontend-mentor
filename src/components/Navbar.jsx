import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import Button from "./Button";
import { navigation } from "../data/data";

const Navbar = ({ toggleMobileNav, isOpen }) => {
    return (
        <nav
            className={`relative mb-[108px] flex origin-top items-center justify-between xl:mb-[123px]`}
        >
            <div className="xl:flex xl:items-center xl:gap-x-16">
                <button type="button">
                    <img src={logo} alt="Blogr Logo" />
                </button>
                <ul className="hidden font-ubuntu font-bold xl:flex xl:gap-x-8">
                    {navigation.map((nav) => (
                        <li className="group relative text-white" key={nav.id}>
                            <button
                                type="button"
                                className="border-b-[2px] border-transparent group-hover:border-white"
                            >
                                {nav.title}
                            </button>
                            <ul className="box-shadow left-[-25px]min-w-[168px] invisible absolute top-[calc(100%+25px)] rounded-[.25rem] bg-white p-6 opacity-0 duration-200 group-hover:visible group-hover:opacity-100">
                                {nav.links.map((item) => (
                                    <li key={item}>
                                        <button
                                            type="button"
                                            className="font-ubuntu text-[15px] leading-[2rem] text-grayish-blue-200 hover:text-grayish-blue-300"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button
                    type="button"
                    className="xl:hidden"
                    onClick={toggleMobileNav}
                >
                    <img src={isOpen ? close : hamburger} alt="nav menu" />
                </button>
                <div className="hidden xl:flex xl:gap-x-8">
                    <Button type="outlined">Login</Button>
                    <Button type="primary">Sign Up</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
