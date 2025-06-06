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

This milestone sets the stage for further development and deeper exploration of e-commerce functionalities in upcoming sessions.

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
- Implemented a .env file to securely manage sensitive data such as database credentials, ensuring better security practices.
### Middleware Implementation
- Created essential middleware for authentication, error handling, and asynchronous error management to streamline request processing and ensure robust error handling.
### Utility Functions 
-Added reusable utility components like a custom error handler to improve consistency and simplify debugging.
### Git Integration
- Configured version control with Git and included a .gitignore file to exclude sensitive files and unnecessary folders like node_modules.

This milestone sets up a solid backend foundation for further development, including API implementation, user authentication, and business logic handling. It ensures that the project is structured, secure, and ready for future expansion.

## Milestone 4: Creating User Model and Controller

In this milestone, the focus was on implementing the user model and controller for managing user data and operations in the backend. Key achievements include:

### User Model:
- Created a User schema using Mongoose to define the structure for storing user information in the MongoDB database.
- Fields include essential user details such as name, email, password, and timestamps.
- Added validation for required fields and unique constraints for the email field.

### Password Hashing:
- Implemented password hashing using bcrypt to securely store user passwords in the database.

### User Controller:
- Developed a user controller to handle user-related backend operations such as registration and login.
- Added methods for creating new users and retrieving user details.

### API Endpoints:
- Set up API routes for user-related operations, including:
  - /api/users/register: Endpoint to register a new user.
  - /api/users/login: Endpoint to authenticate a user.

### Error Handling:
- Added error handling for scenarios such as duplicate email registration and invalid login credentials.

### Git Integration:
- Committed progress to version control, ensuring proper documentation of changes and updates.

This milestone provides the necessary backend infrastructure to manage user data, supporting future features like user authentication and authorization.


## Milestone 5: Creating the Signup Page
In this milestone, we focused on developing the signup page to enable users to create an account within the application. Key achievements include:

### Signup Page Implementation:
- Developed the Signup.jsx component with a user-friendly interface for account registration.
- Included form fields for user details such as name, email, and password.

### Form Validation:
- Added client-side validation logic to ensure proper input formatting and error messages for invalid entries.

### Integration with Routing:
- Configured navigation to and from the signup page using React Router for seamless user flow.

### Styling:
- Enhanced the design of the signup page to align with the application's overall styling for a consistent user experience.

### Code Organization:
- Refactored the code into reusable components where possible to promote cleaner and more maintainable code.

This milestone enhances the user experience by allowing new users to register, paving the way for further integration with back-end user authentication systems.

## Milestone 6: Encrypting Passwords and Storing User Data

In this milestone, the focus was on enhancing the security and data handling during the user registration process. Key achievements include:

### Password Encryption:
- Utilized bcrypt to hash user passwords during the signup process to ensure secure storage.
- Replaced plain-text password storage with hashed passwords in the database.

### Complete User Data Storage:
- Stored all user information, including name, email, and the hashed password, in the database using the User model.
- Ensured sensitive data is handled securely and adheres to best practices.

### Validation Enhancements:
- Added additional backend validation to verify that required fields are provided during signup.
- Prevented duplicate user registrations by ensuring email uniqueness in the database.

### API Integration:
- Updated the registration endpoint (/api/users/register) to handle password hashing and data storage seamlessly.

### Live Coding Walkthrough:
- Demonstrated the implementation of these features during a live coding session, explaining the importance of password encryption and secure data handling.

This milestone significantly enhances the application's security by protecting user credentials and laying a solid foundation for authentication and authorization in future milestones.

## Milestone 7: Creating the Login Endpoint  

In this milestone, we focused on implementing a secure and efficient login endpoint for user authentication. Key achievements include:  

### 1. Login Endpoint Creation:
- Developed an API endpoint (/api/users/login) to handle user login requests.  
- Configured the endpoint to accept user credentials, such as email/username and password.  

### 2. User Retrieval:  
- Implemented logic to retrieve the corresponding user from the MongoDB database based on the provided email or username.  

### 3. Password Validation:  
- Utilized bcrypt to compare the hashed password entered by the user with the stored hashed password in the database.  
- Ensured that only valid credentials allow user authentication while providing appropriate error messages for invalid inputs.  

