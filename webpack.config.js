var WebpackConfig = {
entry: "./js/app.jsx",
 output: {
   filename: "./bundle.js"
 },
 module: {

   loaders: [
     {
       //test: [/\.js$/, /\.es6$/, /\.jsx$/],
       test: [/\.js$/, /\.jsx$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 resolve: {
  //  extensions: ['', '.js', '.es6',]
  extensions: ['', '.js']
 }
}

module.exports = WebpackConfig
