const router = require("express").Router();
const passport = require('../../config/passport');
const userController = require('../../controllers/userController');

//matches with "/api/users"
router
  .route("/signIn")
  .post(
    passport.authenticate('local'),
    function (req, res) {
      res.json(req.user)
    }
  );

router.route("/:user")
.get(userController.getOne)

router.route("/edit/:id")
.put(userController.edit)

router.route("/signUp")
.post(userController.createUser);

module.exports = router;