const app2 = document.querySelector(".app2")
app2.innerHTML = `
    <div class="diario__container">
        <div class="diario__content">
            <div class="expensives__container">
                <p>
                    <label> Rent: </label>
                    <input id="alquiler" type="number"/>
                </p>
                <p>
                    <label> Grocery: </label>
                    <input id="supermercado" type="number"/>
                </p>
                <p>
                    <label> Clothing: </label>
                    <input id="ropa" type="number"/>
                </p>
            </div>
            <div class="budget-types__container">
                <div id="presupuesto-inicial-el">
                    <h4> Initial Budget: </h4>
                    <p id="presupuesto-inicial"></p>
                </div>
                <div id="presupuesto-gastado-el">
                    <h4> Total Expenses: </h4>
                    <p id="presupuesto-gastado"></p>
                </div>
                <div id="presupuesto-disponible-el">
                    <h4> Available Budget: </h4>
                    <p id="presupuesto-disponible"></p>
                </div>
            </div>
        </div>
    </div>
`;

const presupuestoInicial = document.querySelector("#presupuesto-inicial")
const presupuestoGastado = document.querySelector("#presupuesto-gastado")
const presupuestoDisponible = document.querySelector("#presupuesto-disponible")
let inputAlquiler = document.querySelector("#alquiler")
let inputSupermercado = document.querySelector("#supermercado")
let inputRopa = document.querySelector("#ropa")
let parsedPresupuestoMensual
let parsedPresupuestoGastado

parsedPresupuestoMensual = JSON.parse(localStorage.getItem("presupuesto"))
presupuestoInicial.innerText = parsedPresupuestoMensual

inputAlquiler.value = 0
inputSupermercado.value = 0
inputRopa.value = 0

parsedPresupuestoGastado = JSON.parse(localStorage.getItem("presupuesto-gastado"))
parsedPresupuestoDisponible = JSON.parse(localStorage.getItem("presupuesto-disponible"))

const handlerData = () => {

    const savePresupuestoGastado = (presupuesto) => {
        localStorage.setItem("presupuesto-gastado", JSON.stringify(presupuesto))
    }
    
    const savePresupuestoDisponible = (presupuesto) => {
        localStorage.setItem("presupuesto-disponible", JSON.stringify(presupuesto))
    }

    presupuestoGastado.value = (parseInt(inputAlquiler.value) + parseInt(inputSupermercado.value) + parseInt(inputRopa.value))
    savePresupuestoGastado(presupuestoGastado.value)
    presupuestoGastado.innerText = parseInt(inputRopa.value) + parseInt(inputAlquiler.value) + parseInt(inputSupermercado.value)
    
    presupuestoDisponible.innerText = parsedPresupuestoMensual - presupuestoGastado.value 

}

presupuestoGastado.innerText = parsedPresupuestoGastado
presupuestoDisponible.innerText = parseInt(parsedPresupuestoMensual) - parsedPresupuestoGastado

function init () {
    inputAlquiler.addEventListener("keyup", handlerData)
    inputAlquiler.addEventListener("click", handlerData)
    inputSupermercado.addEventListener("keyup", handlerData)
    inputSupermercado.addEventListener("click", handlerData)
    inputRopa.addEventListener("keyup", handlerData)
    inputRopa.addEventListener("click", handlerData)
}

init()
