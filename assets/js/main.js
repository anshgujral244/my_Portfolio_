(function () {
  "use strict";

  function init() {
    var toggle = document.querySelector(".mobile-nav-toggle");
    var nav = document.querySelector("#navmenu");

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        nav.classList.toggle("mobile-nav-active");
        toggle.classList.toggle("bi-list");
        toggle.classList.toggle("bi-x");
      });
    }

    var header = document.querySelector("#header");
    var lastScrollY = window.scrollY;
    if (header) {
      window.addEventListener("scroll", function () {
        var currentScrollY = window.scrollY;

        if (currentScrollY <= 80 || currentScrollY < lastScrollY) {
          header.classList.remove("header-hidden");
        } else {
          header.classList.add("header-hidden");
        }

        lastScrollY = currentScrollY;
      }, { passive: true });
    }

    var scrollTop = document.querySelector("#scroll-top");
    if (scrollTop) {
      window.addEventListener("scroll", function () {
        scrollTop.classList.toggle("active", window.scrollY > 100);
      });
    }

    if (window.AOS) {
      window.AOS.init({ once: true, duration: 600 });
    }

    var typed = document.querySelector(".typed");
    if (typed && window.Typed) {
      new window.Typed(typed, {
        strings: typed.getAttribute("data-typed-items").split(","),
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
      });
    }

    var preloader = document.querySelector("#preloader");
    if (preloader) {
      preloader.remove();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();