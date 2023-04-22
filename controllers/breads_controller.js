const express = require("express");
const breadsRoute = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breadsRoute.get("/", (req, res) => {
  res.render("Index", {
    breads: Bread,
    title: "Index Page",
  });
});

// CREATE
breadsRoute.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image =
      "https://images.unsplash.com/photo-1601233242964-9909c5237aaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = "true";
  } else {
    req.body.hasGluten = "false";
  }
  Bread.push(req.body);
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
breadsRoute.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("show", {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    });
  } else {
    res.render("error404");
  }
});

module.exports = breadsRoute;
