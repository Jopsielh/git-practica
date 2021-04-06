let stories;
let cards;
let scrollX = 0;
let maxScroll;
let storyCount = 0;
let init = false;

const player = document.body.querySelector('amp-story-player');

player.addEventListener('ready', () => {
  initializeCarousel();
})

if (player.isReady) {
  initializeCarousel();
}

function initializeCarousel() {
  if (init) return;
  init = true;
  
  stories = player.getStories();
  initializeCards();
  initializeArrows();
}



function initializeCards() {
  cards = document.querySelectorAll('.entry-point-card-container');
  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      player.show(stories[idx].href);
    });
  });
}

function initializeArrows() {
  const scrollContainer = document.querySelector('.entry-points');
  const leftArrow = document.querySelector('.entry-point-left-arrow');
  const rightArrow = document.querySelector('.entry-point-right-arrow');
  
  maxScroll = scrollContainer.clientWidth - cards.length * cards[0].clientWidth;
  if (maxScroll >= 0) {
    return;
  }
  
  addClickListener(leftArrow, true);
  addClickListener(rightArrow);
}

function addClickListener(button, isLeft = false) {
  button.addEventListener('click', () => {
    scrollX = isLeft
      ? Math.min(0, scrollX + 185)
      : Math.max(maxScroll, scrollX - 185);
console.log({isLeft},{scrollX})
     for (let i = 0; i < cards.length; i++) {
       cards[i].style['transform'] = `translateX(${scrollX}px)`;
     }
  });
}