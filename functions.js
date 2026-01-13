/** @typedef {{topic:string, author:string, title:string, author2?:string, title2?:string}} DataArrType az adatokat taralmazo tomb*/
/** @typedef {{label:string, id:string, name:string}} formDataArr form adattomb */
/**
 * letrehozza a cellat
 * @param {"td"|"th"} cellType cella tipusa 
 * @param {string} cellContent cella tartalma
 * @param {HTMLTableRowElement} parentTr tr amihez hozzafuzi
 * @returns {HTMLTableCellElement} visszateresi erteke a cella
 */
function createCell(cellType, cellContent, parentTr){
    const cellTdOrTh = document.createElement(cellType)
    cellTdOrTh.innerText = cellContent
    parentTr.appendChild(cellTdOrTh)
    return cellTdOrTh
}

/**
 * letrehozza a tablazat torzset
 * @param {DataArrType[]} dataArr adattomb
 * @param {HTMLTableSectionElement} parentTbody tbody amihez fuz
 * @returns {void} nincs visszateresi ertek
 */
function generateTbody(dataArr, parentTbody){
    parentTbody.innerHTML = ""
    for(const x of dataArr){
        const trTbody = document.createElement("tr")
        parentTbody.appendChild(trTbody)
        const tdRowSpan = createCell("td", x.topic, trTbody)
        createCell("td", x.author, trTbody)
        createCell("td", x.title, trTbody)
        if(x.author2 && x.title2 ){
            tdRowSpan.rowSpan = 2
            const trTbody2 = document.createElement("tr")
            parentTbody.appendChild(trTbody2)
            createCell("td", x.author2, trTbody2)
            createCell("td", x.title2, trTbody2)
       }
    }
}

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

/**
 * letrehoz egy sortorest
 * @param {HTMLDivElement} parentDiv a div amihez hozzafuzi
 * @returns {void} nincs visszateresi ertek
 */
function generateBr(parentDiv){
    const brForm = document.createElement("br")
    parentDiv.appendChild(brForm)
}

/**
 * letrehoz egy mezot a formnak
 * @param {string} labelTxt a label szovege
 * @param {string} inputId az id
 * @param {string} InputName name tulajdonsag
 * @param {HTMLFormElement} parentForm form amihez hozzafuzi
 */
function generateInput(labelTxt, inputId, inputName, parentForm){   
    const divForm = document.createElement("div")
    parentForm.appendChild(divForm)

    const labelJs = document.createElement("label")
    labelJs.innerText = labelTxt
    labelJs.htmlFor = inputId
    divForm.appendChild(labelJs)
    generateBr(divForm)
    const inputJs = document.createElement("input")
    inputJs.type = "text"
    inputJs.id = inputId
    inputJs.name = inputName
    divForm.appendChild(inputJs)
    const spanJs = document.createElement("span")
    spanJs.classList.add("error")
    divForm.appendChild(spanJs)
    generateBr(divForm)

}
/**
 * letrehozza a formot
 * @param {HTMLDivElement} parentDiv a div amihez hozzafuzi 
 * @returns {HTMLFormElement} a visszateresi erteke egy form
 */
function generateForm( parentDiv){
    /** @type {formDataArr[]} */
    const formArr = [
    {
        label: "Témakör",
        id: "elso",
        name: "temakor"
    },
    {
        label: "Szerző",
        id: "masodik",
        name: "szerzo"
    },
    {
        label: "Mű",
        id: "harmadik",
        name: "mu1"
    },
    {
        label: "Másik szerző",
        id: "negyedik",
        name: "szerzo2"
    },
    {
        label: "Másik mű",
        id: "otodik",
        name: "mu2"
    }
]
    
    const formJs = document.createElement("form")
    formJs.id = "jsform"
    parentDiv.appendChild(formJs)

    for(const f of formArr){
        generateInput(f.label, f.id, f.name, formJs)
    }

    const buttonJs = document.createElement("button")
    buttonJs.innerText = "Hozzáadás"
    formJs.appendChild(buttonJs)
    return formJs
}

/**
 * uj sort htmles sort add hozza
 * @param {DataArrType} dataArr az adattomb
 * @param {HTMLTableSectionElement} parentTbody a tbody amihez hozzafuzi
 * @returns {void} nincs visszateresi erteke
 */
function htmlAddRow(dataArr, parentTbody){
    const trHtml = document.createElement("tr")
    parentTbody.appendChild(trHtml)
    createCell("td", dataArr.topic, trHtml)
    createCell("td", dataArr.author, trHtml)
    const tdColSpan = createCell("td", dataArr.title, trHtml)
    if(dataArr.title2){
        createCell("td", dataArr.title2, trHtml)
    }else{
        tdColSpan.colSpan = 2
    }
}
/**
 * megnezi hogy az adott kotelezo mezo ki van e toltve
 * @param {HTMLInputElement} inputField
 * @returns {boolean} logikai ertek a visszateresi erteke
 */
function validateField(inputField){
    let valid = true
    if(inputField.value == ""){
        const inpParent = inputField.parentElement
        /** @type {HTMLDivElement} */
        const errorDiv = inpParent.querySelector(".error")
        errorDiv.innerText = "Kötelező mező"
        valid = false
    }
    return valid
}
/**
 * validalja az osszes kotelezo mezot
 * @param {HTMLInputElement} firstInp temakor mezo
 * @param {HTMLInputElement} secondInp szerzo mezo
 * @param {HTMLInputElement} thirdInp mu1 mezo
 * @param {HTMLFormElement} parentForm form amihez hozzafuzi
 * @returns {boolean} logikai ertekkel ter vissza
 */
function validateAllFields(firstInp, secondInp, thirdInp, parentForm){
    let valid = true
    const errorDivList = parentForm.querySelectorAll(".error")
    for(const errorDiv of errorDivList){
        
        errorDiv.innerText = ""
    }
    if(!validateField(firstInp)){
        valid = false
    }
    if(!validateField(secondInp)){
        valid = false
    }
    if(!validateField(thirdInp)){
        valid = false
    }
    return valid
}