const lazyImages = document.querySelectorAll('img[loading="lazy"]')

// console.log(lazyImages);

lazyImages.forEach(image => {
    image.addEventListener("load", onImageLoaded, {once: true});
})

function onImageLoaded(e) {
    // console.log('Image has been downloaded');
    e.target.classList.add("appear")
}