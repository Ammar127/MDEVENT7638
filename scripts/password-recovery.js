
var resources = {
    "label": {
        "french": "Réinitialise le mot de passe",
        "english": "Reset password"
    },
    "button": {
        "french": "Confirme",
        "english": "Confirm"
    }
};

$(document).ready(function () {

    loadResources();

    $('.pageapp-login > a:eq(1)').on('click', function () {
        $(".notification-small").removeClass("hide-notification");
    });

    $('#back-to-login').on('click', function () {
        location.href = "login.html";
    });

});

function loadResources() {

    switch (localStorage.getItem("language")) {
    case 'english':
        $('.registration-step-label').text(resources.label.english);
        $('.pageapp-login > a:eq(1) span').text(resources.button.english);
        break;
    case 'french':
        $('.registration-step-label').text(resources.label.french);
        $('.pageapp-login > a:eq(1) span').text(resources.button.french);
        break;
    }
}