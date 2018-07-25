import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query, query2) {
    console.log("this isthe API log ", query, query2)
    return axios.get("/api/hello", {  params: {location:query, term: query2 }} );
  },
    // Gets all articles
    getBooks: function() {
      return axios.get("/api/hello");
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/articles/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/articles/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      console.log("mas huevos", bookData)
      return axios.post("/api/articles", bookData);
    }
};


// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/recipes", { params: {
//       term: 'bar',
//       location: 'los angeles,ca'
//     } });
//   }
// };