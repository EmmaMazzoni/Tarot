

const deck=["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", 
"The Ace of Wands", "The Two of Wands", "The Three of Wands", "The Four of Wands", "The Five of Wands", "The Six of Wands", "The Seven of Wands", "The Eight of Wands", "The Nine of Wands", "The Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",
"The Ace of Cups", "The Two of Cups", "The Three of Cups", "The Four of Cups", "The Five of Cups", "The Six of Cups", "The Seven of Cups", "The Eight of Cups", "The Nine of Cups", "The Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
"The Ace of Swords", "The Two of Swords", "The Three of Swords", "The Four of Swords", "The Five of Swords", "The Six of Swords", "The Seven of Swords", "The Eight of Swords", "The Nine of Swords", "The Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",
"The Ace of Pentacles", "The Two of Pentacles", "The Three of Pentacles", "The Four of Pentacles", "The Five of Pentacles", "The Six of Pentacles", "The Seven of Pentacles", "The Eight of Pentacles", "The Nine of Pentacles", "The Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"];

// 1. Get spread from URL
const params = new URLSearchParams(window.location.search);
const spread = params.get('spread');

// 2. Determine how many cards
function spreadNum(sp) {
  if (sp === "daily") return 1;
  if (sp === "past_present_future") return 3;
  return 2;
}
const count = spreadNum(spread);


// 4. Draw function randomly removes cards to avoid duplicates
function drawCard() {
  const i = Math.floor(Math.random() * deck.length);
  return deck.splice(i, 1)[0];
}

// 5. Draw cards equal to spread length
const drawn = [];
for (let i = 0; i < count; i++) {
  drawn.push(drawCard());
}

// 6. Determine labels
const labels = count === 3
  ? ["Past", "Present", "Future"]
  : count === 2
    ? ["Problem", "Solution"]
    : ["Daily"];

// 7. Render cards into your <h2> elements
drawn.forEach((cardName, idx) => {
  const el = document.getElementById(`card${idx + 1}`);
  el.textContent = `${labels[idx]}: ${cardName}`;
});
