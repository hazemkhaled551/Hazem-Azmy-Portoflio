const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("https://formspree.io/f/mrblvklk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      form.reset();
      status.innerHTML = "Message sent successfully!";
    } else {
      status.innerHTML = "Error sending message. Please try again.";
    }
  } catch (error) {
    console.log(error);
  }
});
//active items
let navItems = document.querySelectorAll(".nav-item a");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = " rgba(0, 0, 0, 0.36)";
  }
});
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
