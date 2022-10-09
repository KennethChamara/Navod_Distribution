const { ipcRenderer } = require("electron");

export class inventoryReport extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {

        this.render();


    }

    render() {
        this.shadowRoot.innerHTML += `
        <link rel="stylesheet" href="bootstrap-5.2.0-dist/css/bootstrap.css">
        <link rel="stylesheet" type="" href="bootstrap-5.2.0-dist/css/bootstrap.min.css">
        <link rel="stylesheet" type="" href="Components/invoice.css">
        <div class="container" style="width: 40%; margin-top:0.5%">
        <div class="row">
            
            
                <h4>Monthly Inventory Report</h4>
        

        </div>

       

        <div class="row">
            <table>
                <tr>
                    <th class="c1">Products</th>
                    <th class="c2">In-Stock</th>
                    <th class="c1">Sold Out</th>
                    <th class="c2">Returns</th>
                    <th class="c1">Currents</th>
                    
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                </tr>

                <tr>
                <td class="c2">
                    <p></p>
                </td>
                <td class="c2"></td>
                <td class="c1"></td>
                <td class="c2"></td>
                <td class="c1"></td>
            </tr>
            <tr>
                <td class="c2">
                    <p></p>
                </td>
                <td class="c2"></td>
                <td class="c1"></td>
                <td class="c2"></td>
                <td class="c1"></td>
            </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c1"></td>
                    

                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                
            </table>
        </div>
        <div class="row">
            <h7 style="font-size:15px;">Sales Distribution According to the Products in the Quatar</h7>
            <sales-chart></sales-chart>
        </div>
        <br>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-3" style="font-size:10px; text-align: left;">
               <p>Monthly Profit</p>
               <p>Monthly Expenses</p>
               <p>Monthly Sells</p>
               <p>Target Sells</p> 
            </div>
            <div class="col-3" style="font-size:10px; text-align: right;">
                <p>12 000 000</p>
                <p>700 000</p>
                <p>650 000</p>
                <p>50 000</p>
            </div>
            <div class="col-3"></div>

        </div>
    </div>


    
            `;
    }

}
customElements.define("inventory-report", inventoryReport);