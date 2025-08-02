document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("responseMessage").textContent = "Form submitted successfully!";
    
    // Optional: Clear the form
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("responseMessage").textContent = "Please fill in all fields.";
    document.getElementById("responseMessage").style.color = "red";
  }
});
