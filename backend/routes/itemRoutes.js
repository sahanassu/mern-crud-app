const express = require("express");
const Item = require("../models/Item");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE
router.post("/", auth, async (req, res) => {
  const item = new Item({ ...req.body, userId: req.user.id });
  await item.save();
  res.json(item);
});

// READ
router.get("/", auth, async (req, res) => {
  const items = await Item.find({ userId: req.user.id });
  res.json(items);
});

// UPDATE
router.put("/:id", auth, async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
