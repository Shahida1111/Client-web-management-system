# WebFlow CMS

A responsive **Web Client Management and Content Management System** built with **HTML5, SCSS, JavaScript ES6, and NPM**.

The application provides a centralized platform for managing clients, websites, pages, tasks, QA issues, client reviews, and website publishing workflows.

## 🚀 Features

* Responsive dashboard
* Client management
* Website management
* Website and page details
* Page content management
* Task management
* QA and bug tracking
* Client review workflow
* Website publishing workflow
* Search and filtering
* LocalStorage data persistence
* Form validation
* SweetAlert2 notifications
* Chart.js dashboard charts
* Responsive design

## 🛠️ Technologies Used

* HTML5
* CSS3
* SCSS / Sass
* JavaScript ES6
* NPM
* SweetAlert2
* Chart.js
* date-fns
* LocalStorage
* Git / GitHub

## ⚙️ Requirements

Make sure you have installed:

* Node.js 16+
* NPM 8+
* Git
* Visual Studio Code
* Live Server extension

Check the installed versions:

```bash
node -v
npm -v
git --version
```

## 📥 Installation

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd webflow-cms
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages defined in `package.json`.

## 🎨 SCSS Setup

Start the Sass compiler:

```bash
npm run sass
```

The project compiles:

```text
scss/main.scss → css/main.css
```

Keep the Sass process running while developing.

## ▶️ Run the Application

Open the project in **Visual Studio Code**.

Open `index.html`, right-click, and select:

**Open with Live Server**

The application will open in your browser.

> **Important:** Do not open `index.html` directly using `file://`. Use Live Server because the project uses JavaScript ES6 modules.

## 💾 Data Storage

The current version uses **Browser LocalStorage** for client-side data persistence.

Example LocalStorage keys:

```text
webflow_clients
webflow_websites
```

No backend server or database is required for the current version.

## 🔄 Application Workflow

```text
Dashboard
   ↓
Clients
   ↓
Websites
   ↓
Website Details
   ↓
Pages
   ↓
Content Editor
   ↓
Tasks
   ↓
QA
   ↓
Client Review
   ↓
Published
```

## 📊 Dashboard

The dashboard provides an overview of:

* Client statistics
* Website statistics
* Development status
* QA status
* Client review status
* Published websites

Charts are displayed using **Chart.js**.

## 🔔 Notifications

**SweetAlert2** is used for interactive notifications, alerts, and confirmation dialogs throughout the application.

## 🔍 Search and Filtering

Client-side search and filtering are available for:

* Clients
* Websites
* Tasks
* QA issues

## 📱 Responsive Design

The application supports:

* Desktop
* Tablet
* Mobile

The interface uses:

* SCSS
* Flexbox
* CSS Grid
* Responsive media queries

## 🧪 Testing

After starting the application:

1. Open the Dashboard.
2. Navigate through the sidebar.
3. Test client management.
4. Test website management.
5. Open website details.
6. Check website pages.
7. Test content editing.
8. Test tasks and QA.
9. Test client review actions.
10. Test the responsive layout.
11. Refresh the browser and verify LocalStorage persistence.

## 📌 Project Status

* [x] Client management
* [x] Website management
* [x] Page management
* [x] Content editor
* [x] Task management
* [x] QA management
* [x] Client review
* [x] LocalStorage persistence
* [x] Form validation
* [x] SweetAlert2 notifications
* [x] Chart.js dashboard
* [x] Responsive UI
* [x] SCSS architecture
* [x] NPM dependency management

## 🔮 Future Improvements

* Angular frontend
* Spring Boot backend
* RESTful APIs
* MySQL database
* User authentication
* Role-based authorization
* Real file and image uploads
* Advanced content editor
* Backend API integration

## 👩‍💻 Author

**Shahida Ibrahim**

Software Engineer | Web Developer
