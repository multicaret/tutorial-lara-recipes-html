$(function () {
    $(".navbar-toggler").on("click", function (e) {
        $(".mc-header").toggleClass("show");
        e.stopPropagation();
    });

    $("html").click(function (e) {
        const header = document.getElementById("mc-header");

        if (!header.contains(e.target)) {
            $(".mc-header").removeClass("show");
        }
    });

    $("#mc-nav .nav-link").click(function (e) {
        $(".mc-header").removeClass("show");
    });
});