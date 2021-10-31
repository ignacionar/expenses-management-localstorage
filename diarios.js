const app4 = document.querySelector(".app4")
app4.innerHTML = `
    <div class="diario__container">
        <div class="diario__content">
            <div class="expensives__container">
                <p>
                    <label> Grocery: </label>
                    <input id="supermercado" type="number"/>
                </p>
                <p>
                    <label> Gasoline: </label>
                    <input id="nafta" type="number"/>
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

const presupuestoInicialD = document.querySelector("#presupuesto-inicial")
const presupuestoGastadoD = document.querySelector("#presupuesto-gastado")
const presupuestoDisponibleD = document.querySelector("#presupuesto-disponible")
let inputSupermercado = document.querySelector("#supermercado")
let inputNafta = document.querySelector("#nafta")
let parsedPresupuestoDiario
let parsedpresupuestoGastadoD

parsedPresupuestoDiario = JSON.parse(localStorage.getItem("presupuesto"))
presupuestoInicialD.innerText = parsedPresupuestoDiario

inputSupermercado.value = 0
inputNafta.value = 0

parsedpresupuestoGastadoD = JSON.parse(localStorage.getItem("presupuesto-gastado-d"))
parsedpresupuestoDisponibleD = JSON.parse(localStorage.getItem("presupuesto-disponible-d"))

const handlerData = () => {

    const savepresupuestoGastadoD = (presupuesto) => {
        localStorage.setItem("presupuesto-gastado-d", JSON.stringify(presupuesto))
    }
    
    const savepresupuestoDisponibleD = (presupuesto) => {
        localStorage.setItem("presupuesto-disponible-d", JSON.stringify(presupuesto))
    }


    presupuestoGastadoD.value = parseInt(inputSupermercado.value) + parseInt(inputNafta.value)
    savepresupuestoGastadoD(presupuestoGastadoD.value)
    presupuestoGastadoD.innerText = parseInt(inputNafta.value) + parseInt(inputSupermercado.value)
    
    presupuestoDisponibleD.innerText = parsedPresupuestoDiario - presupuestoGastadoD.value 

}

presupuestoGastadoD.innerText = parsedpresupuestoGastadoD
presupuestoDisponibleD.innerText = parsedPresupuestoDiario - parsedpresupuestoGastadoD

function init () {
    inputSupermercado.addEventListener("keyup", handlerData)
    inputSupermercado.addEventListener("click", handlerData)
    inputNafta.addEventListener("keyup", handlerData)
    inputNafta.addEventListener("click", handlerData)
}

init()
