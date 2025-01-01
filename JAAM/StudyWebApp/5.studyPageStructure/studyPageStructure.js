// // Get the buttons and the container
// const exerciseTabBtn = document.getElementById('exerciseTabBtn');
// const bookTabBtn = document.getElementById('bookTabBtn');
// const container = document.querySelector('.container');
// const indexSidebarBtn = document.getElementById('indexSidebarBtn');
// const indexSidebar = document.querySelector('.index-sidebar');

// // When #exerciseTabBtn is clicked, add .move-left to .container
// exerciseTabBtn.addEventListener('click', () => {
//   indexSidebar.classList.remove('index-sidebar-pop-in');
//   container.classList.add('move-left');
// });

// // When #bookTabBtn is clicked, remove .move-left from .container
// bookTabBtn.addEventListener('click', () => {
//   container.classList.remove('move-left');
// });

// // the action before jump to ref
// const refPages = document.querySelectorAll('.ref-page');
// refPages.forEach(refPage => {
//     refPage.addEventListener('click', () => {
//         container.classList.remove('move-left');
//     });
// });

// // open and close index sidebar
// indexSidebarBtn.addEventListener('click', function() {
//   container.classList.remove('move-left');
//   indexSidebar.classList.toggle('index-sidebar-pop-in');
// });









// Get the buttons and the container
// const exerciseTabBtn = document.getElementById('exerciseTabBtn');
// const bookTabBtn = document.getElementById('bookTabBtn');
// const container = document.querySelector('.container');
// const indexSidebarBtn = document.getElementById('indexSidebarBtn');
// const indexSidebar = document.querySelector('.index-sidebar');

// let sidebarOpenedByUser = false; // Variable to track sidebar state

// // When #exerciseTabBtn is clicked, add .move-left to .container and close sidebar
// exerciseTabBtn.addEventListener('click', () => {
//   if (indexSidebar.classList.contains('index-sidebar-pop-in')) {
//     sidebarOpenedByUser = true; // Remember sidebar was open
//   } else {
//     sidebarOpenedByUser = false; // Sidebar was closed
//   }
//   indexSidebar.classList.remove('index-sidebar-pop-in'); // Close sidebar
//   container.classList.add('move-left'); // Move container to the left
// });

// // When #bookTabBtn is clicked, remove .move-left from .container
// // Reopen the sidebar only if it was opened before switching to the exercise tab
// bookTabBtn.addEventListener('click', () => {
//   container.classList.remove('move-left'); // Bring back container to center
//   if (sidebarOpenedByUser) {
//     indexSidebar.classList.add('index-sidebar-pop-in'); // Reopen sidebar
//   }
// });

// // The action before jumping to ref
// const refPages = document.querySelectorAll('.ref-page');
// refPages.forEach(refPage => {
//   refPage.addEventListener('click', () => {
//     container.classList.remove('move-left'); // Remove move-left when jumping to ref
//   });
// });

// // Open and close index sidebar when indexSidebarBtn is clicked
// indexSidebarBtn.addEventListener('click', function() {
//   container.classList.remove('move-left'); // Ensure container is centered
//   indexSidebar.classList.toggle('index-sidebar-pop-in'); // Toggle sidebar visibility

//   // Update the sidebar state when user manually opens or closes it
//   sidebarOpenedByUser = indexSidebar.classList.contains('index-sidebar-pop-in');
// });










// Get the buttons and the container
const exerciseTabBtn = document.getElementById('exerciseTabBtn');
const bookTabBtn = document.getElementById('bookTabBtn');
const container = document.querySelector('.container');
const indexSidebarBtn = document.getElementById('indexSidebarBtn');
const indexSidebar = document.querySelector('.index-sidebar');

let sidebarOpenedByUser = false; // Variable to track sidebar state

// Function to handle switching to the book tab
function switchToBookTab() {
  container.classList.remove('move-left'); // Bring back container to center
  if (sidebarOpenedByUser) {
    indexSidebar.classList.add('index-sidebar-pop-in'); // Reopen sidebar
  }
}

// When #exerciseTabBtn is clicked, add .move-left to .container and close sidebar
exerciseTabBtn.addEventListener('click', () => {
  if (indexSidebar.classList.contains('index-sidebar-pop-in')) {
    sidebarOpenedByUser = true; // Remember sidebar was open
  } else {
    sidebarOpenedByUser = false; // Sidebar was closed
  }
  indexSidebar.classList.remove('index-sidebar-pop-in'); // Close sidebar
  container.classList.add('move-left'); // Move container to the left
});

