// collapsible answer box
const showAnswerBtn = document.getElementById("showAnswerBtn");
const exerciseContainer = document.getElementById("exerciseTab");

showAnswerBtn.addEventListener("click", () => {
  exerciseContainer.classList.toggle("open");
});


// Tooltips Pop-in OnHover user input btns
const buttons = document.querySelectorAll(".btn--inputs");

const handleTooltip = (button, action) => {
  const tooltipID = button.getAttribute("data-tooltipID");
  const popingTooltip = document.getElementById(tooltipID);
  popingTooltip.classList[action]("tooltip-pop-in");
};

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => handleTooltip(button, "add"));
  button.addEventListener("mouseleave", () => handleTooltip(button, "remove"));
});