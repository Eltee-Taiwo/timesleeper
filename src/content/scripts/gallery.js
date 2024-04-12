let slideShowIndex = -1;
let galleryImages = $(".gallery-image");

$(".gallery-image").on('click',
    function (e) {
        $('#lightbox').modal('show');
        slideShowIndex = $(e.currentTarget).data("slideshowIndex");
        ShowLightboxImage();
    });

function nextImage(n) {
    slideShowIndex += n;
    ShowLightboxImage();
}

function ShowLightboxImage() {
    if (slideShowIndex < 0) {
        slideShowIndex = galleryImages.length - 1;
    } else if (slideShowIndex >= galleryImages.length) {
        slideShowIndex = 0;
    }

    $('#LightboxImage')[0].src = galleryImages[slideShowIndex].src;
}