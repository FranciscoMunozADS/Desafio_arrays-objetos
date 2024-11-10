const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },{
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },{
    nombre: 'Casa Esquina Con Excelente Ubicación Central Quilpue',
    src: 'https://http2.mlstatic.com/D_NQ_NP_708356-MLC80079761738_102024-O.webp',
    descripcion: 'Acogedora casa con excelente ubicación central y excelente barrio.',
    ubicacion: 'Galleguillos 1200 - 1500, Quilpué',
    habitaciones: 4,
    baños: 2,
    costo: 3500,
    smoke: true,
    pets: true
    },{
    nombre: 'Moderno departamento sector Marga Marga',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240908/3504378/n_wm_kiteprop_3587_568e0c804007e81a12541271029a028a.webp',
    descripcion: 'Departamento en excelente sector de Quilpué, a pasos de locomoción.',
    ubicacion: 'Lago Las Torres 123',
    habitaciones: 3,
    baños: 1,
    costo: 3500,
    smoke: false,
    pets: true
    },{
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: true,
    pets: false
    },{
    nombre: 'Casa Mena',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240402/3156206/n_wm_alaluf_propiedades_28983_1.webp',
    descripcion: 'Espectacular casa, con amplio terreno, en una excelente ubicación de Quilpue.',
    ubicacion: 'Mena 123, Quilpué',
    habitaciones: 2,
    baños: 2,
    costo: 5000,
    smoke: true,
    pets: true
    }
]

const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true
    }, {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: true
    }, {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false
    }, {
    nombre: 'Casa Topocalma',
    src: 'https://playalobos.cl/images/casas/topocalma/topocalma8.jpg',
    descripcion: 'Casa con vista a la plata Topocalma, un lugar ideal para los practicantes del Surf',
    ubicacion: '123 Camino Playa Topocalma',
    habitaciones: 2,
    baños: 2,
    costo: 3000,
    smoke: true,
    pets: false
    },{
    nombre: 'Moderno departamento sector Marga Marga',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20240908/3504378/n_wm_kiteprop_3587_568e0c804007e81a12541271029a028a.webp',
    descripcion: 'Departamento en excelente sector de Quilpué, a pasos de locomoción.',
    ubicacion: 'Lago Las Torres 123',
    habitaciones: 3,
    baños: 1,
    costo: 2500,
    smoke: false,
    pets: true
    }
]

/* funcion para cargar las propiedades en venta */
function loadPropiedadesVenta(){
    const contenedor = document.getElementById("contenedor-venta");
    let propVenta = '' // variable global
    for (propiedad of propiedades_venta) {
        propVenta += `
        <div class = "col-md-4 mb-4">
            <div class = "card">
                <img src = "${propiedad.src}" class = "card-img-top" alt = "${propiedad.nombre}"/>
                <div class = "card-body">
                    <h5 class = "card-title">
                    ${propiedad.nombre}
                    </h5>
                    <p class = "card-text">
                    ${propiedad.descripcion}
                    </p>
                    <p>
                        <i class = "fas fa-bed"></i>
                        ${propiedad.habitaciones} Habitaciones |
                        <i class = "fas fa-bath"></i>
                        ${propiedad.baños} Baños
                    </p>
                    <p>
                        <i class = "fas fa-dollar-sign"></i>
                        ${propiedad.costo}
                    </p>
                    ${propiedad.smoke ? // operador ternario -> true : false
                        '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : 
                        '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar.</p>'
                    }
                    ${propiedad.pets ? // operador ternario -> true : false
                        '<p class="text-success"> <i class="fas fa-paw"></i>Mascotas permitidas </p>' : 
                        '<p class = "text-danger"> <i class = "fa-solid fa-ban"></i> No se permiten mascotas.</p>'
                    }

                </div>
            </div>
        </div>
        `;
    }
contenedor.innerHTML = propVenta; // carga la variable global al html, de esta manera se actualiza solo una vez el DOM
}

