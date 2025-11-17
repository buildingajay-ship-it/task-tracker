# Task Tracker Web Application

## Overview
The Task Tracker is a web application designed for task assignment and management within an organization. It allows users to log in, view an organizational chart, assign tasks to team members, and enables leaders to monitor the tasks assigned to their members. The application supports a hierarchical structure where seniors can assign work to juniors, and juniors can request task completion status from seniors.

## Features
- User authentication (login/logout)
- Organizational chart visualization
- Task assignment and tracking
- Role-based access (seniors and juniors)
- Request task completion status

## Project Structure
```
task-tracker
├── src
│   ├── index.html          # Main entry point for the web application
│   ├── css
│   │   └── styles.css      # External CSS styles
│   ├── js
│   │   ├── app.js          # Main JavaScript file
│   │   ├── auth.js         # User authentication logic
│   │   ├── orgChart.js     # Organizational chart management
│   │   ├── tasks.js        # Task management functionalities
│   │   └── utils.js        # Utility functions
│   ├── components
│   │   ├── login.html      # Login page structure
│   │   ├── dashboard.html   # Dashboard for viewing tasks and org chart
│   │   ├── org-chart.html  # Organizational chart display
│   │   └── task-panel.html  # Task management panel
│   └── data
│       └── mock-data.json  # Mock data for testing
├── server
│   ├── app.js              # Server entry point
│   ├── routes
│   │   ├── auth.js         # Authentication routes
│   │   ├── users.js        # User-related routes
│   │   └── tasks.js        # Task-related routes
│   ├── controllers
│   │   ├── authController.js # Logic for authentication requests
│   │   ├── userController.js # Logic for user-related requests
│   │   └── taskController.js # Logic for task-related requests
│   └── models
│       ├── userModel.js    # User model definition
│       └── taskModel.js    # Task model definition
├── package.json             # npm configuration file
├── .gitignore               # Files to ignore in version control
└── README.md                # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd task-tracker
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage
- Users can log in using their credentials.
- Once logged in, users can view the organizational chart and their assigned tasks.
- Seniors can assign tasks to juniors and monitor their progress.
- Juniors can request updates on task completion from their seniors.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.