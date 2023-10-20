const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const A = parseInt(document.getElementById('valorA').value);
    const B = parseInt(document.getElementById('valorB').value);
    const sucessMessage = document.querySelector('sucess_message')
    const errorMessage = document.querySelector('error_message')
    const warningMessage = document.querySelector('warning_message')

    function validaNumero(A, B) {

        if (B == A) {
            document.querySelector('.warning_message').style.display = 'block';
            document.querySelector('.sucess_message').style.display = 'none';
            document.querySelector('.error_message').style.display = 'none';
        } else if (B > A) {
            document.querySelector('.sucess_message').style.display = 'block';
            document.querySelector('.warning_message').style.display = 'none';
            document.querySelector('.error_message').style.display = 'none';
        } else {
            document.querySelector('.error_message').style.display = 'block';
            document.querySelector('.sucess_message').style.display = 'none';
            document.querySelector('.warning_message').style.display = 'none';         
        }

}
    formEValido = validaNumero(A, B);
})

