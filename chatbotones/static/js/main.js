//FUNCION PARA EL TEXTO
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


//OCULTAR BUTTON
const button = document.querySelector('#mi-boton');
button.addEventListener('click', () => {
    button.style.display = 'none';
});

//FUNCION PARA EL NOMBRE
function send() {
    var userinput = document.getElementById("userinput").value;
    document.getElementById("chatbox").innerHTML += "<p><strong>Tú:</strong> " + userinput + "</p>";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("chatbox").innerHTML += "<p><strong>Bot:</strong> " + this.responseText + "</p>";
        }
    };
    xhttp.open("GET", "/get?msg=" + userinput, true);
    xhttp.send();
    document.getElementById("userinput").value = "";
};

// var nombre = null;
// var status = null;
// function sub(){
// nombre = document.getElementsByName("nombre")[0].value;
// alert("Tu nombre es: ",nombre);
// };