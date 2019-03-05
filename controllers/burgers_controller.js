let db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.burger.findAll().then(function(result) {
      var hbsObject = {
        burgers: result
      };
      res.render("index", hbsObject);
    });
  });

  app.post("/burgers", function(req, res) {
    db.burger.create({
      burger_name: req.body.burger_name
    }).then(function(result) {
      res.redirect("/");
    }).catch(function(err) {
      res.json(err);
    });
  });

  app.post("/burgers/:id", function(req, res) {
    db.burger.update({
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.redirect("/")
    }).catch(function(err) {
      res.json(err)
    });
  });
};
 