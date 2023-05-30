console.log("click");

const liEL = document.querySelectorAll("li");

liEL.forEach((li) => {
  li.addEventListener("click", () => {
    liEL.forEach((active) => {
      active.classList.remove("active");
    });
    li.classList.add("active");
  });
});
