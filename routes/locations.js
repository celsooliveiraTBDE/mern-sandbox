const router = require("express").Router();
const locationsController = require("../controllers/locationsController");

// Matches with "/api/books"
router.route("/")
  .get(locationsController.findAll)
  .post(locationsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(locationsController.findById)
  .put(locationsController.update)
  .delete(locationsController.remove);

module.exports = router;
