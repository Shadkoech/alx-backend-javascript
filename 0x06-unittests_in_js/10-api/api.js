const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
    const cartId = req.params.id;
    res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    })
});

app.use(express.json());
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`)
});

app.use((req, res) => {
  res.status(404).send('Cannot GET ' + req.path);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});
