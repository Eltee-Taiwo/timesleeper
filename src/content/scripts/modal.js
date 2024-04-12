var modalOpen = false;

$('#lightbox').on('show.bs.modal',
    function (e) {
        AdjustForNavBar();
        ShowLightboxArrows(true);
        modalOpen = true;
    });

$('#lightbox').on('hidden.bs.modal',
    function() {
        ShowLightboxArrows(false);
        modalOpen = false;
    });

function SetLoadingDiv(show) {
    if (show === true) {
        $('.modal-body').addClass('hidden');
        $('.modal-header').addClass('hidden');
        $('#loadingDiv').removeClass('hidden');
    } else {
        $('.modal-body').removeClass('hidden');
        $('.modal-header').removeClass('hidden');
        $('#loadingDiv').addClass('hidden');
    }
}

function ShowLightboxArrows(shouldShow) {
    if (shouldShow === true) {
        return;
    } else {
        return;
    }
}

function AdjustForNavBar() {
    if ($("#LogoDiv img.desktop").css('display') !== 'none') {
        $("#lightbox").css('left', $(".navigationArea").css('width'));
    } else {
        $("#lightbox").css('left', 0);
    }
}

document.onkeydown = function (e) {
    e = e || window.event;
    // use e.keyCode
    if (modalOpen === true) {
        if (e.keyCode === 37) {
            nextImage(-1);
        } else if (e.keyCode === 39) {
            nextImage(1);
        }
    }
};