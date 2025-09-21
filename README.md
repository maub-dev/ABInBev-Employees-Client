# ABInBev-Employees-Client
This is the UI to manage employees for AB InBev company. Connects with the API: https://github.com/maub-dev/ABInBev-Employees

# Requirements
To run this application is required that you Node.js and npm installed on your machine.

# Running the application
Follow the steps in the API repository to start the backend for this UI.
Download the source code, in the /services/api.js adjust the URL in Axios configuratiton to the API address.
Open the UI project folder in your terminal, and run the commands "npm install" and then "npm start".
In order to login to the application you will need first an employee that was previously created by the API with its admin user.

# Pages
http://localhost:3000/ - Login page\
http://localhost:3000/employees - Employee list\
http://localhost:3000/employees/new - Create a new Employee\
http://localhost:3000/employees/edit/{id} - Edit an Employee

# Author 
maub-dev
