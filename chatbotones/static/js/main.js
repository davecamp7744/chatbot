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
    button.style.display = 'none';
});