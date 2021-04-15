document.addEventListener('DOMContentLoaded', function (){
    const weigth = document.getElementById('weight');
    const planet = document.getElementById('planet');
    const btn = document.getElementById('send');
    const alert = document.getElementById('alert');
    const table = document.getElementById('table');

    function showMessage(){
        var res;
        var gravity;
        if(weigth.value === '' || planet.value === ''){
            alert.classList.remove('alert-show');
            alert.innerText = 'Weight and Planet are requiered';
            return;
        }
        alert.classList.add('alert-show');
        switch(planet.value){
            case 'Mercury':
                gravity = 3.7;
                res = weigth.value * 0.38;
                break;
            case 'Venus':
                gravity = 8.87;
                res =  weigth.value * 0.91;
                break;
            case 'Earth':
                gravity = 9.81;
                res =  weigth.value * 1;
                break;
            case 'Mars':
                gravity = 3.72;
                res =  weigth.value * 0.38;
                break;
            case 'Jupiter':
                gravity = 24.79;
                res =  weigth.value * 2.34;
                break;
            case 'Saturn':
                gravity = 10.44;
                res =  weigth.value * 1.06;
                break;
            case 'Uranus':
                gravity = 8.87;
                res =  weigth.value * 0.91;    
                break;
            case 'Neptune':
                gravity = 11.15;
                res =  weigth.value * 1.19;
                break;
            case 'Pluto':
                gravity = 0.62;
                res =  weigth.value * 0.06;
                break;
            default:
                return;
        }

        const row = table.insertRow();
        row.innerHTML = `
            <td>${planet.value}</td>
            <td>${gravity.valueOf()} m/s^2</td>
            <td>${res.valueOf().toFixed(2)}</td>
        `;
    }

    btn.onclick = showMessage;
});