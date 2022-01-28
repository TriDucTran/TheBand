let header = document.getElementById('header');
let mobileMenu = document.getElementById('js-mobile-menu');
let headerHeight = header.clientHeight;

mobileMenu.onclick = () => {
    let isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

let menuItems = document.querySelectorAll('#navbar li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    let hasSubMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('sub-nav');

    menuItem.onclick = (e) => {
        if (hasSubMenu) {
            e.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}