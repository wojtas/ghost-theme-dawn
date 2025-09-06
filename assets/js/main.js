$(function () {
    'use strict';
    featured();
    pagination(false);
});

function featured() {
    'use strict';
    $('.featured-feed').owlCarousel({
        dots: false,
        margin: 30,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // test wsparcia dla 'hanging each-line'
console.log("hanging polyfill");
  const test = document.createElement("p");
  test.style.textIndent = "1em hanging each-line";
  const supported = test.style.textIndent.includes("hanging");

  if (supported) return; // natywne wsparcie, nic nie robimy

  document.querySelectorAll(".single-content p").forEach(p => {
    // bierzemy HTML akapitu i rozbijamy po <br>
    const parts = p.innerHTML.split(/<br\s*\/?>/i);

    if (parts.length > 1) {
      const spans = parts.map(txt => `<span class="seg">${txt.trim()}</span>`);
      p.classList.add("hang-polyfill");
      p.innerHTML = spans.join("");
    }
  });
});
