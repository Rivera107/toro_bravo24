document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.toUpperCase();
    const password = document.getElementById('password').value;

    const usuarios = {
        'JESUS': '1234',
        'RODRIGO': '4567'
    };

    if (usuarios[username] && usuarios[username] === password) {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('menu').style.display = 'flex';
        window.scrollTo(0, 0);
    } else {
        document.getElementById('mensaje').textContent = 'Nombre de usuario o contraseña incorrectos';
        document.getElementById('mensaje').style.color = 'red';
    }
});

document.getElementById('concepto-link').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('tabla-concepto').style.display = 'block';
    document.getElementById('progreso-contenedor').style.display = 'block';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none'; // Oculta la tabla "Proveedores"
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none'; // Oculta la barra de progreso "Proveedores"
    window.scrollTo(0, 0);
});

document.getElementById('servicios-link').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('tabla-servicios').style.display = 'block';
    document.getElementById('progreso-servicios-contenedor').style.display = 'block';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none'; // Oculta la tabla "Proveedores"
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none'; // Oculta la barra de progreso "Proveedores"
    window.scrollTo(0, 0);
});

document.getElementById('legal-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    document.getElementById('tabla-legal').style.display = 'block';
    document.getElementById('progreso-legal-contenedor').style.display = 'block';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none'; // Oculta la tabla "Proveedores"
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none'; // Oculta la barra de progreso "Proveedores"
    window.scrollTo(0, 0); // Asegurarse de que la pantalla esté en la parte superior
});

document.getElementById('proveedores-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    document.getElementById('tabla-proveedores').style.display = 'block';
    document.getElementById('progreso-proveedores-contenedor').style.display = 'block';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    window.scrollTo(0, 0); // Asegurarse de que la pantalla esté en la parte superior
});

document.getElementById('salir').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'flex';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none'; // Oculta la tabla "Proveedores"
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none'; // Oculta la barra de progreso "Proveedores"
    document.getElementById('form-login').reset();
    document.getElementById('mensaje').textContent = '';
    resetearProgreso();
    window.scrollTo(0, 0);
});

let progresoConcepto = 0;
let progresoServicios = 0;
let progresoLegal = 0;
let progresoProveedores = 0;

const botonesCompletadoConcepto = document.querySelectorAll('#tabla-concepto .btn-completado');
const botonesRetrocederConcepto = document.querySelectorAll('#tabla-concepto .btn-retroceder');

const botonesCompletadoServicios = document.querySelectorAll('#tabla-servicios .btn-completado');
const botonesRetrocederServicios = document.querySelectorAll('#tabla-servicios .btn-retroceder');

const botonesCompletadoLegal = document.querySelectorAll('#tabla-legal .btn-completado');
const botonesRetrocederLegal = document.querySelectorAll('#tabla-legal .btn-retroceder');

const botonesCompletadoProveedores = document.querySelectorAll('#tabla-proveedores .btn-completado');
const botonesRetrocederProveedores = document.querySelectorAll('#tabla-proveedores .btn-retroceder');

// Eventos para los botones de la tabla "Concepto"
botonesCompletadoConcepto.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoConcepto += 33.33;
            boton.classList.add('completado');
            actualizarBarraProgresoConcepto();
        }
    });
});

// Eventos para los botones de la tabla "Servicios"
botonesCompletadoServicios.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoServicios += 12.5;
            boton.classList.add('completado');
            actualizarBarraProgresoServicios();
        }
    });
});

botonesRetrocederConcepto.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoConcepto -= 33.33;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoConcepto();
        }
    });
});

botonesRetrocederServicios.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoServicios -= 12.5;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoServicios();
        }
    });
});

// Eventos para los botones de la tabla "Legal"
botonesCompletadoLegal.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoLegal += 33.33;
            boton.classList.add('completado');
            actualizarBarraProgresoLegal();
        }
    });
});

botonesRetrocederLegal.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoLegal -= 33.33;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoLegal();
        }
    });
});

