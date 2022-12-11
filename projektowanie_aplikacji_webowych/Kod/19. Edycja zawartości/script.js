window.onload = function (){

    setTimeout(function (){ document.getElementById('element-one').textContent = 'Nowa Wartość';
        document.getElementById('element-two').innerHTML = '<b>Pogrubiony Tekst</b>';
    },5000)


}