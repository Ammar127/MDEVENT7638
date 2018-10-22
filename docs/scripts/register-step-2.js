
var resources = {
    "label": {
        "french": "Quelle est ta date de naissance ?",
        "english": "What's your birthdate ?"
    },
    "button": {
        "french": "Étape Suivante !",
        "english": "Next Step !"
    }
};

$(document).ready(function () {

    loadResources();

    $('.pageapp-login > a:eq(1)').on('click', function (e) {
        location.href = "register-step-3.html";
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