/* funcion para cargar las propiedades en venta */
function loadPropiedadesAlquiler(){
    const contenedor = document.getElementById("contenedor-alquiler");
    let propAlquiler = '' // variable global
    for (propiedad of propiedades_alquiler) {
        propAlquiler += `
        <div class = "col-md-4 mb-4">
            <div class = "card">
                <img src = "${propiedad.src}" class = "card-img-top" alt = "${propiedad.nombre}"/>
                <div class = "card-body">
                    <h5 class = "card-title">
                    ${propiedad.nombre}
                    </h5>
                    <p class = "card-text">
                    ${propiedad.descripcion}
                    </p>
                    <p>
                        <i class = "fas fa-bed"></i>
                        ${propiedad.habitaciones} Habitaciones |
                        <i class = "fas fa-bath"></i>
                        ${propiedad.baños} Baños
                    </p>
                    <p>
                        <i class = "fas fa-dollar-sign"></i>
                        ${propiedad.costo}
                    </p>
                    ${propiedad.smoke ? // operador ternario -> true : false
                        '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : 
                        '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar.</p>'
                    }
                    ${propiedad.pets ? // operador ternario -> true : false
                        '<p class="text-success"> <i class="fas fa-paw"></i>Mascotas permitidas </p>' : 
                        '<p class = "text-danger"> <i class = "fa-solid fa-ban"></i> No se permiten mascotas.</p>'
                    }

                </div>
            </div>
        </div>
        `
        ;
    }
    contenedor.innerHTML = propAlquiler; // carga la variable global al html, de esta manera se actualiza solo una vez el DOM
}

/* página index */

const contenedorVentasDestacadas = document.getElementById("contenedor-venta-destacadas");
const contenedorAlquilerDestacadas = document.getElementById("contenedor-alquiler-destacadas");

/* funcion para cargar ventas destacadas */

function cargarVentasDestacadas(){
    let ventaDest = "";

    // indice inicial: 0 , condicion de parada a (< 3), incremento de valor en 1 para cada iteración (++)
    for (let index = 0; index < 3; index++){
        const propiedad = propiedades_venta[index];
        ventaDest += `
            <div class = "col-md-4 mb-4">
            <div class = "card">
                <img src = "${propiedad.src}" class = "card-img-top" alt = "${propiedad.nombre}"/>
                <div class = "card-body">
                    <h5 class = "card-title">
                    ${propiedad.nombre}
                    </h5>
                    <p class = "card-text">
                    ${propiedad.descripcion}
                    </p>
                    <p>
                        <i class = "fas fa-bed"></i>
                        ${propiedad.habitaciones} Habitaciones |
                        <i class = "fas fa-bath"></i>
                        ${propiedad.baños} Baños
                    </p>
                    <p>
                        <i class = "fas fa-dollar-sign"></i>
                        ${propiedad.costo}
                    </p>
                    ${propiedad.smoke ? // operador ternario -> true : false
                        '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : 
                        '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar.</p>'
                    }
                    ${propiedad.pets ? // operador ternario -> true : false
                        '<p class="text-success"> <i class="fas fa-paw"></i>Mascotas permitidas </p>' : 
                        '<p class = "text-danger"> <i class = "fa-solid fa-ban"></i> No se permiten mascotas.</p>'
                    }

                </div>
            </div>
        </div>
        `
        ;
    }
    contenedorVentasDestacadas.innerHTML = ventaDest
}

/* funcion para cargar alquiler destacados */

function cargarAlquilerDestacadas(){
    let alquilerDest = "";

    // indice inicial: 0 , condicion de parada a (< 3), incremento de valor en 1 para cada iteración (++)
    for (let index = 0; index < 3; index++){
        const propiedad = propiedades_alquiler [index];
        alquilerDest += `
            <div class = "col-md-4 mb-4">
            <div class = "card">
                <img src = "${propiedad.src}" class = "card-img-top" alt = "${propiedad.nombre}"/>
                <div class = "card-body">
                    <h5 class = "card-title">
                    ${propiedad.nombre}
                    </h5>
                    <p class = "card-text">
                    ${propiedad.descripcion}
                    </p>
                    <p>
                        <i class = "fas fa-bed"></i>
                        ${propiedad.habitaciones} Habitaciones |
                        <i class = "fas fa-bath"></i>
                        ${propiedad.baños} Baños
                    </p>
                    <p>
                        <i class = "fas fa-dollar-sign"></i>
                        ${propiedad.costo}
                    </p>
                    ${propiedad.smoke ? // operador ternario -> true : false
                        '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : 
                        '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar.</p>'
                    }
                    ${propiedad.pets ? // operador ternario -> true : false
                        '<p class="text-success"> <i class="fas fa-paw"></i>Mascotas permitidas </p>' : 
                        '<p class = "text-danger"> <i class = "fa-solid fa-ban"></i> No se permiten mascotas.</p>'
                    }

                </div>
            </div>
        </div>
        `
        ;
    }
    contenedorAlquilerDestacadas.innerHTML = alquilerDest
}

/* Llamar a cada función cuando se cargue el DOM */
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('contenedor-venta')) {
      loadPropiedadesVenta();
    } if (document.getElementById('contenedor-alquiler')) {
      loadPropiedadesAlquiler();
    } if (document.getElementById('contenedor-venta-destacadas') && document.getElementById('contenedor-alquiler-destacadas')) {
      cargarVentasDestacadas(); cargarAlquilerDestacadas()
      }
    });

