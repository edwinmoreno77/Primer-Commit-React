module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules: true } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
}


//instalaciones necesarias usando vite:

//npm add -D @babel/preset-react
//npm add -D @babel/preset-env