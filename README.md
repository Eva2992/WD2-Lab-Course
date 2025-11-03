# Task Management API

**Course**: CSE 362 – Web Programming II LAB  
**Department**: Computer Science and Engineering  
**Institution**: Jahangirnagar University  


**Student Information**:
- **Name**: Fateema Binti Taher Eva
- **Roll**: 403
- **Exam Roll**: 220463

---

A simple REST API for managing tasks built with Node.js and Express.js.

## Setup Instructions

1. Clone the repository:
```bash
   git clone <your-repo-url>
   cd WD2-Lab-Course
```

2. Install dependencies:
```bash
   npm install
```

3. Run the server:
```bash
   npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### GET /
- **Description**: Root endpoint
- **Response**: "Task Management API is running!"

### GET /health
- **Description**: Health check endpoint
- **Response**: 
```json
  {
    "status": "healthy",
    "uptime": 123.456
  }
```

### GET /tasks
- **Description**: Get all tasks
- **Response**: Array of task objects with id, title, completed, priority, and createdAt

### GET /task/:id
- **Description**: Get a specific task by ID
- **Parameters**: 
  - `id` (number): Task ID
- **Response**: 
  - 200: Task object
  - 400: Invalid ID format
  - 404: Task not found

## Project Structure
```
WD2-Lab-Course/
├── src/
│   ├── routes/
│   │   └── tasks.js
│   └── index.js
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

## Testing

Test all endpoints using Postman or any API testing tool:
- Root endpoint: `http://localhost:3000/`
- Health check: `http://localhost:3000/health`
- All tasks: `http://localhost:3000/tasks`
- Single task: `http://localhost:3000/task/1`

## Error Handling

The API includes proper error handling for:
- Invalid task IDs (returns 400 status code)
- Non-existent tasks (returns 404 status code)