// When #bookTabBtn is clicked, remove .move-left from .container
bookTabBtn.addEventListener('click', switchToBookTab);

// The action before jumping to ref (acts like clicking on bookTabBtn)
const refPages = document.querySelectorAll('.ref-page');
refPages.forEach(refPage => {
  refPage.addEventListener('click', () => {
    switchToBookTab(); // Mimic bookTabBtn click behavior
  });
});

// Open and close index sidebar when indexSidebarBtn is clicked
indexSidebarBtn.addEventListener('click', function() {
  container.classList.remove('move-left'); // Ensure container is centered
  indexSidebar.classList.toggle('index-sidebar-pop-in'); // Toggle sidebar visibility

  // Update the sidebar state when user manually opens or closes it
  sidebarOpenedByUser = indexSidebar.classList.contains('index-sidebar-pop-in');
});







// scrollbar on





// scrollspy
// the appropiate js code for current mockup
// document.addEventListener('DOMContentLoaded', function () {
//   const pages = document.querySelectorAll('#insideBook .page');  // Select all page elements
//   const navChapters = document.querySelectorAll('.contents-list .chapter');  // Select all chapter links
//   const navArticles = document.querySelectorAll('.contents-list .article');  // Select all article links
//   const articlesOl = document.querySelectorAll('.articles'); // Select all ol.article elements (collapsible)

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const pageId = entry.target.id;
          
//           // Deactivate all links
//           navChapters.forEach(link => link.classList.remove('active'));
//           navArticles.forEach(link => link.classList.remove('active'));

//           // Deactivate all expanded chapters
//           articlesOl.forEach(ol => ol.classList.remove('expanded'));

//           // Find the parent chapter and article
//           const currentPage = document.getElementById(pageId);
//           const parentArticle = currentPage.closest('section[id^="article"]');
//           const parentChapter = currentPage.closest('section[id^="chapter"]');

//           if (parentArticle) {
//             // If inside an article, activate the article and its chapter
//             const articleLink = document.querySelector(`.contents-list a[href="#${parentArticle.id}"]`);
//             const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);
            
//             articleLink.classList.add('active');
//             chapterLink.classList.add('active');
            
//             // Expand the relevant chapter
//             chapterLink.nextElementSibling.classList.add('expanded');
//           } else if (parentChapter) {
//             // If inside a chapter but not in an article, activate the chapter only
//             const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);
            
//             chapterLink.classList.add('active');
            
//             // Expand the relevant chapter
//             chapterLink.nextElementSibling.classList.add('expanded');
//           }
//         }
//       });
//     },
//     {
//       root: null, // Viewport as root
//       rootMargin: '0px',
//       threshold: 0.6, // 60% of the section must be in view
//     }
//   );

//   // Observe each page
//   pages.forEach((page) => {
//     observer.observe(page);
//   });

//   // Handle clicks on the links to manually activate the correct chapter/article
//   navArticles.forEach(articleLink => {
//     articleLink.addEventListener('click', (e) => {
//       // Prevent flickering by manually activating the clicked article
//       const targetArticle = document.querySelector(articleLink.getAttribute('href'));

//       // Deactivate all links and expanded sections
//       navChapters.forEach(link => link.classList.remove('active'));
//       navArticles.forEach(link => link.classList.remove('active'));
//       articlesOl.forEach(ol => ol.classList.remove('expanded'));

//       // Find the chapter and article
//       const parentChapter = targetArticle.closest('section[id^="chapter"]');
//       const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);
      
//       // Activate the clicked article and its chapter
//       articleLink.classList.add('active');
//       chapterLink.classList.add('active');
      
//       // Expand the relevant chapter
//       chapterLink.nextElementSibling.classList.add('expanded');
//     });
//   });
// });






