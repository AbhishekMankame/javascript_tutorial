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