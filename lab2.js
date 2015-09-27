// node js Calculator
var http = require('http');

// require node's url module to parse the url's querystring
var url = require('url');

// create and load http server with node
http.createServer(function(req, res) {
    
    // get the querystring
    var qs = url.parse(req.url, true).query;
       
    // log to the console
    console.log('working');
    
    // set the method and parse the x,y values as a float value
    var method = qs.method,
        x = parseFloat(qs.x),
        y = parseFloat(qs.y);
    
        //check to see if the method is correct
        if (method === "add" || method === "subtract" ||
                method === "multiply" || method === "divide") {
            //change size of text to <h1>
            res.write('<h1>');
            //check which calculation to do
            if (method === "add") {
                res.write(x + ' + ' + y + ' = ' + (x + y));
            } else if (method === "subtract") {
                res.write(x + " - " + y + " = " + (x - y));
            } else if (method === "multiply") {
                res.write(x + " * " + y + " = " + (x * y));
            } else {
                res.write(x + " / " + y + " = " + (x / y));
            }
        } else {
            //out put method error message
            res.write('<h1>Error!</h1><h3><br />'+
                      'Method must be one of these four words...<br />'+
                      '-add<br />-subtract<br />-multiply<br />-divide</h3>');
        }
    
    
    // end the response
    res.end();

}).listen(3000);

// site will load at http://localhost:3000/lab2.js?method=addx=5&y=10