module.exports = {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                'cf-green-1': '#0f9d58',
                'cf-green-2': '#2bb673'
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui']
            }
        }
    },
    plugins: []
}
