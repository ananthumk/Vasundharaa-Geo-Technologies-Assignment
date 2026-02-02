React Internship Assignment

A comprehensive single-page React application demonstrating proficiency in modern React development, state management, form handling, dynamic UI components, and data persistence. This project implements five distinct tasks as part of an internship assignment, showcasing best practices in component modularity, hooks usage, and responsive design.

Published Link -

Features This application includes the following tasks:

Task 1: Enhanced Todo App A fully functional todo list with add, toggle, delete, and priority settings. Includes filtering (all, active, completed) and LocalStorage persistence.

Task 2: Form Handling & Validation A user form with controlled inputs, real-time validation (name, email, password), and password visibility toggle.

Task 3: Dynamic Multi-Input Progress Bar Interactive progress bars where individual inputs dynamically update a main "average" bar, with color-coded thresholds.

Task 4: Advanced Countdown Timer A precise countdown timer with start, pause, reset, and LocalStorage persistence to handle page refreshes accurately.

Task 5: Live Search with Highlighting Real-time search through a list of names with case-insensitive filtering and highlighted matches.

Prerequisites Before running this project, ensure you have the following installed:

Node.js: Version 18.x or higher (Download from nodejs.org). npm or yarn: Package manager (comes with Node.js). Git: For cloning the repository (optional, if downloading as ZIP). Installation Clone the Repository:

git clone https://github.com/your-username/react-internship-assignment.git cd react-internship-assignment Install Dependencies:

npm install Or, if using Yarn: yarn install

Set Up Tailwind CSS:

Install Tailwind:

npm install tailwindcss @tailwindcss/vite

Running the Application

Start the Development Server:

npm run dev

The app will run on http://localhost:5173 (default Vite port). Navigate to the URL to view the single-page application with all tasks. Build for Production (optional):

npm run build This creates an optimized build in the dist/ folder.

Project Structure

src/ ├── components/ │ 
              ├── Todo/ │ │ 
                  ├── TodoApp.jsx # Main todo component with reducer logic │ │ 
                  ├── TodoItem.jsx # Individual task item │ 
                  │ └── FilterControls.jsx # Filter buttons │ 
              ├── Forms/ │ 
                  │ └── UserForm.jsx # Form with validation │ 
              ├── Progress/ │ 
                  │ └── MultiProgressBar.jsx # Progress bar component │ 
              ├── Timer/ │ 
                  │ └── CountdownTimer.jsx # Timer with persistence 
              │ └── Search/ │ 
                   └── SearchList.jsx # Search with highlighting 
              ├── hooks/ 
                 │ └── useLocalStorage.js # Custom hook for storage 
  ├── App.jsx # Main app layout 
  ├── main.jsx # Entry point 
  └── index.css # Tailwind CSS imports

Technologies Used

React: Core framework with hooks (useState, useEffect, useReducer). Vite: Build tool for fast development.

Tailwind CSS: Utility-first CSS framework for styling.

Lucide-React: Icon library for UI elements.

LocalStorage API: For data persistence across sessions.

JavaScript (ES6+): Modern syntax and features.

Usage Notes Persistence: Tasks, timer state, and filters are saved to LocalStorage. Refresh the page to test persistence.

Responsiveness: The app is fully responsive and works on mobile, tablet, and desktop.

Performance: Timers and effects are optimized with proper cleanup to prevent memory leaks.

Validation: Form errors are displayed inline for better UX.

Customization: Sample data (e.g., names in search) can be replaced with API calls for real-world use. Contributing
