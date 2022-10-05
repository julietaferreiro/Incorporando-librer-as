//Dom
//Creamos la clase junto con el constructor del producto

class Celular {
    constructor(id, modelo, descripcion, precio,img, icon) {
        this.id = id
        this.modelo = modelo
        this.descripcion = descripcion
        this.precio = precio
        this.img= img
        this.icon= icon
    }
    
}

//Creamos la informacion de cada uno de los celulares disponibles

const celular1= new Celular("1","Samsung Galaxy A12", "Ranura SIM: Dual SIM, RAM: 4 Gb, Memoria Interna: 128 Gb, Sistema operativo: Android, Tamaño de la pantalla: 6.5 inch, Tipo Procesador: MediaTek Helio P35, Frecuencia Procesador: 1.8 GHz, Numero de cámaras: 4, Capacidad de la batería: 5,000 mAh", 60000, "./img/samsung.jpg","./img/samsungicon.jpg")
const celular2= new Celular("2","Nokia 23 M 32 GB 2 GB Ram", "Dispositivo liberado para que elijas la compañía telefónica que prefieras, Pantalla de 6.2 ,Tiene 2 cámaras traseras de 13Mpx/2Mpx, Cámara delantera de 5Mpx, Procesador MediaTek MT6761 Helio A22 Quad-Core de 2GHz con 2GB de RAM, ", 48402, "./img/nokia.jpg","./img/nokiaicon.jpg")
const celular3= new Celular("3","LG K50s X540 32 GB 3gb Ram", "Pantalla: 6.5, 720 x 1520 pixels, Procesador: MediaTek Helio P22 2GHz, RAM: 3GB, Almacenamiento: 32GB ,Expansión: microSD, Cámara: Triple, 13MP+5MP+2MP ,Batería: 4000 mAh, OS: Android 9.0, Perfil: 8.2 mm", 35999,"./img/lg.jpg","./img/lgicon.jpg" )
const celular4= new Celular("4","Motorola G22 128GB", "Tipo de producto Smartphones,Sistema operativo Android 12, Tamaño de la pantalla 6.53, Conectividad 4G, Núcleos del procesador Octa Core, Velocidad de la CPU 2,3Ghz, Memoria interna 128GB,Memoria expandible Hasta 1TB, Memoria RAM 4GB", 36499 ,"./img/motorola.jpg","./img/motorolaicon.jpg")
const celular5= new Celular("5","Motorola G22 128GB", "Tipo de producto Smartphones,Sistema operativo Android 12, Tamaño de la pantalla 6.53, Conectividad 4G, Núcleos del procesador Octa Core, Velocidad de la CPU 2,3Ghz, Memoria interna 128GB,Memoria expandible Hasta 1TB, Memoria RAM 4GB", 36499 ,"./img/motorola.jpg","./img/motorolaicon.jpg")
const celular6= new Celular("6","Motorola G22 128GB", "Tipo de producto Smartphones,Sistema operativo Android 12, Tamaño de la pantalla 6.53, Conectividad 4G, Núcleos del procesador Octa Core, Velocidad de la CPU 2,3Ghz, Memoria interna 128GB,Memoria expandible Hasta 1TB, Memoria RAM 4GB", 36499 ,"./img/motorola.jpg","./img/motorolaicon.jpg")
const celular7= new Celular("7","Motorola G22 128GB", "Tipo de producto Smartphones,Sistema operativo Android 12, Tamaño de la pantalla 6.53, Conectividad 4G, Núcleos del procesador Octa Core, Velocidad de la CPU 2,3Ghz, Memoria interna 128GB,Memoria expandible Hasta 1TB, Memoria RAM 4GB", 36499 ,"./img/motorola.jpg","./img/motorolaicon.jpg")