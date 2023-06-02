const http = require('http');

const server = http.createServer((req, res) =>{
    console.log ("Restin");
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Restin</h1></body>')
    res.write('</html>');
    res.end();
});

server.listen(4000);
