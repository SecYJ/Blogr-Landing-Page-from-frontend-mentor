const nav = ({ title, links }) => {
    return (
        <div className="text-center text-[18px] xl:text-left xl:text-[15px]">
            <h5 className="mb-[21px] font-ubuntu font-medium leading-[33px] text-white">
                {title}
            </h5>
            <ul className="space-y-4 text-white">
                {links.map((link) => (
                    <li key={link}>
                        <button
                            type="button"
                            className="font-ubuntu opacity-75 hover:underline"
                        >
                            {link}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default nav;
