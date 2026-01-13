/** @type {string[]} */
const headerArr = ["Témakör", "Szerző", "Mű"]
/** @type {DataArrType[]} */
const tableArr = [
    {
        topic: "Erdélyi szerzők",
        author: "Reményik Sándor",
        title: "Halotti vers a fulló leveleknek"
    },
    {
        topic: "XX. századi világirodalom",
        author: "Thomas Mann",
        title: "Tonio Kröger",
        author2: "Franz Kafka",
        title2: "Az átváltozás"
    },
    {
        topic: "Nyugatos szerzők",
        author: "Móricz Zsigmond",
        title: "Úri muri",
        author2: "Ady Endre",
        title2: "Héja-nász az avaron"
    },
]
const jsDiv = document.createElement("div")
jsDiv.id = "jssection"
jsDiv.classList.add("hide")
document.body.appendChild(jsDiv)

const tableJs = document.createElement("table")
jsDiv.appendChild(tableJs)

const theadJs = document.createElement("thead")
tableJs.appendChild(theadJs)

const tbodyJs = document.createElement("tbody")
tableJs.appendChild(tbodyJs)

const trHeader = document.createElement("tr")
theadJs.appendChild(trHeader)

for(const x in headerArr){
    createCell("th", headerArr[x], trHeader)
}
generateTbody(tableArr, tbodyJs)

const inputCheckBox = document.getElementById("tableselector")
checkBoxOnLoad(inputCheckBox)
inputCheckBox.addEventListener("change", function(e){ 
    const checkTarget = e.target
    checkBoxOnLoad(checkTarget)
})
/**
 * 
 * @param {HTMLInputElement} checkBox a checkbox
 * @returns {void} nincs visszateresi erteke 
 */
function checkBoxOnLoad(checkBox){
    const jsSecDiv = document.getElementById("jssection") 
    const htmlSecDiv = document.getElementById("htmlsection")
    if(checkBox.checked) {
        jsSecDiv.classList.remove("hide") 
        htmlSecDiv.classList.add("hide")
    }
    else{ 
        jsSecDiv.classList.add("hide") 
        htmlSecDiv.classList.remove("hide") 
    }

}

