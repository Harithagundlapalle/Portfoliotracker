A simple web application to track and manage stock portfolios. Users can add, edit, delete stock holdings, and view a dashboard with real-time portfolio metrics.

Features
CRUD Operations: Add, edit, view, and delete stock holdings.
Real-Time Stock Prices: Fetches live stock prices using an external API.
Portfolio Dashboard: Displays metrics like total portfolio value, top-performing stocks, and portfolio distribution.
Responsive UI: Built with React for a seamless user experience.
Steps to Run the Project Locally
Prerequisites
Node.js: To run the frontend.
Java JDK: To run the backend.
MySQL: To store data.
Frontend Setup
1.Navigate to the frontend directory:
code:
cd frontend  
2.Install dependencies
code:
npm install 
3.Start the development server
code: 
npm start  
4.Access the application at: http://localhost:3000.
Backend Setup
1.Navigate to the backend directory:
 code
cd backend  
2.Configure the MySQL database:

Update application.properties in the src/main/resources/ directory:
spring.datasource.url=jdbc:mysql://localhost:3306/portfolio_tracker  
spring.datasource.username=<your_username>  
spring.datasource.password=<your_password>  
spring.jpa.hibernate.ddl-auto=update  
3.Run the backend server:
 code
mvn spring-boot:run  
4.Backend APIs will be available at: http://localhost:8080.
Database Initialization
Create a database named portfolio_tracker in MySQL:
CREATE DATABASE portfolio_tracker;  
The tables will be auto-created when the backend starts (via JPA).
Assumptions
The portfolio initially consists of 5 randomly selected stocks, each with a fixed quantity of 1.
Real-time stock prices are fetched using a free stock API (e.g., Alpha Vantage).
No authentication mechanism is included (all users share the same portfolio for demo purposes).
Limitations
Free stock APIs may have rate limits, affecting real-time updates.
Backend deployment assumes a single database instance without advanced scaling.
