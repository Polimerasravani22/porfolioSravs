let items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  let header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    let isActive = item.classList.contains("active");

    items.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".icon").textContent = "+";
    });

    if (!isActive) {
      item.classList.add("active");
      header.querySelector(".icon").textContent = "−";
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  let errorMessage = document.getElementById("errorMessage");
  let successMessage = document.getElementById("successMessage");

  // Clear messages
  errorMessage.textContent = "";
  successMessage.textContent = "";

  // Phone number validation
  let phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    errorMessage.textContent = "Phone number must be exactly 10 digits.";
    return;
  }

  // All validations passed
  successMessage.textContent = "Thank you! Your message has been sent.";
  document.getElementById("contactForm").reset();
});

