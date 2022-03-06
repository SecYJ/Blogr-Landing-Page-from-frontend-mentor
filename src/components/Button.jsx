const baseStyles =
    "leading-[18px] rounded-[1.75rem] text-[1rem] font-ubuntu font-bold";

const Button = ({ type, children, padding }) => {
    if (type === "primary") {
        return (
            <button
                type="button"
                className={`
                    ${padding ? padding : "px-10 py-4"} ${baseStyles}
                    bg-white text-primary-100 hover:bg-primary-200 hover:text-white
                `}
            >
                {children}
            </button>
        );
    }

    if (type === "outlined") {
        return (
            <button
                type="button"
                className={`${baseStyles} ${padding ? padding : "px-10 py-4"} 
                border border-white text-white hover:bg-white hover:text-primary-200`}
            >
                {children}
            </button>
        );
    }

    if (type === "gradient") {
        return (
            <button
                type="button"
                className={`${baseStyles} ${padding ? padding : "px-10 py-4"}
                    bg-gradient-primary border border-white text-white
                `}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            type="button"
            className={`${baseStyles} ${padding ? padding : "px-10 py-4"} `}
        >
            {children}
        </button>
    );
};

export default Button;
