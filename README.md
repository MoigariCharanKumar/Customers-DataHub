# Customers DataHub

Customers DataHub is a full-stack web application built with React, Node.js, and PostgreSQL. It provides functionality to manage customer records, including searching, pagination, and sorting.

## Installation and Setup

1. Clone the repository:

git clone https://github.com/MoigariCharanKumar/Customers-DataHub.git
- cd Customers-DataHub

2. Backend Setup:

- cd backend
- npm install

# Set up PostgreSQL database and update connection config
- Run the sql commands of Database.sql from backend folder in pgadmin4 and create a database and table.
- Create  a connection to postgresql through:
    ```user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
- After making successfull connection ```npm run dev-backend```

3. Frontend Setup:

- cd frontend
- npm install
- npm start

## Running the Application

1. Start the backend server:
- cd backend
- npm run dev-backend

2. Start the frontend development server:

- cd frontend
- npm start

3. Open `http://localhost:3000` in your browser to access the application.

## Project Structure

- **backend**: Contains the Node.js backend server code.
- **frontend**: Contains the React frontend application code.
- **backend/database.sql**: SQL commands to set up the PostgreSQL database schema and insert dummy data in pgadmin4.

## Technologies Used

- React
- Node.js
- Express
- PostgreSQL
- HTML
- CSS
- JavaScript

## Screenshots

![Displaying  of 50 records].(![image](https://github.com/MoigariCharanKumar/Customers-DataHub/assets/140943809/88f6179b-1bf2-4c2d-91d3-2f970959db69)
)
![Displaying the records according to search input of name or location].(![image](https://github.com/MoigariCharanKumar/Customers-DataHub/assets/140943809/64ff7128-78e0-4ed0-8b51-78c4344cf824)
)
! [Displaying the records according to sorting order of dates].(![image](https://github.com/MoigariCharanKumar/Customers-DataHub/assets/140943809/166bb73a-727a-4c5f-ae71-6559eb9db8e1)
)
![Displaying the  records according to sorting order of time].(![image](https://github.com/MoigariCharanKumar/Customers-DataHub/assets/140943809/42d801ca-94c4-499f-90aa-1f215c75875a)
)
![Displaying the records according to search input and sorting order of date and time].(![image](https://github.com/MoigariCharanKumar/Customers-DataHub/assets/140943809/a1a16f71-d385-4e08-8c2f-eb54939d1b9f)
)
![Pagination].(![image](https://github.com/MoigariCharanKumar/Customers-DataHub/assets/140943809/2485e7af-7c1a-499c-a3d6-46b7d519afb6)
)
