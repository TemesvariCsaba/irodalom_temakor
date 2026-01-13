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
    labelJs.id = inputId
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
 * @param {formDataArr[]} formDatArr az adattomb
 * @param {HTMLDivElement} parentDiv a div amihez hozzafuzi 
 * @returns {HTMLFormElement} a visszateresi erteke egy form
 */
function generateForm(formDatArr, parentDiv){
    const formJs = document.createElement("form")
    formJs.id = "jsform"
    parentDiv.appendChild(formJs)

    for(const f of formDatArr){
        generateInput(f.label, f.id, f.name,formJs)
    }
    return formJs
}
