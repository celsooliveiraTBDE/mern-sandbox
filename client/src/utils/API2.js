import axios from "axios";

// The getLocations method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getYelpLocations: function(query, query2) {
    console.log("this isthe API log ", query, query2)
    return axios.get("/locations/hello", {  params: {location:query, term: query2 }} );
  },
    // Gets all articles
    getLocations: function() {
      return axios.get("/locations");
    },
    // Gets the book with the given id
    getLocation: function(id) {
      console.log(id);
      return axios.get("/locations/" + id);
    },
    // Deletes the book with the given id
    deleteLocation: function(id) {
      return axios.delete("/locations/" + id);
    },
    // Saves a book to the database
    saveLocation: function(bookData) {
      console.log("mas huevos", bookData)
      return axios.post("/locations", bookData);
    }
};


// export default {
//   getLocations: function(query) {
//     return axios.get("/api/recipes", { params: {
//       term: 'bar',
//       location: 'los angeles,ca'
//     } });
//   }
// };