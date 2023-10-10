// Set article with associated background image
function setArticleImages() {
    const prefix = 'assets/images/';
    const images = ['image-retro-pcs.jpg', 'image-top-laptops.jpg', 'image-gaming-growth.jpg'];
    const articles = document.querySelectorAll('.article-image');
    articles.forEach((article, index) => {
        article.style.backgroundImage = `url("${prefix}${images[index]}")`
    });
}

setArticleImages()