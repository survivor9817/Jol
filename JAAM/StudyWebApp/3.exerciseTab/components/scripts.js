// buttons pop-in
// Select all elements with the class .toggle-answer
const toggleElements = document.querySelectorAll(".toggle-answer");

// Select all elements with the class .middle-bar
const middleBarElements = document.querySelectorAll(".exercise__container");

// Add click event listener to each .toggle-answer element
toggleElements.forEach(function (toggleElement) {
  toggleElement.addEventListener("click", function () {
    // Toggle the "open" class on all .middle-bar elements
    middleBarElements.forEach(function (middleBar) {
middleBar.classList.toggle("open");
    });
  });
});

// Tooltips Pop-in OnHover Buttons
const buttons = document.querySelectorAll(".btn--inputs");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const tooltipID = button.getAttribute("data-tooltipID");
    const popingTooltip = document.getElementById(tooltipID);
    popingTooltip.classList.add("pop-in");
  });

  button.addEventListener("mouseleave", () => {
    const tooltipID = button.getAttribute("data-tooltipID");
    const popingTooltip = document.getElementById(tooltipID);
    popingTooltip.classList.remove("pop-in");
  });
});


// // JavaScript function to scroll to the top of window
// document.getElementById('toggleAnswer').addEventListener('click', function() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth' // This enables smooth scrolling
//     });
//   });