function ToggleMenuVisibility() {
    $(".navigationArea").toggleClass("menuVisible");
}

$(function () {
    AdjustContentMarginTop();
});

function AdjustContentMarginTop() {
    if ($(window).width() < 991) {
        $("body > div.body-content").css("margin-top", $("body > div.navigationArea")[0].offsetHeight);
    } else {
        $("body > div.body-content").css("margin-top", 0);
    }
}