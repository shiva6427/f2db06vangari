var express = require('express'); 
const pizza_controlers= require('../controllers/pizza'); 
var router = express.Router(); 
 
/* GET pizzas */ 
router.get('/', pizza_controlers.pizza_view_all_Page ); 

/* GET detail pizza page */ 
router.get('/detail', pizza_controlers.pizza_view_one_Page);

module.exports = router; 

