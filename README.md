# UI-UX-Developer-Intern-Trainee---Assignment

### eZuite Dashboard

## Overview

eZuite Dashboard is a modern, responsive admin dashboard interface designed for enterprise resource planning (ERP) systems. It provides a clean, intuitive user interface for managing various business modules including admin, core, procurement, inventory, manufacturing, sales, finance, assets, services, CRM, and analytics.

## Features

### Core Features

- **Modular Dashboard**: Navigate between different business modules
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Tables**: Sort, filter, and search data
- **User Management**: View and manage employee data
- **Settings Panel**: Customize user experience


## Installation

1. Clone the repository:

```plaintext
git clone https://github.com/Madubhashinie/UI-UX-Developer-Intern-Trainee---Assignment.git
```


2. Open the project folder:

```plaintext
cd ezuite-dashboard
```


3. Open `index.html` in your browser or set up a local server.



## Usage Guide

### Navigation

- Use the sidebar to navigate between different modules
- Use the pagination controls at the top of the table to move between modules:

- Double left arrow: Go to Admin module
- Left arrow: Previous module
- Numbered buttons: Specific modules
- Right arrow: Next module
- Double right arrow: Go to Analytics module
- Ellipsis button: Open module dropdown menu





### Admin Module

- Switch between Drafts, Active, Inactive, and Deleted tabs to view different employee lists
- Use the search box to filter employees by name, email, department, etc.


### Other Modules

- Each module displays relevant data in a table format
- Use the search box to filter data within the current module


## Settings Panel Functionality

The settings panel allows users to customize their dashboard experience:

### Accessing Settings

- Click the gear icon (⚙️) in the header to open the settings panel


### Available Settings

#### Display Settings

- **Font Size**: Choose between Small, Medium, and Large font sizes

- Small: 14px base font size
- Medium: 16px base font size (default)
- Large: 18px base font size



- **Language**: Select your preferred language

- English (default)
- Sinhala





#### Notification Settings

- **Email Notifications**: Toggle email notifications on/off
- **System Alerts**: Toggle system alerts on/off






## Header Controls

### User Profile

- Click the user avatar ("L") to view user information:

- Email: [jobs@enhanzer.com](mailto:jobs@enhanzer.com)
- Username: enhanzer





### Notifications

- Click the bell icon to view notifications


### Dark Mode

- Click the star icon to toggle between light and dark mode
- Dark mode preference is saved between sessions


## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technical Details

### Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid layouts)
- JavaScript (ES6+)
- Font Awesome icons

  
### Code Structure

- `index.html`: Main HTML structure
- `styles.css`: All styling and theme definitions
- `script.js`: Core functionality and module management

- Data management
- Table generation
- Navigation
- Settings functionality
- Dark mode toggle
