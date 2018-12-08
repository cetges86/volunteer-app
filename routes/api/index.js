const router = require("express").Router();
const postRoutes = require("./posts");

//user routes
router.use("/posts", postRoutes);

module.exports = router;
