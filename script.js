document.addEventListener("DOMContentLoaded", function () {
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

  const shayaris = [
    "Khushi nahi toh gam ka pyala hi sahi...\nWoh nahi toh uska yaadon mein aana hi sahi...\nAgar kabhi baithe ho akele...\nAgar sath woh nahi toh uska saaya hi sahi!!!",
    "Main akela hi chala tha janib-e-manzil magar,\nlog saath aate gaye aur karvan banta gaya.",
    "Kya likhun uske baare mein,\njo lafzon mein kabhi bayan na ho.",
    "Kabhi socha na tha ke yeh pal bhi aayega,\ndil karega aur khamoshi chha jaayegi.",
    "Humein seene se lagakar humari saari kasak door kar do, \nHum sirf tumhare ho jaayein, humein itna majboor kar do."
  ];

  let currentTab = "quotes";
  let currentIndex = 0;

  function showNextContent() {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    quoteText.classList.remove("fade-in");
    quoteAuthor.classList.remove("fade-in");

    quoteText.offsetWidth; // Trigger reflow

    if (currentTab === "quotes") {
      const quote = quotes[currentIndex];
      quoteText.textContent = `“${quote.text}”`;
      quoteAuthor.textContent = quote.author;
    } else {
      quoteText.textContent = shayaris[currentIndex];
      quoteAuthor.textContent = "";
    }

    quoteText.classList.add("fade-in");
    quoteAuthor.classList.add("fade-in");

    currentIndex = (currentIndex + 1) % (currentTab === "quotes" ? quotes.length : shayaris.length);
  }

  function switchTab(tab) {
    currentTab = tab;
    currentIndex = 0;
    showNextContent();

    document.getElementById("quotes-tab").classList.remove("active");
    document.getElementById("shayaris-tab").classList.remove("active");
    document.getElementById(`${tab}-tab`).classList.add("active");
  }

  function toggleTheme() {
    document.body.classList.toggle("dark");
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.textContent = document.body.classList.contains("dark") ? "Theme: Dark" : "Theme: Light";
  }

  // Attach functions to window so HTML buttons can access them
  window.showNextContent = showNextContent;
  window.switchTab = switchTab;
  window.toggleTheme = toggleTheme;

  // Initialize
  showNextContent();
  setInterval(showNextContent, 7000);
});
