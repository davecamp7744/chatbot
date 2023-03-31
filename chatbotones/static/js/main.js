function send_message(message) {
$.ajax({
    type: 'POST',
    url: '/message',
    data: { 'message': message },
    success: function (response) {
    $('#chat').append('<div>' + response + '</div>');
    }
});
}
const button = document.querySelector('#mi-boton');
button.addEventListener('click', () => {
    // Agrega aquí el código que se ejecuta después de hacer clic en el botón

    // Deshabilita el botón después de hacer clic
    button.style.display = 'none';
    });