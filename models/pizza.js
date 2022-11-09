const mongoose = require("mongoose") 
const pizzaSchema = mongoose.Schema({ 
 pizza_type: String, 
 size: String, 
 cost: Number 
}) 

module.exports = mongoose.model("pizzas", pizzaSchema) 
