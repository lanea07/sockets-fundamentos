var socket = io();
//Los on son para escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor ', mensaje);
})