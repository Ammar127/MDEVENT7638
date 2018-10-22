(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        $(".js-notifications-count").text('12').addClass("badge animated bounceInDown");

        $(".header-light a:eq(1)").on("click", function () {
            location.href = "index.html";
        });
        $(".header-light a:eq(2)").on("click", function () {
            location.href = "notifications.html";
        });
        $(".header-light a:eq(3)").on("click", function () {
            location.href = "my-deals-cart2.html";
        });

        $(".sidebar-menu a:eq(0)").on("click", function () {
            location.href = "index.html";
        });
        $(".sidebar-menu a:eq(1)").on("click", function () {
            location.href = "page-profile-2.html";
        });
        $(".sidebar-menu a:eq(2)").on("click", function () {
            location.href = "my-deals-cart2.html";
        });
        $(".sidebar-menu a:eq(3)").on("click", function () {
            location.href = "notifications.html";
        });
        $(".sidebar-menu a:eq(4)").on("click", function () {
            location.href = "wishlist.html";
        });
        $(".sidebar-menu a:eq(5)").on("click", function () {
            location.href = "page-contact.html";
        });
        $(".sidebar-menu a:eq(6)").on("click", function () {
            location.href = "news-faq.html";
        });
        $(".sidebar-menu a:eq(7)").on("click", function () {
            location.href = "terms-of-services.html";
        });

        $(".cart-costs a:eq(0)").on("click", function () {
            location.href = "my-deals-cart-checkout.html";
        });
    };

})();