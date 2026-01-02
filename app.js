const API_URL = "https://expense-tracker-backend.onrender.com";
const API_AUTH = `${API_URL}/api/auth`;
const API_EXPENSE = `${API_URL}/api/expenses`;

// REGISTER
async function registerUser() {
  const name = document.getElementById("r-name").value;
  const email = document.getElementById("r-email").value;
  const password = document.getElementById("r-password").value;

  try {
    const res = await fetch(`${API_AUTH}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    alert("Registered Successfully ✅");

  } catch (err) {
    alert("Register failed ❌");
    console.error(err);
  }
}

// LOGIN
async function loginUser() {
  const email = document.getElementById("l-email").value;
  const password = document.getElementById("l-password").value;

  try {
    const res = await fetch(`${API_AUTH}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login ❌");
    }

  } catch (err) {
    alert("Login failed ❌");
    console.error(err);
  }
}



