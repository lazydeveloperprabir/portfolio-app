//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/portfolio-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/portfolio-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

if(process.env.PORT === undefined){
    console.log('The server is up and listening on PORT :' + 8080);
} else {
    console.log('The server is up and listening on PORT :' + process.env.PORT);
}
