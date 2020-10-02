var semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
var ano = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var diaAtual = new Date();
var horaAgora = diaAtual.getTime() / 1000;
var hora0 = new Date(diaAtual.getFullYear(), diaAtual.getMonth(), diaAtual.getDate()).getTime() / 1000;

// var isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));

function get(id) {
    return document.getElementById(id);
}

function create(tag) {
    return document.createElement(tag);
}

function save(nome, objeto) {
  let objSalvo = JSON.stringify(objeto);
  localStorage.setItem(nome, objSalvo);
  console.log("Objeto salvo na localStorage: " + objSalvo);
}

function load(nome) {
  let objRecuperado =  JSON.parse(localStorage.getItem(nome));
  console.log("Objeto recuperado da localStorage: " + objRecuperado);
  return objRecuperado;
}

function desvio(array) {
    let menorValor = array[0];
    let maiorValor = array[0];
    for (let i in array) {
        if (menorValor > array[i])
            menorValor = array[i];
        else if (maiorValor < array[i])
            maiorValor = array[i];
    }
    return maiorValor - menorValor;
}

function media(array, rounded) {
    if (array == null || array.length == 0)
        return '?';
    let calculo = 0;
    let quantidade = array.length;
    for (let i in array) {
        if (array[i] != null && typeof array[i] == 'number')
            calculo += array[i];
        else
            quantidade--;
    }
    calculo = calculo / quantidade;
    return rounded ? Math.round(calculo) : calculo;
}

function maior(array, criterio) {
    if (criterio == null) {
        criterio = (val1, val2) => val1 > val2;    
    }
    let maior = array[0];
    for (let i in array)
        if (criterio(array[i], maior))
            maior = array[i];
    return maior;
}

function contem(texto) { // Pelo menos um.
    if (typeof texto != 'string')
        return false;
    for (let i = 1; i < arguments.length; i++)
        if (texto.indexOf(arguments[i]) > -1)
            return true;
    return false;
}

function timeString(timeUTC) {
    return new Date(timeUTC * 1000).toLocaleTimeString('pt-BR');
}

function toInt(string) {
    let stringFiltrada = filtraNumeros(string);
    if (string != null && string != '')
        return parseInt(stringFiltrada);
}

function toFloat(string) {
    let stringFiltrada = filtraNumeros(string);
    if (string != null && string != '')
        return parseFloat(stringFiltrada);
}

function filtraNumeros(string) {
    if (string == null)
        return null;
    let stringFiltrada = '';
    for(let i = 0; i < string.length; i++)
        if ('0123456789.'.indexOf(string[i]) !== -1)
            stringFiltrada += string[i];
    return stringFiltrada;
}

function dateString(timeUTC) {
    return new Date(timeUTC * 1000).toLocaleDateString();
}

function dataStringToSeconds(ano, mes, dia) {
    return new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia)).getTime()/1000;
}

function getFromArray(array, attributeName) {
    let retorno = [];
    for (let i in array) {
        if (array[i][attributeName] != null)
            retorno.push(array[i][attributeName]);
    }
    return retorno;
}