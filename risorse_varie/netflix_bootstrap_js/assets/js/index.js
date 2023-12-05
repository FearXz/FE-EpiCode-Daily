/* fixata animazione carosello buggata per overflow-visible*/

let buttons = document.querySelectorAll(".carousel button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let inner = event.currentTarget.closest(".carousel").querySelector(".carousel-inner");
    inner.classList.add("overflow-hidden");
    inner.classList.remove("overflow-visible");
    setTimeout(function () {
      inner.classList.add("overflow-visible");
      inner.classList.remove("overflow-hidden");
    }, 650);
  });
});

//let carousels = document.querySelectorAll(".carousel");
/*
carousels.forEach((carousel) => {
  let inner = carousel.querySelector(".carousel-inner");
  let buttons = carousel.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      inner.classList.add("overflow-hidden");
      inner.classList.remove("overflow-visible");
      setTimeout(function () {
        inner.classList.add("overflow-visible");
        inner.classList.remove("overflow-hidden");
      }, 650);
    });
  });
});
*/
/* test sul singolo carousel
      let innerCar = document.querySelector("#carouselExample3 .carousel-inner");
      let button = document.querySelector("#carouselExample3 button");
      button.addEventListener("click", () => {
        innerCar.classList.add("overflow-hidden");
        innerCar.classList.remove("overflow-visible");
        setTimeout(function () {
          innerCar.classList.add("overflow-visible");
          innerCar.classList.remove("overflow-hidden");
        }, 700);
      });*/
