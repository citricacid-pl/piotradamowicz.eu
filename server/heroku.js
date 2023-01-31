const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Check if request is from HTTP and if so, redirect to HTTPS
app.enable("trust proxy");
app.use((req, res, next) => {
  req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, '..', 'build')));

// Root redirects
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build'));
})

// Any page redirect
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

app.listen(port, () => {
  console.log('Server running on port:', port);
});