### 4. Error Handling:
- Added robust error handling to return informative responses for scenarios such as:  
  - Non-existent users.  
  - Incorrect passwords.  

### 5. Security Enhancements:
- Ensured that sensitive user data, such as passwords, remains protected during the authentication process.  
- Followed industry best practices to prevent common vulnerabilities, such as brute force attacks.  

This milestone provides the foundation for user authentication, paving the way for implementing session management and token-based authentication in future milestones.  

# Milestone 8: Designing the Homepage and Card Component  

In this milestone, we focused on creating a visually appealing and functional homepage layout with reusable components for showcasing products. Key achievements include:  

### 1. Card Component:
- Designed a reusable card component for displaying product details.  
- Configured props to dynamically render product information such as:  
  - Product Name  
  - Product Image  
  - Product Price  

### 2. Homepage Layout:
- Set up a clean and responsive homepage layout for displaying multiple product cards.  
- Utilized grid layout and flexbox to ensure a visually consistent and user-friendly design.  

### 3. Component Reusability:
- Ensured the card component is modular and adaptable for use across different pages of the application.  

### 4. Code Submission:  
- Pushed the updated code to the GitHub repository.  
- Verified that the repository is publicly accessible for evaluation.  

## Milestone 9: Creating the Product Form  

In this milestone, we focused on building a form that allows users to add products, including support for multiple product images. Key achievements include:  

### 1. Product Form Implementation:  
- Designed and developed a form to capture essential product details, such as:  
  - Product Name  
  - Description  
  - Price  
  - Category  
  - Multiple Product Images (file upload support)  

### 2. Image Upload Handling:  
- Implemented functionality to allow multiple product images to be uploaded.  
- Ensured proper validation for image formats and file sizes.  

### 3. Data Management:  
- Configured state management to handle form inputs efficiently.  
- Validated user inputs before submission to ensure accurate product data.  

### 4. Future Enhancements & Experimentation:  
- Considered additional features for better access control:  
  - Admin Access: Restrict product creation to admin users only.  
  - Shop Profiles: Implemented a feature where only users with shop profiles can upload products.  
  - Enhanced UI/UX: Improved form design for a seamless user experience.  

## Milestone 10: Creating the Product Schema and API Endpoint  

In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.  

### 1. Product Schema Definition:  
- Defined a structured product schema using Mongoose to store product data in MongoDB.  
- Ensured each field has proper validation to maintain data integrity:  
  - Name: Required, string  
  - Description: Required, string  
  - Price: Required, number, with validation for non-negative values  
  - Image URL(s): Required, array of strings for multiple image storage  
  - Category: Required, string  
  - CreatedAt: Automatically generated timestamp  

### 2. Endpoint Creation:  
- Developed a POST endpoint (/api/products) to accept product details from the frontend.  
- Implemented validation to ensure only correctly formatted data is stored in the database.  
- Saved product information to MongoDB using Mongoose models.  

### 3. Data Validation & Integrity:  
- Enforced strict validation to prevent invalid or incomplete product entries.  
- Returned appropriate error messages for missing or incorrect data inputs.  

### 4. Future Enhancements & Experimentation:  
- Considered adding role-based access control:  
  - Admin Access: Only admin users can create new products.  
  - Shop Profiles: Restrict product uploads to users with a registered shop profile.  
  - Image Upload Handling: Implement a cloud-based solution (e.g., Cloudinary, AWS S3) for better image management.  

## Milestone 11: Fetching and Displaying Product Data  

In this milestone, we focused on retrieving product data from the backend and dynamically displaying it in the frontend. Key achievements include:  

### 1. Backend: Creating an API Endpoint to Fetch All Products  
- Developed a GET endpoint (/api/products) in the backend to send all product data to the frontend.  
- Implemented MongoDB queries using Mongoose to retrieve all stored products.  
- Ensured error handling to manage potential issues in fetching data.  

### 2. Frontend: Fetching Data from API  
- Created an API call function using fetch or axios in React to retrieve product data from the backend.  
- Managed the fetched data using React useState and useEffect hooks to ensure dynamic updates.  

