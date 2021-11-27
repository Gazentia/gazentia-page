import SmoothScroll from 'smooth-scroll';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import './lodash.custom.min.js';
import tippy from 'tippy.js';
import AOS from 'aos';

// tech status = 1: Used 2: Learning 3: Reviewing
const techs = [
  {
    id: 't1',
    name: 'HTML5',
    info: 'A markup language used for structuring and presenting content on the World Wide Web.',
    status: 1,
  },
  {
    id: 't2',
    name: 'CSS3',
    info: 'A style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
    status: 1,
  },
  {
    id: 't3',
    name: 'SASS',
    info: 'The Syntactically Awesome Style Sheet that I use for getting a convenient additions to coding the CSS language (I use Scss).',
    status: 1,
  },
  {
    id: 't4',
    name: 'JavaScript',
    info: "A Dynamic Programming Language that's used for an interactive web designs.",
    status: 1,
  },
  {
    id: 't5',
    name: 'Node.js',
    info: 'An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine.',
    status: 3,
  },
  {
    id: 't6',
    name: 'Express.js',
    info: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications APIs.',
    status: 3,
  },
  {
    id: 't7',
    name: 'MySQL',
    info: "An a popular open-source relational database management system (RDBMS) that is developed, distributed and supported by Oracle Corporation. (I'm learning this thing again.)",
    status: 3,
  },
  {
    id: 't8',
    name: 'MongoDB',
    info: "An open-source database developed by MongoDB, Inc. MongoDB stores data in JSON-like documents that can vary in structure. It is a popular NoSQL database (I'm learning this thing again.)",
    status: 3,
  },
  {
    id: 't9',
    name: 'React.JS',
    info: "An open-source JavaScript library that is used for building user interfaces specifically for single-page applications. (I'm learning this thing.)",
    status: 2,
  },
  {
    id: 't10',
    name: 'Adobe Illustrator',
    info: 'A professional vector-based design and drawing program. Used as part of a larger design workflow.',
    status: 1,
  },
  {
    id: 't11',
    name: 'Adobe Photoshop',
    info: 'An image editing and photo retouching program.',
    status: 1,
  },
  {
    id: 't12',
    name: 'Visual Studio Code',
    info: 'A code editor redefined and optimized for building and debugging modern web and cloud applications.',
    status: 1,
  },
];

const portfolios = [
  {
    id: Math.random * 101,
    title: 'Crowdfunding',
    url: '/portfolios/crowdfunding-product-page-main',
    img: 'https://i.ibb.co/nzZVd9W/desktop-design.jpg',
  },
  {
    id: Math.random * 101,
    title: 'Fem Easybank',
    url: '/portfolios/fem-easybank',
    img: 'https://i.ibb.co/MpMV4TK/desktop-design.jpg',
  },
  {
    id: Math.random * 101,
    title: 'Interactive Pricing',
    url: '/portfolios/interactive-pricing-component',
    img: 'https://i.ibb.co/jRD81q8/desktop-preview.jpg',
  },
  {
    id: Math.random * 101,
    title: 'Loopstudios Landing',
    url: '/portfolios/loopstudios-landing-page',
    img: 'https://i.ibb.co/BwwThs6/active-states.jpg',
  },
  {
    id: Math.random * 101,
    title: 'Stats Preview Card',
    url: '/portfolios/stats-preview-card-component',
    img: 'https://i.ibb.co/g99DSkF/desktop-preview.jpg',
  },
  {
    id: Math.random * 101,
    title: 'Sunnyside Agency Landing',
    url: '/portfolios/sunnyside-agency-landing-page',
    img: 'https://i.ibb.co/kmWL135/active-states.jpg',
  },
  {
    id: Math.random * 101,
    title: 'Tip Calculator',
    url: '/portfolios/tip-calculator-app-main',
    img: 'https://i.ibb.co/N1H3RqH/desktop-design-completed.jpg',
  },
];

const scroll = new SmoothScroll();