// Eventos para los botones de la tabla "Proveedores"
botonesCompletadoProveedores.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoProveedores += 25;
            boton.classList.add('completado');
            actualizarBarraProgresoProveedores();
        }
    });
});

botonesRetrocederProveedores.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoProveedores -= 25;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoProveedores();
        }
    });
});

function actualizarBarraProgresoConcepto() {
    document.getElementById('barra-progreso').style.width = `${progresoConcepto}%`;
    document.getElementById('barra-progreso').textContent = `${Math.round(progresoConcepto)}%`;
}

function actualizarBarraProgresoServicios() {
    document.getElementById('barra-progreso-servicios').style.width = `${progresoServicios}%`;
    document.getElementById('barra-progreso-servicios').textContent = `${Math.round(progresoServicios)}%`;
}

function actualizarBarraProgresoLegal() {
    document.getElementById('barra-progreso-legal').style.width = `${progresoLegal}%`;
    document.getElementById('barra-progreso-legal').textContent = `${Math.round(progresoLegal)}%`;
}

function actualizarBarraProgresoProveedores() {
    document.getElementById('barra-progreso-proveedores').style.width = `${progresoProveedores}%`;
    document.getElementById('barra-progreso-proveedores').textContent = `${Math.round(progresoProveedores)}%`;
}

function resetearProgreso() {
    progresoConcepto = 0;
    progresoServicios = 0;
    progresoLegal = 0;
    progresoProveedores = 0;
    document.getElementById('barra-progreso').style.width = '0%';
    document.getElementById('barra-progreso').textContent = '0%';
    document.getElementById('barra-progreso-servicios').style.width = '0%';
    document.getElementById('barra-progreso-servicios').textContent = '0%';
    document.getElementById('barra-progreso-legal').style.width = '0%';
    document.getElementById('barra-progreso-legal').textContent = '0%';
    document.getElementById('barra-progreso-proveedores').style.width = '0%';
    document.getElementById('barra-progreso-proveedores').textContent = '0%';

    botonesCompletadoConcepto.forEach(boton => {
        boton.classList.remove('completado');
    });

    botonesCompletadoServicios.forEach(boton => {
        boton.classList.remove('completado');
    });

    botonesCompletadoLegal.forEach(boton => {
        boton.classList.remove('completado');
    });

    botonesCompletadoProveedores.forEach(boton => {
        boton.classList.remove('completado');
    });
}

document.getElementById('concepto-link').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('tabla-concepto').style.display = 'block';
    document.getElementById('progreso-contenedor').style.display = 'block';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none';
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none';
    document.getElementById('tabla-sociales').style.display = 'none'; // Oculta la tabla "Sociales"
    document.getElementById('progreso-sociales-contenedor').style.display = 'none'; // Oculta la barra de progreso "Sociales"
    window.scrollTo(0, 0);
});

document.getElementById('servicios-link').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('tabla-servicios').style.display = 'block';
    document.getElementById('progreso-servicios-contenedor').style.display = 'block';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none';
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none';
    document.getElementById('tabla-sociales').style.display = 'none'; // Oculta la tabla "Sociales"
    document.getElementById('progreso-sociales-contenedor').style.display = 'none'; // Oculta la barra de progreso "Sociales"
    window.scrollTo(0, 0);
});

document.getElementById('legal-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    document.getElementById('tabla-legal').style.display = 'block';
    document.getElementById('progreso-legal-contenedor').style.display = 'block';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none';
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none';
    document.getElementById('tabla-sociales').style.display = 'none'; // Oculta la tabla "Sociales"
    document.getElementById('progreso-sociales-contenedor').style.display = 'none'; // Oculta la barra de progreso "Sociales"
    window.scrollTo(0, 0); // Asegurarse de que la pantalla esté en la parte superior
});

document.getElementById('proveedores-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    document.getElementById('tabla-proveedores').style.display = 'block';
    document.getElementById('progreso-proveedores-contenedor').style.display = 'block';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-sociales').style.display = 'none'; // Oculta la tabla "Sociales"
    document.getElementById('progreso-sociales-contenedor').style.display = 'none'; // Oculta la barra de progreso "Sociales"
    window.scrollTo(0, 0); // Asegurarse de que la pantalla esté en la parte superior
});