### 3. Displaying Products Dynamically  
- Passed the fetched product data to a ProductCard component.  
- Used the product details (name, image, price, etc.) as props to display them dynamically.  
- Applied responsive CSS styling to create a visually appealing product grid layout.  

### 4. Future Enhancements & Experimentation:  
- Loading States: Implemented a loading spinner while fetching product data.  
- Error Handling: Displayed meaningful error messages in case of API failure.  
- Pagination & Filters: Considered adding pagination and filtering options for better user experience.  

## Milestone 12: Filtering Products by User Email and Displaying Data  

In this milestone, we focused on filtering products based on the user's email and sending only relevant product data to the frontend. Key achievements include:  

### 1. Backend: Creating a Filtered API Endpoint  
- Developed a GET endpoint (/api/products/:email) to return products associated with a specific user email.  
- Used Mongoose to query the database and fetch only the products uploaded by the provided email.  
- Implemented error handling to manage scenarios where no products match the email.  

### 2. Frontend: Fetching Filtered Data from API  
- Created a function in React to fetch only products uploaded by the logged-in user.  
- Used Axios or Fetch API to make requests to the backend with the logged-in user's email.  
- Managed product data using useState and useEffect hooks.  

### 3. Displaying Filtered Products Dynamically  
- Passed the fetched filtered product data to a ProductCard component.  
- Rendered product details such as name, image, price, and description dynamically.  
- Ensured a clean and structured UI using CSS and responsive layout techniques.  

### 4. Future Enhancements & Experimentation:  
- Role-Based Access: Only allow authorized users (e.g., shop owners or admins) to upload and view specific products.  
- Advanced Filtering: Extend filtering options to include categories, price ranges, and product availability.  
- Search Functionality: Implement a search bar for users to quickly find their uploaded products. 

## Milestone 13: Updating Product Data and Form Auto-Fill  

In this milestone, we focused on implementing update functionality for product data, allowing users to modify existing product information through an editable form. Key achievements include:  

### Backend: Creating an Update Endpoint  
- Developed a PUT endpoint to receive and update existing product data in MongoDB.  
- Used Mongoose to find the product by its ID and update its fields.  
- Ensured data validation to maintain data integrity and prevent errors during updates.  
- Handled potential errors, such as cases where the product is not found.  

### Frontend: Form Auto-Fill and Edit Functionality  
- Added an Edit button to each product card.  
- Clicking the Edit button opens a form pre-filled with the existing product details.  
- Users can modify the form fields and save changes to update the product.  
- Used React state and useEffect to manage form data and populate it with the product’s current details.  

### UI and UX Enhancements  
- Ensured a responsive layout for the edit form, providing a user-friendly experience.  
- Added error messages for invalid data and success notifications on successful updates.  

### Future Enhancements & Experimentation  
- Admin-Only Access: Restrict update functionality to authorized users, such as shop owners or admins.  
- Real-Time Updates: Implement real-time data updates on the product listing page.  
- Optimized Form Design: Enhance the form with file uploads for updating product images and improved field validation.

## Milestone 14: Deleting Product Data from MongoDB  

In this milestone, we focused on implementing delete functionality for product data, allowing users to remove existing product records from the database. Key achievements include:  

### Backend: Creating a Delete Endpoint  
- Developed a DELETE endpoint to remove product data from MongoDB using the product ID.  
- Used Mongoose to find and delete the product by its ID.  
- Implemented error handling to manage scenarios where the product ID does not exist.  

### Frontend: Delete Button and Request Handling  
- Added a Delete button to each product card.  
- Clicking the Delete button sends a request to the delete endpoint with the product ID.  
- Implemented a confirmation dialog to ensure users intend to delete the product.  
- Updated the product list dynamically to remove the deleted product without refreshing the page.  

### UI and UX Enhancements  
- Provided feedback on successful or failed delete operations.  
- Enhanced the user experience with a clean and responsive UI for managing product deletions.  

### Future Enhancements & Experimentation  
- Soft Delete: Instead of permanently deleting products, mark them as inactive for possible recovery later.  
- Role-Based Permissions: Allow only authorized users (e.g., admins) to delete products.  
- Batch Deletion: Add functionality to delete multiple products at once.

