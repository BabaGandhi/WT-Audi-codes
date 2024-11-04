const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to serve HTML files based on the request URL
const servePage = (filePath, response) => {
    fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Server Error');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content);
        }
    });
};

// Create the HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve the index.html file
        servePage(path.join(__dirname, 'index.html'), res);
    } else if (req.url === '/products') {
        // Serve the products.html file
        servePage(path.join(__dirname, 'products.html'), res);
    } else {
        // Handle 404 for undefined routes
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
});

// Define the server port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
