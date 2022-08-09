

module.exports = {
    //content
   apps : [
     {
       name          : 'Hoursheets-Admin-Api',
       script        : 'node',
       interpreter   : 'none',
       args          : 'src/server.js',
       env_production : {
         NODE_ENV: 'production'
       }
     }]
};
