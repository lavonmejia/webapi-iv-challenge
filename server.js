require('dotenv').config();

const express = require('express'); // import the express package

const server = express(); // creates the server

const port = process.env.PORT;

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});

server.get('/verses', (req, res) => {

    const verses = [
        {
            id: 1,
            name: 'Samwise Gamgee',
          },
          {
            id: 2,
            name: 'Frodo Baggins',
          },  
    ]
    res.status(200).json(verses);
});

// watch for connections on port 5000
server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);