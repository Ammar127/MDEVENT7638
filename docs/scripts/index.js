(function () {
    "use strict";

    var url = 'http://cypherlab.net/api/';

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        getValueFromApi();

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


        $(".slide-category").on("click", function () {
            const category = $(this).data("category");
            console.log(category);
            location.href = "campaign-sales.html";
        });

        $(".slide-detail").on("click", function () {
            //const category = $(this).data("category");
            //console.log(category);
            location.href = "campaign-details.html";
        });

        $(".slide-promoter").on("click", function () {
            //const category = $(this).data("category");
            //console.log(category);
            location.href = "campaign-sales.html";
        });

        $(".all-campaigns").on("click", function () {
            const context = $(this).data("context");
            console.log(context);
            location.href = "campaign-sales.html";
        });

        $(".footer-links a:eq(0)").on("click", function () {
            location.href = "page-profile-2.html";
        });
        $(".footer-links a:eq(1)").on("click", function () {
            location.href = "my-deals-cart2.html";
        });
        $(".footer-links a:eq(2)").on("click", function () {
            location.href = "terms-of-services.html";
        });
        $(".footer-links a:eq(3)").on("click", function () {
            location.href = "news-faq.html";
        });
    };

    function getValueFromApi() {
        $.getJSON(url + 'values/1', function (result) {
            //alert(result);
            //console.log(result);
        }).fail(function (jqXHR) {
            //console.log(jqXHR.statusText);
            //$('#error-msg').show();
            //$('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
        });
        return false;
    }
})();

