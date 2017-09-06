/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
  code: {type:String, required:true, unique:true},
  
  name : String, 
  
  coordinates: {
  	latitude: Number, 
  	longitude: Number, 
  }, 
  
  address: String, 
  
  created_at: Date, 
  updated_at: Date
  
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  /* your code here */
   	var err = new Error('something went wrong');

	//may need to modify later
 	var currentDate = new Date(); 
 	this.update_at = currentDate; 
 	if(!this.create_at) 
 		this.created_at = currentDate;
 	next(err);
 	
 	
 	
 	
  
});



/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
