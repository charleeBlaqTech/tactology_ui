Tectology Documents Application Documentation

Project Overview

This application is a full-stack web application built to manage user authentication, CRUD operations for departments and sub-departments, and a protected routing system. It incorporates a modern tech stack to ensure scalability, maintainability, and an excellent developer experience.

Technologies Used

Frontend: Next.js

Purpose:

Build a server-rendered React application with optimized performance.

Simplifies routing with its built-in file-based routing system.



<!-- ==================================KEY FEATURES -->
Key Features:

Server-Side Rendering (SSR) and Static Site Generation (SSG).

Seamless API integration with the backend.


=========================================BACKEND=======================================
Backend: NestJS

Purpose:

Create a modular, scalable server-side application using TypeScript.

Enforce clean architecture with decorators and middleware.

Key Features:

Dependency Injection for clean, testable code.

Support for RESTful API design and WebSocket integration.


=====================================================DATABASE==============================
Database: PostgreSQL

Purpose:

Store structured data with strong ACID compliance for reliability.

Handle complex relational data effectively.

Key Features:

Advanced indexing and querying capabilities.

Open-source and highly scalable.


==================================================ORM==================================
ORM: TypeORM

Purpose:

Map database tables to JavaScript/TypeScript classes for seamless integration.

Simplify database operations with an abstracted query interface.

Key Features:

Support for migrations to manage schema changes.

Compatibility with PostgreSQL and other relational databases.


==================================================USER AUTHENTICATION==========================================
Authentication: JWT & bcrypt

JWT (JSON Web Tokens):

Handle secure user authentication and session management.

Tokens are generated during login and verified on protected routes.

bcrypt:

Hash user passwords before storing them in the database for enhanced security.

Ensures one-way encryption of sensitive data.

Styling: Tailwind CSS

Purpose:

Rapidly build modern, responsive UI components.

Maintain consistency across the application with a utility-first CSS framework.

Key Features:

Highly customizable and developer-friendly.

Integrated dark mode and responsive design utilities.


=====================================================typescript===================================
TypeScript

Purpose:

Enhance code reliability and maintainability by introducing static typing.

Catch potential bugs at compile-time rather than runtime.

Key Features:

Provides IntelliSense and auto-completion for better developer experience.

Enforces type safety in the codebase.


==============================================================
React Icons

Purpose:

Add visually appealing icons to the user interface.

Key Features:

Large collection of customizable, lightweight icons.



=================================================
Class Validator

Purpose:

Validate incoming requests to ensure data integrity.

Reduce boilerplate by integrating decorators in DTOs (Data Transfer Objects).

Key Features:

Supports validation rules like @IsString, @IsEmail, etc.

Features


============================================================================AUTHENTICATIONOF USERS=================
Authentication

User login and signup with username and password.

Password hashing using bcrypt for enhanced security.

JWT-based token generation for secure session management.

CRUD for Departments

List, create, update, and delete departments.

Manage sub-departments within a department.

Provide table and card views for department data.

Protected Routes

Secure sensitive routes by verifying JWT tokens.

Redirect unauthorized users to the login page.

UI/UX

Simple, intuitive design built with Tailwind CSS.

Responsive layouts for mobile and desktop views.

Consistent use of React Icons for enhanced visuals.

Getting Started

Prerequisites

Node.js installed on your local machine.

PostgreSQL installed and running.

Environment variables configured in .env files for both frontend and backend.

Environment Variables

Example .env file for backend:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_jwt_secret


<!-- ===================================================INSTALLATION =========================== -->
Installation

Clone the repository:

git clone https://github.com/charleeBlaqTech/tactology_ui     =============FRONTEND UI====================
git clone https://github.com/charleeBlaqTech/tactology_task_api     =============BACKEND API====================

Navigate to the backend folder:

cd backend
npm install

Navigate to the frontend folder:

cd frontend
npm install

Running the Application

Start the PostgreSQL server.

Run the backend server:

npm run start:dev

Run the frontend application:

npm run dev

Open the application in your browser at http://localhost:3000.

Folder Structure

Backend

backend/
├── src/
│   ├── auth/    # Authentication module
│   ├── departments/ # Departments module
│   ├── entities/    # Entity definitions
│   ├── main.ts      # Application entry point

Frontend

frontend/
├── components/    # Reusable components
├── pages/         # Next.js pages
├── styles/        # Global styles
├── utils/         # Helper functions

Future Improvements

Add user roles and permissions for fine-grained access control.

Implement testing using Jest for both frontend and backend.

Add Docker support for containerization.

Enhance UI with additional animations and transitions.