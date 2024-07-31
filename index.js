document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const currentImage = document.getElementById('currentImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            currentImage.src = thumbnail.src;
        });
    });
});
