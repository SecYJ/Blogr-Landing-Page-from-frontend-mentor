import { useState } from "react";
import logo from "../assets/bg-pattern-intro-desktop.svg";
import Button from "./Button";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Hero = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const toggleNav = () => setIsMobileNavOpen((prev) => !prev);

    return (
        <div className="bg-gradient-primary relative min-h-[600px] rounded-bl-[100px] px-6 pt-14 xl:px-[160px]">
            <div style={{ backgroundImage: `url(${logo})` }} className="h-full">
                <Navbar toggleMobileNav={toggleNav} isOpen={isMobileNavOpen} />
                <MobileNav isOpen={isMobileNavOpen} />
                <div>
                    <div className="mb-12 text-center text-white">
                        <h1 className="text-[2.25rem] font-semibold leading-[55px] tracking-[-1.08px]">
                            A modern publishing platform
                        </h1>
                        <p className="text-[18px] leading-[1.75rem]">
                            Grow your audience and build your online brand
                        </p>
                    </div>
                    <div className="flex justify-center gap-x-4">
                        <Button type="primary" padding="p-4">
                            Start for Free
                        </Button>
                        <Button type="outlined" padding="p-4">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