## Milestone 15: Creating a Responsive Navbar  

In this milestone, we focused on building a reusable and responsive Nav component that enhances navigation across multiple pages of the e-commerce application. Key achievements include:  

### Frontend: Creating the Nav Component  
- Designed a new Nav component with navigation links to all key pages:  
  - Home  
  - My Products  
  - Add Product  
  - Cart  
- Implemented smooth navigation between these pages using React Router.  

### Responsive Design  
- Used CSS Flexbox and media queries to ensure the Navbar is fully responsive on all screen sizes (mobile, tablet, desktop).  
- Added a hamburger menu for smaller screens to toggle the navigation links.

## Milestone 16: Product Info Page with Quantity Selection and Add to Cart  

In this milestone, we focused on creating a dedicated *Product Info Page* to display detailed information for each product and allow users to select quantity and add the product to their cart.  

### *Frontend: Product Info Page*  
- Designed a new *Product Info Page* that shows all relevant product details such as:  
  - *Product Name*  
  - *Product Description*  
  - *Product Price*  
  - *Product Images*  
- Added a *quantity selector* that allows users to choose how many units they want to add to their cart.  
- Implemented an *Add to Cart button* to add the selected product and quantity to the user's cart.  

### *React Router Integration*  
- Used *React Router* to navigate to the Product Info Page when a product card is clicked on the homepage or product listing page.  
- Passed the product ID through the URL to fetch and display product details on the new page.  

### *State Management and API Integration*  
- Fetched product details from the backend using the product ID.  
- Managed the selected quantity using *React state*.  
- Implemented a function to handle adding the product to the cart, updating the cart state in the application.  
- *Batch Deletion*: Add functionality to delete multiple products at once.

## Milestone 17: Implementing Cart Functionality  

In this milestone, we focused on adding *cart functionality* to the application, allowing users to store selected products in their cart.  

### *Backend: Updating the User Schema*  
- Modified the *User Schema* to include a cart field, which stores an array of selected products.  
- Each product stored in the cart includes details such as *Product ID, Name, Quantity, and Price*.  
- Used *Mongoose Schema Validation* to ensure data integrity.  

### *Backend: Creating the Cart API Endpoint*  
- Developed a *POST* endpoint (/api/cart/add) to receive product details from the frontend and store them in the user's cart.  
- Implemented logic to check if a product already exists in the cart and update the quantity instead of adding duplicates.  
- Ensured proper *error handling* to manage scenarios such as invalid product IDs or missing user authentication.  

### *Frontend: Adding Products to Cart*  
- Created a function to send *selected product details* to the backend when the "Add to Cart" button is clicked.  
- Implemented *state management* to dynamically update the UI when a product is added to the cart.  
- Displayed a confirmation message to notify users when a product is successfully added.  

## Milestone 18: Fetching Cart Data  

In this milestone, we implemented functionality to *retrieve cart data* for a logged-in user, allowing them to view the products they have added to their cart.  

### *Backend: Creating an Endpoint to Fetch Cart Data*  
- Developed a *GET* endpoint (/api/cart) to retrieve the cart contents for the authenticated user.  
- Queried the database using *Mongoose* to fetch only the products stored in the user's cart.  
- Implemented *error handling* to manage scenarios where the cart is empty or the user is not authenticated.  

### *Frontend: Displaying Cart Data*  
- Created a function to *fetch cart data* from the backend when the cart page loads.  
- Used *state management* to dynamically update and display the list of products in the cart.  
- Displayed important product details such as *name, image, quantity, and price*.

## Milestone 19: Implementing the Cart Page with Quantity Controls  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Update the *Cart Page* to display products dynamically.  
- Implement *increase (+) and decrease (-) buttons* for quantity adjustment.  
- Modify the backend to support cart updates.  

---

### *1. Frontend Updates*  
- Added *ProductCart.jsx* to create a reusable cart item component.  
- Edited *Cart.jsx* to display cart products using the new component.  
- Implemented *buttons to increase and decrease quantity* for each product.  
- Improved UI for better user experience.  

---

