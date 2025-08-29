// Contact Form
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
      headers: { "Content-Type": "application/json" },
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

// Navbar Scroll Effect
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.36)";
  }
});

// Active Navbar Items
let navItems = document.querySelectorAll(".nav-item a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

// Skills Section
let skills = [
  { src: "assets/image 1.svg", skill: "Javascript" },
  { src: "assets/image 2.svg", skill: "Typescript" },
  { src: "assets/image 5.svg", skill: "Next Js" },
  { src: "assets/image 6.svg", skill: "React" },
  { src: "assets/image 6.svg", skill: "React dom" },
  { src: "assets/image 7.svg", skill: "Angular" },
  { src: "assets/image 9.svg", skill: "Figma" },
  { src: "assets/image 12.svg", skill: "Bootstrap" },
];

let cards = document.querySelector(".skills-cards .row");
skills.forEach((skill) => {
  cards.innerHTML += `
    <div class="col col-lg-3 d-flex justify-content-center">
      <div class="skill-card">
        <div class="skill-img">
          <img src="${skill.src}" alt="${skill.skill}" />
        </div>
        <div class="skill-text">
          <h3>${skill.skill}</h3>
        </div>
      </div>
    </div>
  `;
});

let projects = [
  {
    img: "./assets/Screenshot 2025-08-17 170737.png  ",
    title: "Mia Italiano",
    desc: "Present Menu for Pizza Restaurants",
    link: "https://hazemkhaled551.github.io/Mia-italiano/",
  },
];
let projectsCards = document.querySelector(".projects-cards");
projects.forEach((project) => {
  projectsCards.innerHTML += `
  <div class="project-card">
            <div class="project-img">
              <img src="${project.img}" alt="${project.title}" />
            </div>
            <div class="project-text">
              <h3>${project.title}</h3>
              <p>${project.desc}</p>
              <a
                href="${project.link}"
                target="_blank"
              >
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="37.666"
                    height="37.666"
                    rx="18.833"
                    transform="matrix(-1 0 0 1 37.6666 0.667236)"
                    fill="#4FC3F7"
                  />
                  <path
                    d="M25.4254 11.4961L12.2422 24.6792"
                    stroke="white"
                    stroke-width="1.41248"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.4254 21.1668V11.4961H15.7546"
                    stroke="white"
                    stroke-width="1.41248"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
  `;
});
