

router.get('/registeren', (req, res) => {
  res.render('registeren.ejs');
});


router.post('/register', async (req, res) => {
  let emailtoken;
  const createUsername = req.body.name;
  const createEmail = req.body.email.toLowerCase();
  const createPassword = req.body.password;
  const createPassword2 = req.body.password_repeat;

  if (createPassword !== createPassword2) {
    req.flash('error', 'Passwords are not the same');
    res.redirect('/registeren');
    return;
  }
  const user = await db.get().collection('user').findOne({email: createEmail});
  if (user) {
    req.flash('error', 'Email already exist');
    res.redirect('/registeren');
    return;
  } else {
    const insertuser = await db.get().collection('user').insertOne({
      'username': createUsername,
      'password': createPassword,
      'email': createEmail,
      'gender': '',
      'age': Math.floor(Math.random() * 30) + 20,
      'city': '',
      'characteristics': [],
      'picture': 'stock.png',
      'likes': [],
      'verified': false,
    });
    emailtoken = insertuser.ops[0]._id;
  }

  });
  req.flash('succes', `We've sent you an email to verify your account`);
  console.log(`A new user has registered #awesome! : ${req.body.email}`);
  res.redirect('/inloggen');
});


module.exports = router;
