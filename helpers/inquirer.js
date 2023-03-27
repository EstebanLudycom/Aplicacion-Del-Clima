const inquirer = require("inquirer");
require("colors");


const preguntas = [
    {
        type: "list",
        name: "Opcion",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: `${"1.".green} Buscar ciudad`
            },
            {
                value: "2",
                name: `${"2.".green} Historial`
            },
            {
                value: "0",
                name: `${"0.".green} Salir`
            },
        ]
    },
]






const inquirerMenu = async() => {

    console.clear();
    console.log("==========================".green);
    console.log("  Seleccione una opcion".green);
    console.log("==========================\n".green);


    const {Opcion} = await inquirer.prompt(preguntas);
    return Opcion; 
}

const pause = async() =>{

    const pausar=[
        {
            type: "input",
            name: "Pausa",
            message: `Presione ${"Enter".green} para continuar`
            
        }
    ]

    await inquirer.prompt(pausar);
    return pausar
}

const listadoTareasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i+1}`.green 
        return{
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`
        }        
        
    })
    choices.unshift({
        value: "0",
        name: `${"0.".green} Cancelar`

    })

    const preguntas = [
            {
                type: "list",
                name: "id",
                message: "Borrar",
                choices
            }
        ]

        const {id} = await inquirer.prompt(preguntas);
        return id;

}

const confirmar = async(message) =>{

    const question = [
        {
            type: "confirm",
            name: "ok",
            message
        }
    ];

    const {ok} = await inquirer.prompt(question)
    return ok;
}

const leerInput = async(message) =>{

    const question = [
        {
            type: "input",
            name: "descripcion",
            message,
            validate( value ){
            if(value.length === 0){
                return "Ingrese un valor";
            }
            return true;
            
            }

        }
    ];

    const {descripcion} = await inquirer.prompt(question);
    return descripcion;

}


const mostrarListadoChecklist = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i+1}`.green 

        return{
            value: tarea.id,
            name: `${idx}. ${tarea.descripcion}`,
            checked: (tarea.completado) ? true : false,
        }
        
    })
    

    const pregunta = [
            {
                type: "checkbox",
                name: "ids",
                message: "selecciones",
                choices
            }
        ]

        const {ids} = await inquirer.prompt(pregunta);
        return ids;

}

module.exports = {
    inquirerMenu,
    pause,
    leerInput,
    listadoTareasBorrar, 
    confirmar,
    mostrarListadoChecklist
}
// inquirerMenu();
// pause();