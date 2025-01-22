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

This milestone provides the foundation for user authentication, paving the way for implementing session management and token-based authentication in future milestones.
 