export const cycleImages = (container, step) => {
    const images = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
    ]

    const imagesLength = images.length;
    var imagesIndex = 1;

    setInterval(() => {
        var image = images[imagesIndex];
        var imageURL = require('../../assets/images/' + image);
        container.style.backgroundImage = "url('" + imageURL + "')";
        
        if (imagesIndex+1 === imagesLength) {
            imagesIndex = 0;
        } else {
            imagesIndex += 1;
        }

    }, step);
}