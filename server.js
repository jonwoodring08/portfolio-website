/**
 * Required External Modules
 */
const express = require('express'); 
const path = require('path');
var cors = require('cors');


/**
 * App Variables
 */
const app = express(); 
const port = process.env.PORT || 3000; 

/**
 *  App Configuration
 */
app.use(cors())

app.listen(port, () => console.log('Listening on port ${port}')) 

/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, 'public')));
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/express_backend', (req, res) => {
    res.json({ express: 'YOUR BACKEND IS CONNECTED TO REACT' })
});

 /**
 * Server Activation
 */

