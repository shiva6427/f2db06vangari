var express = require('express'); 
const pizza_controlers= require('../controllers/pizza'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', pizza_controlers.pizza_view_all_Page ); 



module.exports = router; 

