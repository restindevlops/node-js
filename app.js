const http = require('http');
const fs=require('fs');
const server = http.createServer((req, res) =>{
    const url=req.url;
    //console.log(url);

   
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>');
   // res.end();
     

     if(url==='/home'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body>Welcome home</body>`);
        res.write('</html>');
         //res.end()
    
    }

        else if(url==='/about'){
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>Welcome to About Us page</body>`);
            res.write('</html>');
        //  res.end()
        
        }
      else if(url==='/node'){
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body> Welcome to my Node Js project</body>`);
            res.write('</html>');
         // res.end()
        
        }
        

});

server.listen(4000);