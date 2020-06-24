function password() {
  const input = document.getElementById('password');
  const icon = document.getElementById('toggle');

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.add('hide');
  } else {
    input.type = 'password';
    icon.classList.remove('hide');
  }
}

function empty() {
  const email = document.getElementById('email').value;
  const login = document.querySelector('.formulier form fieldset button:nth-child(5)');
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(mailformat)) {
    login.disabled = false;
  } else {
    login.disabled = true;
  }
}

document.querySelector('#toggle').addEventListener('click', password);
document.getElementById('email').addEventListener('input', empty);
