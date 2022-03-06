import logo from "../assets/logo.svg";
import { navigation } from "../data/data.js";
import FooterNav from "./FooterNav";

const Footer = () => {
    return (
        <footer className="rounded-tr-[100px] bg-grayish-blue-300 py-[70px] px-[165px] xl:py-[75px]">
            <div className="grid justify-items-center gap-10 lg:grid-cols-4 xl:justify-items-start xl:gap-8">
                <button type="button" className="mb-[4.5rem] xl:mb-0">
                    <img src={logo} alt="logo" />
                </button>
                {navigation.map((nav) => (
                    <FooterNav {...nav} key={nav.id} />
                ))}
            </div>
        </footer>
    );
};

export default Footer;
