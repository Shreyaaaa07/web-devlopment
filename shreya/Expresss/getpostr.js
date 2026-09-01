app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/contact', (req, res) => {
  res.send('Contact form submitted');
});

app.put('/user/:id', (req, res) => {
  res.send(`Update user with ID ${req.params.id}`);
});

app.delete('/user/:id', (req, res) => {
  res.send(`Delete user with ID ${req.params.id}`);
});