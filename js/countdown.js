// -----------------------------------------------------------------------------------------------------
// COUNTDOWN
// -----------------------------------------------------------------------------------------------------

var ctd = document.getElementById('countdown');

countdown();

function countdown() {
    // ATTENTION - Ianuary is 0, February is 1 ......
    var launch_date = new Date(Date.UTC(2018, 1, 1, 0, 0));
    var dias;
    var horas;
    var minutos;
    var segundos;
    var rest;
    var now = new Date();

    segundos = rest = Math.floor(((launch_date.getTime() - now.getTime()) / 1000));

    dias = zero(Math.floor(segundos / 86400));
    segundos -= dias * 86400;

    horas = zero(Math.floor(segundos / 3600));
    segundos -= horas * 3600;

    minutos = zero(Math.floor(segundos / 60));
    segundos -= minutos * 60;

    segundos = zero(Math.floor(segundos));

    function zero(n) {
        return (n < 10 ? '0' : false) + n;
    }

    rest <= 0 ? dias = horas = minutos = segundos = '00' : setTimeout(countdown, 1000);

    ctd.innerHTML =
        '<li>Estara lista en: &nbsp;</li>'+
        '<li>' + dias + '<span> day' + (dias > 1 ? 's' : '') + '</span></li>' +
        '<li>' + horas + '<span> hour' + (horas > 1 ? 's' : '') + '</span></li>' +
        '<li>' + minutos + '<span> minute' + (minutos > 1 ? 's' : '') + '</span></li>' +
        '<li>' + segundos + '<span> second' + (segundos > 1 ? 's' : '') + '</span></li>';
        // '<li><div><span>' + dias + '</span><br> day' + (dias > 1 ? 's' : '') + '</div></li>' +
        // '<li><div><span>' + horas + '</span><br> hour' + (horas > 1 ? 's' : '') + '</div></li>' +
        // '<li><div><span>' + minutos + '</span><br> minute' + (minutos > 1 ? 's' : '') + '</div></li>' +
        // '<li><div><span>' + segundos + '</span><br> second' + (segundos > 1 ? 's' : '') + '</div></li>';
}
