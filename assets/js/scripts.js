import { registrarUbers, obtenerUbers, actualizarUber, eliminarUber } from "./promesas.js";

window.addEventListener("load", () => {
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
    traerUbers();
    document.getElementById('btnActualizar').addEventListener('click', actualizarUbers);
    document.getElementById("btncambioColor").addEventListener("click", cambiarcolor);

});

// Función para cambiar el color de los elementos
function cambiarcolor(){
    let element123 = document.getElementsByClassName("h1color");
    console.log("aloooo")
    // Ciclo para cambiar la clase de los elementos los 2 a la vez tanto fondo como letras
    for (let index = 0; index < element123.length; index++) {
        const clase112 = element123[index];
        clase112.classList.remove("h1color");
        clase112.classList.add("h2color");}
        for (let index = 0; index < element123.length; index++) {
            const clase112 = element123[index];
            clase112.classList.remove("h1color");
            clase112.classList.add("h2color");}
}



const registrar = () => {
    let enombre=document.getElementById("nombre")
    let eemail=document.getElementById("email")
    let etelefono=document.getElementById("telefono")
    let eedad=document.getElementById("edad")
    //let egenero=document.getElementById("genero")
    //let epreferencias=document.getElementById("preferencias")
    let emensaje=document.getElementById("mensaje")
    let epais=document.getElementById("pais")

    let vnombre=enombre.value;
    let vemail=eemail.value;
    let vtelefono=etelefono.value;
    let vedad=eedad.value;
    //let vgenero=egenero.value;
    //let vpreferencias=epreferencias.checked;
    let vmensaje=emensaje.value;
    let vpais=epais.value;

    let objeto = {
        nombre:vnombre,
        email:vemail,
        telefono:vtelefono,
        edad:vedad,
        //genero:vgenero,
        //preferencias:vpreferencias,
        mensaje:vmensaje,
        pais:vpais,
    };

    // alerta  al registrar
    registrarUbers(objeto).then(() => {
        alert("Se registró con éxito");
        traerUbers(); // Se actualiza
    }).catch((r) => {
        console.log(r);
    });
};

// Datos
const actualizarUbers = () => {
    let enombre = document.getElementById("UPDnombre");
    let eemail = document.getElementById("UPDemail");
    let etelefono = document.getElementById("UPDtelefono");
    let eedad = document.getElementById("UPDedad");
    //let egenero = document.querySelector('input[name="genero"]:checked');
    //let epreferencias = document.getElementById("preferencias");
    let emensaje = document.getElementById("UPDmensaje");
    let epais = document.getElementById("UPDpais");


    let vnombre=enombre.value;
    let vemail=eemail.value;
    let vtelefono=etelefono.value;
    let vedad=eedad.value;
    //let vgenero=egenero.value;
    //let vpreferencias=epreferencias.checked;
    let vmensaje=emensaje.value;
    let vpais=epais.value;

    let objeto = {
        nombre:vnombre,
        email:vemail,
        telefono:vtelefono,
        edad:vedad,
        //genero:vgenero,
        //preferencias:vpreferencias,
        mensaje:vmensaje,
        pais:vpais,
    };
    let id = document.getElementById('btnActualizar').value;

    actualizarUber(objeto, id).then(() => {
        alert('Se actualizó correctamente');
        traerUbers(); // Se actualiza
    }).catch((e) => {
        console.log(e);
    });
};

const traerUbers = () => {
    obtenerUbers().then((ubers) => {
        let estructura = '';
        console.log(ubers);
        ubers.forEach((p) => {
            estructura += '<tr>';
            estructura += '<td>' + p.nombre + '</td>';
            estructura += '<td>' + p.email + '</td>';
            estructura += '<td>' + p.telefono + '</td>';
            estructura += '<td>' + p.edad + '</td>';
            //estructura += '<td>' + p.genero + '</td>';
            //estructura += '<td>' + p.preferencias + '</td>';
            estructura += '<td>' + p.mensaje + '</td>';
            estructura += '<td>' + p.pais + '</td>';
            estructura += '<td><button id="UPD' + p.id + '">Actualizar</button></td>';
            estructura += '<td><button id="DEL' + p.id + '">Eliminar</button></td>';
            estructura += '</tr>';
        });

        console.log(estructura);
        document.getElementById('tbUbers').innerHTML = estructura;
        ubers.forEach((p) => {
            let elemento = document.getElementById("UPD" + p.id);
            elemento.addEventListener('click', () => {
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDemail").value = p.email;
                document.getElementById("UPDtelefono").value = p.telefono;
                document.getElementById("UPDedad").value = p.edad;
                //document.getElementById("genero_" + p.genero).checked = true; 
                //document.getElementById("preferencias").checked = p.preferencias;
                document.getElementById("UPDmensaje").value = p.mensaje;
                document.getElementById("UPDpais").value = p.pais;
                document.getElementById('id').value = p.id;
            });

            //elimina al uber
            let elementoEliminar = document.getElementById('DEL' + p.id);
            elementoEliminar.addEventListener('click', () => {
                eliminar(p.id);
            });
        });
    }).catch((e) => {
        console.log(e);
    });
};

const eliminar = (id) => {
    eliminarUber(id).then(() => {
        alert(confirm('Estas seguro que quieres eliminar?'));
        traerUbers();
    }).catch((e) => {
        console.log(e);
    });
};
