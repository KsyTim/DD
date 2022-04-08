const tabsSlider = () => {
  const slides = document.querySelectorAll('.tabs-content-item');
  const slidesPaginationTabs = document.querySelectorAll('.tabs-pagination-item');

  const handler = () => {
    document.addEventListener('click', (e) => {
      const target = e.target;
      const toggleElems = (elems, classAdd, item) => {
        elems.forEach(elem => {
          if (elem.classList.contains(classAdd)) {
            elem.classList.remove(classAdd);
          }
        })
        item.classList.add(classAdd);
      };
      const slide = (item) => {
        slides.forEach(elem => {
          e.preventDefault();
          toggleElems(slidesPaginationTabs, 'tabs-pagination-item__active', item);
          if(item.getAttribute('href').substring(1,) === elem.getAttribute('id')) {
            toggleElems(slides, 'tabs-content-item__active', elem);
          }
        })
      }
      if (target.matches('.tabs-pagination-item')) {
        slide(target);
      } else if (target.closest('a') && /#tab-\d*/i.test(target.closest('a').getAttribute('href'))) {
        slide(target.closest('a'));
      }
    })
  }
  handler();
}

export default tabsSlider;