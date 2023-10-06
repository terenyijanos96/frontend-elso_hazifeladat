class Megjelenito {
    constructor(szuloElem, elem){
        this.szuloElem = szuloElem
        this.elem = elem

        szuloElem.append(elem)
    }
}

export default Megjelenito