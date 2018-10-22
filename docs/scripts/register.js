
var resources = {
    "email": {
        "french": "Adresse E-Mail",
        "english": "Email Address"
    },
    "phone": {
        "french": "Numéro de Téléphone",
        "english": "Phone Number"
    },
    "createAccount": {
        "french": "Crée Ton Compte",
        "english": "Create Account"
    },
    "backToLogin": {
        "french": "As Tu Déjà Un Compte?",
        "english": "Already Have An Account?"
    },
    "notification": {
        "french": "Message d'erreur ici!",
        "english": "Attention notification goes here!"
    },
    "username": {
        "french": "Nom d'utilisateur",
        "english": "Username"
    }
};

$(document).ready(function () {

    loadResources();

    $('.header').on('click', function () {
        location.href = 'index.html';
    });

    $('#back-to-login').on('click', function () {
        location.href = "login.html";
    });

    $('#create-account').on('click', function () {
        location.href = "register-step-2.html";
    });

    $('.js-register-email').on('focus', function (e) {
        var $input = $(e.target);
        if ($input.val() === resources.email.english || $input.val() === resources.email.french)
            $input.val('');
    });

    $('.js-register-email').on('blur', function (e) {
        var $input = $(e.target);
        if ($input.val() === '') {
            var userLanguage = getLanguage();
            switch (userLanguage) {
                case 'english':
                    $input.val(resources.email.english);
                    break;
                case 'french':
                    $input.val(resources.email.french);
                    break;
            }
        }
    });

    $('.js-register-phone').on('focus', function (e) {
        var $input = $(e.target);
        if ($input.val() === resources.phone.english || $input.val() === resources.phone.french)
            $input.val('');
    });

    $('.js-register-phone').on('blur', function (e) {
        var $input = $(e.target);
        if ($input.val() === '') {
            var userLanguage = getLanguage();
            switch (userLanguage) {
                case 'english':
                    $input.val(resources.phone.english);
                    break;
                case 'french':
                    $input.val(resources.phone.french);
                    break;
            }
        }
    });

    //$('.js-register-username').on('focus', function (e) {
    //    var $input = $(e.target);
    //    if ($input.val() === resources.username.english || $input.val() === resources.username.french)
    //        $input.val('');
    //});

    //$('.js-register-username').on('blur', function (e) {
    //    var $input = $(e.target);
    //    if ($input.val() === '') {
    //        var userLanguage = getLanguage();
    //        switch (userLanguage) {
    //            case 'english':
    //                $input.val(resources.username.english);
    //                break;
    //            case 'french':
    //                $input.val(resources.username.french);
    //                break;
    //        }
    //    }
    //});
});

function getLanguage() {
    return localStorage.getItem('language');
}

function loadResources() {

    switch (getLanguage()) {
        case 'english':
            $('.js-register-username').val(resources.username.english);
            $('.js-register-email').val(resources.email.english);
            $('.js-register-phone').val(resources.phone.english);
            $('#create-account span').text(resources.createAccount.english);
            $('#back-to-login span').text(resources.backToLogin.english);
            $('.notification-small p').text(resources.notification.english);
            break;
        case 'french':
            $('.js-register-username').val(resources.username.french);
            $('.js-register-email').val(resources.email.french);
            $('.js-register-phone').val(resources.phone.french);
            $('#create-account span').text(resources.createAccount.french);
            $('#back-to-login span').text(resources.backToLogin.french);
            $('.notification-small p').text(resources.notification.french);
            break;
    }
}