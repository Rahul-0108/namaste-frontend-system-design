const express = require("express");

const PORT = 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader( // set CSP from server side for the html page
        'Content-Security-Policy',
        "default-src 'self';" + 
        "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;" // unsafe-inline allows all inline script. nonce only allows inline script with the hash value, so here untrusted js code wont be executed
    );
    next();
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req.url);
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server started at http://locolhost:${PORT}`);
});
