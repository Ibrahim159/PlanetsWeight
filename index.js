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
            case 'Venus':
                console.log('Weight:', weigth.value * 0.91);
                break;
            case 'Earth':
                console.log('Weight:', weigth.value * 1);
                break;
            case 'Mars':
                console.log('Weight:', weigth.value * 0.38);
                break;
            case 'Jupiter':
                console.log('Weight:', weigth.value * 2.34);
                break;
            case 'Saturn':
                console.log('Weight:', weigth.value * 1.06);
                break;
            case 'Uranus':
                console.log('Weight:', weigth.value * 0.92);    
                break;
            case 'Neptune':
                console.log('Weight::', weigth.value * 1.19);
                break;
            case 'Pluto':
                console.log('Weight::', weigth.value * 0.06);
                break;
        }
        console.log('Planet:', planet.value);
    }

    btn.onclick = showMessage;
});