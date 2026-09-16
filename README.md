# WebFlow CMS

A responsive Web Client Management and Content Management System built with **HTML5, SCSS, JavaScript ES6, and NPM**. The application provides a centralized platform for managing clients, websites, pages, tasks, QA issues, and client reviews.

## 🚀 Features

- Responsive dashboard
- Client management
- Website management
- Website and page details
- Page content management
- Task management
- QA and bug tracking
- Client review workflow
- Website publishing workflow
- Search and filtering
- LocalStorage data persistence
- Form validation
- SweetAlert2 notifications
- Chart.js dashboard charts
- Responsive design

## 🛠️ Technologies Used

- HTML5
- CSS3
- SCSS / Sass
- JavaScript ES6
- NPM
- SweetAlert2
- Chart.js
- date-fns
- LocalStorage
- Git / GitHub

## ⚙️ Requirements

Make sure you have installed:

- Node.js 16+
- NPM 8+
- Git
- Visual Studio Code
- Live Server extension

Check versions:

```bash
node -v
npm -v
git --version
📥 Installation
1. Clone the Repository
git clone <your-github-repository-url>
cd webflow-cms
2. Install Dependencies
npm install

This installs all required packages from package.json.

🎨 SCSS Setup

Start the Sass compiler:

npm run sass

The project compiles:

scss/main.scss → css/main.css

Keep the Sass process running while developing.

▶️ Run the Application

Open the project in Visual Studio Code.

Open index.html, right-click, and select:

Open with Live Server

The application will open in your browser.

Important: Do not open index.html directly using file://. Use Live Server because the project uses JavaScript ES6 modules.

💾 Data Storage

The current version uses Browser LocalStorage for client-side data persistence.

Example LocalStorage keys:

webflow_clients
webflow_websites

No backend server or database is required for the current version.


The dashboard provides an overview of:

Client statistics
Website statistics
Development status
QA status
Client review status
Published websites

Charts are displayed using Chart.js.

🔔 Notifications

SweetAlert2 is used for interactive notifications and confirmation dialogs for application actions.

🔍 Search and Filtering

Client-side search and filtering are available for:

Clients
Websites
Tasks
QA issues
📱 Responsive Design

The application supports:

Desktop
Tablet
Mobile

The interface uses SCSS, Flexbox, CSS Grid, and responsive media queries.

🧪 Testing

After starting the application:

Open the Dashboard.
Navigate through the sidebar.
Test client management.
Test website management.
Open website details.
Check website pages.
Test content editing.
Test tasks and QA.
Test client review actions.
Test the responsive layout.
Refresh the browser and verify LocalStorage persistence.
📌 Project Status
Client management
Website management
Page management
Content editor
Task management
QA management
Client review
LocalStorage persistence
Form validation
SweetAlert2 notifications
Chart.js dashboard
Responsive UI
SCSS architecture
NPM dependency management
🔮 Future Improvements
Angular frontend
Spring Boot backend
RESTful APIs
MySQL database
User authentication
Role-based authorization
Real file and image uploads
Advanced content editor
Backend API integration
👩‍💻 Author

Shahida Ibrahim

Software Engineer | Web Developer
