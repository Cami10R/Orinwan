// JavaScript para manejar el envío del formulario
$(document).ready(function() {
    $('#customer-form').on('submit', function(event) {
        event.preventDefault(); // Prevenir el envío normal del formulario
        
        const customerData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            address: $('#address').val()
        };
        
        $.ajax({
            url: 'http://localhost:3000/api/customers', // Cambia esta URL si es necesario
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(customerData),
            success: function(response) {
                $('#response').html('<div class="alert alert-success">Cliente registrado correctamente!</div>');
                $('#customer-form')[0].reset(); // Reiniciar el formulario
            },
            error: function(xhr) {
                $('#response').html('<div class="alert alert-danger">Error al registrar cliente: ' + xhr.responseText + '</div>');
            }
        });
    });
});