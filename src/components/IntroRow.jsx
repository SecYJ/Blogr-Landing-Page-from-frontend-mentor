import editorSm from "../assets/illustration-editor-mobile.svg";
import editorLg from "../assets/illustration-editor-desktop.svg";
import laptopLg from "../assets/illustration-laptop-desktop.svg";
import laptopSm from "../assets/illustration-laptop-mobile.svg";

const IntroRow = (props) => {
    const {
        firstTitle,
        firstParagraph,
        secondTitle,
        secondParagraph,
        heading,
        imgPosition,
    } = props;
    return (
        <>
            {heading && (
                <h2 className="mb-[38px] text-center text-[1.75rem] font-semibold leading-[43px] tracking-[-0.84px] text-primary-300">
                    {heading}
                </h2>
            )}

            <div
                className={`relative flex flex-col items-center gap-[46px] xl:min-h-[882px] xl:flex-row ${
                    imgPosition === "left" && "xl:justify-end"
                }`}
            >
                <img src={editorSm} alt="logo" className={`xl:hidden`} />
                <img
                    src={imgPosition === "left" ? laptopLg : editorLg}
                    alt="logo"
                    className={`absolute top-0 hidden xl:block ${
                        imgPosition === "left"
                            ? "lg:-left-1/2 2xl:-left-0"
                            : "left-[55%]"
                    }`}
                />

                <div className={`space-y-10 xl:w-2/5 xl:space-y-16`}>
                    <div>
                        <h3 className="mb-4 text-center text-[1.75rem] font-semibold leading-[2rem] text-primary-300 xl:text-left">
                            {firstTitle}
                        </h3>
                        <p className="text-center leading-[1.75rem] tracking-[0.5px] text-grayish-blue-200 xl:text-left">
                            {firstParagraph}
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-center text-[1.75rem] font-semibold leading-[2rem] text-primary-300 xl:text-left">
                            {secondTitle}
                        </h3>
                        <p className="text-center leading-[1.75rem] tracking-[0.5px] text-grayish-blue-200 xl:text-left">
                            {secondParagraph}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroRow;
