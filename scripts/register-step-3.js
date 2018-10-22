
var resources = {
    "label": {
        "french": "Où te trouves tu ?",
        "english": "What's your location ?"
    },
    "button": {
        "french": "Confirme !",
        "english": "Confirm !"
    },
    "select": {
        "french": "Choisis ta ville",
        "english": "Select your city"
    }
};

$(document).ready(function () {

    loadResources();

    $('.pageapp-login > a:eq(1)').on('click', function (e) {
        location.href = "page-profile-2.html";
    });


});

function loadResources() {

    switch (localStorage.getItem("language")) {
        case 'english':
            $('.registration-step-label').text(resources.label.english);
            $('.pageapp-login > a:eq(1) span').text(resources.button.english);
            $('.select-box select option:eq(0)').text(resources.select.english);
            break;
        case 'french':
            $('.registration-step-label').text(resources.label.french);
            $('.pageapp-login > a:eq(1) span').text(resources.button.french);
            $('.select-box select option:eq(0)').text(resources.select.french);
            break;
    }
}