document.getElementById('sociales-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace

    document.getElementById('tabla-sociales').style.display = 'block';
    document.getElementById('progreso-sociales-contenedor').style.display = 'block';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none';
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none';
    window.scrollTo(0, 0); // Asegurarse de que la pantalla esté en la parte superior
});

document.getElementById('salir').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'flex';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('tabla-concepto').style.display = 'none';
    document.getElementById('progreso-contenedor').style.display = 'none';
    document.getElementById('tabla-servicios').style.display = 'none';
    document.getElementById('progreso-servicios-contenedor').style.display = 'none';
    document.getElementById('tabla-legal').style.display = 'none';
    document.getElementById('progreso-legal-contenedor').style.display = 'none';
    document.getElementById('tabla-proveedores').style.display = 'none';
    document.getElementById('progreso-proveedores-contenedor').style.display = 'none';
    document.getElementById('tabla-sociales').style.display = 'none'; // Oculta la tabla "Sociales"
    document.getElementById('progreso-sociales-contenedor').style.display = 'none'; // Oculta la barra de progreso "Sociales"
    document.getElementById('form-login').reset();
    document.getElementById('mensaje').textContent = '';
    resetearProgreso();
    window.scrollTo(0, 0);
});



const botonesCompletadoSociales = document.querySelectorAll('#tabla-sociales .btn-completado');
const botonesRetrocederSociales = document.querySelectorAll('#tabla-sociales .btn-retroceder');

// Eventos para los botones de la tabla "Concepto"
botonesCompletadoConcepto.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoConcepto += 33.33;
            boton.classList.add('completado');
            actualizarBarraProgresoConcepto();
        }
    });
});

// Eventos para los botones de la tabla "Servicios"
botonesCompletadoServicios.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoServicios += 12.5;
            boton.classList.add('completado');
            actualizarBarraProgresoServicios();
        }
    });
});

botonesRetrocederConcepto.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoConcepto -= 33.33;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoConcepto();
        }
    });
});

botonesRetrocederServicios.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoServicios -= 12.5;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoServicios();
        }
    });
});

// Eventos para los botones de la tabla "Legal"
botonesCompletadoLegal.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoLegal += 33.33;
            boton.classList.add('completado');
            actualizarBarraProgresoLegal();
        }
    });
});

botonesRetrocederLegal.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoLegal -= 33.33;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoLegal();
        }
    });
});

// Eventos para los botones de la tabla "Proveedores"
botonesCompletadoProveedores.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoProveedores += 25;
            boton.classList.add('completado');
            actualizarBarraProgresoProveedores();
        }
    });
});

botonesRetrocederProveedores.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoProveedores -= 25;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoProveedores();
        }
    });
});

// Eventos para los botones de la tabla "Sociales"
botonesCompletadoSociales.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) {
            progresoSociales += 33.33;
            boton.classList.add('completado');
            actualizarBarraProgresoSociales();
        }
    });
});

botonesRetrocederSociales.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling;
        if (botonCompletado.classList.contains('completado')) {
            progresoSociales -= 33.33;
            botonCompletado.classList.remove('completado');
            actualizarBarraProgresoSociales();
        }
    });
});

function actualizarBarraProgresoConcepto() {
    document.getElementById('barra-progreso').style.width = `${progresoConcepto}%`;
    document.getElementById('barra-progreso').textContent = `${Math.round(progresoConcepto)}%`;
}

function actualizarBarraProgresoServicios() {
    document.getElementById('barra-progreso-servicios').style.width = `${progresoServicios}%`;
    document.getElementById('barra-progreso-servicios').textContent = `${Math.round(progresoServicios)}%`;
}

function actualizarBarraProgresoLegal() {
    document.getElementById('barra-progreso-legal').style.width = `${progresoLegal}%`;
    document.getElementById('barra-progreso-legal').textContent = `${Math.round(progresoLegal)}%`;
}

