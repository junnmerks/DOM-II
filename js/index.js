const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.style.transform = "scale(1.4)";
  });

  element.addEventListener("mouseleave", function () {
    element.style.transform = "scale(1)";
  });

  element.addEventListener("keydown", function (event) {
    if (event.target.style.color === "black") {
      event.target.style.color = "blue";
    } else {
      event.target.style.color = "black";
    }
  });
});

const subImg = document.querySelectorAll(".img-content");

subImg.forEach((element) => {
  element.addEventListener("wheel", function () {
    element.style.transform = "scale(1.2)";
  });
  element.addEventListener("mouseleave", function () {
    element.style.transform = "scale(1)";
  });
});
