// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header content type to HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Write the response with an <h1> tag
    res.end('<h1>Welcome to KMIT!</h1>');
});

// Define the port number
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
