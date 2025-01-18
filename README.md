# E-Commerce-Application

# Ecommerce-Follow-Along Project

Ecommerce-Follow-Along is a comprehensive project designed to guide developers through the process of building an e-commerce application from scratch. This project will cover various aspects of web development, including front-end design, back-end integration, and database management, providing a hands-on learning experience.

## Milestone 1: Project Overview

In this session, we focused on the foundational elements of the Ecommerce-Follow-Along project. Key topics covered included:

### 1. Project Setup
- Initialized the GitHub repository.
- Set up the basic structure for the application.

### 2. Technology Stack
An overview of the technologies that will be utilized throughout the project:
- Node.js
- Express.js
- MongoDB
- React

### 3. Version Control
- Introduction to Git and GitHub for version control.
- Emphasis on best practices for committing code and managing branches.

### 4. Development Environment
- Configuration of local development environments to ensure consistency across team members.

This milestone sets the stage for further development and deeper exploration of e-commerce functionalities in upcoming sessions.

## Milestone 2: Project Setup and Login Page
In this milestone, we focused on setting up the initial front-end structure and implementing the login page for the application. Key achievements include:

### Front-End Framework:
- Set up the React framework with Vite for a fast and modern development experience.

### Folder Structure:
- Organized the src folder to include separate directories for components, pages, and assets to improve scalability and maintainability.

### Login Page Implementation:
- Developed a basic login page (Login.jsx) that includes a user interface for email and password input.
- Incorporated validation logic to ensure proper user input.

### Routing:
- Implemented React Router for navigation and created routes for the login and signup pages.

### Styling:
- Added basic styling using CSS (App.css) to ensure a clean and user-friendly design.

### Git Integration:
- Added the new files to version control and committed progress to the GitHub repository.

This milestone lays the groundwork for creating the front-end interface and interaction logic for the application.



## Milestone 3: Project Setup for Backend
In this milestone, the foundational backend structure for the e-commerce application was successfully established. Key achievements include:

### Backend Folder Structure:
- Organized the project into clearly defined folders (config, controller, db, middleware, model, and utility) to ensure scalability and maintainability.
### Database Integration:
- Set up a connection to MongoDB using Mongoose, enabling seamless interaction with the database.
### Environment Configuration
- Implementaed a .env file to securely manage sensitive data such as database credentials, ensuring better security practices.
### Middleware Implementation
- Created essential middleware for authentication, error handling, and asynchronous error management to streamline request processing and ensure robust error handling.
### Utility Functions 
-Added reusable utility components like a custom error handler to improve consistency and simplify debugging.
### Git Integration
- Configured version control with Git and included a .gitignore file to exclude sensitive files and unnecessary folders like node_modules.

This milestone sets up a solid backend foundation for further development, including API implementation, user authentication, and business logic handling. It ensures that the project is structured, secure, and ready for future expansion.


## Milestone 4: Creating User Model and Controller

### Overview
In this milestone, we implemented user authentication and profile management for the eCommerce platform. The following tasks were completed:

1. **User Model**: 
   - A `user.js` model was created under the `model` directory to define the user schema. This includes fields such as `name`, `email`, and `password`.
   - Passwords are securely hashed using `bcryptjs`.

2. **User Controller**:
   - A `user.js` controller was added under the `controller` directory to manage user-related functionality.
   - Key functionalities include creating new users, logging in, and updating user details.

3. **File Upload Handling**:
   - `multer` was integrated to handle file uploads, such as user profile images. A separate `multer.js` file was created for configuration.

4. **App Configuration**:
   - The necessary routes were added to `app.js` to integrate the user model and controller into the application.
   
### Technologies Used:
- Node.js
- Express.js
- Multer (for file uploads)
- bcryptjs (for password hashing)

These updates help to set up the basic user management system needed for the eCommerce platform.

---

