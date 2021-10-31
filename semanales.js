const app3 = document.querySelector(".app3")
app3.innerHTML = `
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

const presupuestoInicialS = document.querySelector("#presupuesto-inicial")
const presupuestoGastadoS = document.querySelector("#presupuesto-gastado")
const presupuestoDisponibleS = document.querySelector("#presupuesto-disponible")
let inputAlquiler = document.querySelector("#alquiler")
let inputSupermercado = document.querySelector("#supermercado")
let inputRopa = document.querySelector("#ropa")
let parsedPresupuestoSemanal
let parsedpresupuestoGastadoS

parsedPresupuestoSemanal = JSON.parse(localStorage.getItem("presupuesto"))
presupuestoInicialS.innerText = parsedPresupuestoSemanal

inputAlquiler.value = 0
inputSupermercado.value = 0
inputRopa.value = 0

parsedpresupuestoGastadoS = JSON.parse(localStorage.getItem("presupuesto-gastado-s"))
parsedpresupuestoDisponibleS = JSON.parse(localStorage.getItem("presupuesto-disponible-s"))

const handlerData = () => {

    const savepresupuestoGastadoS = (presupuesto) => {
        localStorage.setItem("presupuesto-gastado-s", JSON.stringify(presupuesto))
    }
    
    const savepresupuestoDisponibleS = (presupuesto) => {
        localStorage.setItem("presupuesto-disponible-s", JSON.stringify(presupuesto))
    }

    presupuestoGastadoS.value = (parseInt(inputAlquiler.value) + parseInt(inputSupermercado.value) + parseInt(inputRopa.value))
    savepresupuestoGastadoS(presupuestoGastadoS.value)
    presupuestoGastadoS.innerText = parseInt(inputRopa.value) + parseInt(inputAlquiler.value) + parseInt(inputSupermercado.value)
    
    presupuestoDisponibleS.innerText = parsedPresupuestoSemanal - presupuestoGastadoS.value 
}

presupuestoGastadoS.innerText = parsedpresupuestoGastadoS
presupuestoDisponibleS.innerText = parsedPresupuestoSemanal - parsedpresupuestoGastadoS

function init () {
    inputAlquiler.addEventListener("keyup", handlerData)
    inputAlquiler.addEventListener("click", handlerData)
    inputSupermercado.addEventListener("keyup", handlerData)
    inputSupermercado.addEventListener("click", handlerData)
    inputRopa.addEventListener("keyup", handlerData)
    inputRopa.addEventListener("click", handlerData)
}

init()