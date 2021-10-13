// IIFE
var user =(function (e = 'sergiturbadenas@gmail.com') {
    let email = e;
    var password = 'asdasdasdas';

    function consoleme() {
        console.log('Usuari: ' + email)
    }

    function setEmail() {

    }

    return {
        consoleme: consoleme,
        email: email
    }
})()