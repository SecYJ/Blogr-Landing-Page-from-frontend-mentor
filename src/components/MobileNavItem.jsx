import arrowDark from "../assets/icon-arrow-dark.svg";

const MobileNavItem = ({ title, links, id, toggleNav, isOpen }) => {
    return (
        <li>
            <button
                type="button"
                className={`${
                    isOpen && "mb-6"
                } mx-auto flex items-center gap-2 text-[18px] font-semibold leading-[1.75rem] text-primary-300 duration-300`}
                onClick={() => toggleNav(id)}
            >
                {title}
                <img
                    src={arrowDark}
                    alt="arrowDark"
                    className={`${isOpen ? "-rotate-180" : ""} duration-300`}
                />
            </button>
            <div
                className={`${
                    isOpen ? "max-h-[300px]" : "max-h-0"
                } relative origin-top overflow-hidden bg-[#efeff1] duration-300`}
            >
                <div className="grid grid-flow-row justify-items-center gap-y-3 p-[25px] text-center">
                    {links.map((link) => (
                        <button
                            type="button"
                            className="text-primary-300"
                            key={link}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            </div>
        </li>
    );
};
export default MobileNavItem;
