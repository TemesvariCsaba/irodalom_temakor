/** @typedef {{topic:string, author:string, title:string, author2?:string, title2?:string}} DataArrType az adatokat taralmazo tomb*/
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
