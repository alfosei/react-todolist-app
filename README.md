## React To-Do List App

This document outlines a basic to-do list application built with React. 

### Overview

The app allows users to manage their tasks by adding, deleting, and marking them as completed.

### Features

* **Add Tasks:** Users can enter a task and add it to the list.
* **Delete Tasks:** Tasks can be removed by clicking the delete button.
* **Mark as Completed:** Clicking the complete button strikes through the task text, indicating completion.

### Installation

To run this project locally:

1. **Clone the repository:**

```bash
git clone https://github.com/alfosei/react-todolist-app.git
```

2. **Navigate to the project directory:**

```bash
cd react-todolist-app
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the app:**

```bash
npm start
```

The app will open in your browser at http://localhost:3000.

### Code Overview

The application consists of the following files:

* **App.js:** Manages the state and logic for adding, deleting, and completing tasks.
* **Task.js:** A component that displays each task with options to delete or mark it as completed.
* **App.css:** Contains the styling for the app, providing a simple and clean layout.
* **index.js:** The entry point for rendering the app.

### Usage

**Add a Task:**

1. Type into the input field.
2. Click "Add."

**Delete a Task:**

1. Click the trash icon next to the task.

**Mark as Completed:**

1. Click the check icon to strike through the task.

### License

This project is open source and available under the MIT License.
