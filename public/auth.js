/* ---------- Robust auth.js (replace your file with this) ---------- */

/* Utility logging (toggle to false to silence) */
const AUTH_DEBUG = true;
function log(...args) {
  if (AUTH_DEBUG) console.log("[auth.js]", ...args);
}

/* ---------- Registration ---------- */
function registerUser() {
  const name = document.getElementById("signupName")?.value?.trim();
  const email = document.getElementById("signupEmail")?.value?.trim();
  const password = document.getElementById("signupPassword")?.value;

  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return;
  }

  // Save single-user object (your current approach)
  const user = { name, email, password };
  localStorage.setItem("userData", JSON.stringify(user));

  alert("Account Created Successfully!");
  window.location.href = "login.html";
}

/* ---------- Login ---------- */
function loginUser() {
  const email = document.getElementById("loginEmail")?.value?.trim();
  const password = document.getElementById("loginPassword")?.value;

  const storedUserRaw = localStorage.getItem("userData");
  let storedUser = null;
  try {
    storedUser = storedUserRaw ? JSON.parse(storedUserRaw) : null;
  } catch (err) {
    log("Failed to parse stored user:", err);
  }

  if (!storedUser) {
    alert("No account found. Please sign up first!");
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", storedUser.name); // IMPORTANT: save username
    log("Login successful — username saved:", storedUser.name);

    alert("Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("Incorrect Email or Password!");
  }
}

/* ---------- Navbar detection & update ---------- */
function ensureAuthBox() {
  // Try to find #authBox
  let authBox = document.getElementById("authBox");
  if (authBox) {
    log("Found existing #authBox");
    return authBox;
  }

  // Fallback: find an element with class .sing_in_up
  const fallback = document.querySelector(".sing_in_up");
  if (fallback) {
    log("Found .sing_in_up (no id). Adding id='authBox' to it.");
    fallback.id = "authBox";
    return fallback;
  }

  // Last resort: find header .section-navbar and create authBox inside its top area
  const header = document.querySelector(".section-navbar");
  if (header) {
    const topTxt =
      header.querySelector(".top_txt .Head") || header.querySelector(".Head");
    if (topTxt) {
      log("No .sing_in_up found — creating authBox inside header top area.");
      const newBox = document.createElement("div");
      newBox.className = "sing_in_up";
      newBox.id = "authBox";
      newBox.innerHTML = `<a href="login.html">Sign In</a><a href="signup.html">Sign Up</a>`;
      topTxt.appendChild(newBox);
      return newBox;
    }
  }

  // If nothing found, return null
  log("No place found to attach authBox. Navbar update will be skipped.");
  return null;
}

function updateNavbarAuth() {
  const authBox = ensureAuthBox();
  if (!authBox) return;

  const loggedIn = localStorage.getItem("loggedIn");
  const username = localStorage.getItem("username");

  log("updateNavbarAuth:", { loggedIn, username });

  if (loggedIn === "true" && username) {
    // replace content while keeping class/id intact
    authBox.innerHTML = `
      <span class="welcome-text">Hi, ${escapeHtml(username)}</span>
      <a href="#" id="logoutBtn" class="auth-logout">Logout</a>
    `;
  } else {
    // default content (Sign In / Sign Up)
    authBox.innerHTML = `<a href="login.html">Sign In</a> <a href="signup.html">Sign Up</a>`;
  }
}

/* ---------- Logout handling (delegated) ---------- */
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "logoutBtn") {
    e.preventDefault();
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    log("User logged out — storage cleared");
    // update navbar immediately
    updateNavbarAuth();
    // optional: redirect to index if you prefer
    // window.location.href = "index.html";
  }
});

/* ---------- DOM ready ---------- */
document.addEventListener("DOMContentLoaded", () => {
  try {
    updateNavbarAuth();
  } catch (err) {
    log("Error during DOMContentLoaded update:", err);
  }
});

/* ---------- small helper to avoid XSS-ish names (safe) ---------- */
function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/[&<>"'`=\/]/g, function (s) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
    }[s];
  });
}

/* ---------- Export functions for inline HTML forms (if using onclick) ---------- */
window.registerUser = registerUser;
window.loginUser = loginUser;
