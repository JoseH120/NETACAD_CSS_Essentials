function mostrarContenido(idElement, idBtn) {
    let element = document.getElementById(idElement);
    let button = document.getElementById(idBtn);
    if (element.hasAttribute('hidden')) {
        element.removeAttribute('hidden');
        button.textContent = 'ocultar contenido';
    } else {
        element.setAttribute('hidden', '');
        button.textContent = 'mostrar contenido';
    }
}