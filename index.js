const { inquirerMenu, pause } = require("./helpers/inquirer");
const Busquedas = require("./models/busqueda");

console.log("Hello world")


const main = async() => {

    let opt =""
    const busquedas = new Busquedas;

    do {
        console.clear();
    
        opt = await inquirerMenu();
        console.log({opt})
    
        switch (opt) {
            case "1":
                console.log(busquedas.historial);

                // Mostrar un mensaje

                // buscar los lugares

                // seleccionar un lugares

                //mostrar resultados

                // mostrar los reultados del clima
                
            break;
                
            case "2":
                console.log("La opcion ha sido la #2");
                
            break;
                    
            case "0":
                console.clear();
                console.log("Hasta luego");

            break;
        
        }

        if (opt !== "0") await pause();

        
        
    } while (opt != 0);

}

main();