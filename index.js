const app = document.querySelector(".app")
app.innerHTML = `
    <div class="control-de-gastos__container">
        <h1> Expenses management </h1>
        <p> ¿What is your monthly budget? </p>
        <form id="formulario">
            <input id="data" type="number" />
            <h3 id="presupuesto-definido"></h3>
        </form>
        <p id="gastos"> Expenses </p>
        <div id="botones">
            <a href="./diario.html"><button> Daily </button></a>
            <a href="./semanal.html"><button> Weekly </button></a>
            <a href="./mensual.html"><button> Monthly </button></a>
        </div>
    </div>
`;

// SELECTORES
const input = document.querySelector("#data")  
const h3 = document.querySelector("#presupuesto-definido") 

// VARIABLES
let presupuestoMensual 
let parsedPresupuestoMensual 

const saveInLocalStorage = (presupuesto) => {
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto))
}

parsedPresupuestoMensual = JSON.parse(localStorage.getItem("presupuesto"))
h3.innerText = parsedPresupuestoMensual

const handlerData = ({target}) => {
    saveInLocalStorage(target.value)
    if (target.value === "") {
        return;
    } else {
        h3.innerText = target.value
    }
}


function init () {
    input.addEventListener("keyup", handlerData)
    input.addEventListener("click", handlerData)
}

init()