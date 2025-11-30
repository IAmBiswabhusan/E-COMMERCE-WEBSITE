// Register user
function registerUser() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("userData", JSON.stringify(user));

  alert("Account Created Successfully!");
  window.location.href = "login.html";
}

// Login user
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser) {
    alert("No account found. Please sign up first!");
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("Incorrect Email or Password!");
  }
}
