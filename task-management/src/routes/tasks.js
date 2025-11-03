const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date('2024-01-15') },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date('2024-01-16') },
  { id: 3, title: 'Learn Express.js', completed: true, priority: 'high', createdAt: new Date('2024-01-14') },
  { id: 4, title: 'Study MongoDB', completed: false, priority: 'low', createdAt: new Date('2024-01-17') },
  { id: 5, title: 'Practice Git', completed: true, priority: 'medium', createdAt: new Date('2024-01-13') }
];

// GET /tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET /task/:id
router.get('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

module.exports = router;