const express = require('express'); 
const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Heroes'
    });
}); 


router.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Our Heroes'
    });
}); 

module.exports = router;