// Local login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (user && await bcrypt.compare(password, user.password_hash)) {
    req.session.userId = user.user_id;
    req.session.role = user.role;
    res.redirect(user.role === 'admin' ? '/admin' : '/');
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});