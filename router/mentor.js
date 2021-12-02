const express = require("express");
const mongoose = require("mongoose");
const mentor_sch = mongoose.model("MENTOR");
const router = express.Router();
const port = 3000;

router.get("/mentor", async (req, res) => {
  mentor_sch.find().then((mentor_i) => {
    res.json(mentor_sch);
  });
});
router.post("/mentor", async (req, res) => {
  const post_data = new mentor_sch(req.body);
  post_data
    .save()
    .then((item) => {
      res.send("item saved to data base");
    })
    .catch((err) => {
      res.status(400).send("unable to reach :(");
    });
});

router.get("/mentor/:id", async (req, res) => {
  try {
    const mentor_i = await mentor_sch.findById(req.params.id);
    res.json(mentor_i);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
