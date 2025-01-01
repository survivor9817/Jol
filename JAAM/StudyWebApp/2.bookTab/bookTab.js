      // Get references to the input and section elements
      const pageInput = document.getElementById("pageInput");
      const bookSection = document.getElementById("insideBook");
      const pages = document.querySelectorAll(".page");

      // Function to update the input value based on the scroll position
      function updateInputOnScroll() {
        pages.forEach((page, index) => {
          const rect = page.getBoundingClientRect();
          const pageHeight = rect.height;

          // Update the page number when more than half of the page is visible
          if (
            rect.top < window.innerHeight / 2 &&
            rect.bottom > pageHeight / 2
          ) {
            pageInput.value = index + 1;
          }
        });
      }

      // Function to scroll to the correct page when the input value changes
      function scrollToPage() {
        const pageNumber = parseInt(pageInput.value, 10); // Get the input value as a number
        if (pageNumber >= 1 && pageNumber <= pages.length) {
          // Scroll to the corresponding page
          const pageToScroll = document.getElementById(`page${pageNumber}`);
          pageToScroll.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }

      // Attach event listeners
      bookSection.addEventListener("scroll", updateInputOnScroll);
      pageInput.addEventListener("input", scrollToPage);

      // Initial scroll event trigger to set the correct input value on page load
      updateInputOnScroll();


      // page up and down
      const input = document.getElementById('pageInput');
      const nextButton = document.getElementById('nextPageBtn');
      const prevButton = document.getElementById('prevPageBtn');
      
      prevButton.addEventListener('click', () => {
        // Increase the value, ensuring it does not exceed the max value
        if (parseInt(input.value) < parseInt(input.max)) {
          input.value = parseInt(input.value) + 1;
          input.dispatchEvent(new Event('input')); // Manually trigger the input event
        }
      });
      
      nextButton.addEventListener('click', () => {
        // Decrease the value, ensuring it does not go below the min value
        if (parseInt(input.value) > parseInt(input.min)) {
          input.value = parseInt(input.value) - 1;
          input.dispatchEvent(new Event('input')); // Manually trigger the input event
        }
      });