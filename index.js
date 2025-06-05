const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Function to check if number is prime
const isPrime = (num) => {
  if (typeof num !== 'number' || !Number.isInteger(num) || num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// API endpoint
app.get('/is-prime', (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ error: 'Please provide a valid number in the query (e.g., ?number=7)' });
  }

  const num = parseInt(number, 10);
  const result = isPrime(num);

  return res.json({ number: num, isPrime: result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
