// hello world in the browser
var http = require('http');

// create and load our own http server with node
http.createServer(function(req, res) {
    
    // send an ok response to the browser header
    res.writeHead(200, { 'Content-Type': 'text-plain' });

    // log to the console
    console.log('Hello world');

    
    
    var getQueryString = function (field, url) {
            var href = url ? url : window.location.href,
                reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i'),
                string = reg.exec(href);
            return string ? string[1] : null;
        },
        urll = 'https://jsbin.com/puwegomoko/edit?js,console&method=add&x=16&y=4.5',
        method = getQueryString('method', urll),
        x = parseFloat(getQueryString('x', urll)),
        y = parseFloat(getQueryString('y', urll));

    console.log("x:" + x + " y:" + y + " method:" + method);
    if (method === "add" || method === "subtract" ||
            method === "multiply" || method === "divide") {
        if (method === "add") {
            res.write(x + " + " + y + " = " + (x + y));
        } else if (method === "subtract") {
            res.write(x + " - " + y + " = " + (x - y));
        } else if (method === "multiply") {
            res.write(x + " * " + y + " = " + (x * y));
        } else {
            res.write(x + " / " + y + " = " + (x / y));
        }
    } else {
        res.write("Error!");
    }
    
    // end the response
    res.end();

}).listen(3000);

// site will load at http://localhost:3000
console.log('Site is now running at http://localhost:3000');