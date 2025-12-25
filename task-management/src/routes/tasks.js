const express = require('express');
const router = express.Router();

const { Task } = require('../../models') ;
const db = require("../../config/db");


//get task Sequelize
router.get('/' , async (req, res) => {
  try {
    const tasks = await Task.findAll(); //sequelize method to get all tasks instead of raw SQL
    res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// get tasks by id 

router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// post create task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// PUT update task

router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    await task.update(req.body);
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


//  DELETE Task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    await task.destroy();
    res.json({ 
      message: 'Task deleted :',
      data : {task }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

 /*
// GET /tasks - Retrieve all tasks
router.get('/', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.status(200).json({
    success: true,
    data: tasks
  });
});


// POST /tasks - Create a new task
router.post('/tasks', (req, res) => {
  try {
    const { title } = req.body;

    // Input validation
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required and must be a non-empty string'
      });
    }

    const newTask = {
      id: Date.now(), // Simple ID (replace with auto-increment in DB)
      title: title.trim(),
      completed: false
    };

    const tasks = req.app.locals.tasks;
    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});



// GET all tasks
router.get('/', async (req, res) => {
try {
const [rows] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
res.json(rows);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Database error' });
}
});
// POST create new task
router.post('/', async (req, res) => {
const { title, description } = req.body;
if (!title || title.trim() === '') {
return res.status(400).json({ error: 'Title is required' });
}
try {
const sql = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
const [result] = await db.query(sql, [title, description || null]);
const [newTask] = await db.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
res.status(201).json(newTask[0]);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Failed to create task' });
}
});
// PUT update task
router.put('/:id', async (req, res) => {
const { id } = req.params;
const { title, description, status } = req.body;
try {
const updates = [];
const values = [];
if (title !== undefined) { updates.push('title = ?'); values.push(title); }
if (description !== undefined) { updates.push('description = ?'); values.push(description); }
if (status !== undefined) { updates.push('status = ?'); values.push(status); }
if (updates.length === 0) {
return res.status(400).json({ error: 'No fields to update' });
}
values.push(id);
const sql = `UPDATE tasks SET ${updates.join(', ')} WHERE id = ?`;
const [result] = await db.query(sql, values);
if (result.affectedRows === 0) {
return res.status(404).json({ error: 'Task not found' });
}
const [updated] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
res.json(updated[0]);
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Failed to update task' });
}
});
// DELETE task
router.delete('/:id', async (req, res) => {
const { id } = req.params;
try {
const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);
if (result.affectedRows === 0) {
return res.status(404).json({ error: 'Task not found' });
}
res.status(204).send();
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Failed to delete task' });
}
}); */

module.exports = router;

