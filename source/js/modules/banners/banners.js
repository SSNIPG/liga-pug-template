const bannerList = document.querySelector('[data-list-banner]');
const bannerCards = bannerList.querySelectorAll('[data-card-banner]');
const bannerCardBtn = document.querySelectorAll('[data-btn]');

function onTabClick() {
  bannerCardBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const currentBtn = btn;
      const btnId = currentBtn.getAttribute('data-btn');
      const currentCard = document.querySelector(btnId);

      if (!currentBtn.classList.contains('is-active')) {
        bannerCardBtn.forEach((card) => {
          card.classList.remove('is-active');
        });

        bannerCards.forEach((item) => {
          item.classList.remove('is-open');
        });

        currentCard.classList.add('is-open');
        currentBtn.classList.add('is-active');
      }
    });
  });
}

export {onTabClick};
