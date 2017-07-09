function validateForm(){
	var nombre = $('#name').val();
	var apellido = $('#lastname').val();
	var email = $('#input-email').val();
	var password = $('#input-password').val();
	var opciones = $('#options').val();
	var caja1 = $('.input-box')[0];
	var caja2 = $('.input-box')[1];
	var caja3 = $('.input-box')[2];
	var caja4 = $('.input-box')[3];
	var caja5 = $('.input-box')[4];

if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre.length == 0 || nombre == ""){

	$(caja1).append('<span>Ingresa un nombre válido</span>');

	return caja1;
	}

if (apellido.charAt(0) != apellido.charAt(0).toUpperCase() || apellido.length == 0 || apellido == ""){

	$(caja2).append('<span>Ingresa un apellido válido</span>');

	return caja2;
	}




}
