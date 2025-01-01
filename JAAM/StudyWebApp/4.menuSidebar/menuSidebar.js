// collapsible articles of each chapter
document.querySelectorAll('.chapter').forEach(chapter => {
  chapter.addEventListener('click', () => {
    chapter.nextElementSibling.classList.toggle('expanded');
  });
});

// close menu sidebar
document.getElementById('menuSidebarCloser').addEventListener('click', function() {
  document.querySelector('.menu-sidebar').classList.remove('menu-sidebar-pop-in');
});

// close menu sidebar
document.getElementById('menuSidebarBtn').addEventListener('click', function() {
  document.querySelector('.menu-sidebar').classList.toggle('menu-sidebar-pop-in');
});

// code harjaa gheyre sidebar click kardi sidebar basteshe
// document.addEventListener('click', function(event) {
//     // Check if the clicked element is not #indexSidebar or a descendant of it
//     if (!document.getElementById('indexSidebar').contains(event.target)) {
//         document.querySelector('.sidebar').classList.remove('sidebar-pop-in');
//     }
// });
