const mongoose = require("mongoose") 
const pizzaSchema = mongoose.Schema({ 
 pizza_type: {
    type:String,
    required:["Pizza name is required."],
    required:["Pizza name cannot be empty."]
 }, 
 size:  {
    type:String,
    required:["Pizza size is required."],
    required:["Pizza size cannot be empty."]
 },
 cost:{
    type: Number,
    min:[15,"Cost Should be minimum of 15$ "],
    max:[50,"Cost Cannot be greater than 50$ "],
    required:["Pizza cost cannot be empty."]
}
})

module.exports = mongoose.model("pizzas", pizzaSchema) 
