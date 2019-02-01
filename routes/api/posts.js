const router = require("express").Router();
//const passport = require('../../config/passport');
const postController = require('../../controllers/postController');

//matches with "/api/posts"
router.route("/")
.get(postController.getAll)
.post(postController.create);

router.route("/:id")
.get(postController.findById)
.put(postController.volSignUp)
.delete(postController.delete)

router.route("/author/:author")
.get(postController.getMany);


module.exports = router;