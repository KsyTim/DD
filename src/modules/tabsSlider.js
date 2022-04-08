const tabsSlider = () => {
  // all slides
  const slides = document.querySelectorAll('.tabs-content-item');
  // all slides tabs
  const slidesPaginationTabs = document.querySelectorAll('.tabs-pagination-item');
  // slider dots container
  const dotsContainer = document.querySelector('.tabs-dots');
  // display dots in slides per page amount
  const displayDots = () => {
    for (let i = 0; i < slides.length; i++) {
      dotsContainer.insertAdjacentHTML('beforeend', '<li class="tabs-dots-item"></li>');
      const activeDot = document.querySelectorAll('.tabs-dots-item');
      if(slides[i].classList.contains('tabs-content-item__active')) {
        activeDot[i].classList.add('tabs-dots-item__active');
      }
    }
  }
  displayDots();
  // all slider dots
  const dotsAll = document.querySelectorAll('.tabs-dots-item');
  let currentSlide = 0;
  let interval;
  // add active class to next slide
	const doSlide = (elem, index, className) => {
		elem[index].classList.add(className);
	};
  // remove active class over all elements
  const removeClass = (elems, classAdd) => {
    elems.forEach(elem => {
      if (elem.classList.contains(classAdd)) {
        elem.classList.remove(classAdd);
      }
    })
  }
  // go to next slide (left/right)
  const slide = (direction) => {
    // determinate current slide index
    slides.forEach((slide, index) => {
      if(slide.classList.contains('tabs-content-item__active')) {
        currentSlide = index;
      }
    })
    // remove active class over all slider elements
    removeClass(slides, 'tabs-content-item__active');
    removeClass(dotsAll, 'tabs-dots-item__active');
    removeClass(slidesPaginationTabs, 'tabs-pagination-item__active');
    // slides arrow begin/end condition on scroll
    if (direction === 'left') {
      // if current slide's first then back to last slide
      if (currentSlide === 0) {
        currentSlide = 3;
        // else go to previous slide
      } else {
        currentSlide--;
      }
    } else if (direction === 'right') {
      // if current slide's last then go to first slide
      if (currentSlide === 3) {
        currentSlide = 0;
        // else go to next slide
      } else {
        currentSlide++;
      }
    }
    // add active class over all next slides rely on current slide obtained index 
    doSlide(slides, currentSlide, 'tabs-content-item__active');
    doSlide(slidesPaginationTabs, currentSlide, 'tabs-pagination-item__active');
    doSlide(dotsAll, currentSlide, 'tabs-dots-item__active');
  }
  // click event
  const clickEvent = () => {
    document.addEventListener('click', (e) => {
      const target = e.target;
      // remove active class on over all elements and then add active to required
      const toggleElems = (elems, classAdd, item) => {
        removeClass(elems, classAdd);
        item.classList.add(classAdd);
      }
      // click tabs container elements
      const doTab = (item, small = false) => {
        slides.forEach(elem => {
          e.preventDefault();
          toggleElems(slidesPaginationTabs, 'tabs-pagination-item__active', item);
          // if tab element link anchor(without #) equal slides content container item id then open this slide
          if(item.getAttribute('href') && item.getAttribute('href').substring(1,) === elem.getAttribute('id')) {
            toggleElems(slides, 'tabs-content-item__active', elem);
          }
        })
        // if screen less then 480px display dots with current slide active dot
        if (small) {
          dotsAll.forEach((dot, index) => {
            if (dot.classList.contains('tabs-dots-item__active')) {
              toggleElems(slides, 'tabs-content-item__active', slides[index]);
            }
          })
        }
      }
      // if click on tab then open slide
      if (target.matches('.tabs-pagination-item')) {
        doTab(target);
        // if click on tab title or subtitle then open slide
      } else if (target.closest('a') && /#tab-\d*/i.test(target.closest('a').getAttribute('href'))) {
        doTab(target.closest('a'));
        // if click on dot then open slide
      } else if (target.matches('.tabs-dots-item')) {
        toggleElems(dotsAll, 'tabs-dots-item__active', target);
        doTab(target, true);
        // if click on slider arrows
      } else if (target.matches('.tabs-arrows-item')) {
        // if click on left arrow then scroll to previous slide
        if (target.classList.contains('tabs-arrows-item__left')) {
          slide('left');
          // if click on right arrow then scoll to next slide
        } else if (target.classList.contains('tabs-arrows-item__right')) {
          slide('right');
        }
      }  
    })
  }
  clickEvent();
  // slider autoplay
  const autoPlaySlide = () => {
		slide('right');
	};
  // set interval on slider autoplay
	const startSlide = (time = 2000) => {
		interval = setInterval(autoPlaySlide, time);
	};
  // stop slider autoplay
	const stopSlide = () => {
		clearInterval(interval);
	};
  // mouse event
  const mouseEvent = (event) => {
    document.addEventListener(event, e => {
      const target = e.target;
      // if move cursor over tab/tab title/tab subtitle/slider dot/slider arrow
      if (target.matches('.tabs-pagination-item') || target.matches('.tabs-name') || target.matches('.tabs-info') || target.matches('.tabs-dots-item') || target.matches('.tabs-arrows-item')) {
        if (event === 'mouseover') {
          // then stop slider autoplay
          stopSlide();
          // else move cursor out these elements then start slider autoplay again
        } else if (event === 'mouseout') {
          startSlide();
        }        
      } 
    });
  }
  mouseEvent('mouseover');
  mouseEvent('mouseout');
  startSlide();
  // keyboard events
  const keyboardEvent = (direction) => {
    const buttonKey = `Arrow${direction[0].toLocaleUpperCase()}${direction.substring(1,)}`;
    // while press button => stop slider autoplay and go to next/previous slide
    document.addEventListener('keydown', (e) => {
      if(e.key === buttonKey) {
        stopSlide();
        slide(direction);
      } 
    })
    // while remove button press => start slider autoplay again 
    document.addEventListener('keyup', (e) => {
      if(e.key === buttonKey) {
        startSlide();
      }
    })
  }
  keyboardEvent('right');
  keyboardEvent('left');
}

export default tabsSlider;