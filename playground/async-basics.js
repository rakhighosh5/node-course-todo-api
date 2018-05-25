const request = require('request');
  // Obtain browser key from https://code.google.com/apis/console
  

request({
    url:' https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyAwY5M7GkHwZfkwKamfinIMlu6XfSBI4T4',
    json: true
    },(error,response,body)=>{
    console.log(JSON.stringify(body,undefined,2));
    })