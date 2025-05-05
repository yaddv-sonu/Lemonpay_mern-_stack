import Task from '../models/Task.js';

// Create a new task
export const createTask = async (req, res) => {
  const { taskName, description, dueDate } = req.body;
  try {
    const task = new Task({
      userId: req.user,
      taskName,
      description,
      dueDate
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating task' });
  }
};

// Get all tasks for a user
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching tasks' });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Error updating task' });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user });
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting task' });
  }
};
