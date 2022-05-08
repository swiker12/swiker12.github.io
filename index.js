
function cargar() {
  alertify.prompt('Nombre', 'Escribe tu nombre por favot',
    function(evt, value) {
      alertify.success('Has escrito: ' + value.toString());
      document.getElementById('titulo').innerHTML = "Holaaa :) " + value.toString();
      document.getElementById('pregunta').innerHTML = "Holaa, " + value.toString() + ", queria pedirte si te gustaria salir conmigo :'(";
    },
    function() {
      alertify.error('Cancelado')
    });
}

function clickSi(){

alertify.confirm('Gran elección sabia que me ibas a decir que siiii 😍',function(){ alertify.success('Ok') });
document.getElementById('link').style.display = "block";
}

let left1 = 0, left2 = 0, top1 = 0, top2 = 0;

let numeroRandon = (x1, x2, direccion) => {
    let nRamdom = Math.floor(Math.random() * (+92 + 1 - +0)) + +0;
    x1 = nRamdom;

    if ((x1 - x2) <= 10 && (x1 - x2) >= 0) {
        if ((x1 + 10) > 92) {
            x1 -= 8;
        } else {
            x1 += 8;
        }
    }
    if ((x1 - x2) >= -10 && (x1 - x2) <= 0) {
        if ((x1 + 20) > 92) {
            x1 -= 20;
        } else {
            x1 += 20;
        }
    }
    if (direccion === "left") {
        left1 = x1;
        left2 = x1;
        console.log('l: ', left1, left2)
        return left1;
    }
    if (direccion === "top") {
        top1 = x1;
        top2 = x1;
        console.log('t: ', top1, top2)
        return top1;
    }
}

function clickNo() {

          document.onclick = function() {
            document.getElementById('no').style.left = `${numeroRandon(left1, left2, 'left')}%`;
        document.getElementById('no').style.top = `${numeroRandon(top1, top2, 'top')}%`;
      }


}

function raton(){
            document.onmouseout = function() {
            document.getElementById('no').style.left = `${numeroRandon(left1, left2, 'left')}%`;
        document.getElementById('no').style.top = `${numeroRandon(top1, top2, 'top')}%`;
      }
}

function nuevolink(){

    let url = "https://api.whatsapp.com/send?phone=34633748207&text=" + "Claro que acepto, jeje 🥰" + "%0A";
    window.open(url, "Enviar");
}




