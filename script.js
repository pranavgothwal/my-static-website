const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

const quotes = [
  {
    text: "“Elegance is not about being noticed, it’s about being remembered.”",
    author: "– Giorgio Armani"
  },
  {
    text: "“It always seems impossible until it is done.”",
    author: "– Nelson Mandela"
  },
  {
    text: "“The best way to predict the future is to create it.”",
    author: "– Peter Drucker"
  }
];

const shayaris = [
  {
    text: "“Dil dhoondta hai phir wohi fursat ke raat din.”",
    author: "– Ghalib"
  },
  {
    text: "“Tere bina zindagi se koi shikwa toh nahi.”",
    author: "– Gulzar"
  },
  {
    text: "“Kabhi kabhi mere dil mein khayal aata hai…”",
    author: "– Sahir Ludhianvi"
  }
];

let currentIndex = 0;
let currentTab = "quotes";

function showNextQuote() {
  const list = currentTab === "quotes" ? quotes : shayaris;
  const quote = list[currentIndex];
  quoteText.classList.remove("fade-in");
  void quoteText.offsetWidth; // reflow
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
  quoteText.classList.add("fade-in");
  currentIndex = (currentIndex + 1) % list.length;
}

function showQuotes() {
  currentTab = "quotes";
  currentIndex = 0;
  setActiveTab("Quotes");
  showNextQuote();
}

function showShayaris() {
  currentTab = "shayaris";
  currentIndex = 0;
  setActiveTab("Shayaris");
  showNextQuote();
}

function setActiveTab(tabName) {
  document.querySelectorAll(".tab-button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`.tab-button:contains('${tabName}')`)?.classList.add("active");
}

// Custom contains selector workaround
document.querySelectorAll(".tab-button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

function toggleTheme() {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-icon");
  icon.textContent = document.body.classList.contains("dark") ? "Icon (DARK)" : "Icon (LIGHT)";
}

showQuotes(); // Default on load
