

function cargar() {
  alertify.prompt('Añadir elementos', 'Escribe el elemento que quieres añadir a la lista', 'Escribe...',
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



document.addEventListener('click', e => {
    if (e.target === btnSi) {
        Swal.fire({
            title: 'Ya me esperaba esa respuesta mi amor ',
            confirmButtonText: 'Dale click 😊',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: 'rgba(207, 208, 218, 1)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/img/cat.gif")
              left top
              no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                let url = "https://api.whatsapp.com/send?phone=593992039435&text=" + "Si acepto mi amor 🥰" + "%0A";
                window.open(url, "Enviar");
            }
        })
    }
})


