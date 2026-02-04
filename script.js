const loveThings = [
  "Your smile that makes my day better instantly",
  "The way you laugh at silly things",
  "How kind your heart is",
  "Your passion for what you love",
  "The comfort I feel around you",
  // keep adding until 100 💖
];

const list = document.getElementById("love-list");

// Reveal on scroll + click interaction
loveThings.forEach((thing, index) => {
  const li = document.createElement("li");
  li.textContent = `${index + 1}. ${thing}`;

  li.addEventListener("click", () => {
    li.style.background = "#e63946";
    li.style.color = "white";
    li.textContent = `❤️ ${thing}`;
  });

  list.appendChild(li);

  // stagger animation
  setTimeout(() => {
    li.classList.add("show");
  }, index * 100);
});
