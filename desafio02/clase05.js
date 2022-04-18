//módulos nativos de node js//
 //OS//
const os = require("os") // aca lo traigo para poder usarlo
  console.log(os.cpus()) //metodo cpus trae la cantidad de cpus que tiene tu maquina//
  console.log(os.arch())//devuelve la arquitectura de la pc,x64,x32//
  console.log(os.hostname())//devuelve el nombre de la pc//
  console.log(os.totalmem())//devuelve el total de la memoria en pc//
  console.log(os.platform())//devuelve la plataforma del sistema operativo, win 32..//