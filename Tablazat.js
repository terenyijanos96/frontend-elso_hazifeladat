class Tablazat {
    constructor(fejlecCimekListaja, tablazatTartalomListaja){
        this.fejlecCimekListaja = fejlecCimekListaja
        this.tablazatTartalomListaja = tablazatTartalomListaja
    }

    fejlecKeszito(){
        let html_tartalom = ""

        this.fejlecCimekListaja.forEach(elem => {
            html_tartalom += `<th>${elem}</th>` 
        });

        return `<thead>
            <tr>${html_tartalom}</tr>
        </thead>`
    }

    tartalomKeszito(){
        let html_tartalom = ""

        this.tablazatTartalomListaja.forEach(element => {
            html_tartalom += "<tr>"
            for (const iterator in element) {

                html_tartalom += `<td>${element[iterator]}</td>`
            }
            html_tartalom += "</tr>"
        });

        return `<tbody>
            ${html_tartalom}
        </tbody>`
    }

    tablazatKeszito() {
        const fejlec = this.fejlecKeszito()
        const tartalom = this.tartalomKeszito()

        return `<table>
            ${fejlec}
            ${tartalom}
        </table>`
    }
}

export default Tablazat