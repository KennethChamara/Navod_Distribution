const { ipcRenderer } = require("electron");

export class returnReport extends HTMLElement {
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
        <div class="container" style="width: 40%;">
        <div class="row">
            <div class="col-2">
                <img src="images/kotmale-kisK26bHwB (1).png" alt="" style="height: 60%; width:160%">
            </div>
            <div class="col-10">
                <h4>NAVOD DISTRIBUTION</h4>
                <h7>"Pradeepa",Parawahera,Kekanadura,Matara</h7>
                <h7>0412222974/0761236567</h7>
            </div>

        </div>

        <div class="row">

            <div class="col-6">
                <h7>Outlet ID:....................</h7>
            </div>
            <div class="col-6">
                <h7>Date:....................</h7>
            </div>
        </div>

        <div class="row">
            <table>
                <tr>
                    <th class="c1">Products</th>
                    <th class="c2">Quantity</th>
                    <th class="c1">MFD</th>
                    <th class="c2">EXP</th>
                    <th class="c1">Reason</th>
                    <th class="c2">Value</th>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>

                <tr>

                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>

                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c1"></td>
                    <td class="c2"></td>

                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>

                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>

                    <td class="c2"></td>
                </tr>
                <tr>

                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>

                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>

                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                    <td class="c1"></td>

                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>
                <tr>
                    <td class="c2">
                        <p></p>
                    </td>
                    <td class="c1"></td>
                    <td class="c2"></td>

                    <td class="c2"></td>
                    <td class="c1"></td>
                    <td class="c2"></td>
                </tr>

            </table>
        </div>

        <div class="row">
            <div class="col-6">
                <h7>..............................</h7><br>
                <h7>Name</h7>
            </div>
            <div class="col-6">
                <h7>...............................</h7><br>
                <h7>Signature</h7>
            </div>
        </div>
    </div>


    
            `;
    }

}
customElements.define("return-report", returnReport);