var pizzas = require('../models/pizza'); 
 
// List of all Pizzas
exports.pizza_list = async function (req, res) {
    try {
        thepizzas = await pizzas.find();
        res.send(thepizzas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific pizza. 
exports.pizza_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: pizza detail: ' + req.params.id); 
}; 

// for a specific Pizza. 
exports.pizza_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await pizzas.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

// Handle pizza delete on DELETE. 
exports.pizza_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await pizzas.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Pizza update form on PUT. 
exports.pizza_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await pizzas.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.pizza_type)  toUpdate.pizza_type = req.body.pizza_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
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

 // Handle a show one view with id specified by query 
 exports.pizza_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await pizzas.findById( req.query.id) 
        res.render('pizzadetail',  
{ title: 'Pizza Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 