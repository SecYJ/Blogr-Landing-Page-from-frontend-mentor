module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-100": "hsl(356, 100%, 66%)",
                "primary-200": "hsl(355, 100%, 74%)",
                "primary-300": "hsl(208, 49%, 24%)",
                "grayish-blue-100": "hsl(240, 2%, 79%)",
                "grayish-blue-200": "hsl(207, 13%, 34%)",
                "grayish-blue-300": "hsl(240, 10%, 16%)",
            },
        },
        fontFamily: {
            overpass: ["Overpass", "sans-serif"],
            ubuntu: ["Ubuntu", "sans-serif"],
        },
    },
    plugins: [],
};
