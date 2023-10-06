import { lista, csaladLista } from "./adatok.js"
import Tablazat from "./Tablazat.js"
import Megjelenito from "./Megjelenito.js"

$(function(){
    const tartalom = $(".tartalom")
    const t = new Tablazat(lista, csaladLista)

    new Megjelenito(tartalom, t.tablazatKeszito())
})