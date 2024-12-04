const express = require("express");
const app = express();
const port = 5000;

const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    optionsSuccessStatus: 200 
  };
  
  app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