function actualizarBarraProgresoProveedores() {
    document.getElementById('barra-progreso-proveedores').style.width = `${progresoProveedores}%`;
    document.getElementById('barra-progreso-proveedores').textContent = `${Math.round(progresoProveedores)}%`;
}

function actualizarBarraProgresoSociales() {
    document.getElementById('barra-progreso-sociales').style.width = `${progresoSociales}%`;
    document.getElementById('barra-progreso-sociales').textContent = `${Math.round(progresoSociales)}%`;
}

function resetearProgreso() {
    progresoConcepto = 0;
    progresoServicios = 0;
    progresoLegal = 0;
    progresoProveedores = 0;
    progresoSociales = 0;
    document.getElementById('barra-progreso').style.width = '0%';
    document.getElementById('barra-progreso').textContent = '0%';
    document.getElementById('barra-progreso-servicios').style.width = '0%';
    document.getElementById('barra-progreso-servicios').textContent = '0%';
    document.getElementById('barra-progreso-legal').style.width = '0%';
    document.getElementById('barra-progreso-legal').textContent = '0%';
    document.getElementById('barra-progreso-proveedores').style.width = '0%';
    document.getElementById('barra-progreso-proveedores').textContent = '0%';
    document.getElementById('barra-progreso-sociales').style.width = '0%';
    document.getElementById('barra-progreso-sociales').textContent = '0%';

    botonesCompletadoConcepto.forEach(boton => {
        boton.classList.remove('completado');
    });

    botonesCompletadoServicios.forEach(boton => {
        boton.classList.remove('completado');
    });

    botonesCompletadoLegal.forEach(boton => {
        boton.classList.remove('completado');
    });

    botonesCompletadoProveedores.forEach(boton => {
        boton.classList.remove('completado');
    });

    botonesCompletadoSociales.forEach(boton => {
        boton.classList.remove('completado');
    });
}

// Añadir eventos a los botones "Completado" en la tabla "Sociales"
botonesCompletadoSociales.forEach(boton => {
    boton.addEventListener('click', function() {
        if (!boton.classList.contains('completado')) { // Si el botón no está marcado como completado
            progresoSociales += 33.33; // Incrementar el progreso
            boton.classList.add('completado'); // Marcar el botón como completado
            actualizarBarraProgresoSociales(); // Actualizar la barra de progreso
        }
    });
});

// Añadir eventos a los botones "Retroceder" en la tabla "Sociales"
botonesRetrocederSociales.forEach(boton => {
    boton.addEventListener('click', function() {
        const botonCompletado = boton.previousElementSibling; // Seleccionar el botón "Completado" anterior
        if (botonCompletado.classList.contains('completado')) { // Si el botón "Completado" está marcado
            progresoSociales -= 33.33; // Reducir el progreso
            botonCompletado.classList.remove('completado'); // Desmarcar el botón "Completado"
            actualizarBarraProgresoSociales(); // Actualizar la barra de progreso
        }
    });
});

// Función para actualizar la barra de progreso de la tabla "Sociales"
function actualizarBarraProgresoSociales() {
    document.getElementById('barra-progreso-sociales').style.width = `${progresoSociales}%`; // Ajustar el ancho de la barra
    document.getElementById('barra-progreso-sociales').textContent = `${Math.round(progresoSociales)}%`; // Actualizar el texto de la barra
}

