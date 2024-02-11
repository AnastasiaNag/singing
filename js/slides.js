function createCarousel(prevSelector, nextSelector, carouselItemSelector, dotsSelector) {
  const prev = document.querySelector(prevSelector);
  const next = document.querySelector(nextSelector);
  const slides = document.querySelectorAll(carouselItemSelector);
  const dots = document.querySelectorAll(dotsSelector);
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        setTimeout(()=>{
          slide.classList.add('active');
        }, 300);
        dots[i].classList.add('active');
      } else {
        dots[i].classList.remove('active');
      }
    });
  }
  const fadedSlide = () =>{
    slides[currentIndex].classList.remove('active');
    slides[currentIndex].classList.add('faded');
    setTimeout(()=>{
      slides[currentIndex].classList.remove('faded');
    }, 400);
  }
  function nextSlide() {
    fadedSlide()
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    fadedSlide()
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  
  dots.forEach((dot, index) => {
    dot.onclick = () => {
      showSlide(index);
      currentIndex = index;
    };
  });

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide); 

  showSlide(currentIndex);
}

createCarousel('.courses-carousel-prev','.courses-carousel-next', '.carousel__item', '.carousel__dot');



