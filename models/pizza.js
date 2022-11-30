const mongoose = require("mongoose") 
const pizzaSchema = mongoose.Schema({ 
 pizza_type: {
    type:String,
    required:["Pizza name is required."],
 }, 
 size:  {
    type:String,
    required:["Pizza size is required."],
 },
 cost:{
    type: Number,
    min:[15,"Cost Should be minimum of 15$ "],
    max:[100,"Cost Cannot be greater than 50$ "]
}
})

module.exports = mongoose.model("pizzas", pizzaSchema) 