document.addEventListener('DOMContentLoaded', function() {
    // Variable para rastrear el progreso de la tabla "Sociales"
    let progresoSociales = 0;

    // Seleccionar todos los botones "Completado" en la tabla "Sociales"
    const botonesCompletadoSociales = document.querySelectorAll('#tabla-sociales .btn-completado');
    // Seleccionar todos los botones "Retroceder" en la tabla "Sociales"
    const botonesRetrocederSociales = document.querySelectorAll('#tabla-sociales .btn-retroceder');

    // Añadir eventos a los botones "Completado" en la tabla "Sociales"
    botonesCompletadoSociales.forEach(boton => {
        boton.addEventListener('click', function() {
            if (!boton.classList.contains('completado')) { // Si el botón no está marcado como completado
                progresoSociales += 33.33; // Incrementar el progreso
                boton.classList.add('completado'); // Marcar el botón como completado
                actualizarBarraProgresoSociales(); // Actualizar la barra de progreso
            }
        });
    });

    // Añadir eventos a los botones "Retroceder" en la tabla "Sociales"
    botonesRetrocederSociales.forEach(boton => {
        boton.addEventListener('click', function() {
            const botonCompletado = boton.previousElementSibling; // Seleccionar el botón "Completado" anterior
            if (botonCompletado.classList.contains('completado')) { // Si el botón "Completado" está marcado
                progresoSociales -= 33.33; // Reducir el progreso
                botonCompletado.classList.remove('completado'); // Desmarcar el botón "Completado"
                actualizarBarraProgresoSociales(); // Actualizar la barra de progreso
            }
        });
    });

    // Función para actualizar la barra de progreso de la tabla "Sociales"
    function actualizarBarraProgresoSociales() {
        document.getElementById('barra-progreso-sociales').style.width = `${progresoSociales}%`; // Ajustar el ancho de la barra
        document.getElementById('barra-progreso-sociales').textContent = `${Math.round(progresoSociales)}%`; // Actualizar el texto de la barra
    }
});

document.addEventListener('DOMContentLoaded', function() {
    cargarDatosConcepto();

    // Guardar los datos cuando se edita una celda
    document.querySelectorAll('#tabla-concepto td[contenteditable="true"]').forEach(celda => {
        celda.addEventListener('input', function() {
            guardarDatosConcepto();
        });
    });

    // Guardar el estado de los botones cuando se hace clic en ellos
    document.querySelectorAll('#tabla-concepto .btn-completado, #tabla-concepto .btn-retroceder').forEach(boton => {
        boton.addEventListener('click', function() {
            guardarDatosConcepto();
        });
    });
});

function guardarDatosConcepto() {
    let datos = [];
    document.querySelectorAll('#tabla-concepto tr').forEach((fila, index) => {
        if (index > 0) { // Omitir la fila de encabezados
            let descripcion = fila.cells[1].textContent;
            let decisionFinal = fila.cells[2].textContent;
            let completado = fila.querySelector('.btn-completado').classList.contains('completado');
            datos.push({ descripcion, decisionFinal, completado });
        }
    });
    localStorage.setItem('datosConcepto', JSON.stringify(datos));
}

