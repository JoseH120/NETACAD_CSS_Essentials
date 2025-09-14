function mostrarContenido(idElement, idBtn, message = '') {
    let element = document.getElementById(idElement);
    let button = document.getElementById(idBtn);
    if (element.hasAttribute('hidden')) {
        element.removeAttribute('hidden');
        if (message === '')
            button.textContent = 'ocultar contenido';
        else
            button.textContent = 'ocultar ' + message;

    } else {
        element.setAttribute('hidden', '');
        if (message === '')
            button.textContent = 'mostrar contenido';
        else
            button.textContent = 'mostrar ' + message;
    }
}