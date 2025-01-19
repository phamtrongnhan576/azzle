/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            backgroundColor: {
                "main-color": "#efeae3",
                "separator-color": "rgb(25, 25, 25)",
                linenYellow: "rgb(239 234 227)",
            },
            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
            },
            colors: {
                descColor: "#191919",
                footerTextHover: "#fe330a",
            },
            borderColor: {
                codGray: "rgb(25, 25, 25)",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
