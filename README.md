# Angular authentication and authorization with JEST, signal and a new control flow

## Overview
This project is a straightforward login page using Angular 17. The focus of this application is to provide a basic functional interface for user authentication, using Signals introduced in Angular 16 and a new control flow system from Angular 17. Also this project uses JEST instead Jasmine/Karma

### Key Features
- **Angular 17**: The latest version of Angular offers cutting-edge features and optimized performance for building modern web applications. It includes new enhanced control flow system.
- **Signals**: system introduced in ANgular 16. that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.
- **JEST Testing Environment**: Despite the integration of Angular and JEST still being experimental, this project leverages JEST for its test environment.
- **Realworld API Backend**: The backend interactions are handled through the Realworld API, ensuring a robust and reliable data management system.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- npm (Node Package Manager)
- Angular CLI (Command Line Interface)

### Installing
To get the development environment running, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all the dependencies.
4. Start the development server using `ng serve`.
5. Open `http://localhost:4200/` in your browser to view the application.

## Running the tests
This project uses JEST as its testing framework. To run the tests:

```bash
ng test