### *2. Backend Updates*  
- Modified *product controller* to handle cart quantity updates.  
- Ensured proper request handling for increasing and decreasing product quantity. 

## Milestone 20: Implementing the User Profile Page  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Create a *backend endpoint* to send user data to the frontend.  
- Develop a *Profile Page* to display user details.  
- Implement an *"Add Address"* button for address management.  

---

### *1. Backend Updates: User Data Endpoint*  
- Created a *GET* endpoint (/api/user/profile) to send user data.  
- Fetched *name, email, profile photo, and address* from the database.  
- Ensured proper authentication before sending user details.  

---

### *2. Frontend Updates: Profile Page*  
- Designed a *Profile Page* to display:  
  - *Profile Section: User’s **photo, name, and email*.  
  - *Address Section*:  
    - Displayed the *user’s saved address*.  
    - If no address is found, displayed *"No address found"*.  
    - Added an *"Add Address"* button for address input.  
- Styled the page for a *clean and user-friendly UI*.  

## Milestone 21: Implementing the Address Form Page  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Create a *frontend form* to collect user address details.  
- Store address information using *state management*.  
- Implement navigation from the *Profile Page* to the *Address Form*.  

---

### *1. Frontend Updates: Address Form Page*  
- Designed an *address input form* to collect:  
  - *Country*  
  - *City*  
  - *Address Line 1*  
  - *Address Line 2*  
  - *ZIP Code*  
  - *Address Type (Home/Work/Other)*  
- Created a *state* to store and manage the form input.  
- Ensured proper *form validation* for required fields.  

---

### *2. Navigation & User Flow*  
- Clicking *"Add Address"* on the Profile Page redirects to the Address Form.  
- Implemented smooth *navigation handling* to improve user experience.  

---

### *3. Future Enhancements & Experimentation*  
- *Save Address to Database*: Store the address using a backend API.  
- *Auto-fill Option*: Enable users to update an existing address instead of entering a new one.  
- *Google Maps API Integration*: Allow users to select their address using a map.  

## Milestone 22: Storing User Address in Database  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Create a *backend endpoint* to receive and store user address data.  
- Update the *User collection* to include an *address array*.  
- Learn how to store and manage multiple addresses for a user.  

---

### *1. Backend Updates: Address Storage Endpoint*  
- Created a *POST* endpoint (/api/user/address) to receive address data from the frontend.  
- Validated the received address data before storing it in the database.  
- Updated the *User model* to include an *address array* for storing multiple addresses.  
- Implemented *error handling* to ensure data integrity.  

---

### *2. Frontend Integration*  
- Modified the *Address Form* to send a *POST request* to the new backend endpoint.  
- Ensured proper *state management* to handle form input.  
- Provided *user feedback* (e.g., success message) upon successful address submission.  

---

### *3. Future Enhancements & Experimentation*  
- *Edit Address Feature*: Allow users to modify their saved addresses.  
- *Delete Address Option*: Provide users the ability to remove an address.  
- *Set Default Address*: Implement functionality to set a preferred/default address.  

---
## Milestone 23: Implementing Order Placement and Address Selection  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Add a *"Place Order"* button inside the cart page.  
- Create a *Select Address Page* where users can choose a delivery address.  
- Write a *Mongoose schema* to store order details in the database.  

---

### *1. Frontend Updates: Cart Page & Address Selection*  
- Added a *"Place Order"* button inside the cart page.  
- When clicked, it navigates to the *Select Address Page*.  
- Displayed all saved addresses for the user.  
- Allowed users to *select* an address for order delivery.  

---

### *2. Backend Updates: Order Schema & Storage*  
- Created a *Mongoose schema* to store order details, including:  
  - *User ID* (to associate orders with users)  
  - *Product details* (items in the cart)  
  - *Selected delivery address*  
  - *Order status* (pending, shipped, delivered)  
  - *Total price*  
  - *Timestamp*  
- Implemented an endpoint to *store orders* in the database.  

---

### *3. Future Enhancements & Experimentation*  
- *Order Confirmation Page*: Display order details after selection.  
- *Payment Integration*: Connect payment gateways for seamless checkout.  
- *Order Tracking*: Allow users to track the status of their orders.  

