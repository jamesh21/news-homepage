// Set article with associated background image
const setArticleImages = () => {
    const prefix = 'assets/images/';
    const images = ['image-retro-pcs.jpg', 'image-top-laptops.jpg', 'image-gaming-growth.jpg'];
    const articles = document.querySelectorAll('.article-image');
    articles.forEach((article, index) => {
        article.style.backgroundImage = `url("${prefix}${images[index]}")`
    });
}

// add event listners to hamburger and close icon
const addButtonEventListeners = () => {
    const menuBtn = document.querySelector('.hamburger-icon');
    const closeMenuBtn = document.querySelector('.close-icon');
    const navMenu = document.querySelector('.off-screen-menu');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', () => {
        // slides out nav menu when clicked
        navMenu.classList.toggle('is-active');
        overlay.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', () => {
        // closes nav menu when clicked
        navMenu.classList.toggle('is-active');
        overlay.style.display = 'none';
    });
}

setArticleImages();
addButtonEventListeners();