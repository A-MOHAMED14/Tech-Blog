const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-sign-up").value.trim();
  const email = document.querySelector("#email-sign-up").value.trim();
  const password = document.querySelector("#password-sign-up").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up");
    }
  }
};

const signupForm = document.querySelector("#sign-up-form");

signupForm.addEventListener("submit", signupFormHandler);
