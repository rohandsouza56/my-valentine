const loveThings = [
  "Your smile",
  "The way you laugh",
  "How you care about everyone",
  "Your kindness",
  "Your intelligence",
  // ... keep adding until 100
];

const list = document.getElementById("love-list");

loveThings.forEach((thing, index) => {
  const li = document.createElement("li");
  li.textContent = `${index + 1}. ${thing}`;
  list.appendChild(li);
});
