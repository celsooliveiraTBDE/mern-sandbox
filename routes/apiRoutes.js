// const axios = require("axios");
const router = require("express").Router();
const yelp = require('yelp-fusion');
const apiKey = 'tjWeCYoOxLdJP26PTWIdR0ww5r4Wyw0iI93pvORu_2o_j2pJBPAGZBpWFAPSfolo1WYhug7az9S78WiCKL5T9neJIUnRYmADfu6wsRdTRxPvz3BvJJqzwSAqDYy8WnYx';
const locationsController = require("../controllers/locationsController");
const path = require("path");

// let searchRequest = {
//   term: 'UCLA Bootcamp',
//   location: 'los angeles, ca'
// };

const client = yelp.client(apiKey);

// 
router.get('/hello', (req, res) => {
  let searchRequest = (req.query);   
  console.log("this is the search req",searchRequest)
  console.log("this is the search req",req.query)
  console.log("this is the search req",req.query2)

// YELP CALL FROM BACK END ---->>>

  client.search(searchRequest).then(response => {
      console.log("express", response.jsonBody.businesses)
      res.send(response.jsonBody.businesses)
    }).catch(e => {
      console.log(e);
    });
  });

router.get('/reviews', (req, res) => {
  
  client.reviews('jennifer-k-oliveira-dds-santa-monica').then(response => {
    console.log(response.jsonBody.reviews.text)
    res.send(response.jsonBody.reviews);
  }).catch(e => {
    console.log(e);
  });
  })
  // END YELP // BEGIN MONGO DB ROUTES 


 // Matches with "/api/location"
router.route("/")
.get(locationsController.findAll)
.post(locationsController.create);

// Matches with "/api/books/:id"
router
.route("/:id")
.get(locationsController.findById)
.put(locationsController.update)
.delete(locationsController.remove);

// Send every request to the React app
// Define any API routes before this runs
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;

// router.get("/recipes", (req, res) => {
  //   axios
  //     .get("http://www.recipepuppy.com/api/", { params: req.query })
  //     .then(({ data: { results } }) => res.json(results))
  //     .catch(err => res.status(422).json(err));
  // });