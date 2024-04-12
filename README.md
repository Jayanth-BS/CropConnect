# CROP-CONNECT

This project is a farming marketplace application that allows farmers to sell their products and buyers to purchase them. It consists of both frontend and backend components.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Backend Endpoints](#backend-endpoints)
- [Frontend Features](#frontend-features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Farming Marketplace is an online platform designed to connect farmers with buyers. Farmers can list their products for sale, and buyers can browse and purchase these products. The application provides authentication, product management, cart management, transaction handling, and other functionalities required for a farming marketplace.

## Features

- User authentication (signup, login)
- Farmer and buyer accounts
- Product listing and management
- Shopping cart functionality
- Transaction processing
- Yield prediction and profit calculation

## Technologies Used

### Backend

- Express.js: A web application framework for Node.js
- Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS)
- Axios: Promise-based HTTP client for making HTTP requests
- MongoDB: A NoSQL database used for storing user data
- MySQL: A relational database used for storing product and transaction data

### Frontend

- React: A JavaScript library for building user interfaces
- React Router: A library for routing in React applications
- Material-UI: A popular React UI framework for building responsive web apps
- Axios: Promise-based HTTP client for making HTTP requests from the frontend

## Setup
## Setup

1. Clone the repository.
2. Set up the backend server by navigating to the `server` directory:
    ```bash
    cd server
    npm install
    npm start
    ```
    To run the server with nodemon:
    ```bash
    nodemon server.js
    ```

3. Set up the frontend by navigating to the `client` directory:
    ```bash
    cd ../client
    npm install
    npm start
    ```
    This will start the development server for the frontend application.

4. Once both the backend server and frontend application are set up, you can access the application by navigating to the specified URL in your web browser.


## Backend Endpoints

The backend server provides the following endpoints:

- `/`: Check if a user exists.
- `/signup-mongodb`: Signup endpoint for MongoDB.
- `/check-user`: Check if a user exists in MongoDB.
- `/signup-sqlserver`: Signup endpoint for SQL Server.
- `/api/products`: Add a new product.
- `/api/cart/:productId`: Delete an item from the cart.
- `/api/cart/add`: Add an item to the cart.
- `/api/transactions`: Complete a transaction.
- `/login-user`: Handle user login.
- `/api/buyer-id`: Fetch buyer ID using buyer email.
- `/api/farmer-id`: Fetch farmer ID using farmer email.
- `/api/cart`: Fetch cart items.
- `/predict-yield`: Predict yield.
- `/calculate-profit`: Calculate profit.

## Frontend Features

The frontend application provides the following features:

- User authentication (signup, login)
- Farmer and buyer account creation
- Product listing and browsing
- Shopping cart functionality
- Checkout process
- User profile management

## Usage

To use the Farming Marketplace application, follow the setup instructions provided above. Once the backend server and frontend application are set up, you can access the application by navigating to the specified URL in your web browser.

## Contributing

Contributions to this project are welcome. Please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the [MIT License](LICENSE).
