var pizzas = require('../models/pizza'); 
 
// List of all Pizzas
exports.costume_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: pizzas list'); 
}; 
 
// for a specific Pizza. 
exports.pizza_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pizza detail: ' + req.params.id); 
}; 
 
// Handle Pizza create on POST. 
exports.pizza_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new pizzas(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"pizza_type":"pepperoni", "cost":20, "size":"large"} 
    document.pizza_type = req.body.pizza_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Pizza delete form on DELETE. 
exports.pizza_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Pizza delete DELETE ' + req.params.id); 
}; 
 
// Handle Pizza update form on PUT. 
exports.pizza_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: pizza update PUT' + req.params.id); 
}; 
// List of all pizza 
exports.pizza_list = async function(req, res) { 
    try{ 
        thepizzas = await pizzas.find(); 
        res.send(thepizzas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.pizza_view_all_Page = async function(req, res) { 
    try{ 
        thepizzas = await pizzas.find(); 
        res.render('pizza', { title: 'Pizza Search Results', results: thepizzas }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
