module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["dracula", "night"],
    },
    plugins: [require("daisyui")],
};
