const router = require("express").Router();
//const passport = require('../../config/passport');
const postController = require('../../controllers/postController');

//matches with "/api/posts"
router.route("/")
.get(postController.getAll)
.post(postController.create);

router.route("/:author")
.get(postController.getMany);

router.route("/:id")
.put(postController.volSignUp)

module.exports = router;