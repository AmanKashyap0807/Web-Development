**Client** 
- our computer are known as clients

**Server**
- a cloud storage where we deploy our project to read write data

**IP Address**
- Every server, client and computer has its own unique IP address

**DNS**
- DNS (Domain Name System) is a fundamental protocol of the internet that acts as a directory to translate human-readable domain names (like www.google.com) into machine-readable IP addresses (like 142.250.190.14) that computers use to identify each other on the network.

**How the client server( website ) access done??**
- first the client sent the domain name to ISP ( Internet sevice provider : jio) and then ISP sent the domain to DNS server ( Domain name system ) then it convert the domain name to the IP address and again send back to ISP whcih provide it to the client 

**Request-Response Cycle**
1. Client Request:
User initiates a request (e.g., enters a URL).
Browser sends an HTTP request to the server.

2. DNS & Connection:
Domain name resolves to an IP address.
A connection (e.g., TCP/TLS) is established.

3. Server Processing:
Server processes the request (e.g., fetches data, runs logic).

4. Server Response:
Server sends an HTTP response with:
Status code (e.g., 200 OK, 404).
Content (e.g., HTML, JSON, images).

5. Client Rendering:
Browser renders the response or processes it as needed.

6. Connection Closure:
Connection is closed or reused for further requests.

