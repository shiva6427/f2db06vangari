var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var costume_controller = require('../controllers/costume'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/costume', costume_controller.costume_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/costume/:id', costume_controller.costume_delete); 
 
// PUT request to update Costume. 
router.put('/costume/:id', costume_controller.costume_update_put); 
 
// GET request for one Costume. 
router.get('/costume/:id', costume_controller.costume_detail); 
 
// GET request for list of all Costume items. 
router.get('/costume', costume_controller.costume_list); 
 
module.exports = router; 