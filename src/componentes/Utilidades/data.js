const productos = [
  {
  id: "1",
  nombre: "AMD RYZEN 7 5700G CON VIDEO INTEGRADO",
  img: "/img/procesadores2.jpeg",
  precio: 388000,
  stock: 30,
  categoria: "procesadores"
},
{
  id: "2",
  nombre: "DISCO EXTERNO 2TB WESTERN DIGITAL",
  img: "/img/almacenamiento1.jpeg",
  precio: 135000,
  stock: 120,

  categoria: "almacenamiento"
},
 {
  id: "3",
  nombre: "MOTHER ASUS X570 TUF GAMMING",
  img: "/img/mother2.png",
  precio: 680500,
  stock: 12,
  categoria: "mothers"
},
{
  id: "4",
  nombre: "MOTHER MSI H310M PRO VDH PLUS",
  img: "/img/mother.png",
  precio: 169000,
  stock: 13,
  categoria: "mothers"
},
{
  id: "5",
  nombre: "DISCO INTERNO NVME FIRECUDA 1TB",
  img: "/img/almacenamiento2.jpeg",
  precio: 275000,
  stock: 13,
  categoria: "almacenamiento"
},
{
  id: "6",
  nombre: "DISCO INTERNO KINGSTON SSD 240GB",
  img: "/img/almacenamiento4.png",
  precio: 38000,
  stock: 30,
  categoria: "almacenamiento"
},
{
  id: "7",
  nombre: "INTEL CORE I9 12700K 12 GENERACION",
  img: "/img/procesadores.jpg",
  precio: 560080,
  stock: 4,
  categoria: "procesadores"
},
{
  id: "8",
  nombre: "DISCO INTERNO SSD NETAC 512 GB 7200RPM",
  img: "/img/almacenamiento3.jpeg",
  precio: 159000,
  stock: 34,
  categoria: "almacenamiento"
},
{

  id: "9",
  nombre: "RTX 3080 TI 12 GB TUF GAMING",
  img: "/img/Gpu3.jpeg",
  precio: 780200,
  stock: 1,
  categoria: "gpu"
},
{
  id: "10",
  nombre: "AMD RADEON ASROCK RX6600XT 8 GB",
  img: "/img/Gpu1.png",
  precio: 835403,
  stock: 141,
  categoria: "gpu"
},
{
  id: "11",
  nombre: "AMD RADEON GIGABYTE RX6800XT 16 GB",
  img: "/img/Gpu5.png",
  precio: 762803,
  stock: 14,
  categoria: "gpu"},
{
  id: "12",
  nombre: "RTX 3080 TI 12 GB EVGA FTW3 ULTRA",
  img: "/img/Gpu7.jpeg",
  precio: 955403,
  stock: 3,
  categoria: "gpu"
}
]

const obtenerProductos = new Promise((resolve) => {
setTimeout(() => {
  resolve(productos);
}, 2000);
});

export default obtenerProductos