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

function validateForm(){

if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre.length == 0 || nombre == ""){

	$(caja1).append('<span>Ingresa un nombre válido</span>');

	return caja1;
	}

if (apellido.charAt(0) != apellido.charAt(0).toUpperCase() || apellido.length == 0 || apellido == ""){

	$(caja2).append('<span>Ingresa un apellido válido</span>');

	return caja2;
	}

if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))){

	$(caja3).append('<span>Ingresa un correo válido</span>');

	return caja3;
	}

if (password == "123456" || password == "098765" || password.length <= 6){

	$(caja4).append('<span>Ingresa una contraseña válida</span>');

	return caja4;
	}

if (opciones == 0 || opciones == null) {

	$(caja5).append('<span>Debes seleccionar una opción</span>')

	return caja5;
	}
}