function cargarDatosConcepto() {
    let datos = JSON.parse(localStorage.getItem('datosConcepto')) || [];
    document.querySelectorAll('#tabla-concepto tr').forEach((fila, index) => {
        if (index > 0 && datos[index - 1]) { // Omitir la fila de encabezados
            fila.cells[1].textContent = datos[index - 1].descripcion;
            fila.cells[2].textContent = datos[index - 1].decisionFinal;
            if (datos[index - 1].completado) {
                fila.querySelector('.btn-completado').classList.add('completado');
            } else {
                fila.querySelector('.btn-completado').classList.remove('completado');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatosServicios();

    document.querySelectorAll('#tabla-servicios td[contenteditable="true"]').forEach(celda => {
        celda.addEventListener('input', function() {
            guardarDatosServicios();
        });
    });

    document.querySelectorAll('#tabla-servicios .btn-completado, #tabla-servicios .btn-retroceder').forEach(boton => {
        boton.addEventListener('click', function() {
            guardarDatosServicios();
            guardarProgresoServicios();
        });
    });
});

function guardarDatosServicios() {
    let datos = [];
    document.querySelectorAll('#tabla-servicios tr').forEach((fila, index) => {
        if (index > 0) {
            let descripcion = fila.cells[1].textContent;
            let decisionFinal = fila.cells[2].textContent;
            let completado = fila.querySelector('.btn-completado').classList.contains('completado');
            datos.push({ descripcion, decisionFinal, completado });
        }
    });
    localStorage.setItem('datosServicios', JSON.stringify(datos));
}

function guardarProgresoServicios() {
    let progreso = parseFloat(document.getElementById('barra-progreso-servicios').style.width);
    localStorage.setItem('progresoServicios', progreso);
}

function cargarDatosServicios() {
    let datos = JSON.parse(localStorage.getItem('datosServicios')) || [];
    document.querySelectorAll('#tabla-servicios tr').forEach((fila, index) => {
        if (index > 0 && datos[index - 1]) {
            fila.cells[1].textContent = datos[index - 1].descripcion;
            fila.cells[2].textContent = datos[index - 1].decisionFinal;
            if (datos[index - 1].completado) {
                fila.querySelector('.btn-completado').classList.add('completado');
            } else {
                fila.querySelector('.btn-completado').classList.remove('completado');
            }
        }
    });

    let progreso = localStorage.getItem('progresoServicios');
    if (progreso !== null) {
        document.getElementById('barra-progreso-servicios').style.width = `${progreso}%`;
        document.getElementById('barra-progreso-servicios').textContent = `${Math.round(progreso)}%`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatosLegal();

    document.querySelectorAll('#tabla-legal td[contenteditable="true"]').forEach(celda => {
        celda.addEventListener('input', function() {
            guardarDatosLegal();
        });
    });

    document.querySelectorAll('#tabla-legal .btn-completado, #tabla-legal .btn-retroceder').forEach(boton => {
        boton.addEventListener('click', function() {
            guardarDatosLegal();
            guardarProgresoLegal();
        });
    });
});

function guardarDatosLegal() {
    let datos = [];
    document.querySelectorAll('#tabla-legal tr').forEach((fila, index) => {
        if (index > 0) {
            let descripcion = fila.cells[1].textContent;
            let decisionFinal = fila.cells[2].textContent;
            let completado = fila.querySelector('.btn-completado').classList.contains('completado');
            datos.push({ descripcion, decisionFinal, completado });
        }
    });
    localStorage.setItem('datosLegal', JSON.stringify(datos));
}

function guardarProgresoLegal() {
    let progreso = parseFloat(document.getElementById('barra-progreso-legal').style.width);
    localStorage.setItem('progresoLegal', progreso);
}

function cargarDatosLegal() {
    let datos = JSON.parse(localStorage.getItem('datosLegal')) || [];
    document.querySelectorAll('#tabla-legal tr').forEach((fila, index) => {
        if (index > 0 && datos[index - 1]) {
            fila.cells[1].textContent = datos[index - 1].descripcion;
            fila.cells[2].textContent = datos[index - 1].decisionFinal;
            if (datos[index - 1].completado) {
                fila.querySelector('.btn-completado').classList.add('completado');
            } else {
                fila.querySelector('.btn-completado').classList.remove('completado');
            }
        }
    });

    let progreso = localStorage.getItem('progresoLegal');
    if (progreso !== null) {
        document.getElementById('barra-progreso-legal').style.width = `${progreso}%`;
        document.getElementById('barra-progreso-legal').textContent = `${Math.round(progreso)}%`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatosProveedores();

    document.querySelectorAll('#tabla-proveedores td[contenteditable="true"]').forEach(celda => {
        celda.addEventListener('input', function() {
            guardarDatosProveedores();
        });
    });

    document.querySelectorAll('#tabla-proveedores .btn-completado, #tabla-proveedores .btn-retroceder').forEach(boton => {
        boton.addEventListener('click', function() {
            guardarDatosProveedores();
            guardarProgresoProveedores();
        });
    });
});

function guardarDatosProveedores() {
    let datos = [];
    document.querySelectorAll('#tabla-proveedores tr').forEach((fila, index) => {
        if (index > 0) {
            let descripcion = fila.cells[1].textContent;
            let decisionFinal = fila.cells[2].textContent;
            let completado = fila.querySelector('.btn-completado').classList.contains('completado');
            datos.push({ descripcion, decisionFinal, completado });
        }
    });
    localStorage.setItem('datosProveedores', JSON.stringify(datos));
}

function guardarProgresoProveedores() {
    let progreso = parseFloat(document.getElementById('barra-progreso-proveedores').style.width);
    localStorage.setItem('progresoProveedores', progreso);
}

function cargarDatosProveedores() {
    let datos = JSON.parse(localStorage.getItem('datosProveedores')) || [];
    document.querySelectorAll('#tabla-proveedores tr').forEach((fila, index) => {
        if (index > 0 && datos[index - 1]) {
            fila.cells[1].textContent = datos[index - 1].descripcion;
            fila.cells[2].textContent = datos[index - 1].decisionFinal;
            if (datos[index - 1].completado) {
                fila.querySelector('.btn-completado').classList.add('completado');
            } else {
                fila.querySelector('.btn-completado').classList.remove('completado');
            }
        }
    });

    let progreso = localStorage.getItem('progresoProveedores');
    if (progreso !== null) {
        document.getElementById('barra-progreso-proveedores').style.width = `${progreso}%`;
        document.getElementById('barra-progreso-proveedores').textContent = `${Math.round(progreso)}%`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarDatosSociales();

    document.querySelectorAll('#tabla-sociales td[contenteditable="true"]').forEach(celda => {
        celda.addEventListener('input', function() {
            guardarDatosSociales();
        });
    });

    document.querySelectorAll('#tabla-sociales .btn-completado, #tabla-sociales .btn-retroceder').forEach(boton => {
        boton.addEventListener('click', function() {
            guardarDatosSociales();
            guardarProgresoSociales();
        });
    });
});

function guardarDatosSociales() {
    let datos = [];
    document.querySelectorAll('#tabla-sociales tr').forEach((fila, index) => {
        if (index > 0) {
            let descripcion = fila.cells[1].textContent;
            let decisionFinal = fila.cells[2].textContent;
            let completado = fila.querySelector('.btn-completado').classList.contains('completado');
            datos.push({ descripcion, decisionFinal, completado });
        }
    });
    localStorage.setItem('datosSociales', JSON.stringify(datos));
}

function guardarProgresoSociales() {
    let progreso = parseFloat(document.getElementById('barra-progreso-sociales').style.width);
    localStorage.setItem('progresoSociales', progreso);
}

function cargarDatosSociales() {
    let datos = JSON.parse(localStorage.getItem('datosSociales')) || [];
    document.querySelectorAll('#tabla-sociales tr').forEach((fila, index) => {
        if (index > 0 && datos[index - 1]) {
            fila.cells[1].textContent = datos[index - 1].descripcion;
            fila.cells[2].textContent = datos[index - 1].decisionFinal;
            if (datos[index - 1].completado) {
                fila.querySelector('.btn-completado').classList.add('completado');
            } else {
                fila.querySelector('.btn-completado').classList.remove('completado');
            }
        }
    });

    let progreso = localStorage.getItem('progresoSociales');
    if (progreso !== null) {
        document.getElementById('barra-progreso-sociales').style.width = `${progreso}%`;
        document.getElementById('barra-progreso-sociales').textContent = `${Math.round(progreso)}%`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btnNuevo = document.getElementById('btn-nuevo');
    const modalNuevoUsuario = document.getElementById('modal-nuevo-usuario');
    const btnGuardar = document.getElementById('btn-guardar');

    // Mostrar el modal al hacer clic en el botón "Nuevo"
    btnNuevo.addEventListener('click', function() {
        modalNuevoUsuario.style.display = 'block';
    });

    // Guardar el nuevo usuario y contraseña en LocalStorage
    btnGuardar.addEventListener('click', function() {
        const nuevoUsuario = document.getElementById('nuevo-usuario').value.toUpperCase();
        const nuevoPassword = document.getElementById('nuevo-password').value;

        if (nuevoUsuario && nuevoPassword) {
            // Guardar el usuario y contraseña en LocalStorage
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
            usuarios[nuevoUsuario] = nuevoPassword;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            // Ocultar el modal
            modalNuevoUsuario.style.display = 'none';

            alert('Nuevo usuario creado. Ahora puedes iniciar sesión con estas credenciales.');
        } else {
            alert('Por favor, completa ambos campos.');
        }
    });

    // Verificar credenciales al intentar iniciar sesión
    document.getElementById('form-login').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.toUpperCase();
        const password = document.getElementById('password').value;

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

        if (usuarios[username] && usuarios[username] === password) {
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('menu').style.display = 'flex';
            window.scrollTo(0, 0);
        } else {
            document.getElementById('mensaje').textContent = 'Nombre de usuario o contraseña incorrectos';
            document.getElementById('mensaje').style.color = 'red';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const btnNuevo = document.getElementById('btn-nuevo');
    const modalNuevoUsuario = document.getElementById('modal-nuevo-usuario');
    const btnGuardar = document.getElementById('btn-guardar');
    const cerrarModal = document.getElementById('cerrar-modal');

    // Ocultar el botón "Nuevo" al cargar la página
    btnNuevo.style.display = 'none';

    // Mostrar el modal al hacer clic en el botón "Nuevo"
    btnNuevo.addEventListener('click', function() {
        modalNuevoUsuario.style.display = 'block';
    });

    // Cerrar el modal al hacer clic en la "X"
    cerrarModal.addEventListener('click', function() {
        modalNuevoUsuario.style.display = 'none';
    });

    // Guardar el nuevo usuario y contraseña en LocalStorage
    btnGuardar.addEventListener('click', function() {
        const nuevoUsuario = document.getElementById('nuevo-usuario').value.toUpperCase();
        const nuevoPassword = document.getElementById('nuevo-password').value;

        if (nuevoUsuario && nuevoPassword) {
            // Guardar el usuario y contraseña en LocalStorage
            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
            usuarios[nuevoUsuario] = nuevoPassword;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            // Ocultar el modal
            modalNuevoUsuario.style.display = 'none';

            alert('Nuevo usuario creado. Ahora puedes iniciar sesión con estas credenciales.');
        } else {
            alert('Por favor, completa ambos campos.');
        }
    });

    // Verificar credenciales al intentar iniciar sesión
    document.getElementById('form-login').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.toUpperCase();
        const password = document.getElementById('password').value;

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
        usuarios['JESUS'] = '1234';  // Asegurarse de que las credenciales JESUS/1234 están en el sistema.

        if (usuarios[username] && usuarios[username] === password) {
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('menu').style.display = 'flex';
            window.scrollTo(0, 0);

            // Mostrar el botón "Nuevo" solo si las credenciales son JESUS/1234
            if (username === 'JESUS' && password === '1234') {
                btnNuevo.style.display = 'block';
            }
        } else {
            document.getElementById('mensaje').textContent = 'Nombre de usuario o contraseña incorrectos';
            document.getElementById('mensaje').style.color = 'red';
        }
    });

    // Manejar el clic en el botón "Salir"
    document.getElementById('salir').addEventListener('click', function() {
        document.getElementById('form-container').style.display = 'flex';
        document.getElementById('menu').style.display = 'none';
        document.getElementById('tabla-concepto').style.display = 'none';
        document.getElementById('progreso-contenedor').style.display = 'none';
        document.getElementById('tabla-servicios').style.display = 'none';
        document.getElementById('progreso-servicios-contenedor').style.display = 'none';
        document.getElementById('tabla-legal').style.display = 'none';
        document.getElementById('progreso-legal-contenedor').style.display = 'none';
        document.getElementById('tabla-proveedores').style.display = 'none';
        document.getElementById('progreso-proveedores-contenedor').style.display = 'none';
        document.getElementById('tabla-sociales').style.display = 'none';
        document.getElementById('progreso-sociales-contenedor').style.display = 'none';
        document.getElementById('form-login').reset();
        document.getElementById('mensaje').textContent = '';
        btnNuevo.style.display = 'none'; // Ocultar el botón "Nuevo" al hacer clic en "Salir"
        resetearProgreso();
        window.scrollTo(0, 0);
    });
});
