/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({code: "LBW", 
   				 name: "Library West", 
             	 coordinates: {
                 "latitude": 29.6508246, 
                 "longitude": -82.3417565
           		 }, 
             	 address: "1545 W University Ave, Gainesville, FL 32603, United States"
             	 }, 
             	 function(err, user){ 
             	 if(err) throw err; 
             	 
             	 console.log(user);
         

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   
   Listing.findOneAndRemove({code:'CABL'}, function(err){ 
   
   		if(err) throw err; 
   		
   		console.log('User deleted!');
   
   
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({code: "PHL", name: "Phelps Laboratory", 
            coordinates: {
                latitude: 41.1091195, 
                longitude: -73.8639555
            }, 
            address: "432 Newell Dr, Gainesville, FL 32611, United States"
   
   }, {code: "PPS", name: "Phelps Laboratory", 
            coordinates: {
                latitude: 41.1091195, 
                longitude: -73.8639555
            }, 
            address: "432 Newell Dr, Gainesville, FL 32611, United States"
   
   
   if(err) throw err; 
   
   console.log(user);
   
   
  }) 

   
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, users){ 
   
   		if(err) throw err; 
   		
   		console.log(users);
   
   
   });
   
   
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
