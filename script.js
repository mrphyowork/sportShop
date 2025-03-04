// For Clock
function updateClock() {
  let date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const day = days[date.getDay()];
  const d = date.getDate();
  const month = months[date.getMonth()];

  const clockElement = document.getElementById("clockTime");
  clockElement.textContent = `  ${hours}:${minutes}:${seconds} `;

  const dateElement = document.getElementById("clockDate");
  dateElement.textContent = `${day} ${d} ${month}`;
}
setInterval(updateClock, 1000);
updateClock();

// validation

const form = document.getElementById("contactForm");
const errorBox = document.getElementById("errorBox");

errorBox.style.display = "none";

form.addEventListener("submit", (e) => {
  const name = document.getElementById("contactName");
  const textCount = document.getElementById("contactText");
  const charCount = document.getElementById("charCount");

  const currentLength = textCount.value.length;
  charCount.textContent = currentLength;
  console.log(currentLength);

  const messages = [];

  // const textLenght = text;

  if (name.value === "" || name.value === null) {
    messages.push("- Name is required!");
  }

  // console.log(charCount.value.length);
  if (currentLength > 100) {
    messages.push("- Message box is over 100 words!");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorBox.innerHTML = messages.join("<br>");
    errorBox.style.display = "block";
  }
});

// products array
let products = [
  {
    id: "ft-1",
    Name: "Adadis FIFA 2022",
    Price: 76,
    image: "images/football_1.webp",
  },

  {
    id: "ft-2",
    Name: "Nike UCL",
    Price: 70,
    image: "images/football_b.png",
  },
  {
    id: "ft-3",
    Name: "Adadis EURO 2024",
    Price: 80,
    image: "images/football_1.webp",
  },
  {
    id: "ftjy-1",
    Name: "Puma ManCity Home",
    Price: 96,
    image: "images/jersey_5.webp",
  },
  {
    id: "ftjy-2",
    Name: "Adadis Argenitina Home",
    Price: 90,
    image: "images/jersey_2.webp",
  },
  {
    id: "ftjy-3",
    Name: "Nike Chelsea Home",
    Price: 96,
    image: "images/jersey_3.webp",
  },
  {
    id: "ftgl-1",
    Name: "Adadis Orange Gloves",
    Price: 60,
    image: "images/gloves_1.png",
  },
  {
    id: "ftgl-2",
    Name: "Adadis Pink Gloves",
    Price: 55,
    image: "images/gloves_3.jpg",
  },
  {
    id: "ftgl-1",
    Name: "Adadis Orange Gloves",
    Price: 60,
    image: "images/gloves_1.png",
  },
];