document.addEventListener('DOMContentLoaded', function () {
  const pages = document.querySelectorAll('#insideBook .page');  // Select all page elements
  const navChapters = document.querySelectorAll('.contents-list .chapter');  // Select all chapter links
  const navArticles = document.querySelectorAll('.contents-list .article');  // Select all article links
  const articlesOl = document.querySelectorAll('.articles'); // Select all ol.article elements (collapsible)
  const refPages = document.querySelectorAll('.ref-page'); // Select all .ref-page elements

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const pageId = entry.target.id;

          // Deactivate all links
          navChapters.forEach(link => link.classList.remove('active'));
          navArticles.forEach(link => link.classList.remove('active'));

          // Deactivate all expanded chapters
          articlesOl.forEach(ol => ol.classList.remove('expanded'));

          // Find the parent chapter and article
          const currentPage = document.getElementById(pageId);
          const parentArticle = currentPage.closest('section[id^="article"]');
          const parentChapter = currentPage.closest('section[id^="chapter"]');

          if (parentArticle) {
            // If inside an article, activate the article and its chapter
            const articleLink = document.querySelector(`.contents-list a[href="#${parentArticle.id}"]`);
            const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);

            articleLink.classList.add('active');
            chapterLink.classList.add('active');

            // Expand the relevant chapter
            chapterLink.nextElementSibling.classList.add('expanded');
          } else if (parentChapter) {
            // If inside a chapter but not in an article, activate the chapter only
            const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);

            chapterLink.classList.add('active');

            // Expand the relevant chapter
            chapterLink.nextElementSibling.classList.add('expanded');
          }
        }
      });
    },
    {
      root: null, // Viewport as root
      rootMargin: '0px',
      threshold: 0.4, // 40% of the section must be in view
    }
  );

  // Observe each page
  pages.forEach((page) => {
    observer.observe(page);
  });

  // Handle clicks on the links to manually activate the correct chapter/article
  navArticles.forEach(articleLink => {
    articleLink.addEventListener('click', (e) => {
      // Prevent flickering by manually activating the clicked article
      const targetArticle = document.querySelector(articleLink.getAttribute('href'));

      // Deactivate all links and expanded sections
      navChapters.forEach(link => link.classList.remove('active'));
      navArticles.forEach(link => link.classList.remove('active'));
      articlesOl.forEach(ol => ol.classList.remove('expanded'));

      // Find the chapter and article
      const parentChapter = targetArticle.closest('section[id^="chapter"]');
      const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);

      // Activate the clicked article and its chapter
      articleLink.classList.add('active');
      chapterLink.classList.add('active');

      // Expand the relevant chapter
      chapterLink.nextElementSibling.classList.add('expanded');
    });
  });

  // Handle clicks on .ref-page elements
  refPages.forEach(refPage => {
    refPage.addEventListener('click', (e) => {
      const targetPageId = refPage.getAttribute('href').substring(1); // Extract ID from href
      const targetPage = document.getElementById(targetPageId);

      if (targetPage) {
        // Scroll to the target page
        targetPage.scrollIntoView({ behavior: 'smooth' });

        // Deactivate all links and expanded sections
        navChapters.forEach(link => link.classList.remove('active'));
        navArticles.forEach(link => link.classList.remove('active'));
        articlesOl.forEach(ol => ol.classList.remove('expanded'));

        // Find the parent chapter and article
        const parentArticle = targetPage.closest('section[id^="article"]');
        const parentChapter = targetPage.closest('section[id^="chapter"]');

        if (parentArticle) {
          const articleLink = document.querySelector(`.contents-list a[href="#${parentArticle.id}"]`);
          const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);

          articleLink.classList.add('active');
          chapterLink.classList.add('active');
          chapterLink.nextElementSibling.classList.add('expanded');
        } else if (parentChapter) {
          const chapterLink = document.querySelector(`.contents-list a[href="#${parentChapter.id}"]`);

          chapterLink.classList.add('active');
          chapterLink.nextElementSibling.classList.add('expanded');
        }
      }
    });
  });
});


















// function setInsideBookHeight() {
//   var insideBook = document.getElementById('insideBook');
//   var windowHeight = window.innerHeight;
//   var elementTop = insideBook.getBoundingClientRect().top;

//   // تنظیم ارتفاع برای جلوگیری از خروج از صفحه
//   insideBook.style.height = (windowHeight - elementTop - 10) + 'px';
//   insideBook.style.overflow = 'auto';
// }

// // اجرای تابع هنگام بارگذاری صفحه و تغییر سایز صفحه
// window.addEventListener('load', setInsideBookHeight);
// window.addEventListener('resize', setInsideBookHeight);



// تنظیم ارتفاع تب ها
function setScrollableHeight(elementId) {
  var element = document.getElementById(elementId);
  var windowHeight = window.innerHeight;
  var elementTop = element.getBoundingClientRect().top;

  // تنظیم ارتفاع برای جلوگیری از خروج از صفحه
  element.style.height = (windowHeight - elementTop - 6) + 'px';
  element.style.overflow = 'auto';
}

function adjustHeights() {
  setScrollableHeight('insideBook');
  setScrollableHeight('insideExercise');
}

// اجرای تابع هنگام بارگذاری صفحه و تغییر سایز صفحه
window.addEventListener('load', adjustHeights);
window.addEventListener('resize', adjustHeights);
