const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 5000,
  },
});

// const slides = document.querySelector('.slides');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const pagination = document.querySelector('.pagination');
// const slideWidth = slides.clientWidth;
// let currentPosition = 0;
// let intervalId;

// function createPagination() {
//   for (let i = 0; i < slides.children.length; i++) {
//     const paginationItem = document.createElement('div');
//     paginationItem.classList.add('pagination-item');
//     paginationItem.addEventListener('click', () => {
//       currentPosition = -(slideWidth * i);
//       slides.style.transform = `translateX(${currentPosition}px)`;
//       updateActivePaginationItem();
//       resetInterval();
//     });
//     pagination.appendChild(paginationItem);
//   }
// }

// function updateActivePaginationItem() {
//   const paginationItems = document.querySelectorAll('.pagination-item');
//   const activePaginationItem = Math.abs(currentPosition / slideWidth);
//   paginationItems.forEach((item, index) => {
//     if (index === activePaginationItem) {
//       item.classList.add('active');
//     } else {
//       item.classList.remove('active');
//     }
//   });
// }

// function startAutoplay() {
//   intervalId = setInterval(() => {
//     currentPosition -= slideWidth;
//     if (currentPosition < -(slideWidth * (slides.children.length - 1))) {
//       currentPosition = 0;
//     }
//     slides.style.transform = `translateX(${currentPosition}px)`;
//     updateActivePaginationItem();
//   }, 5000);
// }

// function resetInterval() {
//   clearInterval(intervalId);
//   startAutoplay();
// }

// prevButton.addEventListener('click', () => {
//   currentPosition += slideWidth;
//   if (currentPosition > 0) {
//     currentPosition = -(slideWidth * (slides.children.length - 1));
//   }
//   slides.style.transform = `translateX(${currentPosition}px)`;
//   updateActivePaginationItem();
//   resetInterval();
// });

// nextButton.addEventListener('click', () => {
//   currentPosition -= slideWidth;
//   if (currentPosition < -(slideWidth * (slides.children.length - 1))) {
//     currentPosition = 0;
//   }
//   slides.style.transform = `translateX(${currentPosition}px)`;
//   updateActivePaginationItem();
//   resetInterval();
// });

// createPagination();
// updateActivePaginationItem();
// startAutoplay();
