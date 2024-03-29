/* 
  |----------------------------------------
  | Navigation
  |----------------------------------------
*/

// Var
const navbar = document.querySelector("#navbar");
const hero_section = document.querySelector("#hero-section");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("on_scroll");
  } else {
    navbar.classList.remove("on_scroll");
  }
}

// ---------- End of navigation

/* 
  |----------------------------------------
  | Auto write text
  |----------------------------------------
*/

const showcaseAutoWriteEl = document.querySelector(".auto-write-text");

let autoWriteText = "Front-End Developer...";
let autoWriteIndex = 0;

setInterval(autoWriteFunc, 300);

function autoWriteFunc() {
  showcaseAutoWriteEl.textContent = autoWriteText.slice(0, autoWriteIndex);

  autoWriteIndex++;

  if (autoWriteIndex > autoWriteText.length) {
    autoWriteIndex = 0;
  }
}

// ----------- End of auto write text

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  // Chat on whatsapp
  const chatOnWhatsapp = select(".chat-on-whatsapp");
  if (chatOnWhatsapp) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        chatOnWhatsapp.classList.add("active");
      } else {
        chatOnWhatsapp.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Initiate Pure Counter
   */
  // new PureCounter();
})();
