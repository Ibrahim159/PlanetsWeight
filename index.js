document.addEventListener('DOMContentLoaded', function (){
    const weigth = document.getElementById('weight');
    const planet = document.getElementById('planet');
    const btn = document.getElementById('send');
    const alert = document.getElementById('alert');

    function showMessage(){
        if(weigth.value === '' || planet.value === ''){
            alert.classList.remove('alert-show');
            alert.innerText = 'Weight and Planet are requiered';
            return;
        }
        alert.classList.add('alert-show');
        switch(planet.value){
            case 'Mercury':
                console.log('Weight:', weigth.value * 0.38);
                break;
        }
        console.log('Planet:', planet.value);
    }

    btn.onclick = showMessage;
});