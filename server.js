const express = require('express');



/*****************************************************
 * Define some constants and variables
 ****************************************************/
const app = express();
const port = 3000;

/*****************************************************
 * Middleware
 ****************************************************/
app.use(express.static('public'));

/*****************************************************
 * Set template engine
 ****************************************************/



/*****************************************************
 * Routes
 * 
 * GET /                        
 *   home - show movielist
 ****************************************************/



/*****************************************************
 * If no routes give response, show 404 Page
 ****************************************************/

app.get('/', (req,res) => {
    res.send("hello world!")
})


/*****************************************************
 * Start webserver
 ****************************************************/

app.listen(port, () => {
    console.log(`Webserver running on port localhost:${port}`);
})