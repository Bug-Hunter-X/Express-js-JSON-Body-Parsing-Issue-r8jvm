const express = require('express');
const app = express();
app.use(express.json()); // Ensure this line is BEFORE the route handler
app.post('/data', (req, res) => {
  console.log(req.body); // req.body will now contain the parsed JSON data
  res.send('OK');
});
app.listen(3000, () => console.log('Server listening on port 3000'));