---
## Milestone 24: Order Confirmation Page  

### Learning Goals 🎯  
By the end of this milestone, you will:  
- Create an *Order Confirmation Page*.  
- Display ordered *products, **delivery address, and **total price*.  
- Implement a *"Place Order"* button for final confirmation.  

---

### *1. Frontend Updates: Order Confirmation Page*  
- Designed an *Order Summary Section* displaying:  
  - *All products* being ordered with names, images, and prices.  
  - *Selected delivery address* chosen in the previous step.  
  - *Total order value*, summing up the prices of all cart items.  
- Placed a *"Place Order"* button at the bottom to confirm the purchase.  

---

### *2. Backend Updates (Future Enhancements)*  
- Store *order details* in the database upon confirmation.  
- Implement an *order status tracking system* (Pending, Shipped, Delivered).  
- Integrate *payment gateways* for a complete checkout experience.  

---

### *3. Future Enhancements & Experimentation*  
- *Order Summary Styling*: Improve UI/UX with a clean and structured layout.  
- *Payment Integration*: Add payment methods for real transactions.  
- *Order Confirmation Email*: Send users a confirmation email after placing an order.  

---



### Milestone 25: Placing Orders in MongoDB
Learning Goals 🎯
By the end of this milestone, you will:

Create an API endpoint to process and store orders in MongoDB.
Retrieve user details using their email.
Store order details for each product using the existing order schema.
1. Backend Updates: Order Placement Endpoint
Developed a POST endpoint (/api/orders/place) to receive:
User email (to fetch _id from the database).
Selected delivery address.
List of ordered products.
Retrieved the user’s _id based on the provided email.
Created separate order entries for each product but linked to the same address.
Stored all order details in the orders collection using Mongoose.
2. Data Flow
Frontend sends order details (products, user email, selected address) to the backend.
Backend retrieves the user's _id from MongoDB using their email.
Each product is stored as a separate order in the orders collection.
The order includes:
Product details (name, image, price, etc.).
User information (retrieved via _id).
Selected delivery address.
3. Future Enhancements & Experimentation
Order Status Tracking: Add a status field (Pending, Shipped, Delivered).
Payment Integration: Store payment details and transaction IDs.
Admin Panel: Allow admins to view and manage all orders.

-----


### Milestone 26: Fetching User Orders
Learning Goals 🎯
By the end of this milestone, you will:

Create an API endpoint to retrieve all orders of a specific user.
Fetch the user's _id from the database using their email.
Retrieve and send all orders associated with that user.
1. Backend Updates: Fetch User Orders Endpoint
Developed a GET endpoint (/api/orders/:email) to:
Receive the user’s email as a parameter.
Retrieve the user’s _id from the database using the email.
Query the orders collection to get all orders linked to that _id.
Return the list of orders in the response.
2. Data Flow
Frontend sends a request with the user’s email to the backend.
Backend retrieves the user's _id using their email.
Orders collection is queried to fetch all orders related to the _id.
Response contains the list of orders, including:
Product details (name, image, price, etc.).
Order status (Pending, Shipped, Delivered).
Selected delivery address.
3. Future Enhancements & Experimentation
Order Filtering: Allow users to filter orders by status (e.g., Completed, Pending).
Pagination: Implement pagination for users with multiple orders.
Order Cancellation: Add functionality to cancel an order if it's not yet shipped.

------



### Milestone 27: Displaying User Orders
Learning Goals 🎯
By the end of this milestone, you will:

Create a frontend page to display all user orders.
Fetch order data from the backend using the /api/orders/:email endpoint.
Display order details, including product info, order status, and delivery address.
1. Frontend Updates: My Orders Page
Created a My Orders page (MyOrders.jsx) to display user orders.
Implemented a GET request to fetch orders from the backend.
Sent the user's email in the request to retrieve their specific orders.
Managed orders using React state (useState) and effects (useEffect).
2. Displaying User Orders
Rendered order details dynamically, including:
Product Name & Image
Price & Quantity
Order Status (Pending, Shipped, Delivered)
Selected Delivery Address
3. Navigation & UI Improvements
Added My Orders link to the Navbar for easy navigation.
Ensured responsive design for a seamless user experience.
4. Future Enhancements & Experimentation
Order Tracking: Implement real-time order status updates.
Order History: Allow users to filter orders based on date/status.
Order Details Page: Add a detailed order view with invoice download.


