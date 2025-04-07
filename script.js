const quotes = [
  {
    line1: "“Twenty years from now you will be more disappointed",
    line2: "by the things that you didn’t do than by the ones you did do.",
    author: "– Mark Twain"
  },
  {
    line1: "“It always seems impossible",
    line2: "until it is done.”",
    author: "– Nelson Mandela"
  },
  {
    line1: "“Elegance is not about being noticed,",
    line2: "it’s about being remembered.”",
    author: "– Giorgio Armani"
  },
  {
    line1: "“The best way to predict the future",
    line2: "is to create it.”",
    author: "– Peter Drucker"
  },
  {
    line1: "“Great minds discuss ideas;",
    line2: "average minds discuss events;", 
    line3: "small minds discuss people.”",
    author: "– Eleanor Roosevelt"
  },
  {
    line1: "“Our greatest weakness lies in giving up.",
    line2: "The most certain way to succeed is always to try just one more time.”",
    author: "– Thomas Edison"
  },
  {
    line1: "“Make mistakes.",
    line2: "Make all you can.",
    line3: "That’s where you will find success — on the other side of failure.”",
    author: "– Thomas Watson"
  },
  {
    line1: "“Persistence and determination alone",
    line2: "are omnipotent.”",
    author: "– Calvin Coolidge"
  }
];

let currentIndex = 0;

const quoteLine1 = document.getElementById("quote-line-1");
const quoteLine2 = document.getElementById("quote-line-2");
const quoteAuthor = document.getElementById("quote-author");

function showNextQuote() {
  quoteLine1.classList.remove("fade-in");
  quoteLine2.classList.remove("fade-in");
  quoteAuthor.classList.remove("fade-in");

  void quoteLine1.offsetWidth; // Reflow
  void quoteLine2.offsetWidth;
  void quoteAuthor.offsetWidth;

  quoteLine1.innerText = quotes[currentIndex].line1;
  quoteLine2.innerText = quotes[currentIndex].line2;
  quoteAuthor.innerText = quotes[currentIndex].author;

  quoteLine1.classList.add("fade-in");
  quoteLine2.classList.add("fade-in");
  quoteAuthor.classList.add("fade-in");

  currentIndex = (currentIndex + 1) % quotes.length;
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-icon");
  icon.textContent = document.body.classList.contains("dark") ? "☀️ (LIGHT)" : "🌙 (DARK)";
}

setInterval(showNextQuote, 6000);
showNextQuote();
