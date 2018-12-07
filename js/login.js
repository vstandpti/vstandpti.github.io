const email = document.querySelector('input[name="email"]'),
  password = document.querySelector('input[name="password"]'),
  createEmail = document.querySelector('input[name="createEmail"]'),
  createPassword = document.querySelector('input[name="createPassword"]'),
  confirmPassword = document.querySelector('input[name="confirmPassword"]'),
  loginBtn = document.querySelector('#loginBtn'),
  loginDiv = document.querySelector('#login'),
  createBtn = document.querySelector('#createBtn'),
  createDiv = document.querySelector('#create'),
  loggedInDiv = document.querySelector('#loggedIn');
  navDiv = document.querySelector('#navigasilogin');
  navlogDiv = document.querySelector('#navigasilogout');

createDiv.style.display='none';

// Event Listeners 
createBtn.addEventListener('click', createAccount);
loginBtn.addEventListener('click', login);
registerBtn.addEventListener('click', register);

function register(){
  loginDiv.style.display = 'none';
  createDiv.style.display = 'block';
}

// Create Account Function
function createAccount() {
  if(createPassword.value == confirmPassword.value) {
    localStorage.setItem('email', JSON.stringify(createEmail.value));
    localStorage.setItem('password', JSON.stringify(createPassword.value));
    createDiv.style.display = 'none';
    loginDiv.style.display = 'block';
  } else {
    alert('Passwords don\'t match; Try again :)');
  }
}

// Login Function
function login() {
  if(email.value == JSON.parse(localStorage.getItem('email'))) {
    if(password.value == JSON.parse(localStorage.getItem('password'))) {
      loginDiv.style.display = 'none';
      createDiv.style.display = 'none';
      loggedInDiv.style.display = 'block';

      localStorage.setItem('statusLogin','success');
    
      window.location = 'index.html';
    }
  } else {
    alert('Login Failed');
  }

}

function checkLogin(){
  let check_login = localStorage.getItem('statusLogin');

  if(check_login == 'success'){
    document.getElementById("navigasilogout").style.display = "block";
    document.getElementById("navigasilogin").style.display = "none";
  }
  else
  {
    document.getElementById("navigasilogout").style.display = "none";
    document.getElementById("navigasilogin").style.display = "block";
  }
}

function logout(){
  localStorage.removeItem('statusLogin');
  window.location = 'index.html';
}
