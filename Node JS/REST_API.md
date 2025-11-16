## RESTN API

### 1. What is a REST API?
A REST API (Representational State Transfer API) is a way for two systems (like frontend and backend) to communicate over the internet using standard rules.

📌 In simple words: A REST API is a set of rules that allows the frontend to talk to the backend using URLs and HTTP methods like GET, POST, PUT, PATCH, DELETE.
<br>
It uses:

- HTTP methods (GET, POST...)
- URLs
- JSON for sending/receiving data
- Stateless communication (every request is handled independently)

🍔 Real-Life Example (Resturant Analogy)<br>
Fronend = Waiter<br>
Backend = Kitchen <br>
REST API = Resturant rules for ordering food<br>

The waiter (frontend) can only communicate with the kitchen (backend) using certain actions:
- GET -> "Show me the menu"
- POST -> "Place a new order"
- PUT -> "Change entire order"
- PATCH -> "Change one thing"
- DELTE -> "Cancel the order"<br>
These actions follow REST rules.

### 📚 Key Principles of REST API
1. Client-Server: Frontend and backend are seperate.
2. Stateless: Server does not remember previous requests.
3. Use of standard HTTP methods
4. Use of URLs (endpoints)
5. Use of JSON: REST API usually send data in JSON format.


## What is JSON?
JSON stands for JavaScript Object Notation.<br>
It is the most common format used to send data between frontend and backend.<br>
In simple words: JSON is a simple text format that looks like a JavaScript object and is used to store or send data.

### Why JSON?
- Easy to read
- Easy to write
- Works in all programming languages
- Perfect for APIs

### JSON has:
- Key-value pairs
- String "text"
- Numbers
- Boolean (true/false)
- Arrays
- Objects

### Rules of JSON
- Key must be in double quotes
- Strings in double quotes
- No comments allowed
- Cannot contain functions
- Cannot have trailing commas


### HTTP Status Codes (200, 404, 500...)
When the backend responds to a request, it sends a status code that tells you what happened.<br>
Here are the most important ones:
1. 200 - OK : Everything worked successfully.<br>
Example: You request GET/users --> Server sends the user data
2. 201 - Created: Something new was created.<br>
Example: You send POST/users to create an account --> Server replies 201 created.
3. 400 - Bad Request: Your request was or wrong or incompleted<br>
Example: You forgot to include email in the signup data.
4. 401 - Unauthorized <br>
You are not logged in or token is missing/invalid.
5. 403 - Forbidden<br>
You are logged in but not allowed to access this.<br>
Example: A normal user tries to access an admin page.
6. 404 - Not Found<br>
The resource does not exist.
Example: GET/users/9999 but that user doesn't exist.
7. 500 - Internal Server Error<br>
Something broke on the backend. <br>
Usually the developer's fault, not the user's.