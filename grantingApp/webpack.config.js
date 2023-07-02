const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.js',  // The entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'),  // The output directory for the bundled files
        filename: 'bundle.js',  // The name of the bundled file
        libraryTarget: 'commonjs2'
    },
    module: {
        rulesOptions: {
            preferRelative: true,
            rules: [
                // Your existing rules here
            ]
        }
    },
    resolve: {
        alias: {
            slices: path.resolve(__dirname, 'src/slices') // Add an alias for the 'slices' directory
        }
    },
    externals: {
        react: 'react'
    }
};
