const tabsButtons = document.querySelectorAll('.tabs__btn');
const tabsContent = document.querySelectorAll('.tabs__content-item');

tabsButtons.forEach((button) => {
  button.addEventListener('click', tabButtonClickHandler);
});

function tabButtonClickHandler(evt) {
  evt.preventDefault();

  tabsButtons.forEach((button) => {
    button.classList.remove('tabs__btn--active');
  });

  tabsContent.forEach((element) => {
    element.classList.remove('tabs__content-item--active');
  });

  evt.target.classList.add('tabs__btn--active');
  document.querySelector(`#${evt.target.dataset.button}`).classList.add('tabs__content-item--active');
}
