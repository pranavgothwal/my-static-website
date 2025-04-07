const quotes = [
  {
    text: `“Twenty years from now you will be more disappointed by the things that you didn’t do\nthan by the ones you did do.\nSo throw off the bowlines. Sail away from the safe harbor.\nCatch the trade winds in your sails. Explore. Dream. Discover.”`,
    author: "Mark Twain"
  },
  {
    text: `“In the middle of every difficulty\nlies opportunity.”`,
    author: "Albert Einstein"
  },
  {
    text: `“Elegance is not about being noticed,\nit’s about being remembered.”`,
    author: "Giorgio Armani"
  }
];

const shayaris = [
  {
    text: `बेवजह नहीं जलते इन आँखों में दिए,\nकुछ ख्वाब अक्सर रोशनी मांगते हैं।`
  },
  {
    text: `वो मोहब्बत भी तुम्हारी थी, वो नफरत भी तुम्हारी,\nहम तो बस खुद को खोते चले गए।`
  },
  {
    text: `कभी तो आसमान से उतर कर देख,\nहम जैसे भी हैं, ज़मीं पे जीते हैं।`
  }
];

let currentTab = 'quotes';
let currentIndex = 0;
let isDark = false;

function displayContent() {
  const content = currentTab === 'quotes' ? quotes[currentIndex] : shayaris[currentIndex];
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");

  quoteTextEl.textContent = content.text;
  quoteAuthorEl.textContent = currentTab === 'quotes' ? `– ${content.author}` : '';
}

function showNext() {
  const contentArray = currentTab === 'quotes' ? quotes : shayaris;
  currentIndex = (currentIndex + 1) % contentArray.length;
  displayContent();
}

function switchTab(tab) {
  currentTab = tab;
  currentIndex = 0;
  displayContent();
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  isDark = !isDark;
  document.getElementById("theme-toggle").innerText = isDark ? "Icon (DARK)" : "Icon (LIGHT)";
}

window.onload = displayContent;
