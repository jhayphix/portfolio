//Showcase Auto Write Text

const showcaseAutoWriteEl = document.querySelector(".auto-write-text");

let autoWriteText = "A Front-End Developer...";
let autoWriteIndex = 0;

setInterval(autoWriteFunc, 200);

function autoWriteFunc() {
  showcaseAutoWriteEl.textContent = autoWriteText.slice(0, autoWriteIndex);

  autoWriteIndex++;

  if (autoWriteIndex > autoWriteText.length) {
    autoWriteIndex = 0;
  }
}

// End of Showcase Auto Write Text
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// NAVIGATION AND HEADER FIXED
// Navbar Display
const navbarMenu = document.querySelector("#navbar-menu");
const navbarMenuLine = document.querySelectorAll(".navbar-menu-line");
const navbarPortraitContainer = document.querySelector(
  ".navbar-portrait-container"
);
const navbarPortraitWrapper = document.querySelector(
  ".navbar-portrait-wrapper"
);
const navbarItem = document.querySelectorAll(".navbar-item");
const navbar = document.querySelector(".navbar");
const headerFixed = document.querySelector(".header-fixed");

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
  navbarMenuLine.forEach((line) => {
    line.classList.toggle("show");
  });
  navbarPortraitContainer.classList.toggle("show");
  navbarPortraitWrapper.classList.toggle("show");
  navbarItem.forEach((item) => {
    item.classList.toggle("show");
  });
  navbar.classList.toggle("show");
  headerFixed.classList.toggle("show");
});

// Navbar Fixed On Scroll
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      headerFixed.classList.add("show");
    } else {
      headerFixed.classList.remove("show");
    }
  });
});

// END OF NAVIGATION AND HEADER FIXED
// ------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// JUMP TO TOP
const toTop = document.querySelector(".jump-to-top");

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// END OF JUMP TO TOP
// ------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// RANDOM CHOICE PICKER
const rcpHeader = document.querySelector("#rcp-header");

// Auto Write
let rcpHeaderText = "Random Choice Picker...";
let rcpIndex = 0;

setInterval(autoWriteRcpHeader, 200);

function autoWriteRcpHeader() {
  rcpHeader.innerHTML = rcpHeaderText.slice(0, rcpIndex);

  rcpIndex++;

  if (rcpIndex > rcpHeaderText.length) {
    rcpIndex = 0;
  }
}

// Choice Picker
const tagsContainer = document.querySelector("#tags-container");
const rcpTextarea = document.querySelector("#rcp-textarea");
const aboutSection = document.querySelector("#about-section");
// Show Tags Container

rcpTextarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsContainer.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsContainer.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
// END OF RANDOM CHOICE PICKER
// ------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// STAT SECTION

// WEB DEVELOPMENT PROGRESS PERCENTAGE

const webDevPercentage = document.querySelector("#web-dev-percentage");
let webDevCounter = 0;
// setInterval(() => {
//   if (webDevCounter == 81) {
//     clearInterval();
//   } else {
//     webDevCounter += 1;
//     webDevPercentage.innerHTML = webDevCounter + "%";
//   }
// }, 24);

// WEB DESIGN PROGRESS PERCENTAGE

const webDesignPercentage = document.querySelector("#wed-design-percentage");
let webDesignCounter = 0;
// setInterval(() => {
//   if (webDesignCounter == 75) {
//     clearInterval();
//   } else {
//     webDesignCounter += 1;
//     webDesignPercentage.innerHTML = webDesignCounter + "%";
//   }
// }, 28);

// WEB DESIGN PROGRESS PERCENTAGE

const seoPercentage = document.querySelector("#seo-percentage");

let seoCounter = 0;
// setInterval(() => {
//   if (seoCounter == 85) {
//     clearInterval();
//   } else {
//     seoCounter += 1;
//     seoPercentage.innerHTML = seoCounter + "%";
//   }
// }, 23);

function progressFunction() {
  setInterval(() => {
    if (webDevCounter == 81) {
      clearInterval();
    } else {
      webDevCounter += 1;
      webDevPercentage.innerHTML = webDevCounter + "%";
    }
  }, 24);

  setInterval(() => {
    if (webDesignCounter == 75) {
      clearInterval();
    } else {
      webDesignCounter += 1;
      webDesignPercentage.innerHTML = webDesignCounter + "%";
    }
  }, 28);

  setInterval(() => {
    if (seoCounter == 85) {
      clearInterval();
    } else {
      seoCounter += 1;
      seoPercentage.innerHTML = seoCounter + "%";
    }
  }, 23);
}
// Progress begins on scroll
const servicesSection = document.querySelector("#services-section");
const webDevCircle = document.querySelector("#webDevCircle");
const seoCircle = document.querySelector("#seoCircle");
const webDesignCircle = document.querySelector("#webDesignCircle");

setInterval(() => {
  webDevCircle.classList.add("active");
  seoCircle.classList.add("active");
  webDesignCircle.classList.add("active");
  progressFunction();
}, 1000);

setTimeout(() => {
  setInterval(() => {
    webDesignCircle.classList.remove("active");
    seoCircle.classList.remove("active");
    webDevCircle.classList.remove("active");
  }, 8000);
}, 10);
// END OF STAT SECTION

// ------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// SEND EMAIL
