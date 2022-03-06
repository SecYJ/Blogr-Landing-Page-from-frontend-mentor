import phone from "../assets/illustration-phones.svg";

const IntroBanner = () => {
    return (
        <>
            <div className="xl:mt-[57px] xl:w-1/2">
                <div className="relative h-[273px] xl:h-auto">
                    <img
                        src={phone}
                        alt="phone"
                        className="absolute left-1/2 top-0 z-10 h-[350px] translate-y-[30%] -translate-x-1/2 xl:h-auto xl:-translate-y-[13%]"
                    />
                </div>
                {/* xl:translate-y-[90%] */}
            </div>

            <div className="bg-gradient-secondary relative mb-[116px] rounded-bl-[100px] rounded-tr-[100px] px-6 pt-[221px] pb-[109px] xl:px-[165px] xl:py-[111px]">
                <div className="xl:flex xl:flex-col xl:items-end xl:pt-0">
                    {/* xl:ml-[98px] */}
                    <div className="text-center xl:mt-0 xl:ml-0 xl:w-1/2 xl:text-left">
                        <h2 className="mb-[10px] text-[2.5rem] font-semibold leading-[61px] tracking-[-1.2px] text-white">
                            State of the Art Infrastructure
                        </h2>
                        <p className="leading-[1.75rem] tracking-[0.5px] text-white">
                            With reliability and speed in mind, worldwide data
                            centers provide the backbone for ultra-fast
                            connectivity. This ensures your site will load
                            instantly, no matter where your readers are, keeping
                            your site competitive.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroBanner;