function portfolioSwipper() {
  const swiper = new Swiper('.swiper-custom', {
    direction: 'horizontal',
    loop: true,
    speed: 3000,
    init: false,
    autoplay: {
      delay: 0,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    effect: 'coverflow',
    modules: [Navigation, Pagination, Autoplay],
    pagination: {
      el: '.swiper-custom-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-custom-next',
      prevEl: '.swiper-custom-prev',
    },
  });
  const container = document.querySelector('.swipper-portfolio');
  if (!container && !portfolios.length) {
    return;
  }
  portfolios.forEach((x) => {
    const slide = document.createElement('div');
    const link = document.createElement('a');
    const overlay = document.createElement('div');
    const icon = `<svg class="swiper-custom--overlay-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.6 69.76"><title>eye-open</title><path class="cls-1" d="M330.73,400.44c29.78-45.7,108.39-48.35,141.6-.27-16.41,22.42-39,33.49-66.42,34.62C375.23,436.06,349.62,425.32,330.73,400.44Zm70.78-26.67a26.23,26.23,0,1,0,26.23,26.36A26,26,0,0,0,401.51,373.77Z" transform="translate(-330.73 -365.13)"/><path class="cls-1" d="M401.56,414.13a14.13,14.13,0,1,1,14.07-14.32A13.9,13.9,0,0,1,401.56,414.13Z" transform="translate(-330.73 -365.13)"/></svg>`;
    overlay.classList.add('swiper-custom--overlay');
    link.href = x.url;
    link.classList.add('swiper-custom--link');
    link.target = '_blank';
    slide.classList.add('swiper-slide', 'swiper-custom--img');
    slide.style.backgroundImage = "url('" + x.img + "')";
    slide.insertAdjacentElement('beforeend', link);
    slide.insertAdjacentHTML('beforeend', icon);
    slide.insertAdjacentElement('beforeend', overlay);
    container.insertAdjacentElement('beforeend', slide);
  });
  swiper.init();
}

function techStatus(status) {
  switch (status) {
    case 1:
      return "<span class='badge badge--success'>Used</span>";
    case 2:
      return "<span class='badge badge--pending'>Learning</span>";
    case 3:
      return "<span class='badge badge--accent'>Reviewing</span>";
    default:
      return '';
  }
}

function initTechTippy() {
  techs.forEach((x) => {
    tippy('#' + x.id, {
      content:
        "<div class='tippy-header'><span class='tippy-title'>" +
        x.name +
        '</span>' +
        techStatus(x.status) +
        "</div><span class='tippy-info'>" +
        x.info +
        '</span>',
      theme: 'custom',
      arrow: true,
      animation: 'shift-toward-subtle',
      hideOnClick: false,
      allowHTML: true,
      interactiveDebounce: 75,
    });
  });
}
function initSectionTippy() {
  const switchs = document.querySelectorAll(
    '.carousel--section-page .carousel__dot'
  );
  const menus = document.querySelectorAll('.header .header__item');
  switchs.forEach((x, index) => {
    tippy(x, {
      content: menus[index].innerText,
      theme: 'custom',
      animation: 'shift-toward-subtle',
      hideOnClick: false,
      placement: 'left',
      delay: [500, 500],
      allowHTML: true,
      interactiveDebounce: 75,
    });
  });
}

function carouselSectionHandler(e) {
  const target = e.target;
  const elemTarget = target.dataset.target;
  const section = document.querySelector(elemTarget);
  const parent = target.closest('.carousel--section-page');
  if (parent && section) {
    parent
      .querySelectorAll(".carousel__dot[data-target*='#']")
      .forEach((elem) => {
        const elemState = elem.classList;
        const anchor = elem.dataset.target;
        if (anchor !== elemTarget) {
          elemState.remove('active');
        } else {
          elemState.add('active');
          scroll.animateScroll(section, {
            speed: 800,
            speedAsDuration: true,
            easing: 'easeInOutQuart',
          });
        }
      });
  }
}

function updateMenuActive(id) {
  const desktopMenu = document.querySelectorAll('.header__item');
  const mobileMenu = document.querySelectorAll('.mheader__item');
  const itemLists = [...desktopMenu, ...mobileMenu];
  itemLists.forEach((x) => {
    if (x.querySelector("[href='" + id + "']")) {
      x.classList.add('active');
    } else {
      x.classList.remove('active');
    }
  });
}

function menuMobileItemHandler(e) {
  const closeMenu = document.querySelector('#menuBtn');
  const menuItemTarget = e.target;
  const item = menuItemTarget.closest('.mheader__item');
  if (item && menuItemTarget.href) {
    const menuItems = item.closest('.mheader__items');
    menuItems.children.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
    closeMenu.click();
  }
}

function menuMobileHandler(e) {
  const menuBtn = e.target.closest('#menuBtn');
  const menuMobile = document.getElementById('menuMobile');
  const menuMobileState = menuMobile.classList;
  const menuBtnState = menuBtn.classList;
  const body = document.body.classList;
  if (!menuBtnState.contains('open')) {
    body.add('no-scroll');
    menuMobileState.add('open');
    menuBtnState.add('open');
  } else {
    body.remove('no-scroll');
    menuMobileState.remove('open');
    menuBtnState.remove('open');
  }
}

function menuMobile() {
  const menuBtn = document.getElementById('menuBtn');
  const menuMobileitems = document.querySelector('.mheader__items');
  menuBtn.addEventListener('click', menuMobileHandler);
  menuMobileitems.addEventListener('click', menuMobileItemHandler);
}

function sectionScroll() {
  const sectionWatching = document.querySelectorAll('.watching-scroll');
  if (sectionWatching.length) {
    sectionWatching.forEach((section) => {
      const sectionClient = section.getBoundingClientRect();
      const id = '#' + section.id;
      const switchCarousels = document.querySelector(
        '.carousel--section-page .carousel__dot[data-target="' + id + '"]'
      );
      if (switchCarousels) {
        let percentageVisible = parseInt(
          ((sectionClient.height - sectionClient.top) * 100) /
            sectionClient.height
        );
        percentageVisible =
          percentageVisible >= 0 && percentageVisible <= 110
            ? percentageVisible
            : 0;

        const switchCarouselsState = switchCarousels.classList;
        if (percentageVisible >= 40) {
          if (!switchCarouselsState.contains('active')) {
            switchCarouselsState.add('active');
            updateMenuActive(id);
            switchCarousels._tippy.show();
            setTimeout(switchCarousels._tippy.hide, 1000);
          }
        } else {
          switchCarouselsState.remove('active');
          switchCarousels._tippy.hide();
        }
      }
    });
  }

  if (!window.hasSmoothScroll) {
    window.hasSmoothScroll = true;
    window.addEventListener(
      'scroll',
      _.debounce(sectionScroll, 100, {
        maxWait: 1000,
      })
    );
  }
}

function sectionCarousel() {
  const switchs = document.querySelectorAll(
    ".carousel--section-page [data-target*='#']"
  );
  if (switchs.length) {
    switchs.forEach((x) => {
      x.addEventListener('click', carouselSectionHandler, false);
    });
  }
}

function initSmoothScroll() {
  new SmoothScroll("a[href*='#']", {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutQuart',
  });
}

function init() {
  AOS.init({
    easing: 'ease-in-out',
    mirror: false,
  });
  initSmoothScroll();
  menuMobile();
  sectionCarousel();

  initTechTippy();
  portfolioSwipper();

  setTimeout(() => {
    initSectionTippy();
    sectionScroll();
  }, 1000);
}

init();
