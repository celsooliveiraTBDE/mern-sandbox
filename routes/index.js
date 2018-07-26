const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// Book routes
router.use("/locations", apiRoutes);

module.exports = router;
