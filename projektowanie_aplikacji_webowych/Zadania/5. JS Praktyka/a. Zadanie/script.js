window.onload = function () {
    let boxContainer = document.getElementById('box-container')

    document.getElementById('add').addEventListener('click', function () {
        let newElement = document.createElement('div');
        newElement.classList.add('box');

        boxContainer.appendChild(newElement);

    })
    document.getElementById('remove').addEventListener('click', function () {
        boxContainer.removeChild('box')
    })

}