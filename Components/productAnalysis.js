const { ipcRenderer } = require("electron");

export class productAnalysis extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback(p = '', y = '') {

        this.render(p, y);

        const submit = this.shadowRoot.querySelector('#submit');
        submit.addEventListener('click', () => {
            const month = this.shadowRoot.querySelector('#month').value;
            const year = this.shadowRoot.querySelector('#year').value;
            let m = 0;
            switch (month) {
                case 'January':
                    m = 1;
                    break;
                case 'February':
                    m = 2;
                    break;
                case 'March':
                    m = 3;
                    break;
                case 'April':
                    m = 4;
                    break;
                case 'May':
                    m = 5;
                    break;
                case 'june':
                    m = 6;
                    break;
                case 'july':
                    m = 7;
                    break;
                case 'August':
                    m = 8;
                    break;
                case 'September':
                    m = 9;
                    break;
                case 'October':
                    m = 10;
                    break;
                case 'November':
                    m = 11;
                    break;
                case 'December':
                    m = 12;
                    break;
                default:
                    break;
            }





            const container = this.shadowRoot.querySelector('.container');


            container.remove();
            this.connectedCallback(m, year)


        })


    }

    render(m, y) {
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="bootstrap-5.2.0-dist/css/bootstrap.css">
        <link rel="stylesheet" type="" href="bootstrap-5.2.0-dist/css/bootstrap.min.css">
        <link rel="stylesheet" type="" href="Components/repA.css">
        <div class="container">
        <div class="row">
            <div class="col-2" >
                <div class="b1" style="background-color:#2BE577 ">
                    <h3>Outlet</h3>
                </div>
            </div>
            <div class="col-3 ">
                
                <input list="browsers1" name="year" id="year"  style="width:80%;background-color: #DBC4F0" value="Year">
                <datalist id="browsers1">
                <option value="2018">
                <option value="2019">
                <option value="2020">
                <option value="2021">
                <option value="2022">
                </datalist>
                
            </div>
            <div class="col-3 ">
                
                <input list="browsers" name="month" id="month" style="background-color: #2BAEE5;" value="Month">
                <datalist id="browsers">
                  <option value="January">
                  <option value="February">
                  <option value="March">
                  <option value="April">
                  <option value="May">
                  <option value="june">
                  <option value="july">
                  <option value="August">
                  <option value="September">
                  <option value="October">
                  <option value="November">
                  <option value="December">

                </datalist>
            </div>
            <div class="col-3 ">
                <div class="b1 " style="background-color: #DFEC90 ">
                    <h3>Rs. 258 000.00</h3>
                </div>
            </div>
            <div class="col-1 ">
                
                    <button id="submit" class="b1" style="background-color: #DFEC90 "></button>
                
            </div>
        </div>

    

    <br><br><br>
    <div class="row ">
        <div class="col-4">
        
            <donut-chart val=[` + y + `,` + m + `]></donut-chart>
        
        </div>
        <div class="col-4" style="padding-top:5%">
            <bar-chart val=[` + m + `]></bar-chart>
        </div>
        <div class="col-4" style="padding-left:5%; padding-right: 5%;">
            <table>
                <tr>
                    <th class="product">Product</th>
                    <th class="profit">Profit</th>
                </tr>
                <tr>
                    <td class="product">Milk</td>
                    <td class="profit">200000</td>
                </tr>
                <tr>
                    <td class="product">Milk</td>
                    <td class="profit">200000</td>
                </tr>
                <tr>
                    <td class="product">Milk</td>
                    <td class="profit">200000</td>
                </tr>
                <tr>
                    <td class="product">Milk</td>
                    <td class="profit">200000</td>
                </tr>

            </table>
        </div>


    </div>

    </div>
    
            `;
    }

}
customElements.define("product-analysis", productAnalysis);