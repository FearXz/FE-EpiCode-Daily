function changeOnScroll() {
  let header = document.querySelector("header");
  let button = document.querySelector("header button.getStarted");
  let targetY = 500;

  let posY = window.scrollY;
  console.log(posY);

  if (posY > targetY) {
    header.setAttribute("data-scrolled", "true");
    button.setAttribute("data-scrolled", "true");
  } else {
    header.setAttribute("data-scrolled", "false");
    button.setAttribute("data-scrolled", "false");
  }
}
document.addEventListener("scroll", changeOnScroll);
function randomOpacity() {
  let tagGWithOpacity0 = document.querySelectorAll("svg g[opacity='0'][style='display: inherit']");
  console.log(tagGWithOpacity0);

  let randomIndex = Math.floor(Math.random() * tagGWithOpacity0.length);
  tagGWithOpacity0[randomIndex].setAttribute("opacity", "1");
  setTimeout(() => {
    tagGWithOpacity0[randomIndex].setAttribute("opacity", "0");
  }, 1000);
}
setInterval(randomOpacity, 500);
/*

function swap01() {
  let tagGWithOpacity = document.querySelectorAll("svg g[opacity='1'][style='display: inherit']");
  //console.log(tagGWithOpacity);
  tagGWithOpacity.forEach(function (tagG, index) {
    if (index % 2 != 0) {
      tagG.setAttribute("opacity", "0");
    } else {
      tagG.setAttribute("opacity", "0");
    }
  });
}*/
//swap01();
/*
function changeOpacity() {
  let tagGWithOpacity = document.querySelectorAll("svg g[opacity][style='display: inherit']");
  console.log(tagGWithOpacity);

  tagGWithOpacity.forEach(function (tagG) {
    let opacityCheck = parseInt(tagG.getAttribute("opacity"));

    if (opacityCheck == 0) {
      tagG.setAttribute("opacity", "1");
    } else if (opacityCheck == 1) {
      tagG.setAttribute("opacity", "0");
    }
  });
}
setInterval(changeOpacity, 4000);*/
