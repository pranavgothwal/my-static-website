const quotes = [
  {
    line1: "“You can be discouraged by failure or you can learn from it.",
    line2: "So go ahead and make mistakes.”",
    author: "Thomas Watson"
  },
  {
    line1: "“It always seems impossible",
    line2: "until it is done.”",
    author: "Nelson Mandela"
  },
  {
    line1: "“Elegance is not about being noticed,",
    line2: "it’s about being remembered.”",
    author: "Giorgio Armani"
  },
  {
    line1: "“The best way to predict the future",
    line2: "is to create it.”",
    author: "Peter Drucker"
  },
  {
    line1: "“Great minds discuss ideas;",
    line2: "average minds discuss events.”",
    author: "Eleanor Roosevelt"
  },
  {
    line1: "“Twenty years from now you will be more disappointed",
    line2: "by the things that you didn’t do than by the ones you did do.”",
    author: "Mark Twain"
  },
  {
    line1: "“Our greatest weakness lies in giving up.",
    line2: "The most certain way to succeed is to try one more time.”",
    author: "Thomas Edison"
  },
  {
    line1: "“Nothing in this world can take the place of persistence.",
    line2: "Persistence and determination alone are omnipotent.”",
    author: "Calvin Coolidge"
  }
];

let currentIndex = 0;
const line1El = document.querySelector(".quote-line-1");
const line2El = document.querySelector(".quote-line-2");
const authorEl = document.querySelector(".quote-author");

function showNextQuote() {
  const quote = quotes[currentIndex];
  line1El.textContent = quote.line1;
  line2El.textContent = quote.line2;
  authorEl.textContent = `– ${quote.author}`;
  currentIndex = (currentIndex + 1) % quotes.length;
}

// Theme switcher
function toggleTheme() {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-icon");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

setInterval(showNextQuote, 7000); // Auto switch every 7s
showNextQuote(); // Initial load
