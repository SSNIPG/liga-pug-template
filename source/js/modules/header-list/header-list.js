const toggle = document.querySelector('[data-toggle]');
const wrapper = document.querySelector('[data-wrapper]');
const header = document.querySelector('[data-header]');
const headerList = header.querySelector('[data-header-list]');
const headerItems = headerList.querySelectorAll('[data-header-item]');
const headerSubList = headerList.querySelector('[data-header-sublist]');

function onToggleClick() {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-active');
    header.classList.toggle('is-active');
    headerList.classList.toggle('is-open');
    wrapper.classList.toggle('is-noscrolling');
  });
}

function onItemClick() {
  headerItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('is-active')) {
        headerItems.forEach((items) => {
          items.classList.remove('is-active');
        });
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
      if (headerSubList.parentNode.classList.contains('is-active')) {
        headerSubList.classList.add('is-open');
      } else {
        headerSubList.classList.remove('is-open');
      }
    });
  });
}

const onWindowClick = () => {
  document.addEventListener('click', (e) => {
    if (!headerList.contains(e.target) && !headerSubList.contains(e.target)) {

      headerItems.forEach((items) => {
        items.classList.remove('is-active');
      });
      headerSubList.classList.remove('is-open');
    }
  });
};

export {onToggleClick, onItemClick, onWindowClick};
