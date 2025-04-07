// Quotes with author
const quotes = [
  {
    text: "You can be discouraged by failure or you can learn from it. So go ahead and make mistakes.",
    author: "– Thomas Watson"
  },
  {
    text: "It always seems impossible until it is done.",
    author: "– Nelson Mandela"
  },
  {
    text: "Elegance is not about being noticed, it’s about being remembered.",
    author: "– Giorgio Armani"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "– Peter Drucker"
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "– Eleanor Roosevelt"
  },
  {
    text: "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did.",
    author: "– Mark Twain"
  },
  {
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is to try one more time.",
    author: "– Thomas Edison"
  },
  {
    text: "Persistence and determination alone are omnipotent.",
    author: "– Calvin Coolidge"
  }
];

// Shayaris without author
const shayaris = [
  "“Aankhon mein namii, chehre pe muskaan rehti hai...”",
  "“Khushi nahi toh gam ka pyala hi sahi.... Woh nahi toh uska yaadon mein aana hi sahi.... Agar kabhi baithe ho akele.... Agar sath woh nahi toh uska saaya hi sahi!!!”",
  "“”",
  "“Main akela hi chala tha janib-e-manzil magar, log saath aate gaye aur karvan banta gaya.”",
  "“Woh baat saari jise hum chhupaye baithe hain, woh teri aankhon ne sab kuch bata diya.”",
  "“Kya likhun uske baare mein, jo lafzon mein kabhi bayan na ho.”",
  "“”",
  "“Kabhi socha na tha ke yeh pal bhi aayega, dil karega aur khamoshi chha jaayegi.”"
];

let currentQuoteIndex = 0;
let currentTab = "quotes";

function showNextContent() {
  const quoteText = document.getElementById("quote-text");

  quoteText.classList.remove("fade-in");
  void quoteText.offsetWidth; // Force reflow

  if (currentTab === "quotes") {
    const quote = quotes[currentQuoteIndex];
    quoteText.innerHTML = `
      <div class="quote-part">“${quote.text}”</div>
      <div class="quote-author">${quote.author}</div>
    `;
  } else {
    const shayari = shayaris[currentQuoteIndex];
    quoteText.innerHTML = `
      <div class="quote-part">${shayari}</div>
    `;
  }

  quoteText.classList.add("fade-in");
  currentQuoteIndex = (currentQuoteIndex + 1) % (currentTab === "quotes" ? quotes.length : shayaris.length);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-icon");
  icon.textContent = document.body.classList.contains("dark") ? "Icon (LIGHT)" : "Icon (DARK)";
}

function switchTab(tab) {
  currentTab = tab;
  currentQuoteIndex = 0;
  showNextContent();

  document.getElementById("quotes-tab").classList.remove("active-tab");
  document.getElementById("shayaris-tab").classList.remove("active-tab");
  document.getElementById(`${tab}-tab`).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", () => {
  showNextContent();
  setInterval(showNextContent, 5000); // Change quote every 5s
});
