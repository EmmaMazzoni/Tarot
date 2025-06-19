const cards = [...document.querySelectorAll('.card')];
const left = document.getElementById('leftArrow');
const right = document.getElementById('rightArrow');
const deck=["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", 
"The Ace of Wands", "The Two of Wands", "The Three of Wands", "The Four of Wands", "The Five of Wands", "The Six of Wands", "The Seven of Wands", "The Eight of Wands", "The Nine of Wands", "The Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",
"The Ace of Cups", "The Two of Cups", "The Three of Cups", "The Four of Cups", "The Five of Cups", "The Six of Cups", "The Seven of Cups", "The Eight of Cups", "The Nine of Cups", "The Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
"The Ace of Swords", "The Two of Swords", "The Three of Swords", "The Four of Swords", "The Five of Swords", "The Six of Swords", "The Seven of Swords", "The Eight of Swords", "The Nine of Swords", "The Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",
"The Ace of Pentacles", "The Two of Pentacles", "The Three of Pentacles", "The Four of Pentacles", "The Five of Pentacles", "The Six of Pentacles", "The Seven of Pentacles", "The Eight of Pentacles", "The Nine of Pentacles", "The Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"];
let current = 0;

function updateDisplay() {
  cards.forEach((card, i) => {
    card.style.display = i === current ? 'inline-block' : 'none';
  });
  // Optionally add a highlight to the visible card
}

function showNext() {
  current = (current + 1) % cards.length;
  updateDisplay();
}
function showPrev() {
  current = (current - 1 + cards.length) % cards.length;
  updateDisplay();
}

// click events
left.addEventListener('click', showPrev);
right.addEventListener('click', showNext);

// keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') showPrev();
  else if (e.key === 'ArrowRight') showNext();
});

// initialize
updateDisplay();

document.getElementById('select').addEventListener('click', () => {
  const spread = cards[current].dataset.spread;
  window.location.href = `reading.html?spread=${encodeURIComponent(spread)}`;
});
// Add click event to cards for selection
