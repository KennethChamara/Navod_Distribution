const { ipcRenderer } = require("electron");

export class productAnalysis extends HTMLElement {
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
        <link rel="stylesheet" type="" href="Components/repA.css">
        <div class="container">
        <div class="row">
            <div class="col-3" >
                <div class="b1" style="background-color:#2BE577 ">
                    <h3>Outlet</h3>
                </div>
            </div>
            <div class="col-3 ">
                <div class="b1 " style="background-color: #DBC4F0 ">
                    <h3>2021</h3>
                </div>
            </div>
            <div class="col-3 ">
                <div class="b1 " style="background-color: #2BAEE5 ">
                    <h3>April</h3>
                </div>
            </div>
            <div class="col-3 ">
                <div class="b1 " style="background-color: #DFEC90 ">
                    <h3>Rs. 258 000.00</h3>
                </div>
            </div>
        </div>

    

    <br><br><br>
    <div class="row ">
        <div class="col-4">
        
  
        
        </div>
        <div class="col-4" style="padding-top:5%">
            <bar-chart></bar-chart>
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