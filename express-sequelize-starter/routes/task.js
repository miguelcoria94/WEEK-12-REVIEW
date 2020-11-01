//- ./routes/tasks.js

const express = require("express");
const router = express.Router();
const db = require("../db/models");

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const { Task } = db;

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tasks = await Task.findAll();
    // TODO: Render all tasks in JSON format
      res.json({tasks})
  })
);

router.post(
    "/",
    asyncHandler(async (req, res) => {
        const { name } = req.body
        const task = await Task.create({ name })
        res.status(201).json({task})
    })
)

module.exports = router;
