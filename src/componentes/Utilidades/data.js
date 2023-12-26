const productos = [
  {
  id: "1",
  nombre: "AMD RYZEN 7 5700G CON VIDEO INTEGRADO",
  img: "/img/procesadores2.jpeg",
  precio: 85370,
  catergoria: "Procesadores"
},
{
  id: "2",
  nombre: "DISCO EXTERNO 2TB WESTERN DIGITAL",
  img: "/img/almacenamiento1.jpeg",
  precio: 64253,
  catergoria: "Almacenamiento"
},
 {
  id: "3",
  nombre: "MOTHER ASUS X570 TUF GAMMING",
  img: "/img/mother2.png",
  precio: 125403,
  catergoria: "Mothers"
},
{
  id: "4",
  nombre: "MOTHER MSI H310M PRO VDH PLUS",
  img: "/img/mother.png",
  precio: 28403,
  catergoria: "Mothers"
},
{
  id: "5",
  nombre: "DISCO INTERNO NVME FIRECUDA 1TB",
  img: "/img/almacenamiento2.jpeg",
  precio: 55403,
  catergoria: "Almacenamiento"
},
{
  id: "6",
  nombre: "DISCO INTERNO KINGSTON SSD 240GB",
  img: "/img/almacenamiento4.png",
  precio: 21403,
  catergoria: "Almacenamiento"
},
{
  id: "7",
  nombre: "INTEL CORE I9 12700K 12 GENERACION",
  img: "/img/procesadores.jpg",
  precio: 175403,
  catergoria: "Procesadores"
},
{
  id: "8",
  nombre: "DISCO INTERNO SSD NETAC 512 GB 7200RPM",
  img: "/img/almacenamiento3.jpeg",
  precio: 49563,
  catergoria: "Almacenamiento"
},
{

  id: "9",
  nombre: "RTX 3080 TI 12 GB TUF GAMING",
  img: "/img/gpu3.jpeg",
  precio: 535403,
  catergoria: "Placas de Video"
},
{
  id: "10",
  nombre: "AMD RADEON ASROCK RX6600XT 8 GB",
  img: "/img/gpu1.png",
  precio: 235403,
  catergoria: "Placas de Video"
},
{
  id: "11",
  nombre: "AMD RADEON GIGABYTE RX6800XT 16 GB",
  img: "/img/gpu5.png",
  precio: 412803,
  catergoria: "Placa de Video"
},
{
  id: "12",
  nombre: "RTX 3080 TI 12 GB EVGA FTW3 ULTRA",
  img: "/img/gpu7.jpeg",
  precio: 655403,
  catergoria: "Placas de Video"
}
]

const obtenerProductos = new Promise((resolve) => {
//Simulamos un retraso de red
setTimeout(() => {
  resolve(productos);
}, 2000);
});

export default obtenerProductos