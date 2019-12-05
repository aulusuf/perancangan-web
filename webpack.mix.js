const mix = require('laravel-mix');

// mix.js('resources/js/min.js', 'public/js')
   mix.postCss('resources/css/min.css', 'public/css',[
       require('tailwindcss')
   ])
   .options({
       autoprefixer:{
           options:{
               browsers:[
                   "last 5 versions",
               ]
           }
       }
   })
   .setPublicPath('public');