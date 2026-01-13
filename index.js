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
tbodyJs.id = "jstbody"
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


const formJs = generateForm(jsDiv)

formJs.addEventListener("submit", function(e){
    e.preventDefault()
    /** @type {HTMLFormElement} */
    const targetSubmit = e.target
    /** @type {HTMLInputElement} */
    const temaInp = targetSubmit.querySelector("#elso")
    /** @type {HTMLInputElement} */
    const szer1Inp = targetSubmit.querySelector("#masodik")
    /** @type {HTMLInputElement} */
    const muInp = targetSubmit.querySelector("#harmadik")
    /** @type {HTMLInputElement} */
    const szer2Inp = targetSubmit.querySelector("#negyedik")
    /** @type {HTMLInputElement} */
    const mu2Inp = targetSubmit.querySelector("#otodik")
    
 
    if(validateAllFields(temaInp, szer1Inp, muInp, formJs)){
        /** @type {string} */
        const temaValue = temaInp.value
        /** @type {string} */
        const szer1Value = szer1Inp.value
        /** @type {string} */
        const mu1Value = muInp.value
        /** @type {string} */
        const szer2Value = szer2Inp.value
        /** @type {string} */
        const mu2Value = mu2Inp.value  
        /** @type {DataArrType} */
        const valueObj = {}
        valueObj.topic = temaValue
        valueObj.author = szer1Value
        valueObj.title = mu1Value
        if(szer2Inp && mu2Value){
            valueObj.author2 = szer2Value
            valueObj.title2 = mu2Value
        }
        const tbodyjs = document.getElementById("jstbody")
        tableArr.push(valueObj)
        generateTbody(tableArr, tbodyjs)
        targetSubmit.reset()
    } 
})
const htmlForm = document.getElementById("htmlform") 
htmlForm.addEventListener("submit", function(e){ 
     e.preventDefault() 
     /** @type {HTMLFormElement} */
    const targetSubmit = e.target 
    /** @type {HTMLInputElement} */
    const temaInp = targetSubmit.querySelector("#elso") 
    /** @type {HTMLInputElement} */
    const szerzoInp = targetSubmit.querySelector("#masodik")
    /** @type {HTMLInputElement} */ 
    const muInp = targetSubmit.querySelector("#harmadik")
    /** @type {HTMLInputElement} */ 
    const muMasikInp = targetSubmit.querySelector("#negyedik") 

    if(validateAllFields(temaInp, szerzoInp, muInp, htmlForm)){ 
    /** @type {string} */
    const temaValue = temaInp.value 
    /** @type {string} */
    const szerzoValue = szerzoInp.value
    /** @type {string} */ 
    const muValue = muInp.value 
    /** @type {string} */
    const muMasikValue = muMasikInp.value 

    /**@type {DataArrType} objektum adatai */
    const valueObj = {} 
    valueObj.topic = temaValue 
    valueObj.author = szerzoValue 
    valueObj.title = muValue 

    if(muMasikValue){ 
        valueObj.title2 = muMasikValue 
    }
    const tbodyHtml = document.getElementById("htmltbody")
    htmlAddRow(valueObj, tbodyHtml) 
    targetSubmit.reset() 
} 
})