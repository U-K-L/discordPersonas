import { getMessage } from './hello.js';
import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(getMessage());
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});

