module.exports = function () {
    var data = {
      servicios: [
        {
          id:1,
          nameServicios: string="Enfermería pediátrica",
          descServicios: string="Especialistas en infantes",


        },
        {
          id:2,
          nameServicios: string="Enfermería Geriátrica",
          descServicios: string="Especialistas en el adulto mayor",

        },
        {
          id:3,
          nameServicios: string="Enfermería oncológica",
          descServicios: string="Especialistas en el cuidado de personas con enfermerdades oncológicas",

        }
      ],
      anuncios: [
        {
          id:1,
          preServicio: 40,
          fechaPublicacion: "2022-09-09",
          servicio: "Enfermería Oncologica",
        },
        {
          id:2,
          preServicio: 50,
          fechaPublicacion: "2022-09-29",
          servicio: "Enfermería Mental ",
        },
        {
          id:3,
          preServicio: 45,
          fechaPublicacion: "2022-09-19",
          servicio: "Enfermería Pediartrica",
        },
      ],
      adultoJoven:[
        {
            id: 1,
            nombre: "Juan",
            apellido: "Roman",
            edad: 22,
            DNI: 72408070,
            celular: 978721522,
            Email: "JuanRmn@gmail.com",
            direccion: "Av. petunias 123",
            username: "JuanAR",
            password: "JuRm22"
        },
        {
            id: 2,
            nombre: "Jose",
            apellido: "Paucar",
            edad: 40,
            DNI: 93308070,
            celular: 978721796,
            Email: "PaucJose1@gmail.com",
            direccion: "Av. pettituars 449",
            username: "JosePC",
            password: "JPau123"
        },
        {
            id: 3,
            nombre: "Maria",
            apellido: "Cusicanqui",
            edad: 19,
            DNI: 82005570,
            celular: 916325522,
            Email: "MariCanqui8@gmail.com",
            direccion: "Av. Costa Negra 233",
            username: "MariaCusi",
            password: "Cusicanqui645"
        }

      ],
      enfermeros: [
        {
          id:1,
          nombreEnfermero: "Luisa Paredes",
          dniEnfermero: "78965231",
          edadEnfermero: "26",
          numEnfermero: "987452123",
          correoEnfermero: "luisap@gmail.com",
          codEnfermero: "02587413"
        },
        {
          id:2,
          nombreEnfermero: "Olenka Gomez",
          dniEnfermero: "01548236",
          edadEnfermero: "32",
          numEnfermero: "970254136",
          correoEnfermero: "ogomez@gmail.com",
          codEnfermero: "01254860"
        },
        {
          id:3,
          nombreEnfermero: "Renzo Chalco",
          dniEnfermero: "23658740",
          edadEnfermero: "29",
          numEnfermero: "930111478",
          correoEnfermero: "chalcoren@gmail.com",
          codEnfermero: "10254793"
        },
      ],
      intereses: [
        {
            id:1,
            medidaInteres: "Bajo",
        },
        {
            id:2,
            medidaInteres: "Alto",
        },
        {
            id:3,
            medidaInteres: "Medio",
        }
      ],
      distrito: [
        {
            id:1,
            distrito: "san miguel",
        },
        {
            id:2,
            distrito: "miraflores",
        },
        {
            id:3,
            distrito: "la molina",
        }
      ],
      comentarios: [
        {
            id:1,
            comentarios: "muy bueno",
        },
        {
            id:2,
            comentarios: "buena atención",
        },
        {
            id:3,
            comentarios: "lo recomiendo",
        }
      ]

    }

    return data
  }
