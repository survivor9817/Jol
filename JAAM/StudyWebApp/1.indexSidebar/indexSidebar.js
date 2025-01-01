// collapsible articles of each chapter
document.querySelectorAll('.chapter').forEach(chapter => {
    chapter.addEventListener('click', () => {
      chapter.nextElementSibling.classList.toggle('expanded');
    });
});

// close index sidebar
document.getElementById('sidebarCloser').addEventListener('click', function() {
    document.querySelector('.index-sidebar').classList.remove('index-sidebar-pop-in');
});

// code harjaa gheyre sidebar click kardi sidebar basteshe
// document.addEventListener('click', function(event) {
//     // Check if the clicked element is not #indexSidebar or a descendant of it
//     if (!document.getElementById('indexSidebar').contains(event.target)) {
//         document.querySelector('.sidebar').classList.remove('sidebar-pop-in');
//     }
// });
