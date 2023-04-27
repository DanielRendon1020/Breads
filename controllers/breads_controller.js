const express = require("express");
const breadsRoute = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breadsRoute.get("/", (req, res) => {
  Bread.find().then((foundBreads) => {
    res.render("Index", {
      breads: foundBreads,
      title: "List of Breads",
    });
  });
});

// CREATE
breadsRoute.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = "true";
  } else {
    req.body.hasGluten = "false";
  }
  Bread.create(req.body);
  res.redirect("/breads");
});

// NEW
breadsRoute.get("/new", (req, res) => {
  res.render("new");
});

// UPDATE
breadsRoute.put("/:arrayIndex", (req, res) => {
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread[req.params.arrayIndex] = req.body;
  res.redirect(`/breads/${req.params.arrayIndex}`);
});

// EDIT
breadsRoute.get("/:arrayIndex/edit", (req, res) => {
  res.render("edit", {
    bread: Bread[req.params.arrayIndex],
    index: req.params.arrayIndex,
  });
});

// DELETE
breadsRoute.delete("/:arrayIndex", (req, res) => {
  Bread.splice(req.params.arrayIndex, 1);
  res.status(303).redirect("/breads");
});

// SHOW
breadsRoute.get("/:id", (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('show', {
        bread: foundBread,
        title: foundBread.name
      })
    })
    .catch(err => {
      res.render('error404')
    })
});

module.exports = breadsRoute;
