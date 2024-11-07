
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open');
});

function closeMenu() {
    document.getElementById('sidebar').classList.remove('open');
}


function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
    closeMenu();
}
