/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                White: "#fff",
                Black: "#111110",
                Dark: "#2f2f2e",
                Dark_gradient_from: "#302f32",
                Dark_gradient_to: "#242424",
                Grey: "#939393",
                Grey_light: "#f2f2f4",
                Blue: "#158fff",
                Blue_light: "#d4dfff",
                Yellow: "#e3ad09",
                Yellow_light: "#f2c94c",
                Green: "#3db613",
            },
            backgroundImage: (theme) => ({
                Dark_gradient: `linear-gradient(143deg, ${theme(
                    "colors.Dark_gradient_from"
                )}, ${theme("colors.Dark_gradient_to")})`,
                Tape_gradient_right: `linear-gradient(270deg, rgba(39,39,40,1) 65%, rgba(39,39,40,0) 100%)`,
                Tape_gradient_left: `linear-gradient(90deg, rgba(45,44,48,1) 65%, rgba(45,44,48,0) 100%)`,
            }),
            fontFamily: {
                regular: ["Lato Regular", "sans-serif"],
                medium: ["Lato Medium", "sans-serif"],
                semi: ["Lato SemiBold", "sans-serif"],
                bold: ["Lato Bold", "sans-serif"],
                extra: ["Lato ExtraBold", "sans-serif"],
            },
            fontSize: {
                heading_1: ["4.8rem", "1.2"],
                heading_2: ["4rem", "1.35"],
                heading_3: ["3.2rem", "1.25"],
                heading_4: ["2.4rem", "1.3"],
                heading_5: ["2rem", "1.5"],
                paragraph_1: ["1.8rem", "1.5"],
                paragraph_2: ["1.6rem", "1.5"],
                paragraph_3: ["1.4rem", "1.4"],
            },
            width: {
                container: "144rem",
            },
            padding: {
                lg: "11.2rem",
                md: "6.4rem",
            },
            boxShadow: {
                card: "0px 6.6rem 11rem rgba(0, 0, 0, .05)"
            },
            animation: {
                spin_slow: "spin 3s linear infinite" 
            },
        },
    },
    plugins: [],
};
