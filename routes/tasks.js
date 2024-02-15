const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// POST /create
router.post('/create', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was a problem trying to create a task' });
  }
});

// GET /
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was a problem trying to get tasks' });
  }
});

// GET /id/:_id
router.get('/id/:_id', async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was a problem trying to get a task by id' });
  }
});

// PUT /markAsCompleted/:_id
router.put('/markAsCompleted/:_id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params._id,
      { completed: true },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was a problem trying to mark a task as completed' });
  }
});

// PUT /id/:_id
router.put('/id/:_id', async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params._id,
      { title },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was a problem trying to update a task' });
  }
});

// DELETE /id/:_id
router.delete('/id/:_id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params._id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'There was a problem trying to delete a task' });
  }
});

module.exports = router;