-----



### Milestone 28: Order Cancellation Feature
Learning Goals 🎯
By the end of this milestone, you will:

Enable users to cancel their placed orders.
Implement order status management in the backend.
Ensure the UI reflects canceled orders properly.
1. Backend Updates: Cancel Order Endpoint
Created a PUT endpoint (/api/orders/cancel/:id).
The endpoint:
Receives the order ID from the request.
Finds the corresponding order in the database.
Updates the order status to "Canceled".
Saves the updated order in MongoDB.
2. Handling Order Status & UI Updates
Orders marked as Canceled are displayed with a "Canceled" status.
The cancel button is hidden for already canceled orders.
Implemented real-time UI updates after cancellation.

-----


### Milestone 29: Integrating PayPal for Online Payments
Learning Goals 🎯
By the end of this milestone, you will:

Learn how to use the PayPal API.
Understand how to integrate online payments into the application.
1. Setting Up PayPal Developer Account
Create a PayPal Developer Account at PayPal Developer Dashboard.
Navigate to the Sandbox Accounts section.
Copy the UserID of the sandbox account and save it.
Locate and copy the Client ID from the sandbox accounts and save it for later use.
2. Frontend Updates: Adding Payment Options
Updated the Order Confirmation Page (OrderConfirmation.jsx).
Added two payment options using radio buttons:
Cash on Delivery (COD)
Online Payment (PayPal)
When selecting Online Payment, the PayPal buttons should be displayed dynamically.
3. Future Enhancements & Next Steps
In the next milestone, we will write the code to display and use PayPal payment buttons.
Implement secure backend handling for online payments.
Ensure a smooth user experience by handling payment success and failure cases.
# Milestone 30: Implementing PayPal Online Payment Integration  

## 🎯 What We Did  

In this milestone, we successfully integrated *PayPal online payments* into our application. This allows users to choose between *Cash on Delivery (COD) and PayPal* for order payments. Below is a step-by-step breakdown of the tasks we completed.  

---

## 🛠 Steps We Followed  

### ⿡ Created a PayPal Developer Account  
- We registered on the *[PayPal Developer Dashboard](https://developer.paypal.com/)*.  
- We navigated to the *Sandbox Accounts* section and generated a test account.  
- From this test account, we copied the *Client ID* needed for integration.  

---

### ⿢ Installed PayPal SDK in React  
To integrate PayPal, we installed the required npm package:


# 🌟 Milestone 31: Implementing Global State Management with Redux

Welcome to Milestone 31! In this milestone, we learned how to implement *global state management* using *Redux*. This helps us manage data like user email across the entire app without the need for prop drilling.

---

## 🎯 Learning Goals
By the end of this milestone, we understood:

- How to use *Redux* for managing global application state.
- How to configure and use a *Redux store* in a React app.
- How to create and use *actions* and *reducers*.
- How to share global data (like user email) across multiple components.

---

## 🧰 Steps We Followed

### ⿡ Installed Redux and React-Redux

We installed the necessary Redux packages:

```bash

"npm install redux react-redux"


###   Milestone 32: Using Redux to Store and Access Email Globally

Hey Kalvians! Welcome to Milestone 32!  
Today, we expanded on our Redux setup by *storing the user email* in the global state during login and *accessing* it in all other pages using Redux hooks.

---

## 🎯 Learning Goals

By the end of this milestone, we learned:

- How to *dispatch* actions to update the Redux store.
- How to *access* global state using useSelector.
- How Redux simplifies global data sharing across components.

---

## 🧰 Steps We Followed

### ⿡ Stored User Email in Global State (Login Page)

In the Login page, once the user successfully logs in, we used the useDispatch hook to store the email in Redux.

```js
import { useDispatch } from "react-redux";
import { setEmail } from "../store/userActions";

const dispatch = useDispatch();

// Example usage after successful login
dispatch(setEmail(userEmail));


