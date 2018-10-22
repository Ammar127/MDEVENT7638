
(function () {
    "use strict";

    const englishLanguage = "english";
    var userLanguage = englishLanguage;

    var resources = {
        "login": {
            "french": "Adresse E-Mail ou Numéro de Téléphone",
            "english": "Email Address or Phone Number"
        },
        "forgotPassword": {
            "french": "Mot de Passe Oublié?",
            "english": "Forgot Password?"
        },
        "createAccount": {
            "french": "Créer Un Compte",
            "english": "Create Account"
        },
        "loginButton": {
            "french": "Accès",
            "english": "Login"
        },
        "loginButtonFacebook": {
            "french": "Accès Facebook",
            "english": "Login with Facebook"
        },
        "notification": {
            "french": "Message d'erreur ici!",
            "english": "Attention notification goes here!"
        },
        "language": {
            "english": "English",
            "french": "Français"
        }
    };

    function setLanguage(language) {
        var currentLang = '';
        if (language === undefined) {
            currentLang = getLanguage();
            if (currentLang === undefined) {
                localStorage.setItem("language", englishLanguage);
            }
        } else {
            localStorage.setItem("language", language);
            currentLang = language;
        }

        loadResources(currentLang);
    }

    function getLanguage() {
        return localStorage.getItem('language');
    }

    function loadResources(language) {
        switch (language) {
            case "english":
                $('.pageapp-login-input input[type="text"]').val(resources.login.english);
                $('.pageapp-login-links .page-login-forgot span').text(resources.forgotPassword.english);
                $('.pageapp-login-links .page-login-create span').text(resources.createAccount.english);
                $('#login span').text(resources.loginButton.english);
                $('#fb-login span').text(resources.loginButtonFacebook.english);
                $('.notification-small p').text(resources.notification.english);
                $('.js-login-language-selector span').filter('[data-lang="french"]').removeClass('active-language');
                $('.js-login-language-selector span').filter('[data-lang="english"]').addClass('active-language');
                break;
            case 'french':
                $('.pageapp-login-input input[type="text"]').val(resources.login.french);
                $('.pageapp-login-links .page-login-forgot span').text(resources.forgotPassword.french);
                $('.pageapp-login-links .page-login-create span').text(resources.createAccount.french);
                $('#login span').text(resources.loginButton.french);
                $('#fb-login span').text(resources.loginButtonFacebook.french);
                $('.notification-small p').text(resources.notification.french);
                $('.js-login-language-selector span').filter('[data-lang="french"]').addClass('active-language');
                $('.js-login-language-selector span').filter('[data-lang="english"]').removeClass('active-language');
                break;
        }
        $('.js-login-language-selector span').filter('[data-lang="french"]').text(resources.language.french);
        $('.js-login-language-selector span').filter('[data-lang="english"]').text(resources.language.english);


    }

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        setLanguage();

        //$('.header').on('click', function () {
        //    location.href = 'index.html';
        //});

        $('#fb-login').on("click", function () {
            location.href = 'index.html';
        });

        $('#login').on("click", function () {
            location.href = "index.html";
        });

        $('.pageapp-login-links a:eq(0)').on('click', function () {
            location.href = 'password-recovery.html';
        });

        $('.pageapp-login-links a:eq(1)').on('click', function () {
            location.href = 'register.html';
        });

        $('.js-login-language-selector span').on("click", function (e) {
            var $span = $(e.target);
            $span.parent().siblings().each(function () {
                $(this).children("span").each(function () {
                    $(this).removeClass('active-language');
                });
            });
            $span.addClass('active-language');

            userLanguage = $span.data("lang");

            setLanguage(userLanguage);
        });

        $('.pageapp-login-input input[type="text"]').on('focus', function (e) {
            var $input = $(e.target).val();
            if ($input === 'Email Address or Phone Number' || $input === 'Adresse E-Mail ou Numéro de Téléphone')
                $(e.target).val('');
        });

        $('.pageapp-login-input input[type="text"]').on('blur', function (e) {
            var $input = $(e.target);
            if ($input.val() === '') {
                var userLanguage = getLanguage();
                switch (userLanguage) {
                case 'english':
                    $input.val('Email Address or Phone Number');
                    break;
                case 'french':
                    $input.val('Adresse E-Mail ou Numéro de Téléphone');
                    break;
                }
            }
        });
    };

})();